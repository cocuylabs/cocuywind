// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const claymorphismTheme = defineTheme({
  name: 'claymorphism',
  label: 'Claymorphism',
  light: {
    background:          raw('oklch(0.97 0.015 250)'),
    foreground:          raw('oklch(0.22 0.04 255)'),
    card:                raw('oklch(0.99 0.008 250)'),
    cardForeground:      raw('oklch(0.22 0.04 255)'),
    popover:             raw('oklch(0.99 0.008 250)'),
    popoverForeground:   raw('oklch(0.22 0.04 255)'),
    primary:             raw('oklch(0.6 0.2 255)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.93 0.025 250)'),
    secondaryForeground: raw('oklch(0.35 0.06 255)'),
    muted:               raw('oklch(0.94 0.018 250)'),
    mutedForeground:     raw('oklch(0.54 0.04 252)'),
    accent:              raw('oklch(0.92 0.04 270)'),
    accentForeground:    raw('oklch(0.32 0.08 270)'),
    destructive:         raw('oklch(0.68 0.2 12)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.88 0.03 250)'),
    input:               raw('oklch(0.88 0.03 250)'),
    ring:                raw('oklch(0.6 0.2 255)'),
  },
  dark: {
    background:          raw('oklch(0.2 0.03 255)'),
    foreground:          raw('oklch(0.94 0.012 250)'),
    card:                raw('oklch(0.26 0.038 255)'),
    cardForeground:      raw('oklch(0.94 0.012 250)'),
    popover:             raw('oklch(0.2 0.03 255)'),
    popoverForeground:   raw('oklch(0.94 0.012 250)'),
    primary:             raw('oklch(0.72 0.18 255)'),
    primaryForeground:   raw('oklch(0.2 0.03 255)'),
    secondary:           raw('oklch(0.3 0.05 255)'),
    secondaryForeground: raw('oklch(0.88 0.012 250)'),
    muted:               raw('oklch(0.28 0.04 255)'),
    mutedForeground:     raw('oklch(0.62 0.04 252)'),
    accent:              raw('oklch(0.32 0.06 270)'),
    accentForeground:    raw('oklch(0.88 0.025 268)'),
    destructive:         raw('oklch(0.5 0.18 12)'),
    destructiveForeground: raw('oklch(0.88 0.01 12)'),
    border:              raw('oklch(0.32 0.045 255)'),
    input:               raw('oklch(0.32 0.045 255)'),
    ring:                raw('oklch(0.72 0.18 255)'),
  },
  radius: '1.5rem',
})
