# CONSUMING.md — Integration Contract

This document is the stable contract between `cocuywind` and the apps that depend on it.
There are exactly two integration roles: **admin panel** (writes themes) and **consumer app** (reads themes).

---

## The boundary: `StoredTheme`

`StoredTheme` is the only value that crosses the wire. It is plain JSON — always pre-resolved CSS strings, never Tailwind token refs or library internals. Consumer apps never need `cocuywind` as a runtime dependency.

```
Admin panel                  Database              Consumer app
──────────────────────────   ───────────────────   ──────────────────────────
ThemePicker → onChange       StoredTheme JSON      storedThemeToCSS(stored)
  ↓                          {                       ↓
serializeTheme(theme)          styles: {           <style>{css}</style>
  ↓ save to DB                   light: {...},     + body background rule
                                 dark:  {...}        (see below)
                               },
                               fonts: {...},
                               pattern: {...},
                               backgroundImage: '…',
                               radius: '0.5rem'
                             }
```

A `StoredTheme` bundles two independent concerns that were set separately in the admin panel:

- **Palette** — the 19 color tokens + radius. These are always present.
- **Style layers** — fonts, pattern, background image. These are optional overrides set independently of the palette. Consumer apps apply them the same way regardless.

---

## Admin panel (Next.js dashboard, etc.)

### Required dependency
```
cocuywind          (runtime)
cocuywind/react    (runtime, for ThemePicker + ThemeProvider)
```

### Minimal integration

```tsx
import { ThemePicker, ThemeProvider, useTheme } from 'cocuywind/react'
import { serializeTheme, builtinThemes } from 'cocuywind'

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

### Palette vs. style layers

`ThemePicker` separates two independent concerns:

**Palette** — the 19 color tokens and a default radius. The user picks one from the preset swatches grid, or adjusts specific color groups on top of a preset using the custom pickers (`allowCustom`).

**Style layers** — fonts, pattern, radius override, and background image. These compose on top of any palette and are sticky: switching palettes does not reset font or pattern choices — those are the brand's choices, not the palette's. Radius resets to the preset's default when a new palette is selected.

### ThemePicker props

| Prop | Type | Default | Description |
|---|---|---|---|
| `themes` | `Theme[]` | — | Palette presets shown as swatch grid |
| `value` | `Theme` | — | Currently active theme |
| `onChange` | `(theme: Theme) => void` | — | Fires on every change (palette or style) |
| `allowCustom` | `boolean` | `false` | Show custom color pickers (primary / secondary / neutral) |
| `sections` | `ThemePickerSection[]` | `[]` | Style sections to render: `'fonts' \| 'patterns' \| 'radius' \| 'background'` |
| `locale` | `'en' \| 'es' \| 'pt'` | `'en'` | Display language for preset labels |
| `labels` | `Record<string, Record<string, string>>` | — | Translated preset name overrides |
| `className` | `string` | — | CSS class on the root element |

### Custom palette controls

Custom color pickers are **overlays** on top of the active preset. Each control replaces only its own token group — the rest of the preset is preserved. Selecting **Auto** for a group restores the preset's original values for that group. Switching to a different preset resets all custom overrides.

If no preset is active (pure custom mode), the pickers build a full theme from scratch.

| Control | Token group affected | Effect |
|---|---|---|
| Primary color | `primary`, `primaryForeground`, `ring` | Sets the main interactive/brand color |
| Secondary color | `secondary`, `secondaryForeground`, `accent`, `accentForeground` | Overrides the secondary and accent color group. Auto derives from primary. |
| Neutral base | `background`, `foreground`, `card`, `cardForeground`, `popover`, `popoverForeground`, `muted`, `mutedForeground`, `border`, `input` | When set, overrides all backgrounds and surfaces with a desaturated neutral family. `none` keeps the chromatic look where surfaces inherit the primary hue. |

### Style layer controls

| Section key | Default | Effect |
|---|---|---|
| `'radius'` | 0.5rem | Sets `--radius`; component variants derive `sm/md/lg/xl` from it |
| `'fonts'` | System | `body` → `--font-body` on `:root`; `heading` → `--font-heading` on `h1–h6`. 3 system stacks (sans, serif, mono) + 16 Google Fonts (8 sans-serif, 4 serif, 4 monospace). |
| `'patterns'` | None | Sets `--pattern-image`, `--pattern-size`, `--pattern-position` CSS vars. Exposes size (SM/MD/LG) and density (Subtle/Normal/Bold) controls when a pattern is active. |
| `'background'` | None | Text input for a CSS `background-image` value. Bare URLs are auto-wrapped in `url('…')`. Sets `--bg-image`. **cocuywind does not manage upload** — your panel handles upload/storage, then the user pastes the URL here. Pattern always overlays on top. |

### Vividness — chroma scaling

`adjustVividness(theme, factor)` scales the chroma (C) component of every OKLCH color token in a theme. It is a post-processing transform — it works on any theme type (factory-generated, TweakCN, stolen) and always returns a new `Theme` with fully resolved raw oklch values.

```ts
import { adjustVividness, VIVIDNESS_PRESETS } from 'cocuywind'

