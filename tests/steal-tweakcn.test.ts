import { describe, it, expect } from 'vitest'
import {
  themeFromTweakCNItem,
  tweakcnSnippet,
  tweakcnBookmarkletUrl,
} from '../src/steal-tweakcn.js'
import { themeFromCSS } from '../src/steal.js'
import type { TweakCNThemeItem } from '../src/steal-tweakcn.js'

// ─── Fixture ──────────────────────────────────────────────────────────────────

const CATPPUCCIN_ITEM: TweakCNThemeItem = {
  name: 'catppuccin',
  title: 'Catppuccin',
  cssVars: {
    light: {
      '--background':           'oklch(0.95 0.01 245)',
      '--foreground':           'oklch(0.30 0.03 260)',
      '--card':                 'oklch(0.93 0.01 245)',
      '--card-foreground':      'oklch(0.30 0.03 260)',
      '--popover':              'oklch(0.95 0.01 245)',
      '--popover-foreground':   'oklch(0.30 0.03 260)',
      '--primary':              'oklch(0.62 0.19 263)',
      '--primary-foreground':   'oklch(1 0 0)',
      '--secondary':            'oklch(0.89 0.02 255)',
      '--secondary-foreground': 'oklch(0.30 0.03 260)',
      '--muted':                'oklch(0.89 0.02 255)',
      '--muted-foreground':     'oklch(0.53 0.04 258)',
      '--accent':               'oklch(0.89 0.02 255)',
      '--accent-foreground':    'oklch(0.30 0.03 260)',
      '--destructive':          'oklch(0.59 0.21 28)',
      '--destructive-foreground': 'oklch(1 0 0)',
      '--border':               'oklch(0.84 0.02 255)',
      '--input':                'oklch(0.84 0.02 255)',
      '--ring':                 'oklch(0.62 0.19 263)',
      // extra tweakcn vars — should be ignored
      '--chart-1':              'oklch(0.62 0.19 263)',
      '--sidebar-background':   'oklch(0.90 0.02 248)',
    },
    dark: {
      '--background':           'oklch(0.24 0.02 261)',
      '--foreground':           'oklch(0.91 0.01 250)',
      '--card':                 'oklch(0.28 0.02 261)',
      '--card-foreground':      'oklch(0.91 0.01 250)',
      '--popover':              'oklch(0.24 0.02 261)',
      '--popover-foreground':   'oklch(0.91 0.01 250)',
      '--primary':              'oklch(0.73 0.16 267)',
      '--primary-foreground':   'oklch(0.24 0.02 261)',
      '--secondary':            'oklch(0.32 0.02 261)',
      '--secondary-foreground': 'oklch(0.91 0.01 250)',
      '--muted':                'oklch(0.32 0.02 261)',
      '--muted-foreground':     'oklch(0.70 0.02 258)',
      '--accent':               'oklch(0.32 0.02 261)',
      '--accent-foreground':    'oklch(0.91 0.01 250)',
      '--destructive':          'oklch(0.48 0.17 27)',
      '--destructive-foreground': 'oklch(0.91 0.01 250)',
      '--border':               'oklch(0.37 0.02 261)',
      '--input':                'oklch(0.37 0.02 261)',
      '--ring':                 'oklch(0.73 0.16 267)',
    },
    theme: {
      '--radius': '0.75rem',
      '--font-sans': "'Inter', system-ui, sans-serif",
    },
  },
}

// ─── themeFromTweakCNItem ─────────────────────────────────────────────────────

describe('themeFromTweakCNItem', () => {
  it('returns a StoredTheme with correct name and label', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored.name).toBe('catppuccin')
    expect(stored.label).toBe('Catppuccin')
  })

  it('respects meta name/label override', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM, { name: 'brand', label: 'Brand' })
    expect(stored.name).toBe('brand')
    expect(stored.label).toBe('Brand')
  })

  it('extracts all 19 core light tokens', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(Object.keys(stored.styles.light)).toHaveLength(19)
  })

  it('extracts all 19 core dark tokens', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(Object.keys(stored.styles.dark)).toHaveLength(19)
  })

  it('ignores chart-* and sidebar-* vars', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    const lightKeys = Object.keys(stored.styles.light)
    expect(lightKeys.some(k => k.startsWith('chart'))).toBe(false)
    expect(lightKeys.some(k => k.startsWith('sidebar'))).toBe(false)
  })

  it('resolves kebab-case to camelCase', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored.styles.light.cardForeground).toBeDefined()
    expect(stored.styles.light.primaryForeground).toBeDefined()
    expect(stored.styles.light.mutedForeground).toBeDefined()
  })

  it('light and dark primary values differ', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored.styles.light.primary).not.toBe(stored.styles.dark.primary)
  })

  it('extracts radius from theme vars', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored.radius).toBe('0.75rem')
  })

  it('extracts font-sans from theme vars', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored.fonts.sans).toBe("'Inter', system-ui, sans-serif")
  })

  it('sets _source to custom', () => {
    const stored = themeFromTweakCNItem(CATPPUCCIN_ITEM)
    expect(stored._source).toBe('custom')
  })

  it('falls back to light when dark cssVars object is empty', () => {
    const item: TweakCNThemeItem = {
      ...CATPPUCCIN_ITEM,
      cssVars: { ...CATPPUCCIN_ITEM.cssVars, dark: {} },
    }
    const stored = themeFromTweakCNItem(item)
    expect(stored.styles.dark.primary).toBe(stored.styles.light.primary)
  })

  it('defaults radius to 0.5rem when theme vars are absent', () => {
    const item: TweakCNThemeItem = {
      ...CATPPUCCIN_ITEM,
      cssVars: { ...CATPPUCCIN_ITEM.cssVars, theme: {} },
    }
    const stored = themeFromTweakCNItem(item)
    expect(stored.radius).toBe('0.5rem')
  })

  it('normalizes whitespace in color values', () => {
    const item: TweakCNThemeItem = {
      ...CATPPUCCIN_ITEM,
      cssVars: {
        ...CATPPUCCIN_ITEM.cssVars,
        light: { ...CATPPUCCIN_ITEM.cssVars.light, '--primary': '  oklch(0.62  0.19  263)  ' },
        dark: { ...CATPPUCCIN_ITEM.cssVars.dark },
      },
    }
    const stored = themeFromTweakCNItem(item)
    expect(stored.styles.light.primary).toBe('oklch(0.62 0.19 263)')
  })
})

