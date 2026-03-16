# CONSUMING.md — Integration Contract

This document is the stable contract between `tailtheme` and the apps that depend on it.
There are exactly two integration roles: **admin panel** (writes themes) and **consumer app** (reads themes).

---

## The boundary: `StoredTheme`

`StoredTheme` is the only value that crosses the wire. It is plain JSON — always pre-resolved CSS strings, never Tailwind token refs or library internals. Consumer apps never need `tailtheme` as a runtime dependency.

```
Admin panel                  Database              Consumer app
──────────────────────────   ───────────────────   ──────────────────────────
ThemePicker → onChange       StoredTheme JSON      storedThemeToCSS(stored)
  ↓                          {                       ↓
serializeTheme(theme)          styles: {           <style>{css}</style>
  ↓ save to DB                   light: {...},     (or inject via JS)
                                 dark:  {...}
                               },
                               fonts: {...},
                               pattern: {...},
                               radius: '0.5rem'
                             }
```

---

## Admin panel (Next.js dashboard, etc.)

### Required dependency
```
tailtheme          (runtime)
tailtheme/react    (runtime, for ThemePicker + ThemeProvider)
```

### Minimal integration

```tsx
import { ThemePicker, ThemeProvider, useTheme } from 'tailtheme/react'
import { serializeTheme } from 'tailtheme'
import { builtinThemes } from 'tailtheme'

// 1. Wrap your app
<ThemeProvider themes={builtinThemes} defaultTheme={builtinThemes[0]}>
  <App />
</ThemeProvider>

// 2. Render the picker
function ThemeSettings() {
  const { theme, setTheme } = useTheme()

  const handleSave = async (picked: Theme) => {
    setTheme(picked)                          // live preview
    const stored = serializeTheme(picked)     // resolve all tokens → CSS strings
    await db.saveTheme(stored)                // persist to DB
  }

  return (
    <ThemePicker
      themes={builtinThemes}
      value={theme}
      onChange={handleSave}
      allowCustom
    />
  )
}
```

### Custom theme builder — what each control does

| Control | Default | Effect when changed |
|---|---|---|
| Primary color | — | Sets the main interactive color and, by default, all background/surface shades |
| Secondary color | Auto (= primary) | Overrides `secondary` and `accent` at `-200` (light) / `-800` (dark) |
| Neutral base | None | Overrides all background/surface tokens (`background`, `card`, `popover`, `muted`, `border`, `input`) with the chosen neutral family at `-50/100/200` (light) and `-950/900/800` (dark) |
| Radius | 0.5rem | Sets `--radius`; component variants derive `sm/md/lg/xl` from it |
| Fonts | System | `body` sets `--font-body` on `:root`; `heading` sets `--font-heading` on `h1–h6` |
| Pattern | None | Sets `--pattern-image` and `--pattern-size` CSS vars |

**Neutral base = "none"** keeps the chromatic look where all surfaces inherit the primary hue. Picking a neutral family switches to the traditional look where backgrounds are desaturated and only interactive elements show the primary color. Both produce a valid `StoredTheme` — consumer apps treat them identically.

### Rules
- Always call `serializeTheme(theme)` before saving — never persist a raw `Theme` object. `Theme` may contain `TailwindToken` refs (`'blue-600'`) that consumer apps cannot resolve.
- The DB column should store the full `StoredTheme` JSON, not just the styles.
- `ThemeProvider` handles dark mode, localStorage persistence, and FOUC prevention automatically — do not manage CSS vars manually alongside it.

---

## Consumer app (Astro, React storefront, etc.)

### Required dependency
None. `storedThemeToCSS` can be inlined as a ~10-line helper if you want zero deps. If you already have `tailtheme` available, import it directly.

### Astro (recommended pattern)

```astro
---
import { storedThemeToCSS } from 'tailtheme'   // optional — or inline the helper
const stored = await db.getTheme(tenantId)
const css = storedThemeToCSS(stored)
---

<style set:html={css} />
```

### React / Next.js (SSR pattern)

