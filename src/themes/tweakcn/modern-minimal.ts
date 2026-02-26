// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const modernMinimalTheme = defineTheme({
  name: 'modern-minimal',
  label: 'Modern Minimal',
  light: {
    background:          raw('oklch(1 0 0)'),
    foreground:          raw('oklch(0.145 0 0)'),
    card:                raw('oklch(0.985 0 0)'),
    cardForeground:      raw('oklch(0.145 0 0)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.145 0 0)'),
    primary:             raw('oklch(0.205 0 0)'),
    primaryForeground:   raw('oklch(0.985 0 0)'),
    secondary:           raw('oklch(0.97 0 0)'),
    secondaryForeground: raw('oklch(0.205 0 0)'),
    muted:               raw('oklch(0.97 0 0)'),
    mutedForeground:     raw('oklch(0.556 0 0)'),
    accent:              raw('oklch(0.97 0 0)'),
    accentForeground:    raw('oklch(0.205 0 0)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.985 0 0)'),
    border:              raw('oklch(0.922 0 0)'),
    input:               raw('oklch(0.922 0 0)'),
    ring:                raw('oklch(0.708 0 0)'),
  },
  dark: {
    background:          raw('oklch(0.145 0 0)'),
    foreground:          raw('oklch(0.985 0 0)'),
    card:                raw('oklch(0.205 0 0)'),
    cardForeground:      raw('oklch(0.985 0 0)'),
    popover:             raw('oklch(0.145 0 0)'),
    popoverForeground:   raw('oklch(0.985 0 0)'),
    primary:             raw('oklch(0.922 0 0)'),
    primaryForeground:   raw('oklch(0.205 0 0)'),
    secondary:           raw('oklch(0.269 0 0)'),
    secondaryForeground: raw('oklch(0.985 0 0)'),
    muted:               raw('oklch(0.269 0 0)'),
    mutedForeground:     raw('oklch(0.708 0 0)'),
    accent:              raw('oklch(0.269 0 0)'),
    accentForeground:    raw('oklch(0.985 0 0)'),
    destructive:         raw('oklch(0.396 0.141 25.723)'),
    destructiveForeground: raw('oklch(0.637 0.237 25.331)'),
    border:              raw('oklch(0.269 0 0)'),
    input:               raw('oklch(0.269 0 0)'),
    ring:                raw('oklch(0.439 0 0)'),
  },
  radius: '0.5rem',
})
