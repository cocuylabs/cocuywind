// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const mochaMousseTheme = defineTheme({
  name: 'mocha-mousse',
  label: 'Mocha Mousse',
  light: {
    background:          raw('oklch(0.962 0.01 60)'),
    foreground:          raw('oklch(0.25 0.04 50)'),
    card:                raw('oklch(0.98 0.006 60)'),
    cardForeground:      raw('oklch(0.25 0.04 50)'),
    popover:             raw('oklch(0.98 0.006 60)'),
    popoverForeground:   raw('oklch(0.25 0.04 50)'),
    primary:             raw('oklch(0.52 0.1 45)'),
    primaryForeground:   raw('oklch(0.98 0.006 60)'),
    secondary:           raw('oklch(0.9 0.02 55)'),
    secondaryForeground: raw('oklch(0.35 0.06 50)'),
    muted:               raw('oklch(0.92 0.015 58)'),
    mutedForeground:     raw('oklch(0.52 0.04 55)'),
    accent:              raw('oklch(0.88 0.03 58)'),
    accentForeground:    raw('oklch(0.3 0.06 50)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.98 0.006 60)'),
    border:              raw('oklch(0.88 0.025 57)'),
    input:               raw('oklch(0.88 0.025 57)'),
    ring:                raw('oklch(0.52 0.1 45)'),
  },
  dark: {
    background:          raw('oklch(0.2 0.03 50)'),
    foreground:          raw('oklch(0.94 0.015 58)'),
    card:                raw('oklch(0.25 0.035 50)'),
    cardForeground:      raw('oklch(0.94 0.015 58)'),
    popover:             raw('oklch(0.2 0.03 50)'),
    popoverForeground:   raw('oklch(0.94 0.015 58)'),
    primary:             raw('oklch(0.72 0.1 55)'),
    primaryForeground:   raw('oklch(0.2 0.03 50)'),
    secondary:           raw('oklch(0.3 0.04 50)'),
    secondaryForeground: raw('oklch(0.88 0.02 58)'),
    muted:               raw('oklch(0.3 0.04 50)'),
    mutedForeground:     raw('oklch(0.65 0.04 55)'),
    accent:              raw('oklch(0.35 0.05 50)'),
    accentForeground:    raw('oklch(0.88 0.02 58)'),
    destructive:         raw('oklch(0.45 0.18 25)'),
    destructiveForeground: raw('oklch(0.88 0.02 58)'),
    border:              raw('oklch(0.32 0.04 50)'),
    input:               raw('oklch(0.32 0.04 50)'),
    ring:                raw('oklch(0.72 0.1 55)'),
  },
  radius: '0.5rem',
})
