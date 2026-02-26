// ─── Color Token Types ────────────────────────────────────────────────────────

export type TailwindColor =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald'
  | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple'
  | 'fuchsia' | 'pink' | 'rose'

export type TailwindShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

/** A Tailwind color reference — resolved at runtime via TAILWIND_COLORS lookup */
export type TailwindToken = `${TailwindColor}-${TailwindShade}` | 'white' | 'black'

/** Any valid CSS color string (oklch, hsl, hex, etc.) — passes through as-is */
export type RawColor = string & { readonly __brand: 'RawColor' }

/** ColorToken accepts both Tailwind token refs and raw CSS color values */
export type ColorToken = TailwindToken | RawColor

/**
 * Helper to create a raw color value (bypasses Tailwind lookup).
 * @example raw('oklch(0.623 0.214 259.815)')
 * @example raw('#3b82f6')
 */
export const raw = (value: string): RawColor => value as RawColor

// ─── Theme Token Types ────────────────────────────────────────────────────────

/** shadcn/ui-compatible color token set */
export interface ThemeTokens {
  background: ColorToken
  foreground: ColorToken
  card: ColorToken
  cardForeground: ColorToken
  popover: ColorToken
  popoverForeground: ColorToken
  primary: ColorToken
  primaryForeground: ColorToken
  secondary: ColorToken
  secondaryForeground: ColorToken
  muted: ColorToken
  mutedForeground: ColorToken
  accent: ColorToken
  accentForeground: ColorToken
  destructive: ColorToken
  destructiveForeground: ColorToken
  border: ColorToken
  input: ColorToken
  ring: ColorToken
}

export interface ThemeFonts {
  sans?: string
  serif?: string
  mono?: string
}

export type PatternType =
  | 'none'
  | 'dots'
  | 'grid'
  | 'cross'
  | 'diagonal-lines'
  | 'horizontal-lines'
  | 'vertical-lines'
  | 'zigzag'
  | 'checkerboard'
  | 'triangles'
  | 'hexagons'
  | 'noise'

export interface ThemePattern {
  type: PatternType
  /** Defaults to current foreground at low opacity */
  color?: ColorToken
  /** 0–1, default 0.15 */
  opacity?: number
  /** default 'md' */
  size?: 'sm' | 'md' | 'lg'
}

export interface Theme {
  /** Machine key: "ocean" */
  name: string
  /** Display name: "Ocean Blue" */
  label: string
  light: ThemeTokens
  dark: ThemeTokens
  fonts?: ThemeFonts
  pattern?: ThemePattern
  /** e.g. "0.5rem" */
  radius?: string
}

// ─── Storage Types ────────────────────────────────────────────────────────────

/** Resolved CSS values as flat string maps — never Tailwind token refs */
export type ResolvedTokens = Record<string, string>

/**
 * The canonical format for persistence (DB storage).
 * Always contains resolved CSS values so derived apps never need
 * the library to look things up — just formatting.
 */
export interface StoredTheme {
  // --- Identity ---
  name: string
  label: string

  // --- Always-present resolved values (source of truth for rendering) ---
  styles: {
    light: ResolvedTokens
    dark: ResolvedTokens
  }
  fonts: ThemeFonts
  pattern: ThemePattern
  radius: string

  // --- Optional source metadata ---
  _source?: 'preset' | 'generated' | 'custom'
  /** If source === 'preset', e.g. "ocean" */
  _presetName?: string
  /** If source === 'generated' via createTheme() */
  _generatorConfig?: {
    primary: TailwindColor
    neutral: TailwindColor
    radius?: string
  }
}