// Named presets
adjustVividness(theme, VIVIDNESS_PRESETS.playful)      // 1.30 — vivid, fun
adjustVividness(theme, VIVIDNESS_PRESETS.vivid)        // 1.15 — slightly boosted
adjustVividness(theme, VIVIDNESS_PRESETS.default)      // 1.00 — no change (short-circuits)
adjustVividness(theme, VIVIDNESS_PRESETS.professional) // 0.75 — muted, corporate
adjustVividness(theme, VIVIDNESS_PRESETS.elegant)      // 0.50 — very muted, sophisticated

// Or use a raw numeric factor
adjustVividness(theme, 0.6)
```

**What is affected:** all 19 color tokens in both `light` and `dark`. Chroma is clamped to `[0, 0.4]`, so boosts on already-saturated colors stay in gamut. Zero-chroma tokens (white, black, pure neutral grays) are immune — their chroma stays at 0 regardless of factor.

**What is not affected:** lightness (L), hue (H), radius, fonts, pattern, `_generatorConfig`, and all other theme metadata.

**`createTheme` integration:** pass `vividness` directly to the factory instead of calling `adjustVividness` afterward:

```ts
import { createTheme } from 'cocuywind'

createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', vividness: 'elegant' })
createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', vividness: 0.8 })
```

The factor is stored in `_generatorConfig.vividness` and the preset name (if a named preset was used) in `_generatorConfig.vividnessPreset`, enabling lossless round-trip through serialize → DB → deserialize.

**Admin panel pattern — keeping vividness sticky across palette switches:**

`adjustVividness` is a pure transform, not a persistent state. If you apply it after a palette switch, you need to track the "base" (pre-vividness) theme separately to avoid stacking transforms on re-application:

```ts
const [baseTheme, setBaseTheme] = useState(defaultTheme)
const [selectedTheme, setSelectedTheme] = useState(defaultTheme)
const [vividnessPreset, setVividnessPreset] = useState<VividnessPreset>('default')

// Called when user picks a new palette
const handleThemeChange = (theme: Theme) => {
  setBaseTheme(theme)
  const factor = VIVIDNESS_PRESETS[vividnessPreset]
  setSelectedTheme(factor !== 1.0 ? adjustVividness(theme, factor) : theme)
}

