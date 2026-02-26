// Ported from tweakcn (https://tweakcn.com) — Apache License 2.0
// Original author: jnsahaj (https://github.com/jnsahaj/tweakcn)

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const claudeTheme = defineTheme({
  name: 'claude',
  label: 'Claude',
  light: {
    background:          raw('oklch(0.9765 0.0126 73.35)'),
    foreground:          raw('oklch(0.2588 0.0533 46.98)'),
    card:                raw('oklch(0.9765 0.0126 73.35)'),
    cardForeground:      raw('oklch(0.2588 0.0533 46.98)'),
    popover:             raw('oklch(0.9765 0.0126 73.35)'),
    popoverForeground:   raw('oklch(0.2588 0.0533 46.98)'),
    primary:             raw('oklch(0.6471 0.1408 43.64)'),
    primaryForeground:   raw('oklch(0.9765 0.0126 73.35)'),
    secondary:           raw('oklch(0.9285 0.0227 74.08)'),
    secondaryForeground: raw('oklch(0.4432 0.0688 45.09)'),
    muted:               raw('oklch(0.9285 0.0227 74.08)'),
    mutedForeground:     raw('oklch(0.5549 0.0644 46.27)'),
    accent:              raw('oklch(0.8824 0.0526 74.4)'),
    accentForeground:    raw('oklch(0.3314 0.0618 45.85)'),
    destructive:         raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground: raw('oklch(0.9765 0.0126 73.35)'),
    border:              raw('oklch(0.8549 0.0441 73.35)'),
    input:               raw('oklch(0.8549 0.0441 73.35)'),
    ring:                raw('oklch(0.6471 0.1408 43.64)'),
  },
  dark: {
    background:          raw('oklch(0.2157 0.0372 46.9)'),
    foreground:          raw('oklch(0.9412 0.0184 74.33)'),
    card:                raw('oklch(0.2549 0.0451 47.22)'),
    cardForeground:      raw('oklch(0.9412 0.0184 74.33)'),
    popover:             raw('oklch(0.2157 0.0372 46.9)'),
    popoverForeground:   raw('oklch(0.9412 0.0184 74.33)'),
    primary:             raw('oklch(0.7647 0.1195 51.85)'),
    primaryForeground:   raw('oklch(0.2157 0.0372 46.9)'),
    secondary:           raw('oklch(0.3176 0.0547 46.98)'),
    secondaryForeground: raw('oklch(0.8706 0.0363 73.74)'),
    muted:               raw('oklch(0.3176 0.0547 46.98)'),
    mutedForeground:     raw('oklch(0.702 0.0693 50.25)'),
    accent:              raw('oklch(0.3647 0.0608 47.06)'),
    accentForeground:    raw('oklch(0.9176 0.025 74.12)'),
    destructive:         raw('oklch(0.396 0.141 25.723)'),
    destructiveForeground: raw('oklch(0.637 0.237 25.331)'),
    border:              raw('oklch(0.3647 0.0608 47.06)'),
    input:               raw('oklch(0.3647 0.0608 47.06)'),
    ring:                raw('oklch(0.7647 0.1195 51.85)'),
  },
  radius: '0.75rem',
})
