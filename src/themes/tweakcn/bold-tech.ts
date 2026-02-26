// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const boldTechTheme = defineTheme({
  name: 'bold-tech',
  label: 'Bold Tech',
  light: {
    background:          raw('oklch(0.98 0 0)'),
    foreground:          raw('oklch(0.1 0 0)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.1 0 0)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.1 0 0)'),
    primary:             raw('oklch(0.5 0.25 265)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.94 0 0)'),
    secondaryForeground: raw('oklch(0.2 0 0)'),
    muted:               raw('oklch(0.94 0 0)'),
    mutedForeground:     raw('oklch(0.55 0 0)'),
    accent:              raw('oklch(0.92 0.05 190)'),
    accentForeground:    raw('oklch(0.2 0.05 190)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.88 0 0)'),
    input:               raw('oklch(0.88 0 0)'),
    ring:                raw('oklch(0.5 0.25 265)'),
  },
  dark: {
    background:          raw('oklch(0.1 0 0)'),
    foreground:          raw('oklch(0.97 0 0)'),
    card:                raw('oklch(0.15 0 0)'),
    cardForeground:      raw('oklch(0.97 0 0)'),
    popover:             raw('oklch(0.1 0 0)'),
    popoverForeground:   raw('oklch(0.97 0 0)'),
    primary:             raw('oklch(0.65 0.25 265)'),
    primaryForeground:   raw('oklch(0.1 0 0)'),
    secondary:           raw('oklch(0.22 0 0)'),
    secondaryForeground: raw('oklch(0.92 0 0)'),
    muted:               raw('oklch(0.2 0 0)'),
    mutedForeground:     raw('oklch(0.62 0 0)'),
    accent:              raw('oklch(0.25 0.06 190)'),
    accentForeground:    raw('oklch(0.88 0.025 190)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0 0)'),
    border:              raw('oklch(0.25 0 0)'),
    input:               raw('oklch(0.25 0 0)'),
    ring:                raw('oklch(0.65 0.25 265)'),
  },
  radius: '0.25rem',
})
