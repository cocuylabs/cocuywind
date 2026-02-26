// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const doom64Theme = defineTheme({
  name: 'doom-64',
  label: 'Doom 64',
  light: {
    background:          raw('oklch(0.15 0.04 30)'),
    foreground:          raw('oklch(0.9 0.04 40)'),
    card:                raw('oklch(0.2 0.05 30)'),
    cardForeground:      raw('oklch(0.9 0.04 40)'),
    popover:             raw('oklch(0.15 0.04 30)'),
    popoverForeground:   raw('oklch(0.9 0.04 40)'),
    primary:             raw('oklch(0.65 0.23 25)'),
    primaryForeground:   raw('oklch(0.1 0.02 30)'),
    secondary:           raw('oklch(0.25 0.06 30)'),
    secondaryForeground: raw('oklch(0.85 0.04 38)'),
    muted:               raw('oklch(0.22 0.05 30)'),
    mutedForeground:     raw('oklch(0.6 0.05 35)'),
    accent:              raw('oklch(0.55 0.18 45)'),
    accentForeground:    raw('oklch(0.1 0.02 30)'),
    destructive:         raw('oklch(0.7 0.25 28)'),
    destructiveForeground: raw('oklch(0.1 0.02 30)'),
    border:              raw('oklch(0.28 0.07 30)'),
    input:               raw('oklch(0.28 0.07 30)'),
    ring:                raw('oklch(0.65 0.23 25)'),
  },
  dark: {
    background:          raw('oklch(0.1 0.03 30)'),
    foreground:          raw('oklch(0.88 0.04 40)'),
    card:                raw('oklch(0.15 0.04 30)'),
    cardForeground:      raw('oklch(0.88 0.04 40)'),
    popover:             raw('oklch(0.1 0.03 30)'),
    popoverForeground:   raw('oklch(0.88 0.04 40)'),
    primary:             raw('oklch(0.7 0.25 25)'),
    primaryForeground:   raw('oklch(0.1 0.03 30)'),
    secondary:           raw('oklch(0.2 0.05 30)'),
    secondaryForeground: raw('oklch(0.85 0.04 38)'),
    muted:               raw('oklch(0.18 0.04 30)'),
    mutedForeground:     raw('oklch(0.56 0.05 35)'),
    accent:              raw('oklch(0.58 0.2 45)'),
    accentForeground:    raw('oklch(0.1 0.02 30)'),
    destructive:         raw('oklch(0.65 0.23 28)'),
    destructiveForeground: raw('oklch(0.1 0.02 30)'),
    border:              raw('oklch(0.22 0.06 30)'),
    input:               raw('oklch(0.22 0.06 30)'),
    ring:                raw('oklch(0.7 0.25 25)'),
  },
  radius: '0.125rem',
})
