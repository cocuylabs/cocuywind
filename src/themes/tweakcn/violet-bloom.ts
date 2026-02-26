// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const violetBloomTheme = defineTheme({
  name: 'violet-bloom',
  label: 'Violet Bloom',
  light: {
    background:          raw('oklch(0.98 0.005 300)'),
    foreground:          raw('oklch(0.2 0.04 300)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.2 0.04 300)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.2 0.04 300)'),
    primary:             raw('oklch(0.55 0.22 293)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0.02 300)'),
    secondaryForeground: raw('oklch(0.35 0.08 295)'),
    muted:               raw('oklch(0.94 0.02 300)'),
    mutedForeground:     raw('oklch(0.55 0.05 295)'),
    accent:              raw('oklch(0.92 0.04 300)'),
    accentForeground:    raw('oklch(0.35 0.1 295)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.03 300)'),
    input:               raw('oklch(0.9 0.03 300)'),
    ring:                raw('oklch(0.55 0.22 293)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.03 295)'),
    foreground:          raw('oklch(0.95 0.01 300)'),
    card:                raw('oklch(0.2 0.04 295)'),
    cardForeground:      raw('oklch(0.95 0.01 300)'),
    popover:             raw('oklch(0.16 0.03 295)'),
    popoverForeground:   raw('oklch(0.95 0.01 300)'),
    primary:             raw('oklch(0.7 0.18 293)'),
    primaryForeground:   raw('oklch(0.16 0.03 295)'),
    secondary:           raw('oklch(0.26 0.05 295)'),
    secondaryForeground: raw('oklch(0.9 0.02 300)'),
    muted:               raw('oklch(0.26 0.05 295)'),
    mutedForeground:     raw('oklch(0.65 0.05 295)'),
    accent:              raw('oklch(0.3 0.06 295)'),
    accentForeground:    raw('oklch(0.9 0.02 300)'),
    destructive:         raw('oklch(0.45 0.18 25)'),
    destructiveForeground: raw('oklch(0.85 0.05 25)'),
    border:              raw('oklch(0.3 0.05 295)'),
    input:               raw('oklch(0.3 0.05 295)'),
    ring:                raw('oklch(0.7 0.18 293)'),
  },
  radius: '0.75rem',
})
