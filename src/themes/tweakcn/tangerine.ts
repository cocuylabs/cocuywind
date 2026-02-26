// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const tangerineTheme = defineTheme({
  name: 'tangerine',
  label: 'Tangerine',
  light: {
    background:          raw('oklch(0.985 0.012 70)'),
    foreground:          raw('oklch(0.22 0.05 55)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.22 0.05 55)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.22 0.05 55)'),
    primary:             raw('oklch(0.65 0.2 47)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.03 70)'),
    secondaryForeground: raw('oklch(0.35 0.08 55)'),
    muted:               raw('oklch(0.95 0.018 68)'),
    mutedForeground:     raw('oklch(0.55 0.06 58)'),
    accent:              raw('oklch(0.92 0.045 65)'),
    accentForeground:    raw('oklch(0.3 0.08 55)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.03 68)'),
    input:               raw('oklch(0.9 0.03 68)'),
    ring:                raw('oklch(0.65 0.2 47)'),
  },
  dark: {
    background:          raw('oklch(0.19 0.04 55)'),
    foreground:          raw('oklch(0.95 0.015 68)'),
    card:                raw('oklch(0.24 0.05 55)'),
    cardForeground:      raw('oklch(0.95 0.015 68)'),
    popover:             raw('oklch(0.19 0.04 55)'),
    popoverForeground:   raw('oklch(0.95 0.015 68)'),
    primary:             raw('oklch(0.78 0.18 52)'),
    primaryForeground:   raw('oklch(0.19 0.04 55)'),
    secondary:           raw('oklch(0.3 0.06 55)'),
    secondaryForeground: raw('oklch(0.9 0.015 68)'),
    muted:               raw('oklch(0.28 0.05 55)'),
    mutedForeground:     raw('oklch(0.62 0.06 60)'),
    accent:              raw('oklch(0.34 0.07 57)'),
    accentForeground:    raw('oklch(0.9 0.018 65)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.9 0.01 25)'),
    border:              raw('oklch(0.32 0.06 55)'),
    input:               raw('oklch(0.32 0.06 55)'),
    ring:                raw('oklch(0.78 0.18 52)'),
  },
  radius: '0.5rem',
})
