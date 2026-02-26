// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const kodamaGroveTheme = defineTheme({
  name: 'kodama-grove',
  label: 'Kodama Grove',
  light: {
    background:          raw('oklch(0.975 0.012 130)'),
    foreground:          raw('oklch(0.22 0.04 145)'),
    card:                raw('oklch(0.99 0.006 130)'),
    cardForeground:      raw('oklch(0.22 0.04 145)'),
    popover:             raw('oklch(0.99 0.006 130)'),
    popoverForeground:   raw('oklch(0.22 0.04 145)'),
    primary:             raw('oklch(0.42 0.1 145)'),
    primaryForeground:   raw('oklch(0.975 0.012 130)'),
    secondary:           raw('oklch(0.92 0.025 135)'),
    secondaryForeground: raw('oklch(0.3 0.06 145)'),
    muted:               raw('oklch(0.93 0.018 132)'),
    mutedForeground:     raw('oklch(0.5 0.05 140)'),
    accent:              raw('oklch(0.9 0.04 120)'),
    accentForeground:    raw('oklch(0.3 0.07 130)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.975 0.012 130)'),
    border:              raw('oklch(0.88 0.03 132)'),
    input:               raw('oklch(0.88 0.03 132)'),
    ring:                raw('oklch(0.42 0.1 145)'),
  },
  dark: {
    background:          raw('oklch(0.18 0.03 145)'),
    foreground:          raw('oklch(0.93 0.015 130)'),
    card:                raw('oklch(0.23 0.038 145)'),
    cardForeground:      raw('oklch(0.93 0.015 130)'),
    popover:             raw('oklch(0.18 0.03 145)'),
    popoverForeground:   raw('oklch(0.93 0.015 130)'),
    primary:             raw('oklch(0.65 0.12 145)'),
    primaryForeground:   raw('oklch(0.18 0.03 145)'),
    secondary:           raw('oklch(0.28 0.05 145)'),
    secondaryForeground: raw('oklch(0.88 0.015 130)'),
    muted:               raw('oklch(0.26 0.04 145)'),
    mutedForeground:     raw('oklch(0.58 0.05 138)'),
    accent:              raw('oklch(0.3 0.06 120)'),
    accentForeground:    raw('oklch(0.88 0.02 128)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.02 25)'),
    border:              raw('oklch(0.3 0.045 145)'),
    input:               raw('oklch(0.3 0.045 145)'),
    ring:                raw('oklch(0.65 0.12 145)'),
  },
  radius: '0.5rem',
})
