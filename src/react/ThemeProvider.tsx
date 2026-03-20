import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { Theme } from '../types.js'
import { raw } from '../types.js'
import { generateThemeVariables } from '../generate.js'
import { googleFontsUrl, FONT_ADJUSTMENTS } from '../fonts.js'
import { generatePattern } from '../patterns.js'

export type ColorMode = 'light' | 'dark' | 'system'

export interface ThemeContextValue {
  /** Current active theme object */
  theme: Theme
  /** Set the active theme by name or Theme object */
  setTheme: (theme: Theme | string) => void
  /** Current color mode */
  mode: ColorMode
  /** Set the color mode */
  setMode: (mode: ColorMode) => void
  /** The resolved mode ('light' | 'dark') based on system preference */
  resolvedMode: 'light' | 'dark'
  /** All available themes */
  availableThemes: Theme[]
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export interface ThemeProviderProps {
  children: React.ReactNode
  /** All themes available to the picker */
  themes: Theme[]
  /** Default theme name or Theme object */
  defaultTheme?: string | Theme
  /** Default color mode */
  defaultMode?: ColorMode
  /** localStorage key for persistence. Set to null to disable. */
  persistKey?: string | null
}

const DEFAULT_PERSIST_KEY = 'cocuywind'

function resolveTheme(themeOrName: string | Theme, themes: Theme[]): Theme | undefined {
  if (typeof themeOrName === 'string') {
    return themes.find((t) => t.name === themeOrName)
  }
  return themeOrName
}

export function ThemeProvider({
  children,
  themes,
  defaultTheme,
  defaultMode = 'system',
  persistKey = DEFAULT_PERSIST_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to restore from localStorage
    if (persistKey && typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(`${persistKey}-theme`)
      if (stored) {
        const found = resolveTheme(stored, themes)
        if (found) return found
      }
    }
    // Fall back to defaultTheme
    if (defaultTheme) {
      const found = resolveTheme(defaultTheme, themes)
      if (found) return found
    }
    return themes[0]
  })

  const [mode, setModeState] = useState<ColorMode>(() => {
    if (persistKey && typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(`${persistKey}-mode`) as ColorMode
      if (stored && ['light', 'dark', 'system'].includes(stored)) return stored
    }
    return defaultMode
  })

  const [systemMode, setSystemMode] = useState<'light' | 'dark'>('light')
  const appliedThemeRef = useRef<string>('')

  // Track system dark mode preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemMode(mq.matches ? 'dark' : 'light')
    const handler = (e: MediaQueryListEvent) => setSystemMode(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const resolvedMode: 'light' | 'dark' = mode === 'system' ? systemMode : mode

  // Apply theme CSS variables to DOM
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    const tokens = resolvedMode === 'dark' ? theme.dark : theme.light
    const vars = generateThemeVariables(tokens)

    // Apply CSS variables
    for (const [prop, value] of Object.entries(vars)) {
      root.style.setProperty(prop, value)
    }
    // Apply radius
    root.style.setProperty('--radius', theme.radius ?? '0.5rem')

    // Apply font vars (clear when theme has no fonts)
    if (theme.fonts?.body) {
      root.style.setProperty('--font-body', theme.fonts.body)
      root.style.setProperty('--font-sans', theme.fonts.body)
      const bodyAdj = FONT_ADJUSTMENTS[theme.fonts.body]
      if (bodyAdj?.fontSize)      root.style.setProperty('--font-body-scale', bodyAdj.fontSize.replace('em', ''))
      else                        root.style.removeProperty('--font-body-scale')
      if (bodyAdj?.letterSpacing) root.style.setProperty('--font-body-tracking', bodyAdj.letterSpacing)
      else                        root.style.removeProperty('--font-body-tracking')
    } else {
      root.style.removeProperty('--font-body')
      root.style.removeProperty('--font-sans')
      root.style.removeProperty('--font-body-scale')
      root.style.removeProperty('--font-body-tracking')
    }
    if (theme.fonts?.heading) {
      root.style.setProperty('--font-heading', theme.fonts.heading)
      const headAdj = FONT_ADJUSTMENTS[theme.fonts.heading]
      if (headAdj?.fontSize)      root.style.setProperty('--font-heading-scale', headAdj.fontSize.replace('em', ''))
      else                        root.style.removeProperty('--font-heading-scale')
      if (headAdj?.letterSpacing) root.style.setProperty('--font-heading-tracking', headAdj.letterSpacing)
      else                        root.style.removeProperty('--font-heading-tracking')
    } else {
      root.style.removeProperty('--font-heading')
      root.style.removeProperty('--font-heading-scale')
      root.style.removeProperty('--font-heading-tracking')
    }

    // Inject font application rules
    const styleId = 'cocuywind-font-rules'
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = styleId
      document.head.appendChild(styleEl)
    }
    const bodyRule    = theme.fonts?.body ? `body, :root { font-family: var(--font-body); }` : ''
    // Always emit heading rule with inherit fallback so --font-heading can be
    // updated via CSS var (e.g. live preview) even without a stored heading font.
    const headingRule = `h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, inherit); }`
    styleEl.textContent = [bodyRule, headingRule].filter(Boolean).join('\n')

