// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const twitterTheme = defineTheme({
  name: 'twitter',
  label: 'Twitter / X',
  light: {
    background:          raw('oklch(1 0 0)'),
    foreground:          raw('oklch(0.141 0.005 285.823)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.141 0.005 285.823)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.141 0.005 285.823)'),
    primary:             raw('oklch(0.623 0.214 259.815)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.967 0.001 286.375)'),
    secondaryForeground: raw('oklch(0.141 0.005 285.823)'),
    muted:               raw('oklch(0.967 0.001 286.375)'),
    mutedForeground:     raw('oklch(0.552 0.016 285.938)'),
    accent:              raw('oklch(0.967 0.001 286.375)'),
    accentForeground:    raw('oklch(0.141 0.005 285.823)'),
    destructive:         raw('oklch(0.637 0.237 25.331)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.92 0.004 286.32)'),
    input:               raw('oklch(0.92 0.004 286.32)'),
    ring:                raw('oklch(0.623 0.214 259.815)'),
  },
  dark: {
    background:          raw('oklch(0.141 0.005 285.823)'),
    foreground:          raw('oklch(0.985 0 0)'),
    card:                raw('oklch(0.21 0.006 285.885)'),
    cardForeground:      raw('oklch(0.985 0 0)'),
    popover:             raw('oklch(0.141 0.005 285.823)'),
    popoverForeground:   raw('oklch(0.985 0 0)'),
    primary:             raw('oklch(0.707 0.165 254.624)'),
    primaryForeground:   raw('oklch(0.141 0.005 285.823)'),
    secondary:           raw('oklch(0.274 0.006 286.033)'),
    secondaryForeground: raw('oklch(0.985 0 0)'),
    muted:               raw('oklch(0.274 0.006 286.033)'),
    mutedForeground:     raw('oklch(0.705 0.015 286.067)'),
    accent:              raw('oklch(0.274 0.006 286.033)'),
    accentForeground:    raw('oklch(0.985 0 0)'),
    destructive:         raw('oklch(0.505 0.213 27.518)'),
    destructiveForeground: raw('oklch(0.985 0 0)'),
    border:              raw('oklch(0.274 0.006 286.033)'),
    input:               raw('oklch(0.274 0.006 286.033)'),
    ring:                raw('oklch(0.707 0.165 254.624)'),
  },
  radius: '1rem',
})