// Called when user changes vividness preset
const handleVividnessChange = (preset: VividnessPreset) => {
  setVividnessPreset(preset)
  const factor = VIVIDNESS_PRESETS[preset]
  setSelectedTheme(factor !== 1.0 ? adjustVividness(baseTheme, factor) : baseTheme)
}
```

`selectedTheme` is what gets passed to `serializeTheme()` — the adjusted values are baked into the stored CSS strings.

**Restoring vividness on load:** when deserializing a saved theme, read `_generatorConfig.vividnessPreset` to restore the UI control to the correct state. The theme's color values are already adjusted (they were saved post-transform), so set both `baseTheme` and `selectedTheme` to `deserializeTheme(stored)` — no re-adjustment needed on load.

```ts
const theme = deserializeTheme(stored)
setBaseTheme(theme)
setSelectedTheme(theme)
const storedPreset = stored._generatorConfig?.vividnessPreset
if (storedPreset && storedPreset in VIVIDNESS_PRESETS) {
  setVividnessPreset(storedPreset as VividnessPreset)
}
```

### Edit round-trip

`ThemePicker` attaches source metadata to every theme it emits. When you load a previously saved theme back into the picker (via the `value` prop), the picker reads this metadata and restores its internal state — which preset was selected, which color groups were overridden — so the user can continue editing from where they left off.

This means your CRUD edit flow works without any extra logic:

```tsx
// Create: ThemePicker starts with a default preset
// Edit: pass the stored theme back through deserializeTheme → value prop
const theme = deserializeTheme(stored)  // restores _overlayConfig / _presetName
<ThemePicker value={theme} themes={builtinThemes} onChange={handleSave} allowCustom />
```

The relevant metadata fields on `StoredTheme` (all prefixed `_` — do not depend on them in consumer apps):

| Field | Set when | Contains |
|---|---|---|
| `_source` | always | `'preset'` \| `'generated'` \| `'custom'` |
| `_presetName` | preset selected | base preset name, e.g. `'ocean'` |
| `_overlayConfig` | preset + custom overrides | `{ basePreset, primary?, secondary?, neutral? }` — only the groups that were overridden |
| `_generatorConfig` | pure custom / `createTheme()` | `{ primary, neutral?, secondary?, vividness?, vividnessPreset? }` — inputs to `createTheme()` |

### Rules
- Always call `serializeTheme(theme)` before saving — never persist a raw `Theme` object. `Theme` may contain `TailwindToken` refs (`'blue-600'`) that consumer apps cannot resolve.
- The DB column should store the full `StoredTheme` JSON, not just the styles. The `_` metadata fields are needed for edit round-trips.
- Before passing a stored theme to `deserializeTheme` (e.g. loading it into the picker for editing), validate it first with `validateStoredTheme(stored)`.
- `ThemeProvider` handles dark mode, localStorage persistence, and FOUC prevention automatically — do not manage CSS vars manually alongside it.
- `ThemeProvider` automatically injects a Google Fonts `<link>` tag when the active theme has a Google Font. Do not add font `<link>` tags manually for themes managed by the provider.

---

## Consumer app (Astro, React storefront, etc.)

### Required dependency
None. `storedThemeToCSS` can be inlined as a helper if you want zero deps. If you already have `cocuywind` available, import it directly.

### Validating a stored theme

Before passing untrusted data (from DB, API, user upload) to `storedThemeToCSS` or `deserializeTheme`, validate it:

```ts
import { validateStoredTheme } from 'cocuywind'

const result = validateStoredTheme(stored)
if (!result.valid) {
  console.error('Invalid theme:', result.errors)
  // fall back to default theme
}
```

`validateStoredTheme` checks that all 19 required tokens are present in both `styles.light` and `styles.dark`, and that `name`, `label`, and `radius` are non-empty strings. Returns `{ valid: boolean, errors: string[] }`.

### What `storedThemeToCSS` gives you

Calling `storedThemeToCSS(stored)` produces CSS that:
- Sets all 19 color tokens as CSS vars in `:root` and `.dark`
- Sets `--radius`, `--font-body`, `--font-heading`, `--pattern-image`, `--pattern-size`, `--bg-image` in `:root`
- Emits font application rules (`body { font-family: var(--font-body) }`, `h1–h6 { font-family: var(--font-heading) }`)
- Does **not** emit a body background rule — you own that (see below)

### Astro (recommended pattern)

```astro
---
import { storedThemeToCSS, googleFontsUrl } from 'cocuywind'
const stored = await db.getTheme(tenantId)
const css = storedThemeToCSS(stored)
const fontsUrl = googleFontsUrl([stored.fonts?.body, stored.fonts?.heading].filter(Boolean))
---

