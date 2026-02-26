// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const natureTheme = defineTheme({
  name: 'nature',
  label: 'Nature',
  light: {
    background:          raw('oklch(0.975 0.015 138)'),
    foreground:          raw('oklch(0.215 0.05 155)'),
    card:                raw('oklch(0.99 0.008 135)'),
    cardForeground:      raw('oklch(0.215 0.05 155)'),
    popover:             raw('oklch(0.99 0.008 135)'),
    popoverForeground:   raw('oklch(0.215 0.05 155)'),
    primary:             raw('oklch(0.45 0.14 155)'),
    primaryForeground:   raw('oklch(0.975 0.015 138)'),
    secondary:           raw('oklch(0.92 0.03 140)'),
    secondaryForeground: raw('oklch(0.32 0.08 155)'),
    muted:               raw('oklch(0.93 0.022 138)'),
    mutedForeground:     raw('oklch(0.52 0.055 150)'),
    accent:              raw('oklch(0.89 0.05 115)'),
    accentForeground:    raw('oklch(0.3 0.08 130)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.975 0.015 138)'),
    border:              raw('oklch(0.88 0.035 138)'),
    input:               raw('oklch(0.88 0.035 138)'),
    ring:                raw('oklch(0.45 0.14 155)'),
  },
  dark: {
    background:          raw('oklch(0.19 0.035 155)'),
    foreground:          raw('oklch(0.93 0.018 138)'),
    card:                raw('oklch(0.24 0.042 155)'),
    cardForeground:      raw('oklch(0.93 0.018 138)'),
    popover:             raw('oklch(0.19 0.035 155)'),
    popoverForeground:   raw('oklch(0.93 0.018 138)'),
    primary:             raw('oklch(0.65 0.15 155)'),
    primaryForeground:   raw('oklch(0.19 0.035 155)'),
    secondary:           raw('oklch(0.29 0.055 155)'),
    secondaryForeground: raw('oklch(0.88 0.018 138)'),
    muted:               raw('oklch(0.27 0.045 155)'),
    mutedForeground:     raw('oklch(0.6 0.055 150)'),
    accent:              raw('oklch(0.32 0.065 115)'),
    accentForeground:    raw('oklch(0.88 0.025 128)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.018 25)'),
    border:              raw('oklch(0.31 0.05 155)'),
    input:               raw('oklch(0.31 0.05 155)'),
    ring:                raw('oklch(0.65 0.15 155)'),
  },
  radius: '0.625rem',
})
