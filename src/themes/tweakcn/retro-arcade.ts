// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const retroArcadeTheme = defineTheme({
  name: 'retro-arcade',
  label: 'Retro Arcade',
  light: {
    background:          raw('oklch(0.12 0.02 280)'),
    foreground:          raw('oklch(0.95 0.05 115)'),
    card:                raw('oklch(0.17 0.03 280)'),
    cardForeground:      raw('oklch(0.95 0.05 115)'),
    popover:             raw('oklch(0.12 0.02 280)'),
    popoverForeground:   raw('oklch(0.95 0.05 115)'),
    primary:             raw('oklch(0.8 0.22 115)'),
    primaryForeground:   raw('oklch(0.12 0.02 280)'),
    secondary:           raw('oklch(0.22 0.04 280)'),
    secondaryForeground: raw('oklch(0.9 0.04 115)'),
    muted:               raw('oklch(0.2 0.035 280)'),
    mutedForeground:     raw('oklch(0.65 0.06 115)'),
    accent:              raw('oklch(0.7 0.25 330)'),
    accentForeground:    raw('oklch(0.12 0.02 280)'),
    destructive:         raw('oklch(0.7 0.25 25)'),
    destructiveForeground: raw('oklch(0.12 0.02 280)'),
    border:              raw('oklch(0.55 0.18 115)'),
    input:               raw('oklch(0.25 0.05 280)'),
    ring:                raw('oklch(0.8 0.22 115)'),
  },
  dark: {
    background:          raw('oklch(0.09 0.015 280)'),
    foreground:          raw('oklch(0.93 0.05 115)'),
    card:                raw('oklch(0.14 0.025 280)'),
    cardForeground:      raw('oklch(0.93 0.05 115)'),
    popover:             raw('oklch(0.09 0.015 280)'),
    popoverForeground:   raw('oklch(0.93 0.05 115)'),
    primary:             raw('oklch(0.85 0.24 115)'),
    primaryForeground:   raw('oklch(0.09 0.015 280)'),
    secondary:           raw('oklch(0.18 0.03 280)'),
    secondaryForeground: raw('oklch(0.88 0.04 115)'),
    muted:               raw('oklch(0.16 0.028 280)'),
    mutedForeground:     raw('oklch(0.6 0.06 115)'),
    accent:              raw('oklch(0.72 0.27 330)'),
    accentForeground:    raw('oklch(0.09 0.015 280)'),
    destructive:         raw('oklch(0.65 0.23 25)'),
    destructiveForeground: raw('oklch(0.09 0.015 280)'),
    border:              raw('oklch(0.5 0.18 115)'),
    input:               raw('oklch(0.2 0.04 280)'),
    ring:                raw('oklch(0.85 0.24 115)'),
  },
  radius: '0rem',
})
