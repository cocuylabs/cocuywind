// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const t3ChatTheme = defineTheme({
  name: 't3-chat',
  label: 'T3 Chat',
  light: {
    background:          raw('oklch(0.985 0.002 247.839)'),
    foreground:          raw('oklch(0.208 0.042 265.755)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.208 0.042 265.755)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.208 0.042 265.755)'),
    primary:             raw('oklch(0.585 0.233 277.117)'),
    primaryForeground:   raw('oklch(1 0 0)'),
    secondary:           raw('oklch(0.967 0.003 264.542)'),
    secondaryForeground: raw('oklch(0.208 0.042 265.755)'),
    muted:               raw('oklch(0.967 0.003 264.542)'),
    mutedForeground:     raw('oklch(0.551 0.027 264.364)'),
    accent:              raw('oklch(0.962 0.018 272.314)'),
    accentForeground:    raw('oklch(0.457 0.24 277.023)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(1 0 0)'),
    border:              raw('oklch(0.928 0.006 264.531)'),
    input:               raw('oklch(0.928 0.006 264.531)'),
    ring:                raw('oklch(0.585 0.233 277.117)'),
  },
  dark: {
    background:          raw('oklch(0.208 0.042 265.755)'),
    foreground:          raw('oklch(0.985 0.002 247.839)'),
    card:                raw('oklch(0.279 0.041 260.031)'),
    cardForeground:      raw('oklch(0.985 0.002 247.839)'),
    popover:             raw('oklch(0.208 0.042 265.755)'),
    popoverForeground:   raw('oklch(0.985 0.002 247.839)'),
    primary:             raw('oklch(0.673 0.182 276.935)'),
    primaryForeground:   raw('oklch(0.208 0.042 265.755)'),
    secondary:           raw('oklch(0.279 0.041 260.031)'),
    secondaryForeground: raw('oklch(0.985 0.002 247.839)'),
    muted:               raw('oklch(0.279 0.041 260.031)'),
    mutedForeground:     raw('oklch(0.707 0.022 261.325)'),
    accent:              raw('oklch(0.457 0.24 277.023)'),
    accentForeground:    raw('oklch(0.962 0.018 272.314)'),
    destructive:         raw('oklch(0.396 0.141 25.723)'),
    destructiveForeground: raw('oklch(0.637 0.237 25.331)'),
    border:              raw('oklch(0.372 0.044 257.287)'),
    input:               raw('oklch(0.372 0.044 257.287)'),
    ring:                raw('oklch(0.673 0.182 276.935)'),
  },
  radius: '0.625rem',
})
