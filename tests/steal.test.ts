import { describe, it, expect } from 'vitest'
import {
  themeFromCSSVars,
  themeFromCSS,
  themeFromSnippetOutput,
  browserSnippet,
  bookmarkletUrl,
} from '../src/steal.js'

const LIGHT_VARS = {
  '--background':          'oklch(1 0 0)',
  '--foreground':          'oklch(0.145 0 0)',
  '--card':                'oklch(1 0 0)',
  '--card-foreground':     'oklch(0.145 0 0)',
  '--popover':             'oklch(1 0 0)',
  '--popover-foreground':  'oklch(0.145 0 0)',
  '--primary':             'oklch(0.623 0.214 259.815)',
  '--primary-foreground':  'oklch(1 0 0)',
  '--secondary':           'oklch(0.968 0.007 247.896)',
  '--secondary-foreground':'oklch(0.208 0.042 265.755)',
  '--muted':               'oklch(0.968 0.007 247.896)',
  '--muted-foreground':    'oklch(0.554 0.046 257.417)',
  '--accent':              'oklch(0.929 0.013 255.508)',
  '--accent-foreground':   'oklch(0.208 0.042 265.755)',
  '--destructive':         'oklch(0.577 0.245 27.325)',
  '--destructive-foreground': 'oklch(1 0 0)',
  '--border':              'oklch(0.869 0.022 252.894)',
  '--input':               'oklch(0.869 0.022 252.894)',
  '--ring':                'oklch(0.623 0.214 259.815)',
  '--radius':              '0.5rem',
}

const DARK_VARS = {
  '--background':          'oklch(0.145 0 0)',
  '--foreground':          'oklch(0.985 0 0)',
  '--card':                'oklch(0.205 0 0)',
  '--card-foreground':     'oklch(0.985 0 0)',
  '--popover':             'oklch(0.145 0 0)',
  '--popover-foreground':  'oklch(0.985 0 0)',
  '--primary':             'oklch(0.707 0.165 254.624)',
  '--primary-foreground':  'oklch(0.205 0 0)',
  '--secondary':           'oklch(0.269 0 0)',
  '--secondary-foreground':'oklch(0.985 0 0)',
  '--muted':               'oklch(0.269 0 0)',
  '--muted-foreground':    'oklch(0.708 0 0)',
  '--accent':              'oklch(0.269 0 0)',
  '--accent-foreground':   'oklch(0.985 0 0)',
  '--destructive':         'oklch(0.396 0.141 25.723)',
  '--destructive-foreground': 'oklch(0.637 0.237 25.331)',
  '--border':              'oklch(0.269 0 0)',
  '--input':               'oklch(0.269 0 0)',
  '--ring':                'oklch(0.439 0 0)',
}

const SAMPLE_CSS = `
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
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
  --radius: 0.5rem;
  --font-sans: 'Inter', system-ui, sans-serif;
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
`

describe('themeFromCSSVars', () => {
  it('produces a valid StoredTheme', () => {
    const stored = themeFromCSSVars(LIGHT_VARS)
    expect(stored.name).toBe('stolen')
    expect(stored.styles.light).toBeDefined()
    expect(stored.styles.dark).toBeDefined()
  })

  it('extracts all 19 color tokens', () => {
    const stored = themeFromCSSVars(LIGHT_VARS)
    expect(Object.keys(stored.styles.light)).toHaveLength(19)
  })

  it('resolves kebab-case vars to camelCase keys', () => {
    const stored = themeFromCSSVars(LIGHT_VARS)
    expect(stored.styles.light.cardForeground).toBe('oklch(0.145 0 0)')
    expect(stored.styles.light.mutedForeground).toBe('oklch(0.554 0.046 257.417)')
    expect(stored.styles.light.primaryForeground).toBe('oklch(1 0 0)')
  })

  it('extracts radius', () => {
    const stored = themeFromCSSVars(LIGHT_VARS)
    expect(stored.radius).toBe('0.5rem')
  })

  it('accepts keys without leading --', () => {
    const stored = themeFromCSSVars({ background: 'oklch(1 0 0)', primary: 'oklch(0.5 0.2 200)' })
    expect(stored.styles.light.background).toBe('oklch(1 0 0)')
    expect(stored.styles.light.primary).toBe('oklch(0.5 0.2 200)')
  })

  it('extracts font-sans', () => {
    const stored = themeFromCSSVars({ ...LIGHT_VARS, '--font-sans': "'Inter', system-ui, sans-serif" })
    expect(stored.fonts.sans).toBe("'Inter', system-ui, sans-serif")
  })

  it('respects meta name and label', () => {
    const stored = themeFromCSSVars(LIGHT_VARS, { name: 'my-site', label: 'My Site' })
    expect(stored.name).toBe('my-site')
    expect(stored.label).toBe('My Site')
  })

  it('sets _source to custom', () => {
    const stored = themeFromCSSVars(LIGHT_VARS)
    expect(stored._source).toBe('custom')
  })
})

