import type {
  Theme,
  ThemeTokens,
  ThemeFonts,
  ThemePattern,
  TailwindColor,
  ColorToken,
} from './types.js'

/** Light-mode shade selection for primary colors */
const LIGHT_PRIMARY_SHADE = 600
/** Dark-mode shade selection for primary colors */
const DARK_PRIMARY_SHADE = 400

type ShadeNum = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

function token(color: TailwindColor, shade: ShadeNum): ColorToken {
  return `${color}-${shade}` as ColorToken
}

/**
 * Build ThemeTokens for light mode from primary + neutral color families.
 */
function buildLightTokens(
  primary: TailwindColor,
  neutral: TailwindColor,
  overrides?: Partial<ThemeTokens>,
): ThemeTokens {
  const base: ThemeTokens = {
    background:          token(neutral, 50),
    foreground:          token(neutral, 950),
    card:                token(neutral, 100),
    cardForeground:      token(neutral, 950),
    popover:             token(neutral, 50),
    popoverForeground:   token(neutral, 950),
    primary:             token(primary, LIGHT_PRIMARY_SHADE),
    primaryForeground:   'white',
    secondary:           token(neutral, 200),
    secondaryForeground: token(neutral, 800),
    muted:               token(neutral, 100),
    mutedForeground:     token(neutral, 500),
    accent:              token(neutral, 200),
    accentForeground:    token(neutral, 800),
    destructive:         'red-600' as ColorToken,
    destructiveForeground: 'white',
    border:              token(neutral, 200),
    input:               token(neutral, 200),
    ring:                token(primary, LIGHT_PRIMARY_SHADE),
  }
  return overrides ? { ...base, ...overrides } : base
}

/**
 * Build ThemeTokens for dark mode from primary + neutral color families.
 */
function buildDarkTokens(
  primary: TailwindColor,
  neutral: TailwindColor,
  overrides?: Partial<ThemeTokens>,
): ThemeTokens {
  const base: ThemeTokens = {
    background:          token(neutral, 950),
    foreground:          token(neutral, 50),
    card:                token(neutral, 900),
    cardForeground:      token(neutral, 50),
    popover:             token(neutral, 950),
    popoverForeground:   token(neutral, 50),
    primary:             token(primary, DARK_PRIMARY_SHADE),
    primaryForeground:   token(neutral, 950),
    secondary:           token(neutral, 800),
    secondaryForeground: token(neutral, 200),
    muted:               token(neutral, 800),
    mutedForeground:     token(neutral, 400),
    accent:              token(neutral, 800),
    accentForeground:    token(neutral, 200),
    destructive:         'red-400' as ColorToken,
    destructiveForeground: token(neutral, 950),
    border:              token(neutral, 800),
    input:               token(neutral, 800),
    ring:                token(primary, DARK_PRIMARY_SHADE),
  }
  return overrides ? { ...base, ...overrides } : base
}

export interface CreateThemeConfig {
  name: string
  label: string
  primary: TailwindColor
  /** Drives backgrounds, surfaces, muted */
  neutral: TailwindColor
  radius?: string
  fonts?: ThemeFonts
  pattern?: ThemePattern
  overrides?: {
    light?: Partial<ThemeTokens>
    dark?: Partial<ThemeTokens>
  }
}

/**
 * Easiest factory: pick color families, library picks shades intelligently.
 *
 * @example
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', neutral: 'slate' })
 */
export function createTheme(config: CreateThemeConfig): Theme {
  const { name, label, primary, neutral, radius, fonts, pattern, overrides } = config
  return {
    name,
    label,
    light: buildLightTokens(primary, neutral, overrides?.light),
    dark:  buildDarkTokens(primary, neutral, overrides?.dark),
    fonts,
    pattern,
    radius: radius ?? '0.5rem',
    _generatorConfig: { primary, neutral, radius },
  } as Theme & { _generatorConfig: { primary: TailwindColor; neutral: TailwindColor; radius?: string } }
}

/**
 * Start from a preset, override specific tokens.
 *
 * @example
 * extendTheme(ocean, { light: { primary: 'teal-600' } })
 */
export function extendTheme(
  base: Theme,
  overrides: Partial<Omit<Theme, 'light' | 'dark'>> & {
    light?: Partial<ThemeTokens>
    dark?: Partial<ThemeTokens>
  },
): Theme {
  const { light: lightOverrides, dark: darkOverrides, ...rest } = overrides
  return {
    ...base,
    ...rest,
    light: lightOverrides ? { ...base.light, ...lightOverrides } : base.light,
    dark:  darkOverrides  ? { ...base.dark,  ...darkOverrides  } : base.dark,
  }
}

/**
 * Fully explicit theme definition — identity function with type validation.
 * Use this when you want to define all tokens manually.
 *
 * @example
 * defineTheme({ name: 'brand', label: 'Brand', light: {...}, dark: {...} })
 */
export function defineTheme(theme: Theme): Theme {
  return theme
}
