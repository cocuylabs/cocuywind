# CLAUDE.md — tailtheme

## Project Purpose

`tailtheme` is a TypeScript library that standardizes theming across a multi-app pattern:

```
Next.js Dashboard
  └── user picks/customizes theme
  └── serializeTheme(theme) → StoredTheme
  └── db.save(stored)

Database
  └── stores StoredTheme JSON (always resolved CSS values, no library dep needed)

Derived Apps (Astro QR menu, React storefront, etc.)
  └── stored = await db.getTheme(id)
  └── css = storedThemeToCSS(stored)   ← no deserialization, no library dep needed
  └── <style set:html={css} />
```

The library is the shared contract. Consumer apps (Astro, etc.) never need it as a runtime dep — `StoredTheme` is always pre-resolved CSS.

---

## Tooling

| Concern | Tool |
|---|---|
| Language | TypeScript 5.x |
| Bundler | `tsup` (dual CJS/ESM, two entry points) |
| Tests | `vitest` |
| Package manager | `pnpm` |
| React | Peer dependency (≥ 18), optional |

**Commands:**
```sh
pnpm build          # tsup → dist/
pnpm test           # vitest run (all 129 tests)
pnpm test:watch     # vitest watch
pnpm typecheck      # tsc --noEmit
pnpm dev            # tsup --watch
```

---

## Package Exports

```json
"exports": {
  ".":       { "types": "...", "import": "...mjs", "require": "...cjs" },
  "./react": { "types": "...", "import": "...mjs", "require": "...cjs" }
}
```

- `tailtheme` — core, zero runtime dependencies
- `tailtheme/react` — React components + hooks, requires `react ≥ 18`

**IMPORTANT**: The `"types"` condition must come before `"import"` and `"require"` in `package.json` exports (esbuild requirement).

Build is configured in `tsup.config.ts` with two separate entry configs: `{ index: 'src/index.ts' }` and `{ react: 'src/react/index.ts' }`, both `format: ['cjs', 'esm']`, `react` is `external`.

---

## Source Files

```
src/
├── index.ts             # Core barrel export
├── types.ts             # All shared types
├── colors.ts            # 244-entry Tailwind v4 oklch lookup table
├── generate.ts          # generateCSS, storedThemeToCSS, resolveTokens
├── factory.ts           # createTheme, extendTheme, defineTheme
├── serialize.ts         # serializeTheme, deserializeTheme (re-exports storedThemeToCSS)
├── fonts.ts             # FONTS constants, googleFontsUrl
├── patterns.ts          # 12 CSS background pattern generators
├── steal.ts             # Generic theme stealing (CSS text, vars object, browser snippet)
├── steal-tweakcn.ts     # TweakCN-specific stealing (public JSON API)
├── themes/
│   ├── index.ts         # Re-exports all + themes[], builtinThemes[], tweakcnThemes[]
│   ├── builtin/         # 10 themes using TailwindToken refs
│   │   ├── index.ts
│   │   ├── default.ts, ocean.ts, forest.ts, sunset.ts, midnight.ts
│   │   └── rose.ts, amber.ts, indigo.ts, teal.ts, candy.ts
│   └── tweakcn/         # 37 themes using raw() oklch values — Apache 2.0, attributed
│       ├── index.ts
│       └── *.ts (37 files)
└── react/
    ├── index.ts
    ├── ThemeProvider.tsx
    ├── useTheme.ts
    └── ThemePicker.tsx
```

---

## Core Type System

### ColorToken — dual form (critical invariant)

```typescript
// Form 1: Tailwind token ref — resolved at runtime via TAILWIND_COLORS lookup
type TailwindToken = 'blue-600' | 'slate-50' | 'white' | 'black' | ...

// Form 2: Raw CSS string — passes through as-is, no lookup
type RawColor = string & { readonly __brand: 'RawColor' }
const raw = (value: string): RawColor => value as RawColor

type ColorToken = TailwindToken | RawColor
```

**Rules:**
- Built-in presets use `TailwindToken` ("blue-600") — readable, maintainable
- TweakCN ports use `raw('oklch(...)')` — exact values, no color drift
- `resolveColor(token)` in `colors.ts` handles both transparently
- `StoredTheme` always contains resolved CSS strings — never `TailwindToken` refs