describe('themeFromCSS', () => {
  it('extracts light tokens from :root block', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(stored.styles.light.primary).toBe('oklch(0.623 0.214 259.815)')
    expect(stored.styles.light.background).toBe('oklch(1 0 0)')
  })

  it('extracts dark tokens from .dark block', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(stored.styles.dark.primary).toBe('oklch(0.707 0.165 254.624)')
    expect(stored.styles.dark.background).toBe('oklch(0.145 0 0)')
  })

  it('light and dark primary values differ', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(stored.styles.light.primary).not.toBe(stored.styles.dark.primary)
  })

  it('extracts radius', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(stored.radius).toBe('0.5rem')
  })

  it('extracts font-sans', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(stored.fonts.sans).toBe("'Inter', system-ui, sans-serif")
  })

  it('handles [data-theme="dark"] selector', () => {
    const css = `
      :root { --primary: oklch(0.5 0.2 200); --background: oklch(1 0 0); }
      [data-theme="dark"] { --primary: oklch(0.7 0.18 200); --background: oklch(0.1 0 0); }
    `
    const stored = themeFromCSS(css)
    expect(stored.styles.light.primary).toBe('oklch(0.5 0.2 200)')
    expect(stored.styles.dark.primary).toBe('oklch(0.7 0.18 200)')
  })

  it('mirrors light to dark when no dark block found', () => {
    const css = `:root { --primary: oklch(0.5 0.2 200); --background: oklch(1 0 0); }`
    const stored = themeFromCSS(css)
    expect(stored.styles.dark.primary).toBe('oklch(0.5 0.2 200)')
    expect(stored.styles.dark.background).toBe('oklch(1 0 0)')
  })

  it('respects meta', () => {
    const stored = themeFromCSS(SAMPLE_CSS, { name: 'vercel', label: 'Vercel' })
    expect(stored.name).toBe('vercel')
    expect(stored.label).toBe('Vercel')
  })

  it('extracts all 19 light tokens', () => {
    const stored = themeFromCSS(SAMPLE_CSS)
    expect(Object.keys(stored.styles.light)).toHaveLength(19)
  })
})

describe('themeFromSnippetOutput', () => {
  it('uses light vars for light styles', () => {
    const stored = themeFromSnippetOutput({ light: LIGHT_VARS, dark: DARK_VARS })
    expect(stored.styles.light.primary).toBe('oklch(0.623 0.214 259.815)')
  })

  it('uses dark vars for dark styles', () => {
    const stored = themeFromSnippetOutput({ light: LIGHT_VARS, dark: DARK_VARS })
    expect(stored.styles.dark.primary).toBe('oklch(0.707 0.165 254.624)')
    expect(stored.styles.dark.background).toBe('oklch(0.145 0 0)')
  })

  it('light and dark differ', () => {
    const stored = themeFromSnippetOutput({ light: LIGHT_VARS, dark: DARK_VARS })
    expect(stored.styles.light.background).not.toBe(stored.styles.dark.background)
  })

  it('falls back to light when dark is empty', () => {
    const stored = themeFromSnippetOutput({ light: LIGHT_VARS, dark: {} })
    expect(stored.styles.dark.primary).toBe(stored.styles.light.primary)
  })
})

describe('browserSnippet', () => {
  it('is a non-empty string', () => {
    expect(typeof browserSnippet).toBe('string')
    expect(browserSnippet.length).toBeGreaterThan(100)
  })

  it('contains getComputedStyle', () => {
    expect(browserSnippet).toContain('getComputedStyle')
  })

  it('looks for --primary', () => {
    expect(browserSnippet).toContain('primary')
  })

  it('toggles dark class via classList', () => {
    expect(browserSnippet).toContain("classList.add('dark')")
    expect(browserSnippet).toContain("classList.remove('dark')")
  })

  it('copies to clipboard', () => {
    expect(browserSnippet).toContain('clipboard')
  })
})

describe('bookmarkletUrl', () => {
  it('starts with javascript:', () => {
    expect(bookmarkletUrl).toMatch(/^javascript:/)
  })

  it('is URL-encoded', () => {
    // Should contain %28 (encoded '(') or similar encoded chars
    expect(bookmarkletUrl).toContain('%')
  })
})
