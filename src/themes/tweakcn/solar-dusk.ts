// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const solarDuskTheme = defineTheme({
  name: 'solar-dusk',
  label: 'Solar Dusk',
  light: {
    background:          raw('oklch(0.975 0.015 60)'),
    foreground:          raw('oklch(0.2 0.04 40)'),
    card:                raw('oklch(0.99 0.008 62)'),
    cardForeground:      raw('oklch(0.2 0.04 40)'),
    popover:             raw('oklch(0.99 0.008 62)'),
    popoverForeground:   raw('oklch(0.2 0.04 40)'),
    primary:             raw('oklch(0.62 0.2 40)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.93 0.03 62)'),
    secondaryForeground: raw('oklch(0.3 0.06 40)'),
    muted:               raw('oklch(0.94 0.02 60)'),
    mutedForeground:     raw('oklch(0.55 0.05 45)'),
    accent:              raw('oklch(0.9 0.05 55)'),
    accentForeground:    raw('oklch(0.28 0.07 42)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.88 0.03 58)'),
    input:               raw('oklch(0.88 0.03 58)'),
    ring:                raw('oklch(0.62 0.2 40)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.04 35)'),
    foreground:          raw('oklch(0.94 0.02 60)'),
    card:                raw('oklch(0.22 0.05 35)'),
    cardForeground:      raw('oklch(0.94 0.02 60)'),
    popover:             raw('oklch(0.16 0.04 35)'),
    popoverForeground:   raw('oklch(0.94 0.02 60)'),
    primary:             raw('oklch(0.76 0.18 45)'),
    primaryForeground:   raw('oklch(0.16 0.04 35)'),
    secondary:           raw('oklch(0.27 0.06 35)'),
    secondaryForeground: raw('oklch(0.9 0.018 58)'),
    muted:               raw('oklch(0.25 0.05 35)'),
    mutedForeground:     raw('oklch(0.62 0.05 48)'),
    accent:              raw('oklch(0.32 0.07 42)'),
    accentForeground:    raw('oklch(0.9 0.025 55)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.9 0.01 25)'),
    border:              raw('oklch(0.3 0.055 35)'),
    input:               raw('oklch(0.3 0.055 35)'),
    ring:                raw('oklch(0.76 0.18 45)'),
  },
  radius: '0.5rem',
})
