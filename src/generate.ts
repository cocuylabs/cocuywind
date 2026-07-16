import { resolveColor } from './colors.js'
import type { Theme, ThemeTokens, StoredTheme, ResolvedTokens, ThemePattern } from './types.js'
import { patternToCssVars } from './patterns.js'
import { FONT_ADJUSTMENTS } from './fonts.js'

/**
 * Strips the 'em' unit from a fontSize string and returns the unitless scale factor.
 * '1.2em' → '1.2', '0.82em' → '0.82'. Returns undefined if input is undefined.
 */
function toScale(fontSize: string | undefined): string | undefined {
  return fontSize ? fontSize.replace('em', '') : undefined
}

/** Maps camelCase token names to CSS custom property names */
const TOKEN_TO_CSS_VAR: Record<keyof ThemeTokens, string> = {
  background:          '--background',
  foreground:          '--foreground',
  card:                '--card',
  cardForeground:      '--card-foreground',
  popover:             '--popover',
  popoverForeground:   '--popover-foreground',
  primary:             '--primary',
  primaryForeground:   '--primary-foreground',
  secondary:           '--secondary',
  secondaryForeground: '--secondary-foreground',
  muted:               '--muted',
  mutedForeground:     '--muted-foreground',
  accent:              '--accent',
  accentForeground:    '--accent-foreground',
  destructive:         '--destructive',
  destructiveForeground: '--destructive-foreground',
  border:              '--border',
  input:               '--input',
  ring:                '--ring',
}

const TOKEN_KEYS = Object.keys(TOKEN_TO_CSS_VAR) as (keyof ThemeTokens)[]

/** Emit --pattern-* declarations for one mode into a lines buffer */
function pushPatternVars(lines: string[], pattern: ThemePattern | undefined, mode: 'light' | 'dark'): void {
  const vars = patternToCssVars(pattern, { mode })
  for (const [cssVar, value] of Object.entries(vars)) {
    lines.push(`  ${cssVar}: ${value};`)
  }
}

/** Patterns only need re-emitting in .dark when the dark opacity differs */
function patternNeedsDarkOverride(pattern: ThemePattern | undefined): boolean {
  return !!pattern && pattern.type !== 'none' && pattern.darkOpacity !== undefined
}

/**
 * Decorative layers (patterns, background images) are noise for users who ask
 * the OS for higher contrast, and they fight the system palette under forced
 * colors — switch them off in both cases.
 */
const A11Y_MEDIA_BLOCK = [
  '@media (forced-colors: active), (prefers-contrast: more) {',
  '  :root {',
  '    --pattern-image: none;',
  '    --bg-image: none;',
  '  }',
  '}',
]

/**
 * Theme-aware shadow color per mode. Light mode tints the shadow with the
 * theme's foreground (subtle hue-matched depth instead of flat gray); dark
 * mode uses near-black at higher strength — light-tinted shadows read as
 * glows on dark surfaces.
 */
export const SHADOW_COLOR: Record<'light' | 'dark', string> = {
  light: 'color-mix(in oklch, var(--foreground) 15%, transparent)',
  dark: 'color-mix(in oklch, black 50%, transparent)',
}

/**
 * Elevation scale — all steps reference `--shadow-color`, so `.dark` only
 * needs to override that one var. Consumers use them directly
 * (`box-shadow: var(--shadow-md)`) or via Tailwind's `shadow-*` utilities
 * (mapped in the emitted `@theme inline` block).
 */
export const SHADOW_SCALE: Record<string, string> = {
  '--shadow-sm': '0 1px 2px 0 var(--shadow-color)',
  '--shadow-md': '0 4px 8px -2px var(--shadow-color), 0 2px 4px -2px var(--shadow-color)',
  '--shadow-lg': '0 12px 24px -6px var(--shadow-color), 0 4px 8px -4px var(--shadow-color)',
  '--shadow-xl': '0 24px 48px -12px var(--shadow-color)',
}

/**
 * Resolves all ThemeTokens to a flat Record of CSS var → CSS value.
 */
export function generateThemeVariables(tokens: ThemeTokens): Record<string, string> {
  const result: Record<string, string> = {}
  for (const key of TOKEN_KEYS) {
    result[TOKEN_TO_CSS_VAR[key]] = resolveColor(tokens[key])
  }
  return result
}

/**
 * Generates the full CSS block for a theme.
 * Includes :root (light), .dark, and @theme inline blocks.
 */
