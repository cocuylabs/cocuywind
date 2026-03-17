import { resolveColor } from './colors.js'
import type { Theme, ThemeTokens, StoredTheme, ResolvedTokens } from './types.js'
import { generatePattern } from './patterns.js'

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
  if (fonts.body)    lines.push(`  --font-body: ${fonts.body};`)
  if (fonts.heading) lines.push(`  --font-heading: ${fonts.heading};`)

  // Pattern CSS variables
  if (theme.pattern && theme.pattern.type !== 'none') {
    const patternStyle = generatePattern(theme.pattern)
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`)
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`)
    if (patternStyle.backgroundPosition) {
      lines.push(`  --pattern-position: ${patternStyle.backgroundPosition};`)
    }
  } else {
    lines.push(`  --pattern-image: none;`)
    lines.push(`  --pattern-size: auto;`)
  }

  // Background image CSS variable (consumer uploads, provides URL)
  lines.push(`  --bg-image: ${theme.backgroundImage ?? 'none'};`)

  lines.push('}', '')

  // ─── Font application rules ───────────────────────────────────────────────
  if (fonts.body)    lines.push(`:root { font-family: var(--font-body); }`, '')
  if (fonts.heading) lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }`, '')

  // ─── .dark (dark mode overrides) ─────────────────────────────────────────
  lines.push('.dark {')
  for (const [cssVar, value] of Object.entries(darkVars)) {
    lines.push(`  ${cssVar}: ${value};`)
  }
  lines.push('}', '')

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
  if (fonts?.body)    lines.push(`  --font-body: ${fonts.body};`)
  if (fonts?.heading) lines.push(`  --font-heading: ${fonts.heading};`)

  if (pattern && pattern.type !== 'none') {
    const patternStyle = generatePattern(pattern)
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`)
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`)
    if (patternStyle.backgroundPosition) {
      lines.push(`  --pattern-position: ${patternStyle.backgroundPosition};`)
    }
  } else {
    lines.push(`  --pattern-image: none;`)
    lines.push(`  --pattern-size: auto;`)
  }

  // Background image CSS variable
  lines.push(`  --bg-image: ${stored.backgroundImage ?? 'none'};`)

  lines.push('}', '')

  // ─── Font application rules ───────────────────────────────────────────────
  if (fonts?.body)    lines.push(`:root { font-family: var(--font-body); }`, '')
  if (fonts?.heading) lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }`, '')

  // ─── .dark ───────────────────────────────────────────────────────────────
  lines.push('.dark {')
  for (const [key, value] of Object.entries(styles.dark)) {
    lines.push(`  --${kebab(key)}: ${value};`)
  }
  lines.push('}', '')

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
