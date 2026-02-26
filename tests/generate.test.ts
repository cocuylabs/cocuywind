import { describe, it, expect } from 'vitest'
import { generateCSS, generateThemeVariables, storedThemeToCSS, resolveTokens } from '../src/generate.js'
import { serializeTheme } from '../src/serialize.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'
import { claudeTheme } from '../src/themes/tweakcn/claude.js'

describe('generateThemeVariables', () => {
  it('resolves TailwindToken refs to oklch values', () => {
    const vars = generateThemeVariables(oceanTheme.light)
    expect(vars['--primary']).toMatch(/^oklch/)
    expect(vars['--background']).toMatch(/^oklch/)
    expect(Object.keys(vars)).toHaveLength(19)
  })

  it('passes raw oklch values through unchanged', () => {
    const vars = generateThemeVariables(claudeTheme.light)
    // Claude theme uses raw() values — they should pass through as-is
    expect(vars['--primary']).toBe('oklch(0.6471 0.1408 43.64)')
  })
})

describe('generateCSS', () => {
  it('outputs :root, .dark, and @theme inline blocks', () => {
    const css = generateCSS(oceanTheme)
    expect(css).toContain(':root {')
    expect(css).toContain('.dark {')
    expect(css).toContain('@theme inline {')
  })

  it('includes all 19 color variables in :root', () => {
    const css = generateCSS(oceanTheme)
    const rootBlock = css.split('.dark')[0]
    const varLines = rootBlock.match(/--[a-z-]+:/g) ?? []
    // At least 19 color vars + radius = 20 minimum
    expect(varLines.length).toBeGreaterThanOrEqual(20)
  })

  it('includes --radius', () => {
    const css = generateCSS(oceanTheme)
    expect(css).toContain('--radius: 0.5rem')
  })

  it('includes font vars when fonts are set', () => {
    const themeWithFonts = {
      ...oceanTheme,
      fonts: { sans: "'Inter', system-ui, sans-serif" },
    }
    const css = generateCSS(themeWithFonts)
    expect(css).toContain("--font-sans: 'Inter', system-ui, sans-serif")
  })

  it('maps CSS vars to Tailwind @theme vars', () => {
    const css = generateCSS(oceanTheme)
    expect(css).toContain('--color-primary: var(--primary)')
    expect(css).toContain('--color-background: var(--background)')
    expect(css).toContain('--radius-sm: calc(var(--radius) - 4px)')
  })
})

describe('storedThemeToCSS', () => {
  it('produces equivalent output to generateCSS for the same theme', () => {
    const stored = serializeTheme(oceanTheme)
    const cssFromStored = storedThemeToCSS(stored)
    const cssFromTheme = generateCSS(oceanTheme)

    // Both should contain the same structure
    expect(cssFromStored).toContain(':root {')
    expect(cssFromStored).toContain('.dark {')
    expect(cssFromStored).toContain('@theme inline {')

    // Both should resolve primary to the same oklch value
    const primaryFromStored = cssFromStored.match(/--primary: (oklch\([^)]+\))/)?.[1]
    const primaryFromTheme  = cssFromTheme.match(/--primary: (oklch\([^)]+\))/)?.[1]
    expect(primaryFromStored).toBe(primaryFromTheme)
  })
})

describe('resolveTokens', () => {
  it('resolves all 19 tokens to CSS values', () => {
    const resolved = resolveTokens(oceanTheme.light)
    expect(Object.keys(resolved)).toHaveLength(19)
    for (const value of Object.values(resolved)) {
      expect(value).toBeTruthy()
      expect(typeof value).toBe('string')
    }
  })
})