### ThemeTokens — 19 shadcn/ui-compatible slots

```
background / foreground
card / cardForeground
popover / popoverForeground
primary / primaryForeground
secondary / secondaryForeground
muted / mutedForeground
accent / accentForeground
destructive / destructiveForeground
border / input / ring
```

Keys are **camelCase** in TypeScript. `generate.ts` maps them to `--kebab-case` CSS vars via `TOKEN_TO_CSS_VAR`. `steal.ts` reverses kebab→camel via `kebabToCamel()`.

### Theme vs StoredTheme — the two forms

| | `Theme` | `StoredTheme` |
|---|---|---|
| Purpose | In-memory, for CSS generation | DB persistence, for rendering |
| Color values | `ColorToken` (may be TailwindToken refs) | `ResolvedTokens` (always CSS strings) |
| Color format | camelCase keys | camelCase keys |
| Metadata | `name`, `label`, `light`, `dark`, `fonts?`, `pattern?`, `radius?` | Same + `styles.light`, `styles.dark`, `_source?`, `_presetName?`, `_generatorConfig?` |

`serializeTheme(theme)` → `StoredTheme` (resolves all tokens).
`deserializeTheme(stored)` → `Theme` (stored CSS strings pass through `resolveColor` unchanged).

---

## CSS Generation

### generateCSS(theme: Theme) — outputs three blocks:

```css
:root {
  --background: oklch(1 0 0);
  --primary: oklch(0.623 0.214 259.815);
  /* ... all 19 color vars ... */
  --radius: 0.5rem;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-heading: 'Playfair Display', Georgia, serif;
}
:root { font-family: var(--font-body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
.dark {
  --background: oklch(0.145 0 0);
  /* ... dark overrides ... */
}
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... maps all 19 → Tailwind utility classes ... */
  --font-sans: var(--font-body);      /* powers Tailwind font-sans utility */
  --font-heading: var(--font-heading);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);
}
```

### storedThemeToCSS(stored: StoredTheme) — same output but from `StoredTheme`

This is the **Astro path** — no Theme object needed. The consumer formats stored CSS strings directly. This means Astro apps never need `tailtheme` as a runtime dep.

---

## Factory — createTheme shade logic

```
Light mode:
  primary: primary-600
  background: primary-50    ← uses PRIMARY family, not neutral
  card: primary-100
  secondary/accent: primary-200
  muted: primary-100
  foreground/text: neutral-950  ← stays neutral for readability
  mutedForeground: neutral-500
  destructive: red-600

Dark mode:
  primary: primary-400
  background: primary-950   ← uses PRIMARY family, not neutral
  card: primary-900
  secondary/accent: primary-800   ← lighter surface, visible for badges/pills
  muted: primary-900
  foreground/text: neutral-50    ← stays neutral for readability
  mutedForeground: neutral-400
  destructive: red-400
```

Dark mode uses the **primary color family** for all background/surface tokens so the theme's hue is immediately visible. Text tokens (`foreground`, `cardForeground`, `mutedForeground`) stay on the neutral family for maximum readability. This means `secondary` at `primary-800` contrasts clearly against `card` at `primary-900`, making price badges and secondary chips visible.

### Neutral base as a background override

By default `createTheme` uses the **primary color family** for all background/surface tokens (`background`, `card`, `popover`, `muted`, `border`, `input`). The `neutral` param only drives text tokens (`foreground`, `cardForeground`, `popoverForeground`, `secondaryForeground`, `accentForeground`, `mutedForeground`).

To get neutral backgrounds instead, pass the neutral family in `overrides`:

```typescript
createTheme({
  primary: 'violet', neutral: 'zinc', radius: '0.5rem',
  overrides: {
    light: { background: 'zinc-50', card: 'zinc-100', popover: 'zinc-50', muted: 'zinc-100', border: 'zinc-200', input: 'zinc-200' },
    dark:  { background: 'zinc-950', card: 'zinc-900', popover: 'zinc-950', muted: 'zinc-900', border: 'zinc-800', input: 'zinc-800' },
  },
})
```

