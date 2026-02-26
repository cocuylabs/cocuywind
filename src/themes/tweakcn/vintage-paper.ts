// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const vintagePaperTheme = defineTheme({
  name: 'vintage-paper',
  label: 'Vintage Paper',
  light: {
    background:          raw('oklch(0.968 0.018 85)'),
    foreground:          raw('oklch(0.22 0.035 75)'),
    card:                raw('oklch(0.98 0.012 85)'),
    cardForeground:      raw('oklch(0.22 0.035 75)'),
    popover:             raw('oklch(0.98 0.012 85)'),
    popoverForeground:   raw('oklch(0.22 0.035 75)'),
    primary:             raw('oklch(0.42 0.12 68)'),
    primaryForeground:   raw('oklch(0.968 0.018 85)'),
    secondary:           raw('oklch(0.92 0.025 82)'),
    secondaryForeground: raw('oklch(0.32 0.055 70)'),
    muted:               raw('oklch(0.93 0.018 83)'),
    mutedForeground:     raw('oklch(0.52 0.04 75)'),
    accent:              raw('oklch(0.87 0.04 92)'),
    accentForeground:    raw('oklch(0.28 0.06 82)'),
    destructive:         raw('oklch(0.55 0.2 25)'),
    destructiveForeground: raw('oklch(0.968 0.018 85)'),
    border:              raw('oklch(0.86 0.028 80)'),
    input:               raw('oklch(0.86 0.028 80)'),
    ring:                raw('oklch(0.42 0.12 68)'),
  },
  dark: {
    background:          raw('oklch(0.17 0.025 70)'),
    foreground:          raw('oklch(0.9 0.018 83)'),
    card:                raw('oklch(0.22 0.03 70)'),
    cardForeground:      raw('oklch(0.9 0.018 83)'),
    popover:             raw('oklch(0.17 0.025 70)'),
    popoverForeground:   raw('oklch(0.9 0.018 83)'),
    primary:             raw('oklch(0.75 0.1 78)'),
    primaryForeground:   raw('oklch(0.17 0.025 70)'),
    secondary:           raw('oklch(0.27 0.035 70)'),
    secondaryForeground: raw('oklch(0.86 0.018 82)'),
    muted:               raw('oklch(0.25 0.03 70)'),
    mutedForeground:     raw('oklch(0.6 0.035 75)'),
    accent:              raw('oklch(0.3 0.045 80)'),
    accentForeground:    raw('oklch(0.86 0.022 85)'),
    destructive:         raw('oklch(0.44 0.16 25)'),
    destructiveForeground: raw('oklch(0.88 0.01 25)'),
    border:              raw('oklch(0.3 0.032 70)'),
    input:               raw('oklch(0.3 0.032 70)'),
    ring:                raw('oklch(0.75 0.1 78)'),
  },
  radius: '0.25rem',
})
