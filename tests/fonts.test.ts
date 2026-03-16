import { describe, it, expect } from 'vitest'
import { FONTS, googleFontsUrl } from '../src/fonts.js'

describe('FONTS', () => {
  it('exports system fonts', () => {
    expect(FONTS.SYSTEM_SANS).toContain('system-ui')
    expect(FONTS.SYSTEM_SERIF).toContain('Georgia')
  })

  it('exports at least 12 font constants', () => {
    expect(Object.keys(FONTS).length).toBeGreaterThanOrEqual(12)
  })

  it('INTER includes Inter font name', () => {
    expect(FONTS.INTER).toContain('Inter')
  })

  it('PLAYFAIR includes Playfair Display', () => {
    expect(FONTS.PLAYFAIR).toContain('Playfair Display')
  })
})

describe('googleFontsUrl', () => {
  it('returns empty string for no families', () => {
    expect(googleFontsUrl([])).toBe('')
  })

  it('generates a valid Google Fonts URL for known fonts', () => {
    const url = googleFontsUrl([FONTS.INTER])
    expect(url).toContain('fonts.googleapis.com')
    expect(url).toContain('Inter')
    expect(url).toContain('display=swap')
  })

  it('includes multiple families', () => {
    const url = googleFontsUrl([FONTS.INTER, FONTS.PLAYFAIR])
    expect(url).toContain('Inter')
    expect(url).toContain('Playfair')
  })

  it('starts with https://', () => {
    const url = googleFontsUrl([FONTS.INTER])
    expect(url).toMatch(/^https:\/\//)
  })

  it('handles custom font family strings gracefully', () => {
    const url = googleFontsUrl(["'My Custom Font', sans-serif"])
    // Should not throw, returns some URL or empty string
    expect(typeof url).toBe('string')
  })
})
