// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const graphiteTheme = defineTheme({
  name: 'graphite',
  label: 'Graphite',
  light: {
    background:          raw('oklch(0.97 0.002 240)'),
    foreground:          raw('oklch(0.18 0.008 240)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.18 0.008 240)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.18 0.008 240)'),
    primary:             raw('oklch(0.3 0.015 240)'),
    primaryForeground:   raw('oklch(0.97 0.002 240)'),
    secondary:           raw('oklch(0.93 0.004 240)'),
    secondaryForeground: raw('oklch(0.3 0.01 240)'),
    muted:               raw('oklch(0.93 0.003 240)'),
    mutedForeground:     raw('oklch(0.52 0.008 240)'),
    accent:              raw('oklch(0.91 0.006 240)'),
    accentForeground:    raw('oklch(0.25 0.012 240)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.97 0.002 240)'),
    border:              raw('oklch(0.88 0.006 240)'),
    input:               raw('oklch(0.88 0.006 240)'),
    ring:                raw('oklch(0.5 0.012 240)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.006 240)'),
    foreground:          raw('oklch(0.93 0.004 240)'),
    card:                raw('oklch(0.2 0.008 240)'),
    cardForeground:      raw('oklch(0.93 0.004 240)'),
    popover:             raw('oklch(0.16 0.006 240)'),
    popoverForeground:   raw('oklch(0.93 0.004 240)'),
    primary:             raw('oklch(0.85 0.006 240)'),
    primaryForeground:   raw('oklch(0.16 0.006 240)'),
    secondary:           raw('oklch(0.26 0.008 240)'),
    secondaryForeground: raw('oklch(0.88 0.004 240)'),
    muted:               raw('oklch(0.25 0.007 240)'),
    mutedForeground:     raw('oklch(0.62 0.006 240)'),
    accent:              raw('oklch(0.28 0.009 240)'),
    accentForeground:    raw('oklch(0.88 0.004 240)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.004 240)'),
    border:              raw('oklch(0.28 0.008 240)'),
    input:               raw('oklch(0.28 0.008 240)'),
    ring:                raw('oklch(0.6 0.008 240)'),
  },
  radius: '0.375rem',
})
