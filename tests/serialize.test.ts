import { describe, it, expect } from 'vitest'
import { serializeTheme, deserializeTheme } from '../src/serialize.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'
import { claudeTheme } from '../src/themes/tweakcn/claude.js'
import { createTheme } from '../src/factory.js'

describe('serializeTheme', () => {
  it('produces a StoredTheme with resolved CSS values', () => {
    const stored = serializeTheme(oceanTheme)
    expect(stored.name).toBe('ocean')
    expect(stored.label).toBe('Ocean Blue')
    expect(stored.styles.light).toBeDefined()
    expect(stored.styles.dark).toBeDefined()
    expect(stored.radius).toBe('0.5rem')
  })

  it('resolves TailwindToken refs to oklch values in styles', () => {
    const stored = serializeTheme(oceanTheme)
    // All values should be CSS color strings, not TailwindToken strings
    for (const value of Object.values(stored.styles.light)) {
      expect(value).not.toMatch(/^(slate|blue|red|white|black)$/)
      expect(value).not.toMatch(/^[a-z]+-\d+$/)
    }
  })

  it('stores 19 color tokens in light and dark', () => {
    const stored = serializeTheme(oceanTheme)
    expect(Object.keys(stored.styles.light)).toHaveLength(19)
    expect(Object.keys(stored.styles.dark)).toHaveLength(19)
  })

  it('preserves raw oklch values for tweakcn themes', () => {
    const stored = serializeTheme(claudeTheme)
    expect(stored.styles.light.primary).toBe('oklch(0.6471 0.1408 43.64)')
  })

  it('includes a default pattern when none specified', () => {
    const stored = serializeTheme(oceanTheme)
    expect(stored.pattern).toEqual({ type: 'none' })
  })

  it('includes an empty fonts object when none specified', () => {
    const stored = serializeTheme(oceanTheme)
    expect(stored.fonts).toEqual({})
  })
})

describe('deserializeTheme', () => {
  it('restores name and label', () => {
    const stored = serializeTheme(oceanTheme)
    const restored = deserializeTheme(stored)
    expect(restored.name).toBe(oceanTheme.name)
    expect(restored.label).toBe(oceanTheme.label)
  })

  it('restores all 19 light and dark tokens', () => {
    const stored = serializeTheme(oceanTheme)
    const restored = deserializeTheme(stored)
    expect(Object.keys(restored.light)).toHaveLength(19)
    expect(Object.keys(restored.dark)).toHaveLength(19)
  })

  it('restores radius', () => {
    const stored = serializeTheme(oceanTheme)
    const restored = deserializeTheme(stored)
    expect(restored.radius).toBe(oceanTheme.radius)
  })
})

describe('serialize → deserialize roundtrip', () => {
  it('is lossless for a builtin theme', () => {
    const stored = serializeTheme(oceanTheme)
    const restored = deserializeTheme(stored)
    const reStored = serializeTheme(restored)

    // The re-serialized styles should match
    expect(reStored.styles.light).toEqual(stored.styles.light)
    expect(reStored.styles.dark).toEqual(stored.styles.dark)
    expect(reStored.radius).toBe(stored.radius)
  })

  it('is lossless for a tweakcn theme', () => {
    const stored = serializeTheme(claudeTheme)
    const restored = deserializeTheme(stored)
    const reStored = serializeTheme(restored)
    expect(reStored.styles.light).toEqual(stored.styles.light)
    expect(reStored.styles.dark).toEqual(stored.styles.dark)
  })

  it('is lossless for a createTheme-generated theme', () => {
    const theme = createTheme({ name: 'test', label: 'Test', primary: 'violet', neutral: 'zinc' })
    const stored = serializeTheme(theme)
    const restored = deserializeTheme(stored)
    const reStored = serializeTheme(restored)
    expect(reStored.styles.light).toEqual(stored.styles.light)
    expect(reStored.styles.dark).toEqual(stored.styles.dark)
  })
})
