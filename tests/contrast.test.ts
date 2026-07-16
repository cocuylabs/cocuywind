import { describe, it, expect } from 'vitest'
import {
  contrastRatio,
  meetsContrast,
  ensureContrast,
  ensureThemeContrast,
  parseColorToRgb,
  relativeLuminance,
  CONTRAST_AA_TEXT,
  CONTRAST_AA_UI,
} from '../src/contrast.js'
import { adjustVividness } from '../src/vividness.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'
import { resolveColor } from '../src/colors.js'
import { resolveTokens } from '../src/generate.js'

describe('parseColorToRgb', () => {
  it('parses oklch', () => {
    const rgb = parseColorToRgb('oklch(1 0 0)')
    expect(rgb).not.toBeNull()
    expect(rgb!.r).toBeCloseTo(1, 3)
    expect(rgb!.g).toBeCloseTo(1, 3)
    expect(rgb!.b).toBeCloseTo(1, 3)
  })

  it('parses oklch with percent lightness and alpha', () => {
    expect(parseColorToRgb('oklch(50% 0.1 250)')).not.toBeNull()
    expect(parseColorToRgb('oklch(0.5 0.1 250 / 0.5)')).not.toBeNull()
  })

  it('parses hex (3, 6, 8 digit)', () => {
    expect(parseColorToRgb('#fff')!.r).toBeCloseTo(1, 3)
    expect(parseColorToRgb('#000000')!.r).toBe(0)
    expect(parseColorToRgb('#ff0000ff')!.r).toBeCloseTo(1, 3)
  })

  it('parses rgb() and hsl() including comma syntax', () => {
    expect(parseColorToRgb('rgb(255, 255, 255)')!.g).toBeCloseTo(1, 3)
    expect(parseColorToRgb('hsl(0, 0%, 100%)')!.b).toBeCloseTo(1, 3)
    expect(parseColorToRgb('hsl(120 50% 50%)')).not.toBeNull()
  })

  it('returns null for var() refs and unknown formats', () => {
    expect(parseColorToRgb('var(--primary)')).toBeNull()
    expect(parseColorToRgb('color-mix(in oklch, red 50%, transparent)')).toBeNull()
    expect(parseColorToRgb('rebeccapurple')).toBeNull()
  })
})

describe('contrastRatio', () => {
  it('white on black is 21', () => {
    expect(contrastRatio('oklch(1 0 0)', 'oklch(0 0 0)')).toBeCloseTo(21, 1)
  })

  it('is symmetric', () => {
    const a = contrastRatio('#333333', '#eeeeee')
    const b = contrastRatio('#eeeeee', '#333333')
    expect(a).toBeCloseTo(b, 6)
  })

  it('same color is 1', () => {
    expect(contrastRatio('#808080', '#808080')).toBeCloseTo(1, 3)
  })

  it('returns NaN for unparseable colors', () => {
    expect(contrastRatio('var(--x)', '#fff')).toBeNaN()
  })

  it('cross-format agreement (hex vs rgb)', () => {
    const viaHex = contrastRatio('#ff0000', '#ffffff')
    const viaRgb = contrastRatio('rgb(255, 0, 0)', 'rgb(255, 255, 255)')
    expect(viaHex).toBeCloseTo(viaRgb, 4)
  })
})

describe('relativeLuminance', () => {
  it('white is 1, black is 0', () => {
    expect(relativeLuminance(parseColorToRgb('#fff')!)).toBeCloseTo(1, 3)
    expect(relativeLuminance(parseColorToRgb('#000')!)).toBe(0)
  })
})

describe('meetsContrast', () => {
  it('defaults to AA body text (4.5)', () => {
    expect(meetsContrast('oklch(0 0 0)', 'oklch(1 0 0)')).toBe(true)
    expect(meetsContrast('oklch(0.8 0 0)', 'oklch(1 0 0)')).toBe(false)
  })

  it('returns false for unparseable input', () => {
    expect(meetsContrast('var(--x)', '#fff')).toBe(false)
  })
})

