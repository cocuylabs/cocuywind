// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const caffeineTheme = defineTheme({
  name: 'caffeine',
  label: 'Caffeine',
  light: {
    background:          raw('oklch(0.975 0.008 72)'),
    foreground:          raw('oklch(0.18 0.025 65)'),
    card:                raw('oklch(0.995 0.004 72)'),
    cardForeground:      raw('oklch(0.18 0.025 65)'),
    popover:             raw('oklch(0.995 0.004 72)'),
    popoverForeground:   raw('oklch(0.18 0.025 65)'),
    primary:             raw('oklch(0.35 0.07 65)'),
    primaryForeground:   raw('oklch(0.97 0.008 72)'),
    secondary:           raw('oklch(0.93 0.015 70)'),
    secondaryForeground: raw('oklch(0.28 0.04 65)'),
    muted:               raw('oklch(0.94 0.01 70)'),
    mutedForeground:     raw('oklch(0.5 0.028 68)'),
    accent:              raw('oklch(0.88 0.03 68)'),
    accentForeground:    raw('oklch(0.25 0.04 65)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.975 0.008 72)'),
    border:              raw('oklch(0.87 0.02 68)'),
    input:               raw('oklch(0.87 0.02 68)'),
    ring:                raw('oklch(0.35 0.07 65)'),
  },
  dark: {
    background:          raw('oklch(0.15 0.022 65)'),
    foreground:          raw('oklch(0.92 0.01 72)'),
    card:                raw('oklch(0.2 0.028 65)'),
    cardForeground:      raw('oklch(0.92 0.01 72)'),
    popover:             raw('oklch(0.15 0.022 65)'),
    popoverForeground:   raw('oklch(0.92 0.01 72)'),
    primary:             raw('oklch(0.78 0.07 72)'),
    primaryForeground:   raw('oklch(0.15 0.022 65)'),
    secondary:           raw('oklch(0.25 0.032 65)'),
    secondaryForeground: raw('oklch(0.88 0.01 72)'),
    muted:               raw('oklch(0.23 0.028 65)'),
    mutedForeground:     raw('oklch(0.6 0.025 68)'),
    accent:              raw('oklch(0.28 0.035 66)'),
    accentForeground:    raw('oklch(0.88 0.012 70)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.01 25)'),
    border:              raw('oklch(0.28 0.03 65)'),
    input:               raw('oklch(0.28 0.03 65)'),
    ring:                raw('oklch(0.78 0.07 72)'),
  },
  radius: '0.375rem',
})
