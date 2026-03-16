import type { Theme, StoredTheme, ThemeFonts, ThemePattern } from './types.js'
import { resolveTokens } from './generate.js'
import { storedThemeToCSS } from './generate.js'

export { storedThemeToCSS }

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
    _sourceName?: string
  }

  if (t._source) stored._source = t._source
  if (t._presetName) stored._presetName = t._presetName
  if (t._generatorConfig) stored._generatorConfig = t._generatorConfig
  if (t._sourceName) stored._sourceName = t._sourceName

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

  if (stored._sourceName) {
    theme._sourceName = stored._sourceName
  }

  return theme
}
