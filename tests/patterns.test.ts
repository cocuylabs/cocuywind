import { describe, it, expect } from 'vitest'
import {
  generatePattern,
  patternToCssVars,
  PATTERN_TINT_OPACITY_MULTIPLIER,
  PATTERN_MAX_EFFECTIVE_OPACITY,
} from '../src/patterns.js'
import type { ThemePattern } from '../src/types.js'

describe('generatePattern', () => {
  it('returns no-op for type=none', () => {
    const result = generatePattern({ type: 'none' })
    expect(result.backgroundImage).toBe('none')
    expect(result.backgroundSize).toBe('auto')
  })

  it('returns a radial-gradient for dots', () => {
    const result = generatePattern({ type: 'dots' })
    expect(result.backgroundImage).toContain('radial-gradient')
    expect(result.backgroundSize).toMatch(/\d+px \d+px/)
  })

  it('returns two linear gradients for grid', () => {
    const result = generatePattern({ type: 'grid' })
    expect(result.backgroundImage).toContain('linear-gradient')
    // Grid has two gradients joined with comma
    expect(result.backgroundImage.split('linear-gradient')).toHaveLength(3)
  })

  it('returns linear-gradient for diagonal-lines', () => {
    const result = generatePattern({ type: 'diagonal-lines' })
    expect(result.backgroundImage).toContain('repeating-linear-gradient')
    expect(result.backgroundImage).toContain('45deg')
  })

  it('returns horizontal lines with 0deg', () => {
    const result = generatePattern({ type: 'horizontal-lines' })
    expect(result.backgroundImage).toContain('0deg')
  })

  it('returns vertical lines with 90deg', () => {
    const result = generatePattern({ type: 'vertical-lines' })
    expect(result.backgroundImage).toContain('90deg')
  })

  it('returns backgroundImage for zigzag', () => {
    const result = generatePattern({ type: 'zigzag' })
    expect(result.backgroundImage).toContain('linear-gradient')
    expect(result.backgroundSize).toMatch(/\d+px \d+px/)
  })

  it('uses larger backgroundSize for size=lg', () => {
    const sm = generatePattern({ type: 'dots', size: 'sm' })
    const lg = generatePattern({ type: 'dots', size: 'lg' })
    const smSize = parseInt(sm.backgroundSize)
    const lgSize = parseInt(lg.backgroundSize)
    expect(lgSize).toBeGreaterThan(smSize)
  })

  it('wraps color with opacity via color-mix', () => {
    const result = generatePattern({ type: 'dots', opacity: 0.3 })
    // var(--foreground) is default, wrapped in color-mix
    expect(result.backgroundImage).toContain('color-mix')
    expect(result.backgroundImage).toContain('30%')
  })

  it('handles noise pattern with svg data url', () => {
    const result = generatePattern({ type: 'noise' })
    expect(result.backgroundImage).toContain('data:image/svg+xml')
    expect(result.backgroundSize).toBe('200px 200px')
  })

  it('handles all 20 pattern types without throwing', () => {
    const types: ThemePattern['type'][] = [
      'none', 'dots', 'grid', 'cross', 'diagonal-lines',
      'horizontal-lines', 'vertical-lines', 'zigzag',
      'checkerboard', 'triangles', 'hexagons', 'noise',
      'waves', 'crosshatch', 'isometric', 'halftone', 'confetti',
      'topography', 'gradient', 'gradient-radial',
    ]
    for (const type of types) {
      const style = generatePattern({ type })
      expect(style.backgroundImage).toBeTruthy()
      if (type !== 'none') expect(style.backgroundImage).not.toBe('none')
    }
  })

  it('waves: two offset radial layers', () => {
    const result = generatePattern({ type: 'waves' })
    expect(result.backgroundImage.split('radial-gradient')).toHaveLength(3)
    expect(result.backgroundPosition).toBeTruthy()
  })

  it('crosshatch: 45° and 135° line families', () => {
    const result = generatePattern({ type: 'crosshatch' })
    expect(result.backgroundImage).toContain('45deg')
    expect(result.backgroundImage).toContain('135deg')
  })

  it('isometric: vertical + ±30° line families', () => {
    const result = generatePattern({ type: 'isometric' })
    expect(result.backgroundImage).toContain('90deg')
    expect(result.backgroundImage).toContain('30deg')
    expect(result.backgroundImage).toContain('150deg')
  })

  it('halftone: two dot lattices offset by half a cell', () => {
    const result = generatePattern({ type: 'halftone' })
    expect(result.backgroundImage.split('radial-gradient')).toHaveLength(3)
    expect(result.backgroundPosition).toContain(',')
  })

  it('confetti: many scattered dots in one large tile', () => {
    const result = generatePattern({ type: 'confetti' })
    expect(result.backgroundImage.split('radial-gradient').length).toBeGreaterThan(5)
  })

  it('topography: svg data url that scales with size', () => {
    const md = generatePattern({ type: 'topography' })
    const lg = generatePattern({ type: 'topography', size: 'lg' })
    expect(md.backgroundImage).toContain('data:image/svg+xml')
    expect(parseInt(lg.backgroundSize)).toBeGreaterThan(parseInt(md.backgroundSize))
  })

  it('gradient: mesh from the three theme accent vars, 100% tile', () => {
    const result = generatePattern({ type: 'gradient' })
    expect(result.backgroundImage).toContain('var(--primary)')
    expect(result.backgroundImage).toContain('var(--secondary)')
    expect(result.backgroundImage).toContain('var(--accent)')
    expect(result.backgroundSize).toBe('100% 100%')
  })

  it('gradient-radial: single glow from primary by default, explicit color wins', () => {
    const auto = generatePattern({ type: 'gradient-radial' })
    expect(auto.backgroundImage).toContain('var(--primary)')
    const colored = generatePattern({ type: 'gradient-radial', color: 'teal-500' })
    expect(colored.backgroundImage).toContain('oklch')
    expect(colored.backgroundImage).not.toContain('var(--primary)')
  })
})

