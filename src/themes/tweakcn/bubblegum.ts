// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const bubblegumTheme = defineTheme({
  name: 'bubblegum',
  label: 'Bubblegum',
  light: {
    background:          raw('oklch(0.98 0.012 340)'),
    foreground:          raw('oklch(0.25 0.05 340)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.25 0.05 340)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.25 0.05 340)'),
    primary:             raw('oklch(0.68 0.22 355)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.04 300)'),
    secondaryForeground: raw('oklch(0.35 0.08 300)'),
    muted:               raw('oklch(0.95 0.015 340)'),
    mutedForeground:     raw('oklch(0.55 0.06 340)'),
    accent:              raw('oklch(0.92 0.06 290)'),
    accentForeground:    raw('oklch(0.35 0.1 290)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.03 340)'),
    input:               raw('oklch(0.9 0.03 340)'),
    ring:                raw('oklch(0.68 0.22 355)'),
  },
  dark: {
    background:          raw('oklch(0.2 0.04 340)'),
    foreground:          raw('oklch(0.96 0.01 340)'),
    card:                raw('oklch(0.26 0.05 340)'),
    cardForeground:      raw('oklch(0.96 0.01 340)'),
    popover:             raw('oklch(0.2 0.04 340)'),
    popoverForeground:   raw('oklch(0.96 0.01 340)'),
    primary:             raw('oklch(0.78 0.18 355)'),
    primaryForeground:   raw('oklch(0.2 0.04 340)'),
    secondary:           raw('oklch(0.3 0.06 300)'),
    secondaryForeground: raw('oklch(0.9 0.02 300)'),
    muted:               raw('oklch(0.28 0.04 340)'),
    mutedForeground:     raw('oklch(0.65 0.05 340)'),
    accent:              raw('oklch(0.32 0.08 290)'),
    accentForeground:    raw('oklch(0.9 0.03 290)'),
    destructive:         raw('oklch(0.45 0.18 25)'),
    destructiveForeground: raw('oklch(0.9 0.02 25)'),
    border:              raw('oklch(0.32 0.05 340)'),
    input:               raw('oklch(0.32 0.05 340)'),
    ring:                raw('oklch(0.78 0.18 355)'),
  },
  radius: '1rem',
})
