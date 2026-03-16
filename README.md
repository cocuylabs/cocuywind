# tailtheme

Tailwind v4 theme library — standardized theming across multi-app patterns.

Built for the dashboard → DB → derived app flow: a Next.js dashboard where users pick or customize a theme, the result is stored as JSON, and separate frontend apps (Astro, React, etc.) read that JSON and apply it — with no shared runtime dependency needed on the consumer side.

---

## How it works

```
┌─────────────────────────────────────────────────────────────────┐
│                        TAILTHEME FLOW                           │
└─────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────┐
  │  DEFINE  (theme authoring)                                   │
  │                                                              │
  │  createTheme({ primary: 'blue', neutral: 'slate' })         │
  │    └─ TailwindToken refs  →  Theme object                    │
  │                                                              │
  │  defineTheme({ light: { background: raw('oklch(...)') } })  │
  │    └─ Raw CSS strings    →  Theme object                     │
  └───────────────────┬──────────────────────────────────────────┘
                      │  Theme
                      ▼
  ┌──────────────────────────────────────────────────────────────┐
  │  SERIALIZE  (before saving to DB)                            │
  │                                                              │
  │  serializeTheme(theme)                                       │
  │    resolves:  'blue-600'  →  'oklch(0.546 0.245 262.881)'   │
  │    resolves:  raw('…')    →  passes through as-is           │
  │    output:    StoredTheme  (only resolved CSS strings)       │
  └───────────────────┬──────────────────────────────────────────┘
                      │  StoredTheme (plain JSON)
                      ▼
  ┌──────────────────────────────────────────────────────────────┐
  │  DATABASE  (stores serialized JSON)                          │
  │                                                              │
  │  { styles: { light: { background: 'oklch(...)' },           │
  │              dark:  { background: 'oklch(...)' } },         │
  │    fonts: { sans: 'Inter' }, radius: '0.5rem' }             │
  └──────────┬─────────────────────────┬────────────────────────┘
             │                         │
             ▼                         ▼
  ┌──────────────────┐      ┌─────────────────────────────────┐
  │  NEXT.JS DASHBOARD│      │  CONSUMER APPS (no dep needed)  │
  │                  │      │                                  │
  │  deserializeTheme│      │  storedThemeToCSS(stored)        │
  │  → Theme         │      │  → raw CSS string                │
  │                  │      │                                  │
  │  ThemeProvider   │      │  <!-- Astro / React / any -->    │
  │  ThemePicker     │      │  <style set:html={css} />        │
  │  useTheme()      │      │                                  │
  └──────────────────┘      └────────────┬────────────────────┘
                                         │
                                         ▼
                            ┌────────────────────────────────┐
                            │  Generated CSS                 │
                            │                                │
                            │  :root {                       │
                            │    --background: oklch(1 0 0); │
                            │    --primary: oklch(0.54 …);   │
                            │    --radius: 0.5rem;           │
                            │    --font-sans: 'Inter', …;    │
                            │  }                             │
                            │  .dark { --background: … }     │
                            │  @theme inline {               │
                            │    --color-primary: var(…);    │
                            │  }                             │
                            └────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────┐
│  THEME STEALING (optional — import from existing sites)         │
│                                                                 │
│  Browser DevTools  →  browserSnippet  →  JSON clipboard         │
│  themeFromSnippetOutput(json)  →  StoredTheme                   │
│                                                                 │
│  CSS text paste    →  themeFromCSS(cssText)  →  StoredTheme     │
│  TweakCN API       →  fetchTweakCNTheme(name)  →  StoredTheme   │
└─────────────────────────────────────────────────────────────────┘
```

**Key insight:** `StoredTheme` is the **single contract** between apps. It's plain JSON with resolved CSS strings — consumer apps only need `storedThemeToCSS()`, which is pure string formatting with no color resolution and no `tailtheme` runtime dependency.

The two color forms collapse to the same resolved CSS string at `serializeTheme()` time:
- `TailwindToken` (`'blue-600'`) — used in built-in themes, readable and maintainable
- `raw('oklch(...)')` — used in TweakCN ports, exact values with no color drift

---

## Requirements