// ─── themeFromCSS — @layer base support ──────────────────────────────────────

describe('themeFromCSS — @layer base wrapper', () => {
  const LAYER_CSS = `
@layer base {
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);
    --primary: oklch(0.623 0.214 259.815);
    --primary-foreground: oklch(1 0 0);
    --secondary: oklch(0.968 0.007 247.896);
    --secondary-foreground: oklch(0.208 0.042 265.755);
    --muted: oklch(0.968 0.007 247.896);
    --muted-foreground: oklch(0.554 0.046 257.417);
    --accent: oklch(0.929 0.013 255.508);
    --accent-foreground: oklch(0.208 0.042 265.755);
    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(1 0 0);
    --border: oklch(0.869 0.022 252.894);
    --input: oklch(0.869 0.022 252.894);
    --ring: oklch(0.623 0.214 259.815);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0 0);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.145 0 0);
    --radius: 0.5rem;
  }
  .dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
    --primary: oklch(0.707 0.165 254.624);
    --primary-foreground: oklch(0.205 0 0);
    --secondary: oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);
    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);
    --accent: oklch(0.269 0 0);
    --accent-foreground: oklch(0.985 0 0);
    --destructive: oklch(0.396 0.141 25.723);
    --destructive-foreground: oklch(0.637 0.237 25.331);
    --border: oklch(0.269 0 0);
    --input: oklch(0.269 0 0);
    --ring: oklch(0.439 0 0);
    --card: oklch(0.205 0 0);
    --card-foreground: oklch(0.985 0 0);
    --popover: oklch(0.145 0 0);
    --popover-foreground: oklch(0.985 0 0);
  }
}
`

  it('extracts light tokens from :root inside @layer base', () => {
    const stored = themeFromCSS(LAYER_CSS)
    expect(stored.styles.light.primary).toBe('oklch(0.623 0.214 259.815)')
    expect(stored.styles.light.background).toBe('oklch(1 0 0)')
  })

  it('extracts dark tokens from .dark inside @layer base', () => {
    const stored = themeFromCSS(LAYER_CSS)
    expect(stored.styles.dark.primary).toBe('oklch(0.707 0.165 254.624)')
    expect(stored.styles.dark.background).toBe('oklch(0.145 0 0)')
  })

  it('light and dark primary values differ', () => {
    const stored = themeFromCSS(LAYER_CSS)
    expect(stored.styles.light.primary).not.toBe(stored.styles.dark.primary)
  })

  it('extracts radius from inside @layer base', () => {
    const stored = themeFromCSS(LAYER_CSS)
    expect(stored.radius).toBe('0.5rem')
  })

  it('extracts all 19 light tokens from @layer base', () => {
    const stored = themeFromCSS(LAYER_CSS)
    expect(Object.keys(stored.styles.light)).toHaveLength(19)
  })
})

// ─── tweakcnSnippet ───────────────────────────────────────────────────────────

describe('tweakcnSnippet', () => {
  it('is a non-empty string', () => {
    expect(typeof tweakcnSnippet).toBe('string')
    expect(tweakcnSnippet.length).toBeGreaterThan(100)
  })

  it('uses tweakcn public API URL', () => {
    expect(tweakcnSnippet).toContain('tweakcn.com/r/themes/')
  })

  it('copies to clipboard', () => {
    expect(tweakcnSnippet).toContain('clipboard')
  })

  it('logs the fetched JSON', () => {
    expect(tweakcnSnippet).toContain('console.log')
  })
})

describe('tweakcnBookmarkletUrl', () => {
  it('starts with javascript:', () => {
    expect(tweakcnBookmarkletUrl).toMatch(/^javascript:/)
  })

  it('is URL-encoded', () => {
    expect(tweakcnBookmarkletUrl).toContain('%')
  })
})