describe('patternToCssVars', () => {
  it('none/undefined → image none, size auto', () => {
    expect(patternToCssVars(undefined)).toEqual({ '--pattern-image': 'none', '--pattern-size': 'auto' })
    expect(patternToCssVars({ type: 'none' })).toEqual({ '--pattern-image': 'none', '--pattern-size': 'auto' })
  })

  it('maps tint to theme var with the documented opacity multipliers', () => {
    const accent = patternToCssVars({ type: 'dots', tint: 'accent' })
    // 0.08 default × 2.0 accent multiplier = 16%
    expect(accent['--pattern-image']).toContain('var(--accent) 16%')
    const secondary = patternToCssVars({ type: 'dots', tint: 'secondary' })
    // 0.08 × 1.4 = 0.112 → 11%
    expect(secondary['--pattern-image']).toContain('var(--secondary) 11%')
    const primary = patternToCssVars({ type: 'dots', tint: 'primary' })
    expect(primary['--pattern-image']).toContain('var(--primary) 8%')
  })

  it('clamps effective opacity to PATTERN_MAX_EFFECTIVE_OPACITY', () => {
    // 0.2 × 2.0 = 0.4 → clamped to 0.25 → 25%
    const vars = patternToCssVars({ type: 'dots', tint: 'accent', opacity: 0.2 })
    expect(vars['--pattern-image']).toContain(`var(--accent) ${PATTERN_MAX_EFFECTIVE_OPACITY * 100}%`)
  })

  it('exposes multiplier constants for consumers', () => {
    expect(PATTERN_TINT_OPACITY_MULTIPLIER).toEqual({ primary: 1, secondary: 1.4, accent: 2 })
  })

  it('darkOpacity applies only in dark mode', () => {
    const pattern: ThemePattern = { type: 'dots', opacity: 0.08, darkOpacity: 0.2 }
    expect(patternToCssVars(pattern, { mode: 'light' })['--pattern-image']).toContain('8%')
    expect(patternToCssVars(pattern, { mode: 'dark' })['--pattern-image']).toContain('20%')
    // No darkOpacity → dark mode falls back to opacity
    expect(patternToCssVars({ type: 'dots', opacity: 0.1 }, { mode: 'dark' })['--pattern-image']).toContain('10%')
  })

  it('emits --pattern-position when the pattern needs one', () => {
    const vars = patternToCssVars({ type: 'cross' })
    expect(vars['--pattern-position']).toBeTruthy()
  })

  it('matches generatePattern output for untinted patterns', () => {
    const style = generatePattern({ type: 'grid', opacity: 0.1 })
    const vars = patternToCssVars({ type: 'grid', opacity: 0.1 })
    expect(vars['--pattern-image']).toBe(style.backgroundImage)
    expect(vars['--pattern-size']).toBe(style.backgroundSize)
  })
})
