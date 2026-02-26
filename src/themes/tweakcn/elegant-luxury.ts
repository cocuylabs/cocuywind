// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const elegantLuxuryTheme = defineTheme({
  name: 'elegant-luxury',
  label: 'Elegant Luxury',
  light: {
    background:          raw('oklch(0.98 0.005 85)'),
    foreground:          raw('oklch(0.15 0.01 75)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.15 0.01 75)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.15 0.01 75)'),
    primary:             raw('oklch(0.6 0.12 78)'),
    primaryForeground:   raw('oklch(0.98 0.005 85)'),
    secondary:           raw('oklch(0.93 0.01 82)'),
    secondaryForeground: raw('oklch(0.25 0.015 75)'),
    muted:               raw('oklch(0.94 0.007 82)'),
    mutedForeground:     raw('oklch(0.52 0.025 78)'),
    accent:              raw('oklch(0.9 0.025 80)'),
    accentForeground:    raw('oklch(0.22 0.015 75)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.98 0.005 85)'),
    border:              raw('oklch(0.87 0.018 80)'),
    input:               raw('oklch(0.87 0.018 80)'),
    ring:                raw('oklch(0.6 0.12 78)'),
  },
  dark: {
    background:          raw('oklch(0.12 0.012 75)'),
    foreground:          raw('oklch(0.93 0.008 82)'),
    card:                raw('oklch(0.17 0.016 75)'),
    cardForeground:      raw('oklch(0.93 0.008 82)'),
    popover:             raw('oklch(0.12 0.012 75)'),
    popoverForeground:   raw('oklch(0.93 0.008 82)'),
    primary:             raw('oklch(0.78 0.1 80)'),
    primaryForeground:   raw('oklch(0.12 0.012 75)'),
    secondary:           raw('oklch(0.22 0.018 75)'),
    secondaryForeground: raw('oklch(0.88 0.008 82)'),
    muted:               raw('oklch(0.2 0.015 75)'),
    mutedForeground:     raw('oklch(0.6 0.025 78)'),
    accent:              raw('oklch(0.25 0.022 78)'),
    accentForeground:    raw('oklch(0.88 0.01 80)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.008 25)'),
    border:              raw('oklch(0.26 0.02 75)'),
    input:               raw('oklch(0.26 0.02 75)'),
    ring:                raw('oklch(0.78 0.1 80)'),
  },
  radius: '0.25rem',
})
