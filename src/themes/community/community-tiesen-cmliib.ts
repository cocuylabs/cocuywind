// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTiesenCmliibTheme = defineTheme({
  name: 'community-tiesen-cmliib',
  label: 'Tiesen',
  _sourceName: 'Tiesen',
  category: 'Community',
  light: {
    background:              raw('oklch(0.9851 0 0)'),
    foreground:              raw('oklch(0 0 0)'),
    card:                    raw('oklch(1.00 0 0)'),
    cardForeground:          raw('oklch(0.2046 0 0)'),
    popover:                 raw('oklch(1.00 0 0)'),
    popoverForeground:       raw('oklch(0 0 0)'),
    primary:                 raw('oklch(0.5144 0.1605 267.44)'),
    primaryForeground:       raw('oklch(0.97 0.014 254.604)'),
    secondary:               raw('oklch(0.94 0 0)'),
    secondaryForeground:     raw('oklch(0.25 0 0)'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('oklch(0.44 0 0)'),
    accent:                  raw('oklch(0.9214 0.0248 257.65)'),
    accentForeground:        raw('oklch(0.2571 0.1161 272.24)'),
    destructive:             raw('oklch(0.58 0.22 27)'),
    destructiveForeground:   raw('oklch(0.97 0.014 254.604)'),
    border:                  raw('oklch(0.92 0 0)'),
    input:                   raw('oklch(0.94 0 0)'),
    ring:                    raw('oklch(0.5144 0.1605 267.44)'),
  },
  dark: {
    background:              raw('oklch(0 0 0)'),
    foreground:              raw('oklch(1.00 0 0)'),
    card:                    raw('oklch(0.1448 0 0)'),
    cardForeground:          raw('oklch(0.9461 0 0)'),
    popover:                 raw('oklch(0.1448 0 0)'),
    popoverForeground:       raw('oklch(1.00 0 0)'),
    primary:                 raw('oklch(0.5144 0.1605 267.44)'),
    primaryForeground:       raw('oklch(0.97 0.014 254.604)'),
    secondary:               raw('oklch(0.25 0 0)'),
    secondaryForeground:     raw('oklch(0.94 0 0)'),
    muted:                   raw('oklch(0.23 0 0)'),
    mutedForeground:         raw('oklch(0.72 0 0)'),
    accent:                  raw('oklch(0.32 0 0)'),
    accentForeground:        raw('oklch(0.9214 0.0248 257.65)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.97 0.014 254.604)'),
    border:                  raw('oklch(0.26 0 0)'),
    input:                   raw('oklch(0.32 0 0)'),
    ring:                    raw('oklch(0.5144 0.1605 267.44)'),
  },
  fonts: {
    body: 'Geist, sans-serif',
    heading: 'Noto Serif Georgian, ui-serif, serif',
  },
  radius: '0.5rem',
})