- **Node.js** 18+
- **Tailwind CSS v4** (uses `@theme inline` and `oklch` color space)
- **React 18+** — only required for `tailtheme/react`

---

## Installation

```sh
pnpm add tailtheme
# or
npm install tailtheme
# or
yarn add tailtheme
```

---

## Package Exports

```
tailtheme        → core library (zero runtime dependencies)
tailtheme/react  → React components and hooks (requires react ≥ 18)
```

---

## Core Concepts

### ColorToken

Every color slot accepts two forms:

```typescript
// Tailwind token ref — resolved to oklch at runtime via built-in lookup
type TailwindToken = 'blue-600' | 'slate-50' | 'white' | 'black' | ...

// Raw CSS value — passed through as-is (oklch, hsl, hex, etc.)
type RawColor = string // branded

// Use raw() to create a RawColor
import { raw } from 'tailtheme'
raw('oklch(0.623 0.214 259.815)')
raw('#3b82f6')
raw('hsl(217, 91%, 60%)')
```

### Theme shape

A `Theme` has 19 shadcn/ui-compatible color tokens in both `light` and `dark`, plus optional `fonts`, `pattern`, and `radius`:

```typescript
interface Theme {
  name: string          // machine key: "ocean"
  label: string         // display: "Ocean Blue"
  light: ThemeTokens    // 19 color tokens
  dark: ThemeTokens     // 19 color tokens
  fonts?: {
    sans?: string       // e.g. "'Inter', system-ui, sans-serif"
    serif?: string
    mono?: string
  }
  pattern?: {
    type: 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' |
          'horizontal-lines' | 'vertical-lines' | 'zigzag' |
          'checkerboard' | 'triangles' | 'hexagons' | 'noise'
    color?: ColorToken  // defaults to foreground at low opacity
    opacity?: number    // 0–1, default 0.15
    size?: 'sm' | 'md' | 'lg'
  }
  radius?: string       // CSS value, e.g. "0.5rem"
}
```

The 19 color tokens (`background`, `foreground`, `card`, `cardForeground`, `popover`, `popoverForeground`, `primary`, `primaryForeground`, `secondary`, `secondaryForeground`, `muted`, `mutedForeground`, `accent`, `accentForeground`, `destructive`, `destructiveForeground`, `border`, `input`, `ring`) map directly to CSS custom properties and Tailwind utility classes.

---

## Quickstart: Next.js App Router

### 1. Generate CSS and add it to your globals

```typescript
// app/globals-theme.ts (or inline in globals.css)
import { generateCSS, oceanTheme } from 'tailtheme'

export const themeCSS = generateCSS(oceanTheme)
```

```css
/* app/globals.css */
@import "tailwindcss";

/* paste the output of generateCSS() here, or inject it dynamically */
:root {
  --background: oklch(0.984 0.003 247.858);
  --primary: oklch(0.623 0.214 259.815);
  /* ... */
  --radius: 0.5rem;
}
.dark {
  --background: oklch(0.129 0.042 264.695);
  /* ... */
}
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
}
```

Now `bg-background`, `text-primary`, `border-border`, `rounded-md`, etc. all work.

### 2. Use the React provider for dynamic switching

```tsx
// app/providers.tsx
'use client'
import { ThemeProvider } from 'tailtheme/react'
import { themes } from 'tailtheme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={themes}          // all 47 built-in themes
      defaultTheme="ocean"
      defaultMode="system"     // 'light' | 'dark' | 'system'
      persistKey="app-theme"   // saves to localStorage
    >
      {children}
    </ThemeProvider>
  )
}
```

```tsx
// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### 3. Switch themes at runtime

```tsx
'use client'
import { useTheme } from 'tailtheme/react'

export function ThemeToggle() {
  const { theme, setTheme, mode, setMode, availableThemes } = useTheme()

  return (
    <div>
      <select value={theme.name} onChange={e => setTheme(e.target.value)}>
        {availableThemes.map(t => (
          <option key={t.name} value={t.name}>{t.label}</option>
        ))}
      </select>
      <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
        Toggle dark mode
      </button>
    </div>
  )
}
```

---

## Prebuilt Themes (47 total)

### Built-in (10) — use Tailwind token refs

```typescript
import {
  defaultTheme, oceanTheme, forestTheme, sunsetTheme, midnightTheme,
  roseTheme, amberTheme, indigoTheme, tealTheme, candyTheme,
} from 'tailtheme'