```tsx
// In your layout or _document
const stored = await db.getTheme(tenantId)
const css = storedThemeToCSS(stored)

return (
  <html>
    <head>
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </head>
    ...
  </html>
)
```

### Vanilla JS (client-side injection)

```ts
import { storedThemeToCSS } from 'tailtheme'

const stored = await fetch('/api/theme').then(r => r.json())
const css = storedThemeToCSS(stored)

const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)
```

### Dep-free inline helper

If you cannot or do not want to depend on `tailtheme`, this is the full consumer contract in ~20 lines:

```ts
function storedThemeToCSS(stored) {
  const vars = (tokens) =>
    Object.entries(tokens).map(([k, v]) => {
      const key = k.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `  --${key}: ${v};`
    }).join('\n')

  const radius = stored.radius ? `  --radius: ${stored.radius};` : ''
  const fontBody    = stored.fonts?.body    ? `  --font-body: ${stored.fonts.body};`       : ''
  const fontHeading = stored.fonts?.heading ? `  --font-heading: ${stored.fonts.heading};` : ''
  const bodyRule    = stored.fonts?.body    ? `:root { font-family: var(--font-body); }`   : ''
  const headingRule = stored.fonts?.heading ? `h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }` : ''

  return [
    `:root {\n${vars(stored.styles.light)}\n${radius}\n${fontBody}\n${fontHeading}\n}`,
    bodyRule,
    headingRule,
    `.dark {\n${vars(stored.styles.dark)}\n}`,
  ].filter(Boolean).join('\n')
}
```

### Rules
- Treat `stored.styles.light` and `stored.styles.dark` as opaque bags of CSS var values — do not read individual token keys for business logic.
- Apply the CSS as early as possible (in `<head>`) to prevent a flash of unstyled content.
- Dark mode is controlled by the `.dark` class on `<html>`. Toggle it however your app manages color scheme.

---

## StoredTheme shape (stable public API)

```ts
interface StoredTheme {
  name: string
  label: string
  styles: {
    light: Record<string, string>   // 19 CSS var values, e.g. { background: 'oklch(...)' }
    dark:  Record<string, string>
  }
  radius?:  string                  // e.g. '0.5rem'
  fonts?: {
    body?:    string   // applied to :root font-family
    heading?: string   // applied to h1–h6; omit to use body font for headings
  }
  pattern?: {
    type:   string
    size?:  string
    color?: string
    opacity?: number
  }
  // Internal fields — do not depend on these
  _source?:          string
  _presetName?:      string
  _generatorConfig?: unknown
}
```

### The 19 token keys (in `styles.light` / `styles.dark`)

| Key | CSS variable |
|---|---|
| `background` | `--background` |
| `foreground` | `--foreground` |
| `card` | `--card` |
| `cardForeground` | `--card-foreground` |
| `popover` | `--popover` |
| `popoverForeground` | `--popover-foreground` |
| `primary` | `--primary` |
| `primaryForeground` | `--primary-foreground` |
| `secondary` | `--secondary` |
| `secondaryForeground` | `--secondary-foreground` |
| `muted` | `--muted` |
| `mutedForeground` | `--muted-foreground` |
| `accent` | `--accent` |
| `accentForeground` | `--accent-foreground` |
| `destructive` | `--destructive` |
| `destructiveForeground` | `--destructive-foreground` |
| `border` | `--border` |
| `input` | `--input` |
| `ring` | `--ring` |

---

## Stability guarantees

| Change | Breaking? |
|---|---|
| Adding new optional fields to `StoredTheme` | No |
| Adding new themes to `builtinThemes` | No |
| Changing color values of existing built-in themes | No (visual only) |
| Renaming or removing one of the 19 token keys | **Yes** |
| Changing `styles.light` / `styles.dark` key format | **Yes** |
| Changing the CSS var name for an existing token | **Yes** |

Removing or renaming token keys requires a coordinated migration across all consumer apps and the DB. Add new tokens additionally before removing old ones.
