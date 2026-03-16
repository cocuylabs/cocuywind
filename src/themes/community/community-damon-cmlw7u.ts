// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDamonCmlw7uTheme = defineTheme({
  name: 'community-damon-cmlw7u',
  label: 'Damon',
  _sourceName: 'damon',
  category: 'Community',
  light: {
    background:              raw('oklch(0.98 0.03 260)'),
    foreground:              raw('oklch(0.06 0.01 270)'),
    card:                    raw('oklch(0.99 0.02 260)'),
    cardForeground:          raw('oklch(0.06 0.01 270)'),
    popover:                 raw('oklch(0.98 0.03 260)'),
    popoverForeground:       raw('oklch(0.06 0.01 270)'),
    primary:                 raw('oklch(0.06 0.01 270)'),
    primaryForeground:       raw('oklch(0.98 0.03 260)'),
    secondary:               raw('oklch(0.94 0 0)'),
    secondaryForeground:     raw('oklch(0.06 0.01 270)'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('oklch(0.44 0 0)'),
    accent:                  raw('oklch(0.94 0 0)'),
    accentForeground:        raw('oklch(0.06 0.01 270)'),
    destructive:             raw('oklch(0.63 0.19 23.03)'),
    destructiveForeground:   raw('oklch(0.98 0.03 260)'),
    border:                  raw('oklch(0.92 0 0)'),
    input:                   raw('oklch(0.94 0 0)'),
    ring:                    raw('oklch(0.06 0.01 270)'),
  },
  dark: {
    background:              raw('oklch(0.04 0.005 270)'),
    foreground:              raw('oklch(0.88 0.04 260)'),
    card:                    raw('oklch(0.14 0.005 270)'),
    cardForeground:          raw('oklch(0.88 0.04 260)'),
    popover:                 raw('oklch(0.18 0.005 270)'),
    popoverForeground:       raw('oklch(0.88 0.04 260)'),
    primary:                 raw('oklch(0.88 0.04 260)'),
    primaryForeground:       raw('oklch(0.04 0.005 270)'),
    secondary:               raw('oklch(0.25 0 0)'),
    secondaryForeground:     raw('oklch(0.88 0.04 260)'),
    muted:                   raw('oklch(0.23 0 0)'),
    mutedForeground:         raw('oklch(0.72 0 0)'),
    accent:                  raw('oklch(0.32 0 0)'),
    accentForeground:        raw('oklch(0.88 0.04 260)'),
    destructive:             raw('oklch(0.69 0.20 23.91)'),
    destructiveForeground:   raw('oklch(0.04 0.005 270)'),
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
