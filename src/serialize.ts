import type { Theme, StoredTheme, ThemeFonts, ThemePattern, ResolvedTokens } from './types.js'
import { resolveTokens } from './generate.js'
import { storedThemeToCSS } from './generate.js'

export { storedThemeToCSS }

const REQUIRED_TOKENS: (keyof ResolvedTokens)[] = [
  'background', 'foreground', 'card', 'cardForeground',
  'popover', 'popoverForeground', 'primary', 'primaryForeground',
  'secondary', 'secondaryForeground', 'muted', 'mutedForeground',
  'accent', 'accentForeground', 'destructive', 'destructiveForeground',
  'border', 'input', 'ring',
]

export interface ThemeValidationResult {
  valid: boolean
  errors: string[]
}

/**
 * Validates a value as a well-formed StoredTheme.
 * Useful before passing untrusted data to storedThemeToCSS or deserializeTheme.
 */
export function validateStoredTheme(stored: unknown): ThemeValidationResult {
  const errors: string[] = []

  if (!stored || typeof stored !== 'object') {
    return { valid: false, errors: ['Value is not an object'] }
  }

  const s = stored as Record<string, unknown>

  if (typeof s.name   !== 'string' || !s.name)   errors.push('Missing or invalid "name"')
  if (typeof s.label  !== 'string' || !s.label)  errors.push('Missing or invalid "label"')
  if (typeof s.radius !== 'string' || !s.radius) errors.push('Missing or invalid "radius"')

  if (!s.styles || typeof s.styles !== 'object') {
    errors.push('Missing "styles"')
  } else {
    const styles = s.styles as Record<string, unknown>
    for (const mode of ['light', 'dark'] as const) {
      if (!styles[mode] || typeof styles[mode] !== 'object') {
        errors.push(`Missing "styles.${mode}"`)
      } else {
        const tokens = styles[mode] as Record<string, unknown>
        for (const key of REQUIRED_TOKENS) {
          if (typeof tokens[key] !== 'string' || !(tokens[key] as string).trim()) {
            errors.push(`Missing or empty "styles.${mode}.${key}"`)
          }
        }
      }
    }
  }

  return { valid: errors.length === 0, errors }
}

/**
 * Theme object → StoredTheme (for saving to DB).
 * Resolves all ColorToken references to CSS values.
 */
export function serializeTheme(theme: Theme): StoredTheme {
  const stored: StoredTheme = {
    name: theme.name,
    label: theme.label,
    styles: {
      light: resolveTokens(theme.light),
      dark:  resolveTokens(theme.dark),
    },
    fonts: theme.fonts ?? {},
    pattern: theme.pattern ?? { type: 'none' },
    radius: theme.radius ?? '0.5rem',
  }

  // Carry over source metadata if present (from createTheme or preset usage)
  const t = theme as Theme & {
    _source?: StoredTheme['_source']
    _presetName?: string
    _generatorConfig?: StoredTheme['_generatorConfig']
    _overlayConfig?: StoredTheme['_overlayConfig']
    _sourceName?: string
  }

  if (theme.backgroundImage) stored.backgroundImage = theme.backgroundImage
  if (t._source)          stored._source          = t._source
  if (t._presetName)      stored._presetName      = t._presetName
  if (t._generatorConfig) stored._generatorConfig = t._generatorConfig
  if (t._overlayConfig)   stored._overlayConfig   = t._overlayConfig
  if (t._sourceName)      stored._sourceName      = t._sourceName

  return stored
}

/**
 * StoredTheme → Theme object (for passing to generateCSS / ThemeProvider).
 * Stored values are already resolved CSS strings, so they're treated as RawColor.
 */
export function deserializeTheme(stored: StoredTheme): Theme {
  const { name, label, styles, fonts, pattern, radius } = stored

  if (!styles?.light || !styles?.dark) {
    throw new Error(`deserializeTheme: stored theme "${name}" is missing styles.light / styles.dark`)
  }

  // Resolved values are valid CSS strings — they pass through resolveColor as-is
  const lightTokens = Object.fromEntries(
    Object.entries(styles.light).map(([k, v]) => [k, v])
  ) as unknown as Theme['light']

  const darkTokens = Object.fromEntries(
    Object.entries(styles.dark).map(([k, v]) => [k, v])
  ) as unknown as Theme['dark']

  const theme: Theme = {
    name,
    label,
    light: lightTokens,
    dark:  darkTokens,
    fonts: fonts as ThemeFonts,
    pattern: pattern as ThemePattern,
    radius,
  }

  if (stored.backgroundImage)   theme.backgroundImage           = stored.backgroundImage
  if (stored._sourceName)       (theme as any)._sourceName      = stored._sourceName
  if (stored._presetName)       (theme as any)._presetName      = stored._presetName
  if (stored._overlayConfig)    (theme as any)._overlayConfig   = stored._overlayConfig
  if (stored._generatorConfig)  (theme as any)._generatorConfig = stored._generatorConfig

  return theme
}