export function generateCSS(theme: Theme): string {
  const lightVars = generateThemeVariables(theme.light)
  const darkVars = generateThemeVariables(theme.dark)

  const radius = theme.radius ?? '0.5rem'
  const fonts = theme.fonts ?? {}

  const lines: string[] = []

  // ─── :root (light mode) ──────────────────────────────────────────────────
  lines.push(':root {')
  for (const [cssVar, value] of Object.entries(lightVars)) {
    lines.push(`  ${cssVar}: ${value};`)
  }
  lines.push(`  --radius: ${radius};`)
  if (fonts.body) {
    lines.push(`  --font-body: ${fonts.body};`)
    lines.push(`  --font-sans: var(--font-body);`)
    const bodyAdj = FONT_ADJUSTMENTS[fonts.body]
    if (bodyAdj?.fontSize)      lines.push(`  --font-body-scale: ${toScale(bodyAdj.fontSize)};`)
    if (bodyAdj?.letterSpacing) lines.push(`  --font-body-tracking: ${bodyAdj.letterSpacing};`)
  }
  if (fonts.heading) {
    lines.push(`  --font-heading: ${fonts.heading};`)
    const headAdj = FONT_ADJUSTMENTS[fonts.heading]
    if (headAdj?.fontSize)      lines.push(`  --font-heading-scale: ${toScale(headAdj.fontSize)};`)
    if (headAdj?.letterSpacing) lines.push(`  --font-heading-tracking: ${headAdj.letterSpacing};`)
  }

  // Pattern CSS variables — tint mapping lives in patternToCssVars
  pushPatternVars(lines, theme.pattern, 'light')

  // Background image CSS variable (consumer uploads, provides URL)
  lines.push(`  --bg-image: ${theme.backgroundImage ?? 'none'};`)

  // Theme-aware elevation
  lines.push(`  --shadow-color: ${SHADOW_COLOR.light};`)
  for (const [cssVar, value] of Object.entries(SHADOW_SCALE)) {
    lines.push(`  ${cssVar}: ${value};`)
  }

  lines.push('}', '')

  // ─── Font application rules ───────────────────────────────────────────────
  // Only font-family is set here. FONT_ADJUSTMENTS (fontSize/letterSpacing) are
  // exported for consumers to apply selectively — baking them into unlayered CSS
  // rules would override Tailwind utility classes (text-3xl, tracking-widest, etc.)
  // which live in @layer utilities and lose to unlayered styles.
  if (fonts.body) lines.push(`:root { font-family: var(--font-body); }`, '')
  // Always emit heading rule with inherit fallback — must exist even without a stored
  // heading font so that live preview (postMessage updating --font-heading) works.
  lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, inherit); }`, '')

  // ─── .dark (dark mode overrides) ─────────────────────────────────────────
  lines.push('.dark {')
  for (const [cssVar, value] of Object.entries(darkVars)) {
    lines.push(`  ${cssVar}: ${value};`)
  }
  if (patternNeedsDarkOverride(theme.pattern)) {
    pushPatternVars(lines, theme.pattern, 'dark')
  }
  lines.push(`  --shadow-color: ${SHADOW_COLOR.dark};`)
  lines.push('}', '')

  // ─── Accessibility media overrides ───────────────────────────────────────
  lines.push(...A11Y_MEDIA_BLOCK, '')

  // ─── @theme inline (maps CSS vars → Tailwind utility classes) ────────────
  lines.push('@theme inline {')
  for (const key of TOKEN_KEYS) {
    const cssVar = TOKEN_TO_CSS_VAR[key]
    // Convert --card-foreground → --color-card-foreground
    const tailwindVar = cssVar.replace('--', '--color-')
    lines.push(`  ${tailwindVar}: var(${cssVar});`)
  }
  lines.push(`  --radius-sm: calc(var(--radius) - 4px);`)
  lines.push(`  --radius-md: var(--radius);`)
  lines.push(`  --radius-lg: calc(var(--radius) + 4px);`)
  lines.push(`  --radius-xl: calc(var(--radius) + 8px);`)
  for (const cssVar of Object.keys(SHADOW_SCALE)) {
    lines.push(`  ${cssVar}: var(${cssVar});`)
  }
  if (fonts.body)    lines.push(`  --font-sans: var(--font-body);`)
  if (fonts.heading) lines.push(`  --font-heading: var(--font-heading);`)
  lines.push('}')

  return lines.join('\n')
}

/**
 * Generates CSS directly from a StoredTheme — no Theme object needed.
 * Ideal for Astro SSR: storedThemeToCSS(stored) → <style set:html={css} />
 */
export function storedThemeToCSS(stored: StoredTheme): string {
  const { styles, fonts, pattern, radius } = stored
  if (!styles?.light || !styles?.dark) return ''
  const lines: string[] = []

  // ─── :root (light mode) ──────────────────────────────────────────────────
  lines.push(':root {')
  for (const [key, value] of Object.entries(styles.light)) {
    lines.push(`  --${kebab(key)}: ${value};`)
  }
  lines.push(`  --radius: ${radius};`)
  if (fonts?.body) {
    lines.push(`  --font-body: ${fonts.body};`)
    lines.push(`  --font-sans: var(--font-body);`)
    const bodyAdj = FONT_ADJUSTMENTS[fonts.body]
    if (bodyAdj?.fontSize)      lines.push(`  --font-body-scale: ${toScale(bodyAdj.fontSize)};`)
    if (bodyAdj?.letterSpacing) lines.push(`  --font-body-tracking: ${bodyAdj.letterSpacing};`)
  }
  if (fonts?.heading) {
    lines.push(`  --font-heading: ${fonts.heading};`)
    const headAdj = FONT_ADJUSTMENTS[fonts.heading]
    if (headAdj?.fontSize)      lines.push(`  --font-heading-scale: ${toScale(headAdj.fontSize)};`)
    if (headAdj?.letterSpacing) lines.push(`  --font-heading-tracking: ${headAdj.letterSpacing};`)
  }

  // Pattern CSS variables — tint mapping lives in patternToCssVars
  pushPatternVars(lines, pattern, 'light')

  // Background image CSS variable
  lines.push(`  --bg-image: ${stored.backgroundImage ?? 'none'};`)

  // Theme-aware elevation
  lines.push(`  --shadow-color: ${SHADOW_COLOR.light};`)
  for (const [cssVar, value] of Object.entries(SHADOW_SCALE)) {
    lines.push(`  ${cssVar}: ${value};`)
  }

  lines.push('}', '')

  // ─── Font application rules ───────────────────────────────────────────────
  if (fonts?.body) lines.push(`:root { font-family: var(--font-body); }`, '')
  lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, inherit); }`, '')

  // ─── .dark ───────────────────────────────────────────────────────────────
  lines.push('.dark {')
  for (const [key, value] of Object.entries(styles.dark)) {
    lines.push(`  --${kebab(key)}: ${value};`)
  }
  if (patternNeedsDarkOverride(pattern)) {
    pushPatternVars(lines, pattern, 'dark')
  }
  lines.push(`  --shadow-color: ${SHADOW_COLOR.dark};`)
  lines.push('}', '')

  // ─── Accessibility media overrides ───────────────────────────────────────
  lines.push(...A11Y_MEDIA_BLOCK, '')

  // ─── @theme inline ───────────────────────────────────────────────────────
  lines.push('@theme inline {')
  for (const key of Object.keys(styles.light)) {
    const cssVar = `--${kebab(key)}`
    const tailwindVar = cssVar.replace('--', '--color-')
    lines.push(`  ${tailwindVar}: var(${cssVar});`)
  }
  lines.push(`  --radius-sm: calc(var(--radius) - 4px);`)
  lines.push(`  --radius-md: var(--radius);`)
  lines.push(`  --radius-lg: calc(var(--radius) + 4px);`)
  lines.push(`  --radius-xl: calc(var(--radius) + 8px);`)
  for (const cssVar of Object.keys(SHADOW_SCALE)) {
    lines.push(`  ${cssVar}: var(${cssVar});`)
  }
  if (fonts?.body)    lines.push(`  --font-sans: var(--font-body);`)
  if (fonts?.heading) lines.push(`  --font-heading: var(--font-heading);`)
  lines.push('}')

  return lines.join('\n')
}

/** camelCase → kebab-case */
function kebab(str: string): string {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

/** Resolve all tokens in a ThemeTokens to their CSS values */
export function resolveTokens(tokens: ThemeTokens): ResolvedTokens {
  const result: ResolvedTokens = {}
  for (const key of TOKEN_KEYS) {
    result[key] = resolveColor(tokens[key])
  }
  return result
}