// Or as an array:
import { builtinThemes } from 'tailtheme'
```

### TweakCN ports (37) — use raw oklch values, Apache 2.0

Ported from [tweakcn](https://tweakcn.com) by [jnsahaj](https://github.com/jnsahaj/tweakcn).

```typescript
import {
  modernMinimalTheme, violetBloomTheme, catppuccinTheme, t3ChatTheme,
  twitterTheme, mochaMousseTheme, bubblegumTheme, amethystHazeTheme,
  notebookTheme, doom64Theme, graphiteTheme, perpetuityTheme,
  kodamaGroveTheme, cosmicNightTheme, tangerineTheme, quantumRoseTheme,
  natureTheme, boldTechTheme, elegantLuxuryTheme, amberMinimalTheme,
  supabaseTheme, neoBrutalismTheme, solarDuskTheme, claymorphismTheme,
  cyberpunkTheme, pastelDreamsTheme, cleanSlateTheme, caffeineTheme,
  oceanBreezeTheme, retroArcadeTheme, midnightBloomTheme, candylandTheme,
  northernLightsTheme, vintagePaperTheme, sunsetHorizonTheme,
  starryNightTheme, claudeTheme,
} from 'tailtheme'

// Or as an array:
import { tweakcnThemes } from 'tailtheme'

// All 47 together:
import { themes } from 'tailtheme'
```

---

## Creating Themes

### `createTheme()` — simplest, pick color families

The library picks appropriate shades automatically:
- Light: primary-600, neutral-50 bg, neutral-100 card, neutral-500 muted-fg
- Dark: primary-400, neutral-950 bg, neutral-900 card, neutral-400 muted-fg
- Destructive: always red-600 light / red-400 dark

```typescript
import { createTheme, FONTS } from 'tailtheme'

const brandTheme = createTheme({
  name: 'brand',
  label: 'Brand',
  primary: 'violet',    // any TailwindColor
  neutral: 'slate',     // drives backgrounds, surfaces, muted
  radius: '0.75rem',
  fonts: {
    sans: FONTS.INTER,
    mono: FONTS.JETBRAINS_MONO,
  },
  // Optional token overrides after auto-generation:
  overrides: {
    light: { primary: 'violet-700' },
    dark:  { accent: 'purple-800' },
  },
})
```

Available `TailwindColor` values: `slate` `gray` `zinc` `neutral` `stone` `red` `orange` `amber` `yellow` `lime` `green` `emerald` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `fuchsia` `pink` `rose`

### `extendTheme()` — start from a preset, override specific tokens

```typescript
import { extendTheme, oceanTheme, FONTS } from 'tailtheme'

const myOcean = extendTheme(oceanTheme, {
  label: 'My Ocean',
  radius: '1rem',
  fonts: { sans: FONTS.PLUS_JAKARTA },
  light: {
    primary: 'teal-600',
    ring: 'teal-600',
  },
  dark: {
    primary: 'teal-400',
  },
})
```

### `defineTheme()` — fully explicit, all 19 tokens

```typescript
import { defineTheme, raw } from 'tailtheme'

const customTheme = defineTheme({
  name: 'custom',
  label: 'Custom',
  radius: '0.5rem',
  light: {
    background:            'zinc-50',
    foreground:            'zinc-950',
    card:                  'white',
    cardForeground:        'zinc-950',
    popover:               'white',
    popoverForeground:     'zinc-950',
    primary:               raw('oklch(0.55 0.22 293)'),
    primaryForeground:     'white',
    secondary:             'zinc-100',
    secondaryForeground:   'zinc-800',
    muted:                 'zinc-100',
    mutedForeground:       'zinc-500',
    accent:                'zinc-100',
    accentForeground:      'zinc-800',
    destructive:           'red-600',
    destructiveForeground: 'white',
    border:                'zinc-200',
    input:                 'zinc-200',
    ring:                  raw('oklch(0.55 0.22 293)'),
  },
  dark: {
    // ... all 19 tokens for dark mode
  },
})
```

---

## Fonts

```typescript
import { FONTS, googleFontsUrl } from 'tailtheme'

