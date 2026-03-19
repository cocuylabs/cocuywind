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
  /** Body / UI font — applied to :root. Defaults to system-ui sans-serif. */
  body?: string
  /** Heading / display font — applied to h1–h6. Omit to use body font for headings too. */
  heading?: string
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
  /**
   * CSS background-image value for a custom background, e.g. `"url('https://...')"`.
   * cocuywind does not manage upload — the consumer supplies a URL or data URL after upload.
   * Renders below any pattern overlay.
   */
  backgroundImage?: string
  /** e.g. "0.5rem" */
  radius?: string
  /** Groups themes in the picker: 'Basic' | 'Curated' | 'TweakCN' */
  category?: string
  /** Optional original/source label for display or attribution */
  _sourceName?: string
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
  /**
   * CSS background-image value for a custom background, e.g. `"url('https://...')"`.
   * Stored as-is and emitted into `--bg-image`. Consumer is responsible for upload/storage.
   */
  backgroundImage?: string
  radius: string

  // --- Optional source metadata ---
  _source?: 'preset' | 'generated' | 'custom'
  /** If source === 'preset', e.g. "ocean" */
  _presetName?: string
  /** If source === 'generated' via createTheme() */
  _generatorConfig?: {
    primary: TailwindColor
    neutral?: TailwindColor
    secondary?: TailwindColor
    radius?: string
    /** Numeric chroma multiplier that was applied (1.0 = unchanged) */
    vividness?: number
    /** Named preset if one was used — for UI state restoration */
    vividnessPreset?: string
  }
  /**
   * If source === 'preset' + custom color overlays were applied.
   * Stores the base preset name and which color groups were overridden,
   * enabling the admin panel to reconstruct edit state when loading a saved theme.
   * undefined on each color field means "not overridden — use preset value".
   */
  _overlayConfig?: {
    basePreset: string
    primary?:   TailwindColor
    secondary?: TailwindColor
    neutral?:   TailwindColor | 'none'
  }
  /** Optional original/source label for display or attribution */
  _sourceName?: string
}
