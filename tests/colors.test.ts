import { describe, it, expect } from 'vitest'
import { TAILWIND_COLORS, resolveColor } from '../src/colors.js'
import { raw } from '../src/types.js'

describe('TAILWIND_COLORS', () => {
  it('contains white and black', () => {
    expect(TAILWIND_COLORS.white).toBe('oklch(1 0 0)')
    expect(TAILWIND_COLORS.black).toBe('oklch(0 0 0)')
  })

  it('contains all 22 color families × 11 shades = 242 entries + white + black = 244', () => {
    expect(Object.keys(TAILWIND_COLORS)).toHaveLength(244)
  })

  it('all values are oklch strings', () => {
    for (const [key, value] of Object.entries(TAILWIND_COLORS)) {
      expect(value).toMatch(/^oklch\(/)
    }
  })

  it('has correct blue-500 value', () => {
    expect(TAILWIND_COLORS['blue-500']).toBe('oklch(0.623 0.214 259.815)')
  })

  it('has correct blue-400 value', () => {
    expect(TAILWIND_COLORS['blue-400']).toBe('oklch(0.707 0.165 254.624)')
  })
})

describe('resolveColor', () => {
  it('resolves TailwindToken to oklch', () => {
    expect(resolveColor('blue-500')).toBe('oklch(0.623 0.214 259.815)')
  })

  it('resolves white to oklch(1 0 0)', () => {
    expect(resolveColor('white')).toBe('oklch(1 0 0)')
  })

  it('passes raw oklch values through unchanged', () => {
    const raw = 'oklch(0.6471 0.1408 43.64)'
    expect(resolveColor(raw)).toBe(raw)
  })

  it('passes hex colors through unchanged', () => {
    expect(resolveColor('#3b82f6')).toBe('#3b82f6')
  })

  it('passes hsl colors through unchanged', () => {
    expect(resolveColor('hsl(217, 91%, 60%)')).toBe('hsl(217, 91%, 60%)')
  })
})

describe('raw() helper', () => {
  it('returns the value as-is (branded string)', () => {
    const color = raw('oklch(0.5 0.2 200)')
    expect(color).toBe('oklch(0.5 0.2 200)')
  })

  it('works with hex values', () => {
    const color = raw('#3b82f6')
    expect(color).toBe('#3b82f6')
  })
})
