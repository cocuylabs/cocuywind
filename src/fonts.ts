export type FontFamily = string

/**
 * Curated font constants — system fonts and popular Google Fonts.
 * Google Fonts must be loaded separately via <link> or next/font.
 */
export const FONTS = {
  ARCHIVO_BLACK:   "'Archivo Black', system-ui, sans-serif",
  BEBAS_NEUE:      "'Bebas Neue', system-ui, sans-serif",
  BODONI_MODA:         "'Bodoni Moda', Georgia, serif",
  CINZEL:              "'Cinzel', Georgia, serif",
  CORMORANT:           "'Cormorant Garamond', Georgia, serif",
  DM_SANS:        "'DM Sans', system-ui, sans-serif",
  DM_SERIF:            "'DM Serif Display', Georgia, serif",
  FIRA_CODE:       "'Fira Code', ui-monospace, monospace",
  FRAUNCES:            "'Fraunces', Georgia, serif",
  GEIST:          "'Geist', system-ui, sans-serif",
  IBM_PLEX_MONO:   "'IBM Plex Mono', ui-monospace, monospace",
  INSTRUMENT_SERIF:    "'Instrument Serif', Georgia, serif",
  INTER:          "'Inter', system-ui, sans-serif",
  JETBRAINS_MONO:  "'JetBrains Mono', ui-monospace, monospace",
  JOSEFIN_SANS:    "'Josefin Sans', system-ui, sans-serif",
  LORA:                "'Lora', Georgia, serif",
  MANROPE:        "'Manrope', system-ui, sans-serif",
  MERRIWEATHER:        "'Merriweather', Georgia, serif",
  NUNITO:         "'Nunito', system-ui, sans-serif",
  OUTFIT:         "'Outfit', system-ui, sans-serif",
  PLAYFAIR:            "'Playfair Display', Georgia, serif",
  PLUS_JAKARTA:   "'Plus Jakarta Sans', system-ui, sans-serif",
  POPPINS:        "'Poppins', system-ui, sans-serif",
  RALEWAY:         "'Raleway', system-ui, sans-serif",
  RIGHTEOUS:       "'Righteous', system-ui, sans-serif",
  SOURCE_CODE_PRO: "'Source Code Pro', ui-monospace, monospace",
  SPACE_GROTESK:   "'Space Grotesk', system-ui, sans-serif",
  SYNE:            "'Syne', system-ui, sans-serif",
  SYSTEM_MONO:  "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",
  SYSTEM_SANS:  "system-ui, -apple-system, sans-serif",
  SYSTEM_SERIF: "Georgia, 'Times New Roman', serif",
  UNBOUNDED:       "'Unbounded', system-ui, sans-serif",
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

export interface FontAdjustment {
  /**
   * Relative font-size correction (e.g. `'1.15em'`).
   * Apply to the element's `font-size` so the face reads at the same visual
   * size as a "normal" font at the same point size.
   */
  fontSize?: string
  /**
   * Letter-spacing recommendation (e.g. `'0.04em'`).
   * Apply to `letter-spacing` for fonts that need open or tight tracking.
   */
  letterSpacing?: string
}

/**
 * Per-font optical adjustments — recommended fontSize and letterSpacing
 * corrections for fonts that render unusually large/small or need tracking.
 *
 * Fonts not listed here need no adjustment. Apply these wherever you render
 * text in the chosen font (headings, body copy, UI labels) to get consistent
 * visual sizing across the FONTS palette.
 *
 * @example
 * const adj = FONT_ADJUSTMENTS[theme.fonts?.heading ?? ''] ?? {}
 * // → { fontSize: '1.15em', letterSpacing: undefined }
 */
export const FONT_ADJUSTMENTS: Partial<Record<string, FontAdjustment>> = {
  // ── Serif — small x-height or high-contrast strokes need a size bump ──────
  [FONTS.CORMORANT]:        { fontSize: '1.15em' },
  [FONTS.BODONI_MODA]:      { fontSize: '1.1em',  letterSpacing: '0.02em' },
  [FONTS.INSTRUMENT_SERIF]: { fontSize: '1.05em' },
  [FONTS.FRAUNCES]:         { fontSize: '1.05em' },
  [FONTS.DM_SERIF]:         { fontSize: '1.05em' },
  // ── Cinzel — all-caps Roman; open tracking feels more natural ────────────
  [FONTS.CINZEL]:           { letterSpacing: '0.06em' },
  // ── Sans-serif — geometric/narrow faces benefit from a touch of tracking ─
  [FONTS.JOSEFIN_SANS]:     { letterSpacing: '0.04em' },
  [FONTS.RALEWAY]:          { letterSpacing: '0.02em' },
  // ── Display — extreme width / condensed cases ────────────────────────────
  [FONTS.MERRIWEATHER]:     { fontSize: '1.025em' },
  [FONTS.PLAYFAIR]:         { fontSize: '1.025em' },
  [FONTS.BEBAS_NEUE]:       { fontSize: '1.2em',  letterSpacing: '0.06em' },
  [FONTS.UNBOUNDED]:        { fontSize: '0.82em' },
  [FONTS.ARCHIVO_BLACK]:    { fontSize: '0.95em' },
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
