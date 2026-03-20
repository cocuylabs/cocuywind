import type { TailwindColor, PatternType } from '../types.js'
import { FONTS } from '../fonts.js'

export const TAILWIND_COLORS: TailwindColor[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald',
  'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple',
  'fuchsia', 'pink', 'rose',
]
export const NEUTRAL_COLORS: TailwindColor[] = ['slate', 'gray', 'zinc', 'neutral', 'stone']
export const PATTERN_TYPES: PatternType[] = [
  'none', 'dots', 'grid', 'cross', 'diagonal-lines',
  'horizontal-lines', 'vertical-lines', 'zigzag', 'checkerboard',
  'triangles', 'hexagons', 'noise',
]
export const PATTERN_LABELS: Record<PatternType, string> = {
  'none': 'None', 'dots': 'Dots', 'grid': 'Grid', 'cross': 'Cross',
  'diagonal-lines': 'Diagonal', 'horizontal-lines': 'H-Lines',
  'vertical-lines': 'V-Lines', 'zigzag': 'Zigzag', 'checkerboard': 'Checker',
  'triangles': 'Triangles', 'hexagons': 'Hexagons', 'noise': 'Noise',
}
export const PATTERN_OPACITY_PRESETS = [
  { label: 'Subtle', value: 0.06 },
  { label: 'Normal', value: 0.08 },
  { label: 'Bold',   value: 0.18 },
]
export const RADIUS_PRESETS = [
  { label: 'None', value: '0rem' },   { label: 'SM', value: '0.25rem' },
  { label: 'MD',   value: '0.5rem' }, { label: 'LG', value: '0.75rem' },
  { label: 'XL',   value: '1rem' },   { label: 'Full', value: '9999px' },
]
/** Re-exported from core so the picker uses the same source of truth. */
export { FONT_ADJUSTMENTS as FONT_PICKER_ADJUSTMENTS } from '../fonts.js'

export const FONT_GROUPS = [
  {
    label: 'System',
    options: [
      { label: 'System default (sans-serif)', value: FONTS.SYSTEM_SANS },
      { label: 'System serif',                value: FONTS.SYSTEM_SERIF },
    ],
  },
  {
    label: 'Sans-serif',
    options: [
      { label: 'DM Sans',           value: FONTS.DM_SANS },
      { label: 'Geist',             value: FONTS.GEIST },
      { label: 'Inter',             value: FONTS.INTER },
      { label: 'Josefin Sans',      value: FONTS.JOSEFIN_SANS },
      { label: 'Manrope',           value: FONTS.MANROPE },
      { label: 'Nunito',            value: FONTS.NUNITO },
      { label: 'Outfit',            value: FONTS.OUTFIT },
      { label: 'Plus Jakarta Sans', value: FONTS.PLUS_JAKARTA },
      { label: 'Poppins',           value: FONTS.POPPINS },
      { label: 'Raleway',           value: FONTS.RALEWAY },
      { label: 'Space Grotesk',     value: FONTS.SPACE_GROTESK },
    ],
  },
  {
    label: 'Serif',
    options: [
      { label: 'Bodoni Moda',        value: FONTS.BODONI_MODA },
      { label: 'Cinzel',             value: FONTS.CINZEL },
      { label: 'Cormorant Garamond', value: FONTS.CORMORANT },
      { label: 'DM Serif Display',   value: FONTS.DM_SERIF },
      { label: 'Fraunces',           value: FONTS.FRAUNCES },
      { label: 'Instrument Serif',   value: FONTS.INSTRUMENT_SERIF },
      { label: 'Lora',               value: FONTS.LORA },
      { label: 'Merriweather',       value: FONTS.MERRIWEATHER },
      { label: 'Playfair Display',   value: FONTS.PLAYFAIR },
    ],
  },
  {
    label: 'Display',
    options: [
      { label: 'Archivo Black', value: FONTS.ARCHIVO_BLACK },
      { label: 'Bebas Neue',    value: FONTS.BEBAS_NEUE },
      { label: 'Righteous',     value: FONTS.RIGHTEOUS },
      { label: 'Syne',          value: FONTS.SYNE },
      { label: 'Unbounded',     value: FONTS.UNBOUNDED },
    ],
  },
]
