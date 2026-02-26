// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const perpetuityTheme = defineTheme({
  name: 'perpetuity',
  label: 'Perpetuity',
  light: {
    background:          raw('oklch(0.97 0.004 106)'),
    foreground:          raw('oklch(0.185 0.008 106)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.185 0.008 106)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.185 0.008 106)'),
    primary:             raw('oklch(0.265 0.012 106)'),
    primaryForeground:   raw('oklch(0.97 0.004 106)'),
    secondary:           raw('oklch(0.935 0.006 106)'),
    secondaryForeground: raw('oklch(0.265 0.012 106)'),
    muted:               raw('oklch(0.935 0.005 106)'),
    mutedForeground:     raw('oklch(0.532 0.008 106)'),
    accent:              raw('oklch(0.91 0.01 106)'),
    accentForeground:    raw('oklch(0.22 0.01 106)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.97 0.004 106)'),
    border:              raw('oklch(0.875 0.01 106)'),
    input:               raw('oklch(0.875 0.01 106)'),
    ring:                raw('oklch(0.532 0.008 106)'),
  },
  dark: {
    background:          raw('oklch(0.147 0.004 106)'),
    foreground:          raw('oklch(0.97 0.004 106)'),
    card:                raw('oklch(0.205 0.006 106)'),
    cardForeground:      raw('oklch(0.97 0.004 106)'),
    popover:             raw('oklch(0.147 0.004 106)'),
    popoverForeground:   raw('oklch(0.97 0.004 106)'),
    primary:             raw('oklch(0.87 0.008 106)'),
    primaryForeground:   raw('oklch(0.147 0.004 106)'),
    secondary:           raw('oklch(0.267 0.006 106)'),
    secondaryForeground: raw('oklch(0.97 0.004 106)'),
    muted:               raw('oklch(0.267 0.006 106)'),
    mutedForeground:     raw('oklch(0.709 0.006 106)'),
    accent:              raw('oklch(0.267 0.006 106)'),
    accentForeground:    raw('oklch(0.97 0.004 106)'),
    destructive:         raw('oklch(0.396 0.141 25.723)'),
    destructiveForeground: raw('oklch(0.637 0.237 25.331)'),
    border:              raw('oklch(0.267 0.006 106)'),
    input:               raw('oklch(0.267 0.006 106)'),
    ring:                raw('oklch(0.439 0.006 106)'),
  },
  radius: '0.5rem',
})
