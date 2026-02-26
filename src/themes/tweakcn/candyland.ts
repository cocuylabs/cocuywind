// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const candylandTheme = defineTheme({
  name: 'candyland',
  label: 'Candyland',
  light: {
    background:          raw('oklch(0.98 0.015 350)'),
    foreground:          raw('oklch(0.25 0.06 345)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.25 0.06 345)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.25 0.06 345)'),
    primary:             raw('oklch(0.72 0.25 355)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.95 0.04 220)'),
    secondaryForeground: raw('oklch(0.3 0.08 220)'),
    muted:               raw('oklch(0.96 0.02 350)'),
    mutedForeground:     raw('oklch(0.56 0.06 350)'),
    accent:              raw('oklch(0.9 0.07 100)'),
    accentForeground:    raw('oklch(0.3 0.1 100)'),
    destructive:         raw('oklch(0.65 0.22 25)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.03 350)'),
    input:               raw('oklch(0.9 0.03 350)'),
    ring:                raw('oklch(0.72 0.25 355)'),
  },
  dark: {
    background:          raw('oklch(0.19 0.04 350)'),
    foreground:          raw('oklch(0.96 0.012 350)'),
    card:                raw('oklch(0.24 0.05 350)'),
    cardForeground:      raw('oklch(0.96 0.012 350)'),
    popover:             raw('oklch(0.19 0.04 350)'),
    popoverForeground:   raw('oklch(0.96 0.012 350)'),
    primary:             raw('oklch(0.8 0.22 355)'),
    primaryForeground:   raw('oklch(0.19 0.04 350)'),
    secondary:           raw('oklch(0.3 0.06 220)'),
    secondaryForeground: raw('oklch(0.88 0.025 220)'),
    muted:               raw('oklch(0.28 0.04 350)'),
    mutedForeground:     raw('oklch(0.64 0.055 350)'),
    accent:              raw('oklch(0.42 0.1 100)'),
    accentForeground:    raw('oklch(0.9 0.04 100)'),
    destructive:         raw('oklch(0.5 0.18 25)'),
    destructiveForeground: raw('oklch(0.9 0.01 25)'),
    border:              raw('oklch(0.32 0.05 350)'),
    input:               raw('oklch(0.32 0.05 350)'),
    ring:                raw('oklch(0.8 0.22 355)'),
  },
  radius: '1.25rem',
})