{fontsUrl && <link rel="stylesheet" href={fontsUrl} />}
<style set:html={css} />
<style>
  body {
    background-color: var(--background);
    background-image: var(--pattern-image, none), var(--bg-image, none);
    background-size: var(--pattern-size, auto), cover;
    background-position: var(--pattern-position, center), center;
  }
</style>
```

### React / Next.js (SSR pattern)

```tsx
// In your layout or _document
import { storedThemeToCSS, googleFontsUrl } from 'cocuywind'

const stored = await db.getTheme(tenantId)
const css = storedThemeToCSS(stored)
const fontsUrl = googleFontsUrl([stored.fonts?.body, stored.fonts?.heading].filter(Boolean))

const bodyBg = `
  body {
    background-color: var(--background);
    background-image: var(--pattern-image, none), var(--bg-image, none);
    background-size: var(--pattern-size, auto), cover;
    background-position: var(--pattern-position, center), center;
  }
`

return (
  <html>
    <head>
      {fontsUrl && <link rel="stylesheet" href={fontsUrl} />}
      <style dangerouslySetInnerHTML={{ __html: css + bodyBg }} />
    </head>
    ...
  </html>
)
```

### Vanilla JS (client-side injection)

```ts
import { storedThemeToCSS, googleFontsUrl } from 'cocuywind'

const stored = await fetch('/api/theme').then(r => r.json())
const css = storedThemeToCSS(stored)

// Inject theme vars + font rules
const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)

// Apply background (pattern + image compose automatically)
document.body.style.cssText += `
  background-color: var(--background);
  background-image: var(--pattern-image, none), var(--bg-image, none);
  background-size: var(--pattern-size, auto), cover;
  background-position: var(--pattern-position, center), center;
`

// Load fonts if needed
const fontsUrl = googleFontsUrl([stored.fonts?.body, stored.fonts?.heading].filter(Boolean))
if (fontsUrl) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = fontsUrl
  document.head.appendChild(link)
}
```

### Background composition

The pattern always layers **on top of** the background image, which sits **on top of** the solid color:

```
z-order (top → bottom)
──────────────────────
pattern overlay    ← var(--pattern-image)
background image   ← var(--bg-image)
solid color        ← var(--background)  [background-color fallback]
```

Both `--pattern-image` and `--bg-image` default to `none` when not set, so the body background rule is safe to include unconditionally — it degrades to just `background-color: var(--background)` when neither is active.

### Dep-free inline helper

If you cannot or do not want to depend on `cocuywind`, this is the full consumer contract:

```ts
function storedThemeToCSS(stored) {
  const vars = (tokens) =>
    Object.entries(tokens).map(([k, v]) => {
      const key = k.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `  --${key}: ${v};`
    }).join('\n')

  const r = stored.radius ?? '0.5rem'
  const fontBody    = stored.fonts?.body    ? `  --font-body: ${stored.fonts.body};`       : ''
  const fontHeading = stored.fonts?.heading ? `  --font-heading: ${stored.fonts.heading};` : ''
  const bodyRule    = stored.fonts?.body    ? `body { font-family: var(--font-body); }`    : ''
  const headingRule = stored.fonts?.heading ? `h1,h2,h3,h4,h5,h6 { font-family: var(--font-heading); }` : ''

  // Pattern vars (always emitted so CSS fallbacks work)
  const patternImage    = stored.pattern?.type && stored.pattern.type !== 'none'
    ? `  /* pattern resolved by cocuywind — use storedThemeToCSS from the lib */`
    : `  --pattern-image: none;\n  --pattern-size: auto;`
  const bgImage = stored.backgroundImage
    ? `  --bg-image: ${stored.backgroundImage};`
    : `  --bg-image: none;`

  return [
    `:root {\n${vars(stored.styles.light)}\n  --radius: ${r};\n${fontBody}\n${fontHeading}\n${patternImage}\n${bgImage}\n}`,
    bodyRule,
    headingRule,
    `.dark {\n${vars(stored.styles.dark)}\n}`,
  ].filter(Boolean).join('\n')
}
```

> **Note:** Pattern CSS generation (SVG noise, conic-gradient checkerboard, etc.) requires the full library. For pattern support without a dep, use `storedThemeToCSS` from `cocuywind` directly.

### Rules
- Treat `stored.styles.light` and `stored.styles.dark` as opaque bags of CSS var values — do not read individual token keys for business logic.
- Apply the CSS as early as possible (in `<head>`) to prevent a flash of unstyled content.
- Dark mode is controlled by the `.dark` class on `<html>`. Toggle it however your app manages color scheme.
- Always include the body background rule — it is safe even when no pattern or background image is set.

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
  radius:  string                   // e.g. '0.5rem'
  fonts?: {
    body?:    string   // applied to :root font-family
    heading?: string   // applied to h1–h6; omit to use body font for headings
  }
  pattern?: {
    type:     string   // 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' |
                       // 'horizontal-lines' | 'vertical-lines' | 'zigzag' |
                       // 'checkerboard' | 'triangles' | 'hexagons' | 'noise'
    size?:    string   // 'sm' | 'md' | 'lg'
    color?:   string   // CSS color or TailwindToken
    opacity?: number   // 0–1, default 0.12
  }
  /**
   * CSS background-image value — e.g. "url('https://...')".
   * cocuywind does NOT manage upload. Admin panel uploads, gets a URL,
   * stores it here. storedThemeToCSS emits it as --bg-image.
   * Pattern always renders on top of this image.
   */
  backgroundImage?: string
  // Internal fields — do not depend on these in consumer apps
  _source?:          string    // 'preset' | 'generated' | 'custom'
  _presetName?:      string    // base preset name when source === 'preset'
  _overlayConfig?:   unknown   // custom color overlays applied on top of a preset
  _generatorConfig?: unknown   // createTheme() inputs when source === 'generated'
}
```

