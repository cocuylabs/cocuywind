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

  it('includes font vars and application rules when fonts are set', () => {
    const themeWithFonts = {
      ...oceanTheme,
      fonts: { body: "'Inter', system-ui, sans-serif", heading: "'Playfair Display', Georgia, serif" },
    }
    const css = generateCSS(themeWithFonts)
    expect(css).toContain("--font-body: 'Inter', system-ui, sans-serif")
    expect(css).toContain("--font-heading: 'Playfair Display', Georgia, serif")
    expect(css).toContain(':root { font-family: var(--font-body); }')
    expect(css).toContain('h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, inherit); }')
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

describe('shadow / elevation vars', () => {
  it('emits shadow scale + light shadow color in :root', () => {
    const css = generateCSS(oceanTheme)
    const root = css.split('.dark')[0]
    expect(root).toContain('--shadow-color: color-mix(in oklch, var(--foreground) 15%, transparent);')
    expect(root).toContain('--shadow-sm: 0 1px 2px 0 var(--shadow-color);')
    expect(root).toContain('--shadow-md:')
    expect(root).toContain('--shadow-lg:')
    expect(root).toContain('--shadow-xl:')
  })

  it('overrides only --shadow-color in .dark', () => {
    const css = generateCSS(oceanTheme)
    const dark = css.split('.dark {')[1].split('}')[0]
    expect(dark).toContain('--shadow-color: color-mix(in oklch, black 50%, transparent);')
    expect(dark).not.toContain('--shadow-sm')
  })

  it('maps shadow vars in @theme inline', () => {
    const css = generateCSS(oceanTheme)
    const inline = css.split('@theme inline {')[1]
    expect(inline).toContain('--shadow-md: var(--shadow-md);')
  })

  it('storedThemeToCSS emits the same shadow vars', () => {
    const css = storedThemeToCSS(serializeTheme(oceanTheme))
    expect(css).toContain('--shadow-sm: 0 1px 2px 0 var(--shadow-color);')
    expect(css.split('.dark {')[1].split('}')[0]).toContain('--shadow-color: color-mix(in oklch, black 50%, transparent);')
  })
})

describe('per-mode pattern opacity (darkOpacity)', () => {
  const themed = {
    ...oceanTheme,
    pattern: { type: 'dots' as const, opacity: 0.08, darkOpacity: 0.16 },
  }

  it('generateCSS re-emits pattern vars in .dark when darkOpacity is set', () => {
    const css = generateCSS(themed)
    const root = css.split('.dark')[0]
    const dark = css.split('.dark {')[1].split('}')[0]
    expect(root).toContain('8%')
    expect(dark).toContain('--pattern-image:')
    expect(dark).toContain('16%')
  })

  it('generateCSS emits no .dark pattern override without darkOpacity', () => {
    const css = generateCSS({ ...oceanTheme, pattern: { type: 'dots' as const, opacity: 0.08 } })
    const dark = css.split('.dark {')[1].split('}')[0]
    expect(dark).not.toContain('--pattern-image')
  })

  it('storedThemeToCSS round-trips darkOpacity through serializeTheme', () => {
    const css = storedThemeToCSS(serializeTheme(themed))
    const dark = css.split('.dark {')[1].split('}')[0]
    expect(dark).toContain('--pattern-image:')
    expect(dark).toContain('16%')
  })
})

describe('accessibility media overrides', () => {
  it('both emitters disable patterns + bg image under forced-colors / prefers-contrast', () => {
    for (const css of [generateCSS(oceanTheme), storedThemeToCSS(serializeTheme(oceanTheme))]) {
      expect(css).toContain('@media (forced-colors: active), (prefers-contrast: more)')
      const block = css.split('@media (forced-colors: active), (prefers-contrast: more)')[1]
      expect(block).toContain('--pattern-image: none;')
      expect(block).toContain('--bg-image: none;')
    }
  })
})