**ThemePicker custom builder exposes this as "Neutral Base":**
- `none` (default) — backgrounds use the primary family (the standard chromatic look)
- `slate / gray / zinc / neutral / stone` — overrides all background/surface tokens with that neutral family; text tokens still use the selected neutral

`extendTheme(base, overrides)` — merges token-level overrides into an existing theme.
`defineTheme(theme)` — identity function + type validation for fully explicit definitions.

---

## Neutral Color Convention (built-in + basic themes)

The **neutral** color family drives backgrounds, surfaces, borders, and muted text. Choosing the wrong neutral makes dark-mode backgrounds look off-color:

| Neutral | Dark-mode hue | Use when primary is… |
|---|---|---|
| `slate` | Blue-navy (`hue ≈ 265°`) | `cyan`, `sky`, `blue`, `indigo` |
| `zinc` | Near-neutral (`chroma ≈ 0.005`) | `lime`, `green`, `emerald`, `teal`, `violet`, `purple`, `fuchsia`, `pink`, `rose` |
| `stone` | Warm brown tint | `red`, `orange`, `amber`, `yellow` |
| `neutral` | Perfectly neutral | Any |

**Rule**: Never pair green/purple/pink primaries with `slate` neutral — `slate-950` has a strong blue cast that visually overwhelms the primary hue in dark mode.

For built-in tailored themes, dark backgrounds should use the **primary color family** (not generic neutral) so the theme's identity is visible even without interactive elements:

```typescript
// Good — rose dark mode stays rose-tinted
dark: { background: 'rose-950', card: 'rose-900', border: 'rose-800', ... }

// Bad — looks like any dark default theme
dark: { background: 'neutral-950', card: 'neutral-900', ... }
```

---

## Theme Files Conventions

### Built-in themes (`src/themes/builtin/*.ts`)
Use `TailwindToken` refs via `createTheme()`:
```typescript
import { createTheme } from '../../factory.js'
export const oceanTheme = createTheme({
  name: 'ocean', label: 'Ocean Blue',
  primary: 'blue', neutral: 'slate',
  radius: '0.5rem',
})
```

### TweakCN ports (`src/themes/tweakcn/*.ts`)
Use `raw()` oklch values, include attribution comment:
```typescript
// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)
import { raw } from '../../types.js'
import { defineTheme } from '../../factory.js'
export const catppuccinTheme = defineTheme({
  name: 'catppuccin', label: 'Catppuccin',
  light: {
    background: raw('oklch(0.95 0.01 245)'),
    primary: raw('oklch(0.62 0.19 263)'),
    // ... all 19 tokens
  },
  dark: { ... },
  radius: '0.75rem',
})
```

### Adding a new theme — checklist
1. Create `src/themes/builtin/mytheme.ts` or `src/themes/tweakcn/mytheme.ts`
2. Export named `myTheme` constant
3. Add export to the corresponding `index.ts`
4. Add to the `builtinThemes` or `tweakcnThemes` array in that `index.ts`
5. Add named export to `src/index.ts`

---

## Patterns

12 pattern types: `none | dots | grid | cross | diagonal-lines | horizontal-lines | vertical-lines | zigzag | checkerboard | triangles | hexagons | noise`

`generatePattern(config: ThemePattern)` returns `{ backgroundImage, backgroundSize, backgroundColor? }`.

Pattern CSS vars are emitted into `:root` by `generateCSS`/`storedThemeToCSS`:
- `--pattern-image`
- `--pattern-size`
- `--pattern-color` (when applicable)

Colors use `color-mix(in oklch, color X%, transparent)` for opacity — no alpha channel syntax needed.

---

## Theme Stealing

### Generic — `src/steal.ts`

| Export | Input | Output |
|---|---|---|
| `themeFromCSSVars(vars, meta?)` | flat `Record<string, string>` (CSS var→value) | `StoredTheme` (light only, dark mirrors light) |
| `themeFromCSS(cssText, meta?)` | raw CSS string | `StoredTheme` (parses `:root` + `.dark`) |
| `themeFromSnippetOutput(output, meta?)` | `{ light: {}, dark: {} }` from browser snippet | `StoredTheme` (full light + dark) |
| `browserSnippet` | — | JS string for DevTools console |
| `bookmarkletUrl` | — | `javascript:` URL |