// Use any FONTS constant as a font-family value:
FONTS.INTER          // "'Inter', system-ui, sans-serif"
FONTS.PLAYFAIR       // "'Playfair Display', Georgia, serif"
FONTS.JETBRAINS_MONO // "'JetBrains Mono', monospace"
FONTS.SYSTEM_SANS    // "system-ui, -apple-system, sans-serif"

// Available constants:
// System: SYSTEM_SANS, SYSTEM_SERIF, SYSTEM_MONO
// Sans:   INTER, GEIST, PLUS_JAKARTA, NUNITO, POPPINS, OUTFIT, DM_SANS, MANROPE
// Serif:  PLAYFAIR, LORA, MERRIWEATHER, DM_SERIF
// Mono:   JETBRAINS_MONO, FIRA_CODE, IBM_PLEX_MONO

// Build a Google Fonts <link> URL:
const url = googleFontsUrl([FONTS.INTER, FONTS.PLAYFAIR])
// → "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
```

Google Fonts must be loaded separately — `tailtheme` only builds the URL. In Next.js, prefer `next/font` instead.

---

## Background Patterns

```typescript
import { generatePattern } from 'tailtheme'

const style = generatePattern({
  type: 'dots',       // 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' |
                      // 'horizontal-lines' | 'vertical-lines' | 'zigzag' |
                      // 'checkerboard' | 'triangles' | 'hexagons' | 'noise'
  opacity: 0.1,       // 0–1, default 0.15
  size: 'md',         // 'sm' | 'md' | 'lg'
  color: 'slate-400', // ColorToken, defaults to currentColor
})

// Returns CSS properties to apply directly:
// { backgroundImage: "...", backgroundSize: "20px 20px" }
```

Patterns use pure CSS (no images, no external deps). Colors use `color-mix(in oklch, ...)` for opacity, which respects the current color in context.

---

## Serialization: DB Storage

`StoredTheme` is the canonical format for the database. It always contains **resolved CSS values** — so consumer apps never need `tailtheme` at all, just string formatting.

```typescript
import { serializeTheme, deserializeTheme, storedThemeToCSS } from 'tailtheme'

// Theme → StoredTheme (save to DB)
const stored = serializeTheme(myTheme)
await db.themes.update({ theme: stored })

// StoredTheme → Theme (load from DB, pass to ThemeProvider or generateCSS)
const theme = deserializeTheme(stored)

// StoredTheme → CSS string directly (no Theme object needed)
const css = storedThemeToCSS(stored)
```

The `StoredTheme` shape:

```typescript
interface StoredTheme {
  name: string
  label: string
  styles: {
    light: Record<string, string>  // { background: 'oklch(...)', primary: 'oklch(...)', ... }
    dark:  Record<string, string>
  }
  fonts:   { sans?: string; serif?: string; mono?: string }
  pattern: { type: PatternType; opacity?: number; size?: string }
  radius:  string                  // "0.5rem"

  // Optional — for dashboard "based on X" UI and regeneration
  _source?: 'preset' | 'generated' | 'custom'
  _presetName?: string
  _generatorConfig?: { primary: TailwindColor; neutral: TailwindColor; radius?: string }
}
```

---

## CSS Generation

```typescript
import { generateCSS, generateThemeVariables, storedThemeToCSS } from 'tailtheme'

// Full CSS block — paste into globals.css or inject server-side
const css = generateCSS(oceanTheme)
// Outputs:
//   :root { --background: oklch(...); --primary: oklch(...); --radius: 0.5rem; }
//   .dark { --background: oklch(...); ... }
//   @theme inline { --color-background: var(--background); ... --radius-sm: calc(var(--radius) - 4px); }

// Flat object of CSS var → resolved value (for runtime injection)
const vars = generateThemeVariables(oceanTheme.light)
// → { '--background': 'oklch(...)', '--primary': 'oklch(...)', ... }

