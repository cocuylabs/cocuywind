// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const supabaseTheme = defineTheme({
  name: 'supabase',
  label: 'Supabase',
  light: {
    background:          raw('oklch(1 0 0)'),
    foreground:          raw('oklch(0.18 0.02 155)'),
    card:                raw('oklch(0.985 0.005 155)'),
    cardForeground:      raw('oklch(0.18 0.02 155)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.18 0.02 155)'),
    primary:             raw('oklch(0.52 0.16 155)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.95 0.01 155)'),
    secondaryForeground: raw('oklch(0.28 0.04 155)'),
    muted:               raw('oklch(0.95 0.008 150)'),
    mutedForeground:     raw('oklch(0.5 0.03 150)'),
    accent:              raw('oklch(0.93 0.02 155)'),
    accentForeground:    raw('oklch(0.3 0.06 155)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.9 0.012 152)'),
    input:               raw('oklch(0.9 0.012 152)'),
    ring:                raw('oklch(0.52 0.16 155)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.018 165)'),
    foreground:          raw('oklch(0.93 0.012 152)'),
    card:                raw('oklch(0.2 0.022 162)'),
    cardForeground:      raw('oklch(0.93 0.012 152)'),
    popover:             raw('oklch(0.16 0.018 165)'),
    popoverForeground:   raw('oklch(0.93 0.012 152)'),
    primary:             raw('oklch(0.65 0.16 155)'),
    primaryForeground:   raw('oklch(0.16 0.018 165)'),
    secondary:           raw('oklch(0.26 0.03 162)'),
    secondaryForeground: raw('oklch(0.88 0.012 152)'),
    muted:               raw('oklch(0.24 0.025 162)'),
    mutedForeground:     raw('oklch(0.6 0.03 155)'),
    accent:              raw('oklch(0.28 0.035 160)'),
    accentForeground:    raw('oklch(0.88 0.015 152)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.008 25)'),
    border:              raw('oklch(0.28 0.028 162)'),
    input:               raw('oklch(0.28 0.028 162)'),
    ring:                raw('oklch(0.65 0.16 155)'),
  },
  radius: '0.5rem',
})
