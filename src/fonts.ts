export type FontFamily = string

/**
 * Curated font constants — system fonts and popular Google Fonts.
 * Google Fonts must be loaded separately via <link> or next/font.
 */
export const FONTS = {
  // ─── System fonts ─────────────────────────────────────────────────────────
  SYSTEM_SANS:  "system-ui, -apple-system, sans-serif",
  SYSTEM_SERIF: "Georgia, 'Times New Roman', serif",

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
  PLAYFAIR:       "'Playfair Display', Georgia, serif",
  LORA:           "'Lora', Georgia, serif",
  MERRIWEATHER:   "'Merriweather', Georgia, serif",
  DM_SERIF:       "'DM Serif Display', Georgia, serif",
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
  PLAYFAIR:       'Playfair+Display:wght@400;600;700',
  LORA:           'Lora:wght@400;500;600;700',
  MERRIWEATHER:   'Merriweather:wght@300;400;700',
  DM_SERIF:       'DM+Serif+Display:wght@400',
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
