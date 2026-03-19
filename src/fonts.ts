export type FontFamily = string

/**
 * Curated font constants — system fonts and popular Google Fonts.
 * Google Fonts must be loaded separately via <link> or next/font.
 */
export const FONTS = {
  // ─── System fonts ─────────────────────────────────────────────────────────
  SYSTEM_SANS:  "system-ui, -apple-system, sans-serif",
  SYSTEM_SERIF: "Georgia, 'Times New Roman', serif",
  SYSTEM_MONO:  "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",

  // ─── Sans-serif Google Fonts ───────────────────────────────────────────────
  INTER:          "'Inter', system-ui, sans-serif",
  GEIST:          "'Geist', system-ui, sans-serif",
  PLUS_JAKARTA:   "'Plus Jakarta Sans', system-ui, sans-serif",
  NUNITO:         "'Nunito', system-ui, sans-serif",
  POPPINS:        "'Poppins', system-ui, sans-serif",
  OUTFIT:         "'Outfit', system-ui, sans-serif",
  DM_SANS:        "'DM Sans', system-ui, sans-serif",
  MANROPE:        "'Manrope', system-ui, sans-serif",

  // ─── Serif Google Fonts ────────────────────────────────────────────────────
  PLAYFAIR:            "'Playfair Display', Georgia, serif",
  LORA:                "'Lora', Georgia, serif",
  MERRIWEATHER:        "'Merriweather', Georgia, serif",
  DM_SERIF:            "'DM Serif Display', Georgia, serif",
  CORMORANT:           "'Cormorant Garamond', Georgia, serif",
  BODONI_MODA:         "'Bodoni Moda', Georgia, serif",
  CINZEL:              "'Cinzel', Georgia, serif",
  FRAUNCES:            "'Fraunces', Georgia, serif",
  INSTRUMENT_SERIF:    "'Instrument Serif', Georgia, serif",

  // ─── Display / Edgy Google Fonts ──────────────────────────────────────────
  BEBAS_NEUE:      "'Bebas Neue', system-ui, sans-serif",
  SYNE:            "'Syne', system-ui, sans-serif",
  UNBOUNDED:       "'Unbounded', system-ui, sans-serif",
  ARCHIVO_BLACK:   "'Archivo Black', system-ui, sans-serif",
  RIGHTEOUS:       "'Righteous', system-ui, sans-serif",

  // ─── More Sans-serif Google Fonts ─────────────────────────────────────────
  SPACE_GROTESK:   "'Space Grotesk', system-ui, sans-serif",
  JOSEFIN_SANS:    "'Josefin Sans', system-ui, sans-serif",
  RALEWAY:         "'Raleway', system-ui, sans-serif",

  // ─── Monospace Google Fonts ────────────────────────────────────────────────
  JETBRAINS_MONO:  "'JetBrains Mono', ui-monospace, monospace",
  FIRA_CODE:       "'Fira Code', ui-monospace, monospace",
  SOURCE_CODE_PRO: "'Source Code Pro', ui-monospace, monospace",
  IBM_PLEX_MONO:   "'IBM Plex Mono', ui-monospace, monospace",
} as const

export type FontKey = keyof typeof FONTS

/** Maps font family string → Google Fonts API family param */
const GOOGLE_FONT_NAMES: Partial<Record<FontKey, string>> = {
  INTER:          'Inter:wght@400;500;600;700',
  GEIST:          'Geist:wght@400;500;600;700',
  PLUS_JAKARTA:   'Plus+Jakarta+Sans:wght@400;500;600;700',
  NUNITO:         'Nunito:wght@400;500;600;700',
  POPPINS:        'Poppins:wght@400;500;600;700',
  OUTFIT:         'Outfit:wght@400;500;600;700',
  DM_SANS:        'DM+Sans:wght@400;500;600;700',
  MANROPE:        'Manrope:wght@400;500;600;700',
  PLAYFAIR:            'Playfair+Display:wght@400;600;700',
  LORA:                'Lora:wght@400;500;600;700',
  MERRIWEATHER:        'Merriweather:wght@300;400;700',
  DM_SERIF:            'DM+Serif+Display:wght@400',
  CORMORANT:           'Cormorant+Garamond:wght@400;500;600;700',
  BODONI_MODA:         'Bodoni+Moda:opsz,wght@6..96,400;6..96,700',
  CINZEL:              'Cinzel:wght@400;600;700',
  FRAUNCES:            'Fraunces:opsz,wght@9..144,300;9..144,400;9..144,700',
  INSTRUMENT_SERIF:    'Instrument+Serif:ital,wght@0,400;1,400',
  BEBAS_NEUE:          'Bebas+Neue:wght@400',
  SYNE:                'Syne:wght@400;600;700;800',
  UNBOUNDED:           'Unbounded:wght@400;500;600;700',
  ARCHIVO_BLACK:       'Archivo+Black:wght@400',
  RIGHTEOUS:           'Righteous:wght@400',
  SPACE_GROTESK:       'Space+Grotesk:wght@400;500;600;700',
  JOSEFIN_SANS:        'Josefin+Sans:wght@400;600;700',
  RALEWAY:             'Raleway:wght@400;500;600;700',
  JETBRAINS_MONO:      'JetBrains+Mono:wght@400;500;700',
  FIRA_CODE:           'Fira+Code:wght@400;500;700',
  SOURCE_CODE_PRO:     'Source+Code+Pro:wght@400;500;700',
  IBM_PLEX_MONO:       'IBM+Plex+Mono:wght@400;500;700',
}

/**
 * Build a Google Fonts URL for the given font family strings.
 *
 * @param families - Array of font family strings from FONTS constants or custom
 * @example
 * googleFontsUrl([FONTS.INTER, FONTS.PLAYFAIR])
 * // → "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
 */
export function googleFontsUrl(families: string[]): string {
  const fontKeys = Object.keys(GOOGLE_FONT_NAMES) as FontKey[]
  const params: string[] = []

  for (const family of families) {
    // Try to match against known FONTS values
    const matchedKey = fontKeys.find((k) => FONTS[k] === family)
    if (matchedKey && GOOGLE_FONT_NAMES[matchedKey]) {
      params.push(`family=${GOOGLE_FONT_NAMES[matchedKey]}`)
    } else {
      // Best-effort: extract font name from CSS font-family string
      const match = family.match(/['"]([^'"]+)['"]/)
      if (match) {
        const name = match[1].replace(/\s+/g, '+')
        params.push(`family=${name}:wght@400;700`)
      }
    }
  }

  if (params.length === 0) return ''
  return `https://fonts.googleapis.com/css2?${params.join('&')}&display=swap`
}
