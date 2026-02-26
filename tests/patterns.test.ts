import { describe, it, expect } from 'vitest'
import { generatePattern } from '../src/patterns.js'
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
    // currentColor is default, wrapped in color-mix
    expect(result.backgroundImage).toContain('color-mix')
    expect(result.backgroundImage).toContain('30%')
  })

  it('handles noise pattern with svg data url', () => {
    const result = generatePattern({ type: 'noise' })
    expect(result.backgroundImage).toContain('data:image/svg+xml')
    expect(result.backgroundSize).toBe('200px 200px')
  })

  it('handles all 12 pattern types without throwing', () => {
    const types: ThemePattern['type'][] = [
      'none', 'dots', 'grid', 'cross', 'diagonal-lines',
      'horizontal-lines', 'vertical-lines', 'zigzag',
      'checkerboard', 'triangles', 'hexagons', 'noise',
    ]
    for (const type of types) {
      expect(() => generatePattern({ type })).not.toThrow()
    }
  })
})