**Selectors handled by `themeFromCSS`:** `:root`, `html`, `[data-theme="light"]`, `.dark`, `[data-theme="dark"]`, `@media (prefers-color-scheme: dark)`, **`@layer base { }`** wrapper (unwrapped before parsing).

`browserSnippet` temporarily `classList.add('dark')` to capture dark vars, then restores state.

### TweakCN-specific — `src/steal-tweakcn.ts`

| Export | What it does |
|---|---|
| `themeFromTweakCNItem(item, meta?)` | Converts raw `TweakCNThemeItem` JSON → `StoredTheme`. Extracts only 19 core tokens; ignores `chart-*`, `sidebar-*`, `shadow-*` vars |
| `fetchTweakCNTheme(name, meta?)` | `GET https://tweakcn.com/r/themes/{name}.json` → `Promise<StoredTheme>` |
| `fetchTweakCNRegistry()` | `GET https://tweakcn.com/r/themes/registry.json` → `Promise<TweakCNRegistryEntry[]>` |
| `fetchAllTweakCNThemes()` | Fetches registry then all themes concurrently → `Promise<StoredTheme[]>` |
| `tweakcnSnippet` | Browser snippet — reads theme name from tweakcn.com URL, fetches from API |
| `tweakcnBookmarkletUrl` | Bookmarklet version |

`TweakCNThemeItem` JSON shape:
```json
{
  "name": "catppuccin",
  "title": "Catppuccin",
  "cssVars": {
    "light": { "--background": "oklch(...)", "--primary": "oklch(...)", ... },
    "dark":  { "--background": "oklch(...)", ... },
    "theme": { "--radius": "0.75rem", "--font-sans": "'Inter', system-ui, sans-serif" }
  }
}
```

---

## React Integration

### ThemeProvider
- Injects CSS vars to `document.documentElement.style`
- Toggles `.dark` class on `<html>`
- Persists to `localStorage` (configurable key, can be disabled)
- Listens to `matchMedia('(prefers-color-scheme: dark)')` for `mode: 'system'`
- SSR: renders inline `<style>` tag with initial theme to prevent FOUC

### useTheme
```typescript
const { theme, setTheme, mode, setMode, resolvedMode, availableThemes } = useTheme()
```
Throws if used outside `ThemeProvider`.

### ThemePicker
Props: `themes`, `value`, `onChange`, `allowCustom`, `sections` (`'colors' | 'fonts' | 'patterns' | 'radius'`), `className`

Sections:
- `colors` — TailwindColor dot-grid for primary, neutral selector
- `fonts` — body and heading dropdowns
- `patterns` — pattern type button grid
- `radius` — preset buttons + custom input

`onChange` fires a `Theme` object — pass through `serializeTheme()` before saving to DB.

---

## Fonts

`ThemeFonts` has two slots:
- `body` — the UI/text font, applied to `:root`. Omit for system-ui.
- `heading` — optional display font for h1–h6. Omit to inherit body font for headings.

`FONTS` constant has 14 entries (2 system + 8 sans-serif Google Fonts + 4 serif Google Fonts). Mono fonts are not part of the theming system.

`googleFontsUrl(families: string[])` takes an array of font-family strings from `FONTS` and returns a Google Fonts CDN URL with appropriate weight ranges.

**CSS output:** `--font-body` and `--font-heading` vars are emitted in `:root`. Application rules (`:root { font-family: var(--font-body) }` and `h1–h6 { font-family: var(--font-heading) }`) are included automatically. In `@theme inline`, `--font-sans` is mapped to `var(--font-body)` so the Tailwind `font-sans` utility keeps working.

**Stealing:** `--font-sans` from stolen themes maps to `body`; `--font-serif` maps to `heading`.

---

## Testing

Tests live in `tests/`. Run with `pnpm test`.
Currently 129 tests across 9 files.