// Skip the Theme object entirely when you have a StoredTheme
const css = storedThemeToCSS(stored)
```

The `@theme inline` block makes all tokens available as Tailwind utility classes:
- `bg-background`, `bg-card`, `bg-primary`, `bg-muted`, etc.
- `text-foreground`, `text-primary`, `text-muted-foreground`, etc.
- `border-border`, `ring-ring`
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`
- `font-sans`, `font-serif`, `font-mono`

---

## End-to-End: Dashboard → DB → Astro

### Next.js dashboard (theme picker + save)

```tsx
// app/theme-editor/page.tsx
'use client'
import { ThemePicker, useTheme } from 'tailtheme/react'
import { serializeTheme } from 'tailtheme'

export default function ThemeEditorPage() {
  const { theme, availableThemes } = useTheme()

  async function handleChange(newTheme) {
    const stored = serializeTheme(newTheme)
    await fetch('/api/theme', {
      method: 'POST',
      body: JSON.stringify(stored),
    })
  }

  return (
    <ThemePicker
      themes={availableThemes}
      value={theme}
      onChange={handleChange}
      allowCustom={true}
      sections={['colors', 'fonts', 'patterns', 'radius']}
    />
  )
}
```

### Astro menu app (read from DB, apply CSS)

```astro
---
// src/layouts/Base.astro
import { storedThemeToCSS } from 'tailtheme'

const stored = await db.getTheme(Astro.params.restaurantId)
const css = storedThemeToCSS(stored)
---
<html>
  <head>
    <style set:html={css} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

The Astro app does not need `tailtheme` as a runtime dependency — only at build time. If you don't use `storedThemeToCSS` in Astro, you don't even need it there; a plain function that formats `stored.styles.light` into CSS vars is sufficient.

---

## React Components

### `ThemeProvider`

```tsx
import { ThemeProvider } from 'tailtheme/react'
import { themes, oceanTheme } from 'tailtheme'

<ThemeProvider
  themes={themes}              // Theme[] — what's available to switch to
  defaultTheme="ocean"         // theme name or Theme object
  defaultMode="system"         // 'light' | 'dark' | 'system' (default: 'system')
  persistKey="app-theme"       // localStorage key prefix (default: 'tailtheme'), null to disable
>
  {children}
</ThemeProvider>
```

- Writes CSS custom properties to `document.documentElement.style`
- Toggles `class="dark"` on `<html>`
- Restores last selection from `localStorage` on mount
- Renders an inline `<style>` tag on first render to prevent FOUC in SSR

### `useTheme()`

Must be used inside a `ThemeProvider`.

```typescript
const {
  theme,           // Theme — current active theme object
  setTheme,        // (theme: Theme | string) => void — pass name or object
  mode,            // ColorMode — 'light' | 'dark' | 'system'
  setMode,         // (mode: ColorMode) => void
  resolvedMode,    // 'light' | 'dark' — actual resolved mode (system → light/dark)
  availableThemes, // Theme[] — all themes passed to ThemeProvider
} = useTheme()
```

### `ThemePicker`

```tsx
import { ThemePicker, useTheme } from 'tailtheme/react'
import { serializeTheme } from 'tailtheme'

const { theme, availableThemes } = useTheme()

<ThemePicker
  themes={availableThemes}
  value={theme}
  onChange={(newTheme) => {
    // newTheme is a Theme object — serialize it to save to DB:
    const stored = serializeTheme(newTheme)
    save(stored)
  }}
  allowCustom={true}   // show createTheme() builder UI (default: false)
  sections={[          // which custom builder sections to show (default: all)
    'colors',          // primary + neutral color family pickers
    'fonts',           // sans/serif/mono dropdowns
    'patterns',        // pattern type grid
    'radius',          // border radius presets
  ]}
  className="..."
/>
```

---

## Color Lookup

```typescript
import { TAILWIND_COLORS, resolveColor } from 'tailtheme'

// Direct lookup
TAILWIND_COLORS['blue-500']  // → 'oklch(0.623 0.214 259.815)'
TAILWIND_COLORS['white']     // → 'oklch(1 0 0)'

