// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const cyberpunkTheme = defineTheme({
  name: 'cyberpunk',
  label: 'Cyberpunk',
  light: {
    background:          raw('oklch(0.1 0.02 285)'),
    foreground:          raw('oklch(0.9 0.06 190)'),
    card:                raw('oklch(0.15 0.03 285)'),
    cardForeground:      raw('oklch(0.9 0.06 190)'),
    popover:             raw('oklch(0.1 0.02 285)'),
    popoverForeground:   raw('oklch(0.9 0.06 190)'),
    primary:             raw('oklch(0.78 0.2 190)'),
    primaryForeground:   raw('oklch(0.1 0.02 285)'),
    secondary:           raw('oklch(0.2 0.04 285)'),
    secondaryForeground: raw('oklch(0.85 0.05 190)'),
    muted:               raw('oklch(0.18 0.03 285)'),
    mutedForeground:     raw('oklch(0.62 0.05 190)'),
    accent:              raw('oklch(0.7 0.25 55)'),
    accentForeground:    raw('oklch(0.1 0.02 285)'),
    destructive:         raw('oklch(0.7 0.25 12)'),
    destructiveForeground: raw('oklch(0.1 0.02 285)'),
    border:              raw('oklch(0.55 0.15 190)'),
    input:               raw('oklch(0.25 0.05 285)'),
    ring:                raw('oklch(0.78 0.2 190)'),
  },
  dark: {
    background:          raw('oklch(0.08 0.015 285)'),
    foreground:          raw('oklch(0.88 0.06 190)'),
    card:                raw('oklch(0.12 0.025 285)'),
    cardForeground:      raw('oklch(0.88 0.06 190)'),
    popover:             raw('oklch(0.08 0.015 285)'),
    popoverForeground:   raw('oklch(0.88 0.06 190)'),
    primary:             raw('oklch(0.82 0.22 190)'),
    primaryForeground:   raw('oklch(0.08 0.015 285)'),
    secondary:           raw('oklch(0.16 0.035 285)'),
    secondaryForeground: raw('oklch(0.82 0.05 190)'),
    muted:               raw('oklch(0.14 0.025 285)'),
    mutedForeground:     raw('oklch(0.58 0.05 190)'),
    accent:              raw('oklch(0.72 0.28 55)'),
    accentForeground:    raw('oklch(0.08 0.015 285)'),
    destructive:         raw('oklch(0.65 0.23 12)'),
    destructiveForeground: raw('oklch(0.08 0.015 285)'),
    border:              raw('oklch(0.5 0.15 190)'),
    input:               raw('oklch(0.2 0.04 285)'),
    ring:                raw('oklch(0.82 0.22 190)'),
  },
  radius: '0rem',
})