| File | What it covers |
|---|---|
| `colors.test.ts` | TAILWIND_COLORS lookup, resolveColor, white/black |
| `factory.test.ts` | createTheme shade logic, extendTheme, defineTheme |
| `generate.test.ts` | generateCSS output, storedThemeToCSS, resolveTokens |
| `serialize.test.ts` | serializeTheme, deserializeTheme roundtrip |
| `fonts.test.ts` | FONTS constants, googleFontsUrl URL building |
| `patterns.test.ts` | All 12 pattern types, size variants |
| `themes.test.ts` | Theme count, builtinThemes/tweakcnThemes arrays |
| `steal.test.ts` | themeFromCSSVars, themeFromCSS, themeFromSnippetOutput, browserSnippet, bookmarkletUrl |
| `steal-tweakcn.test.ts` | themeFromTweakCNItem, @layer base CSS parsing, tweakcnSnippet |

**Test file convention:** Use ESM imports (`import ... from '...'`) at the top — never `require()` inside `it()` blocks (ESM context).

---

## Invariants / Things Not to Break

1. **`StoredTheme.styles` always has resolved CSS strings** — never TailwindToken refs. This is enforced by `serializeTheme` calling `resolveTokens`.

2. **Consumer apps never need `tailtheme` as a runtime dep** — `storedThemeToCSS(stored)` only does string formatting, no color resolution.

3. **`types` export condition before `import`/`require`** in `package.json` — esbuild error if reversed.

4. **19 tokens exactly** — `ThemeTokens` has exactly 19 keys, `COLOR_VARS` in `steal.ts` and `steal-tweakcn.ts` lists all 19. Tests assert `Object.keys(...).toHaveLength(19)`.

5. **camelCase in TypeScript, `--kebab-case` in CSS** — `generate.ts` uses `TOKEN_TO_CSS_VAR` for the authoritative mapping. `steal.ts` uses `kebabToCamel()` to reverse.

6. **TweakCN attribution** — every file in `src/themes/tweakcn/` must have the attribution comment (Apache 2.0).

7. **`@layer base` unwrapping in `themeFromCSS`** — TweakCN CSS output wraps `:root` and `.dark` in `@layer base { }`. The unwrapping step in `themeFromCSS` must run before all regex parsers.

8. **`raw()` for TweakCN themes** — never use bare oklch strings as `ColorToken` in theme files. Always wrap with `raw('oklch(...)')`.

---

## Common Workflows

### Port a new tweakcn theme

```bash
# 1. Fetch the JSON
node -e "fetch('https://tweakcn.com/r/themes/new-theme.json').then(r=>r.json()).then(console.log)"

# 2. Create src/themes/tweakcn/new-theme.ts
# 3. Add to src/themes/tweakcn/index.ts (export + array)
# 4. Add named export to src/index.ts
```

Or at runtime:
```typescript
import { fetchTweakCNTheme } from 'tailtheme'
const stored = await fetchTweakCNTheme('new-theme')
```

### Add a new built-in theme

```typescript
// src/themes/builtin/new-theme.ts
import { createTheme } from '../../factory.js'
export const newTheme = createTheme({
  name: 'new-theme', label: 'New Theme',
  primary: 'violet', neutral: 'zinc',
  radius: '0.5rem',
})
```

### Steal a theme from a live site

```typescript
import { browserSnippet, themeFromSnippetOutput } from 'tailtheme'
// 1. console.log(browserSnippet) — paste in target site's DevTools
// 2. JSON copied to clipboard
// 3. const stored = themeFromSnippetOutput(JSON.parse(clip), { name: 'stolen' })
```

### Parse CSS pasted from tweakcn "Copy code"

```typescript
import { themeFromCSS } from 'tailtheme'
// Works with @layer base { :root { } .dark { } } wrapper
const stored = themeFromCSS(cssText, { name: 'catppuccin' })
```

---

## Integration Contract

See **`CONSUMING.md`** for the full integration contract covering:
- How admin panels (Next.js dashboard) should use `ThemePicker` + `serializeTheme`
- How consumer apps (Astro, React storefront) should use `storedThemeToCSS`
- The stable `StoredTheme` shape and the 19 token keys
- Breakage policy (what changes are safe vs. coordinated migrations)

The short version: `StoredTheme` is the only value that crosses the wire. Everything upstream of `serializeTheme()` is the library's concern; everything downstream of `storedThemeToCSS()` is the consumer's concern.

---

## Attributions

TweakCN themes (`src/themes/tweakcn/`) are adapted from [tweakcn](https://tweakcn.com) by [jnsahaj](https://github.com/jnsahaj/tweakcn), under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
