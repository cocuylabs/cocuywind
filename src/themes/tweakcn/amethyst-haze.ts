// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const amethystHazeTheme = defineTheme({
  name: 'amethyst-haze',
  label: 'Amethyst Haze',
  light: {
    background:          raw('oklch(0.97 0.008 310)'),
    foreground:          raw('oklch(0.22 0.045 305)'),
    card:                raw('oklch(0.99 0.004 310)'),
    cardForeground:      raw('oklch(0.22 0.045 305)'),
    popover:             raw('oklch(0.99 0.004 310)'),
    popoverForeground:   raw('oklch(0.22 0.045 305)'),
    primary:             raw('oklch(0.56 0.2 305)'),
    primaryForeground:   raw('oklch(0.99 0.004 310)'),
    secondary:           raw('oklch(0.93 0.018 310)'),
    secondaryForeground: raw('oklch(0.38 0.08 305)'),
    muted:               raw('oklch(0.93 0.012 310)'),
    mutedForeground:     raw('oklch(0.52 0.05 305)'),
    accent:              raw('oklch(0.91 0.03 280)'),
    accentForeground:    raw('oklch(0.32 0.1 280)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.99 0.004 310)'),
    border:              raw('oklch(0.9 0.02 308)'),
    input:               raw('oklch(0.9 0.02 308)'),
    ring:                raw('oklch(0.56 0.2 305)'),
  },
  dark: {
    background:          raw('oklch(0.17 0.03 305)'),
    foreground:          raw('oklch(0.94 0.01 308)'),
    card:                raw('oklch(0.22 0.038 305)'),
    cardForeground:      raw('oklch(0.94 0.01 308)'),
    popover:             raw('oklch(0.17 0.03 305)'),
    popoverForeground:   raw('oklch(0.94 0.01 308)'),
    primary:             raw('oklch(0.72 0.17 305)'),
    primaryForeground:   raw('oklch(0.17 0.03 305)'),
    secondary:           raw('oklch(0.28 0.05 305)'),
    secondaryForeground: raw('oklch(0.88 0.015 308)'),
    muted:               raw('oklch(0.26 0.04 305)'),
    mutedForeground:     raw('oklch(0.64 0.05 305)'),
    accent:              raw('oklch(0.3 0.07 280)'),
    accentForeground:    raw('oklch(0.88 0.02 280)'),
    destructive:         raw('oklch(0.46 0.18 25)'),
    destructiveForeground: raw('oklch(0.88 0.02 25)'),
    border:              raw('oklch(0.3 0.04 305)'),
    input:               raw('oklch(0.3 0.04 305)'),
    ring:                raw('oklch(0.72 0.17 305)'),
  },
  radius: '0.75rem',
})