    // Load Google Fonts
    const linkId = 'cocuywind-gfonts'
    const families = [theme.fonts?.body, theme.fonts?.heading].filter((f): f is string => !!f)
    const gfontsUrl = families.length > 0 ? googleFontsUrl(families) : ''
    let linkEl = document.getElementById(linkId) as HTMLLinkElement | null
    if (gfontsUrl) {
      if (!linkEl) {
        linkEl = document.createElement('link')
        linkEl.id = linkId
        linkEl.rel = 'stylesheet'
        document.head.appendChild(linkEl)
      }
      if (linkEl.href !== gfontsUrl) linkEl.href = gfontsUrl
    } else if (linkEl) {
      linkEl.remove()
    }

    // Apply background image CSS variable
    root.style.setProperty('--bg-image', theme.backgroundImage ?? 'none')

    // Apply pattern CSS variables
    if (theme.pattern && theme.pattern.type !== 'none') {
      const pattern = theme.pattern.tint
        ? {
            ...theme.pattern,
            color: theme.pattern.tint === 'primary'
              ? raw('var(--primary)')
              : theme.pattern.tint === 'secondary'
                ? raw('var(--secondary)')
                : raw('var(--accent)'),
            opacity: theme.pattern.tint === 'accent'
              ? (theme.pattern.opacity ?? 0.08) * 2.0
              : theme.pattern.tint === 'secondary'
                ? (theme.pattern.opacity ?? 0.08) * 1.4
              : theme.pattern.opacity,
          }
        : theme.pattern
      const ps = generatePattern(pattern)
      root.style.setProperty('--pattern-image', ps.backgroundImage)
      root.style.setProperty('--pattern-size', ps.backgroundSize)
      if (ps.backgroundPosition) root.style.setProperty('--pattern-position', ps.backgroundPosition)
      else root.style.removeProperty('--pattern-position')
    } else {
      root.style.setProperty('--pattern-image', 'none')
      root.style.setProperty('--pattern-size', 'auto')
      root.style.removeProperty('--pattern-position')
    }

    // Toggle .dark class
    if (resolvedMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    appliedThemeRef.current = `${theme.name}-${resolvedMode}`
  }, [theme, resolvedMode])

  const setTheme = useCallback((themeOrName: Theme | string) => {
    const found = typeof themeOrName === 'string'
      ? resolveTheme(themeOrName, themes) ?? theme
      : themeOrName
    setThemeState(found)
    if (persistKey && typeof window !== 'undefined') {
      window.localStorage.setItem(`${persistKey}-theme`, found.name)
    }
  }, [themes, theme, persistKey])

  const setMode = useCallback((newMode: ColorMode) => {
    setModeState(newMode)
    if (persistKey && typeof window !== 'undefined') {
      window.localStorage.setItem(`${persistKey}-mode`, newMode)
    }
  }, [persistKey])

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme,
    mode,
    setMode,
    resolvedMode,
    availableThemes: themes,
  }), [theme, setTheme, mode, setMode, resolvedMode, themes])

  // SSR: render initial <style> tag to prevent FOUC
  const ssrStyle = useMemo(() => {
    const tokens = resolvedMode === 'dark' ? theme.dark : theme.light
    const vars = generateThemeVariables(tokens)
    const lines = Object.entries(vars).map(([p, v]) => `${p}:${v}`)
    lines.push(`--radius:${theme.radius ?? '0.5rem'}`)
    return lines.join(';')
  }, [theme, resolvedMode])

  return (
    <ThemeContext.Provider value={value}>
      {/* SSR style injection — prevents FOUC */}
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{${ssrStyle}}${resolvedMode === 'dark' ? '\n.dark{' + Object.entries(generateThemeVariables(theme.dark)).map(([p, v]) => `${p}:${v}`).join(';') + '}' : ''}`,
        }}
      />
      {children}
    </ThemeContext.Provider>
  )
}
