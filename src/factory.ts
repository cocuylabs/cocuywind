import type {
  Theme,
  ThemeTokens,
  ThemeFonts,
  ThemePattern,
  TailwindColor,
  ColorToken,
} from './types.js'
import { adjustVividness, VIVIDNESS_PRESETS } from './vividness.js'
import type { VividnessPreset } from './vividness.js'

/** Light-mode shade selection for primary colors */
const LIGHT_PRIMARY_SHADE = 600
/** Dark-mode shade selection for primary colors */
const DARK_PRIMARY_SHADE = 400

type ShadeNum = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

function token(color: TailwindColor, shade: ShadeNum): ColorToken {
  return `${color}-${shade}` as ColorToken
}

/**
 * Build ThemeTokens for light mode.
 * - neutral=undefined → chromatic look: surfaces use primary hue
 * - neutral provided  → traditional look: surfaces use desaturated neutral family
 * - secondary provided → overrides secondary/accent tokens at -200
 */
function buildLightTokens(
  primary: TailwindColor,
  neutral: TailwindColor | undefined,
  secondary: TailwindColor | undefined,
  overrides?: Partial<ThemeTokens>,
): ThemeTokens {
  const surface = neutral ?? primary
  const base: ThemeTokens = {
    background:          token(surface, 50),
    foreground:          token(surface, 950),
    card:                token(surface, 100),
    cardForeground:      token(surface, 950),
    popover:             token(surface, 50),
    popoverForeground:   token(surface, 950),
    primary:             token(primary, LIGHT_PRIMARY_SHADE),
    primaryForeground:   'white',
    secondary:           token(secondary ?? primary, 200),
    secondaryForeground: token(surface, 800),
    muted:               token(surface, 100),
    mutedForeground:     token(surface, 500),
    accent:              token(secondary ?? primary, 200),
    accentForeground:    token(surface, 800),
    destructive:         'red-600' as ColorToken,
    destructiveForeground: 'white',
    border:              token(surface, 200),
    input:               token(surface, 200),
    ring:                token(primary, LIGHT_PRIMARY_SHADE),
  }
  return overrides ? { ...base, ...overrides } : base
}

/**
 * Build ThemeTokens for dark mode.
 * - neutral=undefined → chromatic look: surfaces use primary hue
 * - neutral provided  → traditional look: surfaces use desaturated neutral family
 * - secondary provided → overrides secondary/accent tokens at -800
 */
function buildDarkTokens(
  primary: TailwindColor,
  neutral: TailwindColor | undefined,
  secondary: TailwindColor | undefined,
  overrides?: Partial<ThemeTokens>,
): ThemeTokens {
  const surface = neutral ?? primary
  const base: ThemeTokens = {
    background:          token(surface, 950),
    foreground:          token(surface, 50),
    card:                token(surface, 900),
    cardForeground:      token(surface, 50),
    popover:             token(surface, 950),
    popoverForeground:   token(surface, 50),
    primary:             token(primary, DARK_PRIMARY_SHADE),
    primaryForeground:   token(primary, 950),
    // secondary at -800 (visibly lighter than card/bg) — used for price badges etc.
    secondary:           token(secondary ?? primary, 800),
    secondaryForeground: token(surface, 200),
    muted:               token(surface, 900),
    mutedForeground:     token(surface, 400),
    accent:              token(secondary ?? primary, 800),
    accentForeground:    token(surface, 200),
    destructive:         'red-400' as ColorToken,
    destructiveForeground: token(primary, 950),
    border:              token(surface, 800),
    input:               token(surface, 800),
    ring:                token(primary, DARK_PRIMARY_SHADE),
  }
  return overrides ? { ...base, ...overrides } : base
}

export interface CreateThemeConfig {
  name: string
  label: string
  primary: TailwindColor
  /**
   * Desaturated neutral family for backgrounds/surfaces/muted.
   * Omit (or undefined) to keep the chromatic look: all surfaces use the primary hue.
   */
  neutral?: TailwindColor
  /**
   * Secondary accent color family.
   * Omit (or undefined) to auto-derive from primary (secondary = primary at -200/-800).
   */
  secondary?: TailwindColor
  radius?: string
  fonts?: ThemeFonts
  pattern?: ThemePattern
  category?: string
  overrides?: {
    light?: Partial<ThemeTokens>
    dark?: Partial<ThemeTokens>
  }
  /**
   * Chroma (saturation) multiplier applied after shade generation.
   * Accepts a numeric factor or a named preset.
   * 1.0 / 'default' = unchanged. 0.5 / 'elegant' = very muted. 1.3 / 'playful' = vivid.
   */
  vividness?: number | VividnessPreset
}

/**
 * Easiest factory: pick color families, library picks shades intelligently.
 *
 * @example
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue' })
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', neutral: 'slate' })
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', secondary: 'teal' })
 */
export function createTheme(config: CreateThemeConfig): Theme {
  const { name, label, primary, neutral, secondary, radius, fonts, pattern, category, overrides, vividness } = config

  const vividnessFactor: number | undefined =
    typeof vividness === 'string' ? VIVIDNESS_PRESETS[vividness]
    : typeof vividness === 'number' ? vividness
    : undefined

  const vividnessPresetName: string | undefined =
    typeof vividness === 'string' ? vividness : undefined

  const base = {
    name,
    label,
    light: buildLightTokens(primary, neutral, secondary, overrides?.light),
    dark:  buildDarkTokens(primary, neutral, secondary, overrides?.dark),
    fonts,
    pattern,
    radius: radius ?? '0.5rem',
    category,
    _generatorConfig: {
      primary, neutral, secondary, radius,
      vividness: vividnessFactor,
      vividnessPreset: vividnessPresetName,
    },
  } as Theme & { _generatorConfig: NonNullable<Theme extends { _generatorConfig?: infer C } ? C : never> }

  if (vividnessFactor !== undefined && vividnessFactor !== 1.0) {
    return adjustVividness(base, vividnessFactor)
  }
  return base
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
