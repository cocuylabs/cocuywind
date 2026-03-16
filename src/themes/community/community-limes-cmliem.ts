// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLimesCmliemTheme = defineTheme({
  name: 'community-limes-cmliem',
  label: 'Limes',
  _sourceName: 'Limes',
  category: 'Community',
  light: {
    background:              raw('oklch(0.99 0 0)'),
    foreground:              raw('oklch(0 0 0)'),
    card:                    raw('oklch(0.99 0 0)'),
    cardForeground:          raw('oklch(0 0 0)'),
    popover:                 raw('oklch(0.99 0 0)'),
    popoverForeground:       raw('oklch(0 0 0)'),
    primary:                 raw('oklch(0 0 0)'),
    primaryForeground:       raw('oklch(1.00 0 0)'),
    secondary:               raw('oklch(0.94 0 0)'),
    secondaryForeground:     raw('oklch(0 0 0)'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('oklch(0.44 0 0)'),
    accent:                  raw('oklch(0.94 0 0)'),
    accentForeground:        raw('oklch(0 0 0)'),
    destructive:             raw('oklch(0.63 0.19 23.03)'),
    destructiveForeground:   raw('oklch(1.00 0 0)'),
    border:                  raw('oklch(0.92 0 0)'),
    input:                   raw('oklch(0.94 0 0)'),
    ring:                    raw('oklch(0 0 0)'),
  },
  dark: {
    background:              raw('oklch(0 0 0)'),
    foreground:              raw('oklch(1.00 0 0)'),
    card:                    raw('oklch(0 0 0)'),
    cardForeground:          raw('oklch(1.00 0 0)'),
    popover:                 raw('oklch(0 0 0)'),
    popoverForeground:       raw('oklch(1.00 0 0)'),
    primary:                 raw('oklch(0.648 0.2 131.684)'),
    primaryForeground:       raw('oklch(0 0 0)'),
    secondary:               raw('oklch(0.25 0 0)'),
    secondaryForeground:     raw('oklch(1.00 0 0)'),
    muted:                   raw('oklch(0.23 0 0)'),
    mutedForeground:         raw('oklch(0.72 0 0)'),
    accent:                  raw('oklch(0.32 0 0)'),
    accentForeground:        raw('oklch(0.646 0.222 41.116)'),
    destructive:             raw('oklch(0.69 0.20 23.91)'),
    destructiveForeground:   raw('oklch(0 0 0)'),
    border:                  raw('oklch(0.26 0 0)'),
    input:                   raw('oklch(0.32 0 0)'),
    ring:                    raw('oklch(0.72 0 0)'),
  },
  fonts: {
    body: 'Geist, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
