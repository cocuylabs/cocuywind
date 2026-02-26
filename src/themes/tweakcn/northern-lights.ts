// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const northernLightsTheme = defineTheme({
  name: 'northern-lights',
  label: 'Northern Lights',
  light: {
    background:          raw('oklch(0.97 0.015 195)'),
    foreground:          raw('oklch(0.18 0.04 210)'),
    card:                raw('oklch(0.99 0.008 195)'),
    cardForeground:      raw('oklch(0.18 0.04 210)'),
    popover:             raw('oklch(0.99 0.008 195)'),
    popoverForeground:   raw('oklch(0.18 0.04 210)'),
    primary:             raw('oklch(0.55 0.18 210)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.92 0.03 175)'),
    secondaryForeground: raw('oklch(0.3 0.07 185)'),
    muted:               raw('oklch(0.93 0.02 192)'),
    mutedForeground:     raw('oklch(0.52 0.05 200)'),
    accent:              raw('oklch(0.88 0.07 290)'),
    accentForeground:    raw('oklch(0.3 0.1 285)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.87 0.03 192)'),
    input:               raw('oklch(0.87 0.03 192)'),
    ring:                raw('oklch(0.55 0.18 210)'),
  },
  dark: {
    background:          raw('oklch(0.16 0.035 210)'),
    foreground:          raw('oklch(0.93 0.015 192)'),
    card:                raw('oklch(0.21 0.043 210)'),
    cardForeground:      raw('oklch(0.93 0.015 192)'),
    popover:             raw('oklch(0.16 0.035 210)'),
    popoverForeground:   raw('oklch(0.93 0.015 192)'),
    primary:             raw('oklch(0.68 0.17 210)'),
    primaryForeground:   raw('oklch(0.16 0.035 210)'),
    secondary:           raw('oklch(0.26 0.055 175)'),
    secondaryForeground: raw('oklch(0.88 0.018 185)'),
    muted:               raw('oklch(0.24 0.042 210)'),
    mutedForeground:     raw('oklch(0.6 0.05 200)'),
    accent:              raw('oklch(0.35 0.1 285)'),
    accentForeground:    raw('oklch(0.88 0.03 288)'),
    destructive:         raw('oklch(0.44 0.17 25)'),
    destructiveForeground: raw('oklch(0.88 0.01 25)'),
    border:              raw('oklch(0.28 0.048 210)'),
    input:               raw('oklch(0.28 0.048 210)'),
    ring:                raw('oklch(0.68 0.17 210)'),
  },
  radius: '0.5rem',
})
