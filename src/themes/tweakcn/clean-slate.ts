// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const cleanSlateTheme = defineTheme({
  name: 'clean-slate',
  label: 'Clean Slate',
  light: {
    background:          raw('oklch(0.984 0.003 247.858)'),
    foreground:          raw('oklch(0.208 0.042 265.755)'),
    card:                raw('oklch(1 0 0)'),
    cardForeground:      raw('oklch(0.208 0.042 265.755)'),
    popover:             raw('oklch(1 0 0)'),
    popoverForeground:   raw('oklch(0.208 0.042 265.755)'),
    primary:             raw('oklch(0.446 0.043 257.281)'),
    primaryForeground:   raw('oklch(0.984 0.003 247.858)'),
    secondary:           raw('oklch(0.968 0.007 247.896)'),
    secondaryForeground: raw('oklch(0.446 0.043 257.281)'),
    muted:               raw('oklch(0.968 0.007 247.896)'),
    mutedForeground:     raw('oklch(0.554 0.046 257.417)'),
    accent:              raw('oklch(0.929 0.013 255.508)'),
    accentForeground:    raw('oklch(0.372 0.044 257.287)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.984 0.003 247.858)'),
    border:              raw('oklch(0.869 0.022 252.894)'),
    input:               raw('oklch(0.869 0.022 252.894)'),
    ring:                raw('oklch(0.554 0.046 257.417)'),
  },
  dark: {
    background:          raw('oklch(0.129 0.042 264.695)'),
    foreground:          raw('oklch(0.968 0.007 247.896)'),
    card:                raw('oklch(0.208 0.042 265.755)'),
    cardForeground:      raw('oklch(0.968 0.007 247.896)'),
    popover:             raw('oklch(0.129 0.042 264.695)'),
    popoverForeground:   raw('oklch(0.968 0.007 247.896)'),
    primary:             raw('oklch(0.869 0.022 252.894)'),
    primaryForeground:   raw('oklch(0.129 0.042 264.695)'),
    secondary:           raw('oklch(0.279 0.041 260.031)'),
    secondaryForeground: raw('oklch(0.869 0.022 252.894)'),
    muted:               raw('oklch(0.279 0.041 260.031)'),
    mutedForeground:     raw('oklch(0.704 0.04 256.788)'),
    accent:              raw('oklch(0.372 0.044 257.287)'),
    accentForeground:    raw('oklch(0.929 0.013 255.508)'),
    destructive:         raw('oklch(0.396 0.141 25.723)'),
    destructiveForeground: raw('oklch(0.637 0.237 25.331)'),
    border:              raw('oklch(0.372 0.044 257.287)'),
    input:               raw('oklch(0.372 0.044 257.287)'),
    ring:                raw('oklch(0.704 0.04 256.788)'),
  },
  radius: '0.5rem',
})
