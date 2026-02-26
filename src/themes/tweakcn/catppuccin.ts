// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const catppuccinTheme = defineTheme({
  name: 'catppuccin',
  label: 'Catppuccin',
  light: {
    background:          raw('oklch(0.955 0.012 272.8)'),
    foreground:          raw('oklch(0.318 0.042 283.2)'),
    card:                raw('oklch(0.928 0.014 267.5)'),
    cardForeground:      raw('oklch(0.318 0.042 283.2)'),
    popover:             raw('oklch(0.955 0.012 272.8)'),
    popoverForeground:   raw('oklch(0.318 0.042 283.2)'),
    primary:             raw('oklch(0.605 0.168 285.4)'),
    primaryForeground:   raw('oklch(0.955 0.012 272.8)'),
    secondary:           raw('oklch(0.906 0.016 268.2)'),
    secondaryForeground: raw('oklch(0.436 0.046 285.3)'),
    muted:               raw('oklch(0.906 0.016 268.2)'),
    mutedForeground:     raw('oklch(0.538 0.044 283.7)'),
    accent:              raw('oklch(0.875 0.065 304.5)'),
    accentForeground:    raw('oklch(0.436 0.066 304.5)'),
    destructive:         raw('oklch(0.59 0.202 14.3)'),
    destructiveForeground: raw('oklch(0.955 0.012 272.8)'),
    border:              raw('oklch(0.875 0.022 268.3)'),
    input:               raw('oklch(0.875 0.022 268.3)'),
    ring:                raw('oklch(0.605 0.168 285.4)'),
  },
  dark: {
    background:          raw('oklch(0.234 0.02 264.2)'),
    foreground:          raw('oklch(0.896 0.014 274.3)'),
    card:                raw('oklch(0.268 0.022 263.7)'),
    cardForeground:      raw('oklch(0.896 0.014 274.3)'),
    popover:             raw('oklch(0.234 0.02 264.2)'),
    popoverForeground:   raw('oklch(0.896 0.014 274.3)'),
    primary:             raw('oklch(0.748 0.152 285.8)'),
    primaryForeground:   raw('oklch(0.234 0.02 264.2)'),
    secondary:           raw('oklch(0.312 0.024 263.3)'),
    secondaryForeground: raw('oklch(0.769 0.015 274.8)'),
    muted:               raw('oklch(0.312 0.024 263.3)'),
    mutedForeground:     raw('oklch(0.655 0.021 272.6)'),
    accent:              raw('oklch(0.518 0.165 304.5)'),
    accentForeground:    raw('oklch(0.896 0.014 274.3)'),
    destructive:         raw('oklch(0.506 0.173 14.3)'),
    destructiveForeground: raw('oklch(0.896 0.014 274.3)'),
    border:              raw('oklch(0.356 0.026 261.2)'),
    input:               raw('oklch(0.356 0.026 261.2)'),
    ring:                raw('oklch(0.748 0.152 285.8)'),
  },
  radius: '0.5rem',
})
