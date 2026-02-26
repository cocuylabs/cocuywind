// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const sunsetHorizonTheme = defineTheme({
  name: 'sunset-horizon',
  label: 'Sunset Horizon',
  light: {
    background:          raw('oklch(0.98 0.012 40)'),
    foreground:          raw('oklch(0.2 0.04 35)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.2 0.04 35)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.2 0.04 35)'),
    primary:             raw('oklch(0.65 0.22 30)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.04 55)'),
    secondaryForeground: raw('oklch(0.32 0.07 45)'),
    muted:               raw('oklch(0.95 0.02 40)'),
    mutedForeground:     raw('oklch(0.55 0.05 38)'),
    accent:              raw('oklch(0.88 0.1 65)'),
    accentForeground:    raw('oklch(0.25 0.08 60)'),
    destructive:         raw('oklch(0.6 0.22 25)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.025 40)'),
    input:               raw('oklch(0.9 0.025 40)'),
    ring:                raw('oklch(0.65 0.22 30)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.04 30)'),
    foreground:          raw('oklch(0.95 0.015 40)'),
    card:                raw('oklch(0.21 0.05 30)'),
    cardForeground:      raw('oklch(0.95 0.015 40)'),
    popover:             raw('oklch(0.16 0.04 30)'),
    popoverForeground:   raw('oklch(0.95 0.015 40)'),
    primary:             raw('oklch(0.78 0.2 35)'),
    primaryForeground:   raw('oklch(0.16 0.04 30)'),
    secondary:           raw('oklch(0.28 0.06 42)'),
    secondaryForeground: raw('oklch(0.9 0.02 50)'),
    muted:               raw('oklch(0.25 0.05 32)'),
    mutedForeground:     raw('oklch(0.62 0.055 38)'),
    accent:              raw('oklch(0.42 0.12 62)'),
    accentForeground:    raw('oklch(0.9 0.04 65)'),
    destructive:         raw('oklch(0.5 0.18 25)'),
    destructiveForeground: raw('oklch(0.9 0.01 25)'),
    border:              raw('oklch(0.3 0.055 30)'),
    input:               raw('oklch(0.3 0.055 30)'),
    ring:                raw('oklch(0.78 0.2 35)'),
  },
  radius: '0.75rem',
})
