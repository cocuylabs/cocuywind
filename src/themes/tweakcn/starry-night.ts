// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const starryNightTheme = defineTheme({
  name: 'starry-night',
  label: 'Starry Night',
  light: {
    background:          raw('oklch(0.12 0.05 255)'),
    foreground:          raw('oklch(0.93 0.02 255)'),
    card:                raw('oklch(0.17 0.06 255)'),
    cardForeground:      raw('oklch(0.93 0.02 255)'),
    popover:             raw('oklch(0.12 0.05 255)'),
    popoverForeground:   raw('oklch(0.93 0.02 255)'),
    primary:             raw('oklch(0.68 0.18 255)'),
    primaryForeground:   raw('oklch(0.12 0.05 255)'),
    secondary:           raw('oklch(0.22 0.07 255)'),
    secondaryForeground: raw('oklch(0.88 0.02 255)'),
    muted:               raw('oklch(0.2 0.06 255)'),
    mutedForeground:     raw('oklch(0.62 0.06 255)'),
    accent:              raw('oklch(0.78 0.18 65)'),
    accentForeground:    raw('oklch(0.12 0.05 255)'),
    destructive:         raw('oklch(0.65 0.22 12)'),
    destructiveForeground: raw('oklch(0.12 0.05 255)'),
    border:              raw('oklch(0.28 0.07 255)'),
    input:               raw('oklch(0.28 0.07 255)'),
    ring:                raw('oklch(0.68 0.18 255)'),
  },
  dark: {
    background:          raw('oklch(0.09 0.04 258)'),
    foreground:          raw('oklch(0.91 0.018 255)'),
    card:                raw('oklch(0.13 0.055 258)'),
    cardForeground:      raw('oklch(0.91 0.018 255)'),
    popover:             raw('oklch(0.09 0.04 258)'),
    popoverForeground:   raw('oklch(0.91 0.018 255)'),
    primary:             raw('oklch(0.72 0.2 255)'),
    primaryForeground:   raw('oklch(0.09 0.04 258)'),
    secondary:           raw('oklch(0.18 0.06 258)'),
    secondaryForeground: raw('oklch(0.86 0.018 255)'),
    muted:               raw('oklch(0.16 0.05 258)'),
    mutedForeground:     raw('oklch(0.58 0.06 255)'),
    accent:              raw('oklch(0.8 0.2 65)'),
    accentForeground:    raw('oklch(0.09 0.04 258)'),
    destructive:         raw('oklch(0.6 0.2 12)'),
    destructiveForeground: raw('oklch(0.09 0.04 258)'),
    border:              raw('oklch(0.22 0.065 258)'),
    input:               raw('oklch(0.22 0.065 258)'),
    ring:                raw('oklch(0.72 0.2 255)'),
  },
  radius: '0.5rem',
})
