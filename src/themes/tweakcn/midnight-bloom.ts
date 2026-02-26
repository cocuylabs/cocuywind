// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const midnightBloomTheme = defineTheme({
  name: 'midnight-bloom',
  label: 'Midnight Bloom',
  light: {
    background:          raw('oklch(0.13 0.04 295)'),
    foreground:          raw('oklch(0.92 0.015 295)'),
    card:                raw('oklch(0.18 0.05 295)'),
    cardForeground:      raw('oklch(0.92 0.015 295)'),
    popover:             raw('oklch(0.13 0.04 295)'),
    popoverForeground:   raw('oklch(0.92 0.015 295)'),
    primary:             raw('oklch(0.75 0.18 325)'),
    primaryForeground:   raw('oklch(0.13 0.04 295)'),
    secondary:           raw('oklch(0.22 0.06 295)'),
    secondaryForeground: raw('oklch(0.88 0.015 295)'),
    muted:               raw('oklch(0.2 0.05 295)'),
    mutedForeground:     raw('oklch(0.62 0.06 295)'),
    accent:              raw('oklch(0.6 0.22 290)'),
    accentForeground:    raw('oklch(0.13 0.04 295)'),
    destructive:         raw('oklch(0.65 0.22 12)'),
    destructiveForeground: raw('oklch(0.13 0.04 295)'),
    border:              raw('oklch(0.28 0.06 295)'),
    input:               raw('oklch(0.28 0.06 295)'),
    ring:                raw('oklch(0.75 0.18 325)'),
  },
  dark: {
    background:          raw('oklch(0.1 0.03 295)'),
    foreground:          raw('oklch(0.9 0.012 295)'),
    card:                raw('oklch(0.14 0.04 295)'),
    cardForeground:      raw('oklch(0.9 0.012 295)'),
    popover:             raw('oklch(0.1 0.03 295)'),
    popoverForeground:   raw('oklch(0.9 0.012 295)'),
    primary:             raw('oklch(0.78 0.2 325)'),
    primaryForeground:   raw('oklch(0.1 0.03 295)'),
    secondary:           raw('oklch(0.18 0.05 295)'),
    secondaryForeground: raw('oklch(0.86 0.012 295)'),
    muted:               raw('oklch(0.17 0.04 295)'),
    mutedForeground:     raw('oklch(0.58 0.055 295)'),
    accent:              raw('oklch(0.62 0.24 290)'),
    accentForeground:    raw('oklch(0.1 0.03 295)'),
    destructive:         raw('oklch(0.6 0.2 12)'),
    destructiveForeground: raw('oklch(0.1 0.03 295)'),
    border:              raw('oklch(0.23 0.055 295)'),
    input:               raw('oklch(0.23 0.055 295)'),
    ring:                raw('oklch(0.78 0.2 325)'),
  },
  radius: '0.75rem',
})
