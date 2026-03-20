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
      { label: 'Inter',             value: FONTS.INTER },
      { label: 'Geist',             value: FONTS.GEIST },
      { label: 'Plus Jakarta Sans', value: FONTS.PLUS_JAKARTA },
      { label: 'Space Grotesk',     value: FONTS.SPACE_GROTESK },
      { label: 'Josefin Sans',      value: FONTS.JOSEFIN_SANS },
      { label: 'Raleway',           value: FONTS.RALEWAY },
      { label: 'Nunito',            value: FONTS.NUNITO },
      { label: 'Poppins',           value: FONTS.POPPINS },
      { label: 'Outfit',            value: FONTS.OUTFIT },
      { label: 'DM Sans',           value: FONTS.DM_SANS },
      { label: 'Manrope',           value: FONTS.MANROPE },
    ],
  },
  {
    label: 'Serif',
    options: [
      { label: 'Cormorant Garamond', value: FONTS.CORMORANT },
      { label: 'Bodoni Moda',        value: FONTS.BODONI_MODA },
      { label: 'Cinzel',             value: FONTS.CINZEL },
      { label: 'Fraunces',           value: FONTS.FRAUNCES },
      { label: 'Instrument Serif',   value: FONTS.INSTRUMENT_SERIF },
      { label: 'Playfair Display',   value: FONTS.PLAYFAIR },
      { label: 'Lora',               value: FONTS.LORA },
      { label: 'Merriweather',       value: FONTS.MERRIWEATHER },
      { label: 'DM Serif Display',   value: FONTS.DM_SERIF },
    ],
  },
  {
    label: 'Display',
    options: [
      { label: 'Bebas Neue',    value: FONTS.BEBAS_NEUE },
      { label: 'Syne',          value: FONTS.SYNE },
      { label: 'Unbounded',     value: FONTS.UNBOUNDED },
      { label: 'Archivo Black', value: FONTS.ARCHIVO_BLACK },
      { label: 'Righteous',     value: FONTS.RIGHTEOUS },
    ],
  },
]