// resolveColor: handles both token refs and raw values
resolveColor('blue-500')                    // → 'oklch(0.623 0.214 259.815)'
resolveColor('white')                       // → 'oklch(1 0 0)'
resolveColor('oklch(0.623 0.214 259.815)') // → 'oklch(0.623 0.214 259.815)' (passthrough)
resolveColor('#3b82f6')                     // → '#3b82f6' (passthrough)
```

---

## TypeScript

All types are exported from `tailtheme`:

```typescript
import type {
  Theme,
  ThemeTokens,
  ThemeFonts,
  ThemePattern,
  PatternType,
  ColorToken,
  TailwindColor,
  TailwindToken,
  RawColor,
  StoredTheme,
  ResolvedTokens,
} from 'tailtheme'
```

---

## Theme Stealing

Extract a theme from any live shadcn/ui-based website and import it into your system as a `StoredTheme`.

### Method 1 — Browser console snippet (full light + dark)

`browserSnippet` is a self-contained JS string you can paste into DevTools. It temporarily toggles `.dark` on `<html>`, reads computed CSS variables for both modes, then copies the result to your clipboard.

```typescript
import { browserSnippet } from 'tailtheme'

// Print it, then paste into DevTools console on the target site:
console.log(browserSnippet)
```

Output is JSON with this shape:
```json
{
  "light": { "--background": "oklch(1 0 0)", "--primary": "oklch(0.623 0.214 259.815)", ... },
  "dark":  { "--background": "oklch(0.145 0 0)", "--primary": "oklch(0.707 0.165 254.624)", ... }
}
```

Pass it directly to `themeFromSnippetOutput()`:

```typescript
import { themeFromSnippetOutput } from 'tailtheme'

const json = JSON.parse(clipboardText) // { light: {...}, dark: {...} }
const stored = themeFromSnippetOutput(json, { name: 'vercel', label: 'Vercel' })

// Ready to save or use immediately:
await db.themes.save(stored)
// or:
const theme = deserializeTheme(stored)
```

### Method 2 — Bookmarklet (drag to bookmarks bar)

`bookmarkletUrl` is the same snippet as a `javascript:` URL — drag it to your bookmarks bar and click it on any page to trigger extraction.

```typescript
import { bookmarkletUrl } from 'tailtheme'

// In your dashboard UI:
<a href={bookmarkletUrl} title="Drag me to your bookmarks bar">
  Steal Theme
</a>
```

### Method 3 — Parse CSS text (from DevTools "Styles" panel)

Copy the `:root { }` and `.dark { }` blocks from DevTools → Elements → Computed/Styles and pass them as a string:

```typescript
import { themeFromCSS } from 'tailtheme'

const css = `
  :root {
    --background: oklch(1 0 0);
    --primary: oklch(0.623 0.214 259.815);
    --radius: 0.5rem;
    --font-sans: 'Inter', system-ui, sans-serif;
    /* ... */
  }
  .dark {
    --background: oklch(0.145 0 0);
    --primary: oklch(0.707 0.165 254.624);
    /* ... */
  }
`

const stored = themeFromCSS(css, { name: 'stolen', label: 'Stolen' })
```

Supports `:root`, `.dark`, `[data-theme="dark"]`, `@media (prefers-color-scheme: dark)`, and `@layer base { }` selectors.
If no dark block is found, light tokens are mirrored to dark.

### Method 4 — Flat vars object

If you already have the CSS variables as a plain object (e.g. from your own DevTools script):

```typescript
import { themeFromCSSVars } from 'tailtheme'

const stored = themeFromCSSVars({
  '--background': 'oklch(1 0 0)',
  '--primary':    'oklch(0.623 0.214 259.815)',
  '--radius':     '0.5rem',
  // Keys with or without leading '--' are both accepted
  'foreground':   'oklch(0.145 0 0)',
}, { name: 'my-steal', label: 'My Steal' })
```

This only captures light mode. For both modes use `themeFromSnippetOutput()` or `themeFromCSS()`.

---

## Importing New TweakCN Themes

When tweakcn publishes new themes, you can import them directly without waiting for a library update.
All theme data is available through tweakcn's public JSON API.

### Method 1 — Fetch by name (programmatic, Node ≥ 18 / browser)

```typescript
import { fetchTweakCNTheme } from 'tailtheme'

