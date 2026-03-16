import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { Theme } from '../types.js'
import { generateThemeVariables } from '../generate.js'

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
  /** CSS selector to apply theme to. Defaults to ':root' / 'html' */
  target?: string
}

const DEFAULT_PERSIST_KEY = 'tailtheme'

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
  target,
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
    // Apply radius and fonts
    root.style.setProperty('--radius', theme.radius ?? '0.5rem')
    if (theme.fonts?.body)    root.style.setProperty('--font-body', theme.fonts.body)
    if (theme.fonts?.heading) root.style.setProperty('--font-heading', theme.fonts.heading)

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
