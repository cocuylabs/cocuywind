// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const amberMinimalTheme = defineTheme({
  name: 'amber-minimal',
  label: 'Amber Minimal',
  light: {
    background:          raw('oklch(1 0 0)'),
    foreground:          raw('oklch(0.145 0 0)'),
    card:                raw('oklch(0.99 0.004 88)'),
    cardForeground:      raw('oklch(0.145 0 0)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.145 0 0)'),
    primary:             raw('oklch(0.72 0.18 75)'),
    primaryForeground:   raw('oklch(0.145 0 0)'),
    secondary:           raw('oklch(0.97 0.005 90)'),
    secondaryForeground: raw('oklch(0.25 0.015 80)'),
    muted:               raw('oklch(0.97 0.003 90)'),
    mutedForeground:     raw('oklch(0.556 0 0)'),
    accent:              raw('oklch(0.95 0.02 88)'),
    accentForeground:    raw('oklch(0.25 0.015 80)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.922 0 0)'),
    input:               raw('oklch(0.922 0 0)'),
    ring:                raw('oklch(0.72 0.18 75)'),
  },
  dark: {
    background:          raw('oklch(0.145 0 0)'),
    foreground:          raw('oklch(0.985 0 0)'),
    card:                raw('oklch(0.18 0.008 82)'),
    cardForeground:      raw('oklch(0.985 0 0)'),
    popover:             raw('oklch(0.145 0 0)'),
    popoverForeground:   raw('oklch(0.985 0 0)'),
    primary:             raw('oklch(0.8 0.16 80)'),
    primaryForeground:   raw('oklch(0.145 0 0)'),
    secondary:           raw('oklch(0.22 0.008 82)'),
    secondaryForeground: raw('oklch(0.88 0.004 90)'),
    muted:               raw('oklch(0.21 0.006 85)'),
    mutedForeground:     raw('oklch(0.708 0 0)'),
    accent:              raw('oklch(0.25 0.015 82)'),
    accentForeground:    raw('oklch(0.88 0.008 88)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0 0)'),
    border:              raw('oklch(0.269 0 0)'),
    input:               raw('oklch(0.269 0 0)'),
    ring:                raw('oklch(0.8 0.16 80)'),
  },
  radius: '0.5rem',
})
