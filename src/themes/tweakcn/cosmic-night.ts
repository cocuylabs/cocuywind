// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const cosmicNightTheme = defineTheme({
  name: 'cosmic-night',
  label: 'Cosmic Night',
  light: {
    background:          raw('oklch(0.12 0.04 275)'),
    foreground:          raw('oklch(0.92 0.015 275)'),
    card:                raw('oklch(0.17 0.05 275)'),
    cardForeground:      raw('oklch(0.92 0.015 275)'),
    popover:             raw('oklch(0.12 0.04 275)'),
    popoverForeground:   raw('oklch(0.92 0.015 275)'),
    primary:             raw('oklch(0.72 0.2 285)'),
    primaryForeground:   raw('oklch(0.12 0.04 275)'),
    secondary:           raw('oklch(0.22 0.06 275)'),
    secondaryForeground: raw('oklch(0.88 0.015 275)'),
    muted:               raw('oklch(0.2 0.05 275)'),
    mutedForeground:     raw('oklch(0.6 0.06 275)'),
    accent:              raw('oklch(0.55 0.2 310)'),
    accentForeground:    raw('oklch(0.12 0.04 275)'),
    destructive:         raw('oklch(0.65 0.22 25)'),
    destructiveForeground: raw('oklch(0.12 0.04 275)'),
    border:              raw('oklch(0.25 0.06 275)'),
    input:               raw('oklch(0.25 0.06 275)'),
    ring:                raw('oklch(0.72 0.2 285)'),
  },
  dark: {
    background:          raw('oklch(0.09 0.03 275)'),
    foreground:          raw('oklch(0.9 0.012 275)'),
    card:                raw('oklch(0.13 0.04 275)'),
    cardForeground:      raw('oklch(0.9 0.012 275)'),
    popover:             raw('oklch(0.09 0.03 275)'),
    popoverForeground:   raw('oklch(0.9 0.012 275)'),
    primary:             raw('oklch(0.75 0.22 285)'),
    primaryForeground:   raw('oklch(0.09 0.03 275)'),
    secondary:           raw('oklch(0.18 0.05 275)'),
    secondaryForeground: raw('oklch(0.86 0.012 275)'),
    muted:               raw('oklch(0.16 0.04 275)'),
    mutedForeground:     raw('oklch(0.58 0.055 275)'),
    accent:              raw('oklch(0.6 0.22 310)'),
    accentForeground:    raw('oklch(0.09 0.03 275)'),
    destructive:         raw('oklch(0.6 0.2 25)'),
    destructiveForeground: raw('oklch(0.09 0.03 275)'),
    border:              raw('oklch(0.2 0.05 275)'),
    input:               raw('oklch(0.2 0.05 275)'),
    ring:                raw('oklch(0.75 0.22 285)'),
  },
  radius: '0.5rem',
})
