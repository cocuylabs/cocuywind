// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const notebookTheme = defineTheme({
  name: 'notebook',
  label: 'Notebook',
  light: {
    background:          raw('oklch(0.985 0.005 85)'),
    foreground:          raw('oklch(0.2 0.025 80)'),
    card:                raw('oklch(0.99 0.003 85)'),
    cardForeground:      raw('oklch(0.2 0.025 80)'),
    popover:             raw('oklch(0.99 0.003 85)'),
    popoverForeground:   raw('oklch(0.2 0.025 80)'),
    primary:             raw('oklch(0.35 0.06 80)'),
    primaryForeground:   raw('oklch(0.985 0.005 85)'),
    secondary:           raw('oklch(0.93 0.012 82)'),
    secondaryForeground: raw('oklch(0.3 0.04 80)'),
    muted:               raw('oklch(0.94 0.008 84)'),
    mutedForeground:     raw('oklch(0.5 0.03 80)'),
    accent:              raw('oklch(0.88 0.035 100)'),
    accentForeground:    raw('oklch(0.3 0.06 95)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.985 0.005 85)'),
    border:              raw('oklch(0.87 0.02 82)'),
    input:               raw('oklch(0.87 0.02 82)'),
    ring:                raw('oklch(0.35 0.06 80)'),
  },
  dark: {
    background:          raw('oklch(0.18 0.02 80)'),
    foreground:          raw('oklch(0.92 0.01 85)'),
    card:                raw('oklch(0.22 0.025 80)'),
    cardForeground:      raw('oklch(0.92 0.01 85)'),
    popover:             raw('oklch(0.18 0.02 80)'),
    popoverForeground:   raw('oklch(0.92 0.01 85)'),
    primary:             raw('oklch(0.78 0.07 85)'),
    primaryForeground:   raw('oklch(0.18 0.02 80)'),
    secondary:           raw('oklch(0.28 0.03 80)'),
    secondaryForeground: raw('oklch(0.88 0.01 85)'),
    muted:               raw('oklch(0.27 0.025 80)'),
    mutedForeground:     raw('oklch(0.6 0.025 82)'),
    accent:              raw('oklch(0.35 0.06 100)'),
    accentForeground:    raw('oklch(0.88 0.025 95)'),
    destructive:         raw('oklch(0.45 0.18 25)'),
    destructiveForeground: raw('oklch(0.9 0.01 25)'),
    border:              raw('oklch(0.3 0.025 80)'),
    input:               raw('oklch(0.3 0.025 80)'),
    ring:                raw('oklch(0.78 0.07 85)'),
  },
  radius: '0.25rem',
})
