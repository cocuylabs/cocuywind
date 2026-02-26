import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider.js'
import type { ThemeContextValue } from './ThemeProvider.js'

/**
 * Access the current theme context.
 * Must be used within a ThemeProvider.
 *
 * @example
 * const { theme, setTheme, mode, setMode, resolvedMode, availableThemes } = useTheme()
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
