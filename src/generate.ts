import { resolveColor } from './colors.js'
import type { Theme, ThemeTokens, StoredTheme, ResolvedTokens } from './types.js'
import { raw } from './types.js'
import { generatePattern } from './patterns.js'
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

  // Pattern CSS variables
  if (theme.pattern && theme.pattern.type !== 'none') {
    const pattern = theme.pattern.tint
      ? {
          ...theme.pattern,
          color: theme.pattern.tint === 'primary'
            ? raw('var(--primary)')
            : theme.pattern.tint === 'secondary'
              ? raw('var(--secondary)')
              : raw('var(--accent)'),
          opacity: theme.pattern.tint === 'accent'
            ? (theme.pattern.opacity ?? 0.08) * 2.0
            : theme.pattern.tint === 'secondary'
              ? (theme.pattern.opacity ?? 0.08) * 1.4
            : theme.pattern.opacity,
        }
      : theme.pattern
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

  // Background image CSS variable (consumer uploads, provides URL)
  lines.push(`  --bg-image: ${theme.backgroundImage ?? 'none'};`)

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

  if (pattern && pattern.type !== 'none') {
    const patternConfig = pattern.tint
      ? {
          ...pattern,
          color: pattern.tint === 'primary'
            ? raw('var(--primary)')
            : pattern.tint === 'secondary'
              ? raw('var(--secondary)')
              : raw('var(--accent)'),
          opacity: pattern.tint === 'accent'
            ? (pattern.opacity ?? 0.08) * 2.0
            : pattern.tint === 'secondary'
              ? (pattern.opacity ?? 0.08) * 1.4
            : pattern.opacity,
        }
      : pattern
    const patternStyle = generatePattern(patternConfig)
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
  if (fonts?.body) lines.push(`:root { font-family: var(--font-body); }`, '')
  lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, inherit); }`, '')

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
