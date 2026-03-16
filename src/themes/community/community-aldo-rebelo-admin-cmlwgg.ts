// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAldoRebeloAdminCmlwggTheme = defineTheme({
  name: 'community-aldo-rebelo-admin-cmlwgg',
  label: 'Aldo Rebelo Admin',
  _sourceName: 'Aldo Rebelo Admin',
  category: 'Community',
  light: {
    background:              raw('oklch(0.9994 0.0026 106.45)'),
    foreground:              raw('oklch(0.3097 0.0251 241.69)'),
    card:                    raw('oklch(1 0 0)'),
    cardForeground:          raw('oklch(0.3097 0.0251 241.69)'),
    popover:                 raw('oklch(0.9994 0.0026 106.45)'),
    popoverForeground:       raw('oklch(0.3097 0.0251 241.69)'),
    primary:                 raw('oklch(0.5105 0.1218 31.38)'),
    primaryForeground:       raw('oklch(0.9994 0.0026 106.45)'),
    secondary:               raw('oklch(0.9488 0.0266 74.76)'),
    secondaryForeground:     raw('oklch(0.5105 0.1218 31.38)'),
    muted:                   raw('oklch(0.98 0.02 74.75)'),
    mutedForeground:         raw('oklch(0.3097 0.0251 241.69)'),
    accent:                  raw('oklch(0.9255 0.0315 27.42)'),
    accentForeground:        raw('oklch(0.5105 0.1218 31.38)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('oklch(0.9488 0.0266 74.76)'),
    input:                   raw('oklch(0.9488 0.0266 74.76)'),
    ring:                    raw('oklch(0.5105 0.1218 31.38)'),
  },
  dark: {
    background:              raw('oklch(0.145 0 0)'),
    foreground:              raw('oklch(0.985 0 0)'),
    card:                    raw('oklch(0.205 0 0)'),
    cardForeground:          raw('oklch(0.985 0 0)'),
    popover:                 raw('oklch(0.269 0 0)'),
    popoverForeground:       raw('oklch(0.985 0 0)'),
    primary:                 raw('oklch(0.922 0 0)'),
    primaryForeground:       raw('oklch(0.205 0 0)'),
    secondary:               raw('oklch(0.269 0 0)'),
    secondaryForeground:     raw('oklch(0.985 0 0)'),
    muted:                   raw('oklch(0.269 0 0)'),
    mutedForeground:         raw('oklch(0.708 0 0)'),
    accent:                  raw('oklch(0.371 0 0)'),
    accentForeground:        raw('oklch(0.985 0 0)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('oklch(0.275 0 0)'),
    input:                   raw('oklch(0.325 0 0)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.725rem',
})
