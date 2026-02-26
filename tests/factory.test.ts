import { describe, it, expect } from 'vitest'
import { createTheme, extendTheme, defineTheme } from '../src/factory.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'
import { resolveColor } from '../src/colors.js'

describe('createTheme', () => {
  it('produces all 19 tokens in light and dark', () => {
    const theme = createTheme({
      name: 'test',
      label: 'Test',
      primary: 'blue',
      neutral: 'slate',
    })
    expect(Object.keys(theme.light)).toHaveLength(19)
    expect(Object.keys(theme.dark)).toHaveLength(19)
  })

  it('uses primary-600 for light primary', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.light.primary).toBe('blue-600')
  })

  it('uses primary-400 for dark primary', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.dark.primary).toBe('blue-400')
  })

  it('uses neutral-50 for light background', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.light.background).toBe('slate-50')
  })

  it('uses neutral-950 for dark background', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.dark.background).toBe('slate-950')
  })

  it('uses red-600 for light destructive', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.light.destructive).toBe('red-600')
  })

  it('uses red-400 for dark destructive', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.dark.destructive).toBe('red-400')
  })

  it('applies overrides correctly', () => {
    const theme = createTheme({
      name: 't', label: 'T', primary: 'blue', neutral: 'slate',
      overrides: { light: { primary: 'violet-700' } },
    })
    expect(theme.light.primary).toBe('violet-700')
    // Dark should still be auto-generated
    expect(theme.dark.primary).toBe('blue-400')
  })

  it('sets default radius to 0.5rem', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate' })
    expect(theme.radius).toBe('0.5rem')
  })

  it('respects custom radius', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'slate', radius: '1rem' })
    expect(theme.radius).toBe('1rem')
  })
})

describe('extendTheme', () => {
  it('merges light token overrides', () => {
    const extended = extendTheme(oceanTheme, {
      light: { primary: 'teal-600' },
    })
    expect(extended.light.primary).toBe('teal-600')
    // Other tokens should be unchanged
    expect(extended.light.background).toBe(oceanTheme.light.background)
  })

  it('merges dark token overrides independently', () => {
    const extended = extendTheme(oceanTheme, {
      dark: { primary: 'teal-400' },
    })
    expect(extended.dark.primary).toBe('teal-400')
    expect(extended.light.primary).toBe(oceanTheme.light.primary)
  })

  it('overrides top-level properties', () => {
    const extended = extendTheme(oceanTheme, { label: 'Ocean Remix', radius: '1rem' })
    expect(extended.label).toBe('Ocean Remix')
    expect(extended.radius).toBe('1rem')
    expect(extended.name).toBe(oceanTheme.name)
  })
})

describe('defineTheme', () => {
  it('returns the theme unchanged', () => {
    const theme = defineTheme(oceanTheme)
    expect(theme).toBe(oceanTheme)
  })
})
