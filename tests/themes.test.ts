import { describe, it, expect } from 'vitest'
import { themes, builtinThemes, tweakcnThemes, claudeThemes } from '../src/themes/index.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'
import { claudeTheme } from '../src/themes/tweakcn/claude.js'

describe('theme catalog', () => {
  it('exports 27 built-in themes (10 curated + 17 basic)', () => {
    expect(builtinThemes).toHaveLength(27)
  })

  it('exports 37 tweakcn themes', () => {
    expect(tweakcnThemes).toHaveLength(37)
  })

  it('exports 11 claude themes', () => {
    expect(claudeThemes).toHaveLength(11)
  })

  it('exports 75 total themes (27 builtin + 11 claude + 37 tweakcn)', () => {
    expect(themes).toHaveLength(75)
  })

  it('all themes have name, label, light, dark', () => {
    for (const theme of themes) {
      expect(theme.name, `${theme.name} missing name`).toBeTruthy()
      expect(theme.label, `${theme.name} missing label`).toBeTruthy()
      expect(theme.light, `${theme.name} missing light`).toBeDefined()
      expect(theme.dark, `${theme.name} missing dark`).toBeDefined()
    }
  })

  it('all themes have 19 light tokens', () => {
    for (const theme of themes) {
      expect(
        Object.keys(theme.light).length,
        `${theme.name} light has ${Object.keys(theme.light).length} tokens`
      ).toBe(19)
    }
  })

  it('all themes have 19 dark tokens', () => {
    for (const theme of themes) {
      expect(
        Object.keys(theme.dark).length,
        `${theme.name} dark has ${Object.keys(theme.dark).length} tokens`
      ).toBe(19)
    }
  })

  it('all theme names are unique', () => {
    const names = themes.map((t) => t.name)
    const unique = new Set(names)
    expect(unique.size).toBe(names.length)
  })

  it('ocean theme has blue-600 primary in light', () => {
    expect(oceanTheme.light.primary).toBe('blue-600')
  })

  it('claude theme uses raw oklch values', () => {
    // Claude uses raw() values — they should contain oklch
    expect(claudeTheme.light.primary).toContain('oklch')
  })

  it('all themes have a radius', () => {
    for (const theme of themes) {
      expect(theme.radius, `${theme.name} missing radius`).toBeTruthy()
    }
  })
})
