// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const quantumRoseTheme = defineTheme({
  name: 'quantum-rose',
  label: 'Quantum Rose',
  light: {
    background:          raw('oklch(0.98 0.008 355)'),
    foreground:          raw('oklch(0.2 0.04 350)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.2 0.04 350)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.2 0.04 350)'),
    primary:             raw('oklch(0.58 0.22 0)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.02 355)'),
    secondaryForeground: raw('oklch(0.35 0.07 350)'),
    muted:               raw('oklch(0.95 0.012 355)'),
    mutedForeground:     raw('oklch(0.54 0.05 352)'),
    accent:              raw('oklch(0.92 0.03 320)'),
    accentForeground:    raw('oklch(0.32 0.09 320)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.022 354)'),
    input:               raw('oklch(0.9 0.022 354)'),
    ring:                raw('oklch(0.58 0.22 0)'),
  },
  dark: {
    background:          raw('oklch(0.17 0.03 350)'),
    foreground:          raw('oklch(0.94 0.01 354)'),
    card:                raw('oklch(0.22 0.04 350)'),
    cardForeground:      raw('oklch(0.94 0.01 354)'),
    popover:             raw('oklch(0.17 0.03 350)'),
    popoverForeground:   raw('oklch(0.94 0.01 354)'),
    primary:             raw('oklch(0.72 0.19 0)'),
    primaryForeground:   raw('oklch(0.17 0.03 350)'),
    secondary:           raw('oklch(0.28 0.05 350)'),
    secondaryForeground: raw('oklch(0.88 0.012 354)'),
    muted:               raw('oklch(0.26 0.04 350)'),
    mutedForeground:     raw('oklch(0.62 0.05 352)'),
    accent:              raw('oklch(0.3 0.07 320)'),
    accentForeground:    raw('oklch(0.88 0.02 320)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.01 25)'),
    border:              raw('oklch(0.3 0.045 350)'),
    input:               raw('oklch(0.3 0.045 350)'),
    ring:                raw('oklch(0.72 0.19 0)'),
  },
  radius: '0.5rem',
})
