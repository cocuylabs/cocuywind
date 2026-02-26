// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const neoBrutalismTheme = defineTheme({
  name: 'neo-brutalism',
  label: 'Neo Brutalism',
  light: {
    background:          raw('oklch(0.985 0.02 95)'),
    foreground:          raw('oklch(0.1 0 0)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.1 0 0)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.1 0 0)'),
    primary:             raw('oklch(0.1 0 0)'),
    primaryForeground:   raw('oklch(0.985 0.02 95)'),
    secondary:           raw('oklch(0.9 0.06 95)'),
    secondaryForeground: raw('oklch(0.1 0 0)'),
    muted:               raw('oklch(0.94 0.03 92)'),
    mutedForeground:     raw('oklch(0.45 0 0)'),
    accent:              raw('oklch(0.85 0.15 85)'),
    accentForeground:    raw('oklch(0.1 0 0)'),
    destructive:         raw('oklch(0.637 0.237 25.331)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.1 0 0)'),
    input:               raw('oklch(0.1 0 0)'),
    ring:                raw('oklch(0.1 0 0)'),
  },
  dark: {
    background:          raw('oklch(0.15 0 0)'),
    foreground:          raw('oklch(0.97 0.02 95)'),
    card:                raw('oklch(0.2 0 0)'),
    cardForeground:      raw('oklch(0.97 0.02 95)'),
    popover:             raw('oklch(0.15 0 0)'),
    popoverForeground:   raw('oklch(0.97 0.02 95)'),
    primary:             raw('oklch(0.9 0.06 95)'),
    primaryForeground:   raw('oklch(0.15 0 0)'),
    secondary:           raw('oklch(0.28 0 0)'),
    secondaryForeground: raw('oklch(0.95 0.015 90)'),
    muted:               raw('oklch(0.25 0 0)'),
    mutedForeground:     raw('oklch(0.65 0 0)'),
    accent:              raw('oklch(0.65 0.14 85)'),
    accentForeground:    raw('oklch(0.15 0 0)'),
    destructive:         raw('oklch(0.5 0.2 25)'),
    destructiveForeground: raw('oklch(0.97 0.015 90)'),
    border:              raw('oklch(0.75 0.05 90)'),
    input:               raw('oklch(0.75 0.05 90)'),
    ring:                raw('oklch(0.9 0.06 95)'),
  },
  radius: '0rem',
})