describe('ensureContrast', () => {
  it('returns input unchanged when the pair already passes', () => {
    const fg = 'oklch(0.2 0.05 250)'
    expect(ensureContrast(fg, 'oklch(0.98 0.01 250)')).toBe(fg)
  })

  it('darkens a failing foreground on a light background', () => {
    const fixed = ensureContrast('oklch(0.7 0.15 250)', 'oklch(0.98 0.01 250)')
    expect(contrastRatio(fixed, 'oklch(0.98 0.01 250)')).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
  })

  it('lightens a failing foreground on a dark background', () => {
    const fixed = ensureContrast('oklch(0.4 0.15 250)', 'oklch(0.15 0.02 250)')
    expect(contrastRatio(fixed, 'oklch(0.15 0.02 250)')).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
  })

  it('preserves hue and chroma when lightness alone suffices', () => {
    const fixed = ensureContrast('oklch(0.7 0.15 250)', 'oklch(0.98 0.01 250)')
    const match = fixed.match(/^oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)$/)
    expect(match).not.toBeNull()
    expect(parseFloat(match![2])).toBeCloseTo(0.15, 2)
    expect(parseFloat(match![3])).toBeCloseTo(250, 0)
  })

  it('respects a custom ratio (3:1 UI)', () => {
    const fixed = ensureContrast('oklch(0.85 0.18 100)', 'oklch(0.98 0.005 100)', CONTRAST_AA_UI)
    expect(contrastRatio(fixed, 'oklch(0.98 0.005 100)')).toBeGreaterThanOrEqual(CONTRAST_AA_UI)
  })

  it('survives the rounding boundary (result stays >= ratio after 4dp rounding)', () => {
    // A pair that lands very near 4.5 — regression guard for the bisection margin
    const fixed = ensureContrast('oklch(0.55 0.2 30)', 'oklch(0.97 0.02 30)')
    expect(contrastRatio(fixed, 'oklch(0.97 0.02 30)')).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
  })

  it('passes through unparseable colors unchanged', () => {
    expect(ensureContrast('var(--primary)', '#fff')).toBe('var(--primary)')
    expect(ensureContrast('#888', 'var(--bg)')).toBe('#888')
  })
})

describe('ensureThemeContrast', () => {
  it('returns the same reference when nothing fails', () => {
    // oceanTheme was fixed to pass all pairs
    expect(ensureThemeContrast(oceanTheme)).toBe(oceanTheme)
  })

  it('repairs failing foreground tokens without touching surfaces', () => {
    const broken = {
      ...oceanTheme,
      light: { ...oceanTheme.light, mutedForeground: 'slate-300' as any },
    }
    const fixed = ensureThemeContrast(broken)
    const t = resolveTokens(fixed.light)
    expect(contrastRatio(t.mutedForeground, t.muted)).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
    // Surface untouched
    expect(fixed.light.muted).toBe(broken.light.muted)
    expect(fixed.dark).toBe(broken.dark)
  })

  it('repairs a failing ring at 3:1', () => {
    const broken = {
      ...oceanTheme,
      light: { ...oceanTheme.light, ring: 'slate-200' as any },
    }
    const t = resolveTokens(ensureThemeContrast(broken).light)
    expect(contrastRatio(t.ring, t.background)).toBeGreaterThanOrEqual(CONTRAST_AA_UI)
  })
})

describe('adjustVividness contrast floor', () => {
  it('boosted theme keeps AA text contrast by default', () => {
    const boosted = adjustVividness(oceanTheme, 1.3)
    for (const mode of ['light', 'dark'] as const) {
      const t = resolveTokens(boosted[mode])
      expect(contrastRatio(t.foreground, t.background)).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
      expect(contrastRatio(t.mutedForeground, t.muted)).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
      expect(contrastRatio(t.primaryForeground, t.primary)).toBeGreaterThanOrEqual(CONTRAST_AA_TEXT)
    }
  })

  it('contrastFloor: false skips the repair pass', () => {
    const rawScaled = adjustVividness(oceanTheme, 1.3, { contrastFloor: false })
    // Every token should be a plain chroma-scaled oklch of the original —
    // same lightness as the resolved source token.
    const srcL = parseFloat(resolveColor(oceanTheme.light.foreground).match(/oklch\(([\d.]+)/)![1])
    const outL = parseFloat(String(rawScaled.light.foreground).match(/oklch\(([\d.]+)/)![1])
    expect(outL).toBeCloseTo(srcL, 6)
  })

  it('factor 1.0 returns the same reference', () => {
    expect(adjustVividness(oceanTheme, 1.0)).toBe(oceanTheme)
  })
})