---

## React Picker + Tailwind Setup

If you use `cocuywind/react` components (ThemePicker and the sub-pickers), they are styled with Tailwind classes (shadcn-style tokens like `bg-background`, `border-border`, etc.).

Make sure your Tailwind config includes the library in `content`, otherwise utility classes (including the palette swatch dots) will be purged and the UI will look empty.

Examples:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{ts,tsx}',
    // If you depend on the published package
    './node_modules/cocuywind/dist/**/*.{js,mjs}',
    // Or if you use a local workspace checkout
    '../cocuywind/src/**/*.{ts,tsx}',
  ],
}
```

Also ensure your app includes the shadcn CSS variables (or an equivalent theme) so classes like `bg-background`, `text-foreground`, and `border-border` resolve correctly.

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

## Theme catalogs

| Export | Contents | Included in `themes[]` |
|---|---|---|
| `builtinThemes` | 10 curated + 17 Tailwind-color basics = 27 | Yes |
| `tweakcnThemes` | 37 TweakCN ports | Yes |
| `tailwindBasicThemes` | 17 basic (subset of `builtinThemes`) | Yes (via builtin) |
| `communityThemes` | User-submitted, generated by sync script | **No — opt-in** |

Catalogs are **palette-only** — they define colors and radius. Fonts, patterns, and background images are set by the admin on top of whatever palette they choose.

In a real admin panel, pass a flat array to `ThemePicker` — the source catalog (builtin vs tweakcn vs community) is a library implementation detail, not something end users should see. You control the subset:

```tsx
import { themes, communityThemes, builtinThemes, tailwindBasicThemes } from 'cocuywind'

// Everything (recommended default)
const palettes = [...themes, ...communityThemes]

// Only curated built-ins, no basic Tailwind colors
const palettes = builtinThemes.filter(t => !tailwindBasicThemes.includes(t))

// Built-in + community only, no tweakcn
const palettes = [...builtinThemes, ...communityThemes]

<ThemePicker themes={palettes} ... />
```

Each `Theme` has a `category` field (`'Basic' | 'Curated' | 'TweakCN'`) if you want to build your own grouped UI, but `ThemePicker` does not group by it — the default picker is intentionally flat.

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
