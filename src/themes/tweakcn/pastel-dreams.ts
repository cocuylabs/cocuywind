// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const pastelDreamsTheme = defineTheme({
  name: 'pastel-dreams',
  label: 'Pastel Dreams',
  light: {
    background:          raw('oklch(0.98 0.01 295)'),
    foreground:          raw('oklch(0.28 0.04 295)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.28 0.04 295)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.28 0.04 295)'),
    primary:             raw('oklch(0.72 0.15 295)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.04 220)'),
    secondaryForeground: raw('oklch(0.35 0.06 220)'),
    muted:               raw('oklch(0.95 0.018 295)'),
    mutedForeground:     raw('oklch(0.56 0.05 295)'),
    accent:              raw('oklch(0.94 0.05 160)'),
    accentForeground:    raw('oklch(0.32 0.08 160)'),
    destructive:         raw('oklch(0.72 0.18 12)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.03 295)'),
    input:               raw('oklch(0.9 0.03 295)'),
    ring:                raw('oklch(0.72 0.15 295)'),
  },
  dark: {
    background:          raw('oklch(0.22 0.03 295)'),
    foreground:          raw('oklch(0.95 0.012 295)'),
    card:                raw('oklch(0.27 0.04 295)'),
    cardForeground:      raw('oklch(0.95 0.012 295)'),
    popover:             raw('oklch(0.22 0.03 295)'),
    popoverForeground:   raw('oklch(0.95 0.012 295)'),
    primary:             raw('oklch(0.8 0.14 295)'),
    primaryForeground:   raw('oklch(0.22 0.03 295)'),
    secondary:           raw('oklch(0.32 0.05 220)'),
    secondaryForeground: raw('oklch(0.88 0.02 220)'),
    muted:               raw('oklch(0.3 0.035 295)'),
    mutedForeground:     raw('oklch(0.65 0.045 295)'),
    accent:              raw('oklch(0.34 0.07 160)'),
    accentForeground:    raw('oklch(0.88 0.025 160)'),
    destructive:         raw('oklch(0.55 0.15 12)'),
    destructiveForeground: raw('oklch(0.88 0.01 12)'),
    border:              raw('oklch(0.33 0.04 295)'),
    input:               raw('oklch(0.33 0.04 295)'),
    ring:                raw('oklch(0.8 0.14 295)'),
  },
  radius: '1rem',
})