// Fetch one theme by its slug:
const stored = await fetchTweakCNTheme('catppuccin')
// → StoredTheme, ready to save or use

// Optional name/label override:
const stored2 = await fetchTweakCNTheme('catppuccin', { name: 'brand', label: 'Brand Theme' })
```

### Method 2 — Fetch all available themes

```typescript
import { fetchTweakCNRegistry, fetchAllTweakCNThemes } from 'tailtheme'

// Just list what's available (lightweight — no individual theme data):
const registry = await fetchTweakCNRegistry()
console.log(registry.map(t => t.name))
// → ['catppuccin', 'violet-bloom', 'modern-minimal', ...]

// Fetch every theme (N+1 requests — use sparingly):
const all = await fetchAllTweakCNThemes()
// → StoredTheme[] — ready to add to your themes array
```

### Method 3 — Convert raw tweakcn JSON directly

If you have the raw JSON from tweakcn's API (e.g. downloaded as a file):

```typescript
import { themeFromTweakCNItem } from 'tailtheme'
import type { TweakCNThemeItem } from 'tailtheme'

const item: TweakCNThemeItem = {
  name: 'catppuccin',
  title: 'Catppuccin',
  cssVars: {
    light: { '--background': 'oklch(0.95 0.01 245)', '--primary': 'oklch(0.62 0.19 263)', ... },
    dark:  { '--background': 'oklch(0.24 0.02 261)', '--primary': 'oklch(0.73 0.16 267)', ... },
    theme: { '--radius': '0.75rem', '--font-sans': "'Inter', system-ui, sans-serif" },
  },
}

const stored = themeFromTweakCNItem(item)
```

Only the 19 shadcn/ui-compatible color tokens are extracted. `chart-*`, `sidebar-*`, `shadow-*`, and spacing vars are intentionally ignored.

### Method 4 — Browser snippet (on tweakcn.com)

`tweakcnSnippet` detects the current theme from the tweakcn.com URL and fetches it via their API:

```typescript
import { tweakcnSnippet, tweakcnBookmarkletUrl } from 'tailtheme'

// Paste into DevTools console while on tweakcn.com/?theme=catppuccin:
console.log(tweakcnSnippet)

// Or drag to bookmarks bar and click while on tweakcn.com:
<a href={tweakcnBookmarkletUrl}>Fetch TweakCN Theme</a>
```

The snippet copies the raw `TweakCNThemeItem` JSON to clipboard. Pass it to `themeFromTweakCNItem()`:

```typescript
const item = JSON.parse(clipboardText)       // TweakCNThemeItem
const stored = themeFromTweakCNItem(item, { name: 'my-theme' })
await db.themes.save(stored)
```

### Full TweakCN steal API

```typescript
import {
  themeFromTweakCNItem,    // TweakCNThemeItem JSON → StoredTheme
  fetchTweakCNTheme,       // fetch by slug → Promise<StoredTheme>
  fetchTweakCNRegistry,    // list all available themes → Promise<TweakCNRegistryEntry[]>
  fetchAllTweakCNThemes,   // fetch all themes → Promise<StoredTheme[]>
  tweakcnSnippet,          // browser DevTools snippet (detects from URL)
  tweakcnBookmarkletUrl,   // javascript: bookmarklet URL
} from 'tailtheme'

import type {
  TweakCNThemeItem,        // shape of tweakcn's per-theme JSON
  TweakCNRegistryEntry,    // shape of a registry listing entry
} from 'tailtheme'
```

---

### Full generic steal API

```typescript
import {
  themeFromCSSVars,       // flat vars object → StoredTheme (light only)
  themeFromCSS,           // CSS text string  → StoredTheme (light + dark)
  themeFromSnippetOutput, // browserSnippet output → StoredTheme (light + dark)
  browserSnippet,         // JS string to paste into DevTools console
  bookmarkletUrl,         // javascript: URL for bookmark
} from 'tailtheme'
```

---

## Attributions

TweakCN theme ports are adapted from [tweakcn](https://tweakcn.com) by [jnsahaj](https://github.com/jnsahaj/tweakcn), licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

---

## License

MIT
