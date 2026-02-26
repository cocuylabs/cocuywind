// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const oceanBreezeTheme = defineTheme({
  name: 'ocean-breeze',
  label: 'Ocean Breeze',
  light: {
    background:          raw('oklch(0.975 0.012 212)'),
    foreground:          raw('oklch(0.2 0.04 225)'),
    card:                raw('oklch(0.99 0.006 212)'),
    cardForeground:      raw('oklch(0.2 0.04 225)'),
    popover:             raw('oklch(0.99 0.006 212)'),
    popoverForeground:   raw('oklch(0.2 0.04 225)'),
    primary:             raw('oklch(0.5 0.15 225)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.93 0.025 212)'),
    secondaryForeground: raw('oklch(0.32 0.07 225)'),
    muted:               raw('oklch(0.93 0.018 210)'),
    mutedForeground:     raw('oklch(0.52 0.05 218)'),
    accent:              raw('oklch(0.91 0.04 190)'),
    accentForeground:    raw('oklch(0.3 0.08 195)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.88 0.03 210)'),
    input:               raw('oklch(0.88 0.03 210)'),
    ring:                raw('oklch(0.5 0.15 225)'),
  },
  dark: {
    background:          raw('oklch(0.17 0.035 225)'),
    foreground:          raw('oklch(0.93 0.015 212)'),
    card:                raw('oklch(0.22 0.042 225)'),
    cardForeground:      raw('oklch(0.93 0.015 212)'),
    popover:             raw('oklch(0.17 0.035 225)'),
    popoverForeground:   raw('oklch(0.93 0.015 212)'),
    primary:             raw('oklch(0.65 0.14 225)'),
    primaryForeground:   raw('oklch(0.17 0.035 225)'),
    secondary:           raw('oklch(0.27 0.052 225)'),
    secondaryForeground: raw('oklch(0.88 0.015 212)'),
    muted:               raw('oklch(0.25 0.042 225)'),
    mutedForeground:     raw('oklch(0.6 0.05 218)'),
    accent:              raw('oklch(0.3 0.06 190)'),
    accentForeground:    raw('oklch(0.88 0.025 192)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.01 25)'),
    border:              raw('oklch(0.3 0.048 225)'),
    input:               raw('oklch(0.3 0.048 225)'),
    ring:                raw('oklch(0.65 0.14 225)'),
  },
  radius: '0.625rem',
})
