// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAmberMono20Cmlpw7Theme = defineTheme({
  name: 'community-amber-mono-2-0-cmlpw7',
  label: 'Amber Mono 2.0',
  _sourceName: 'Amber Mono 2.0',
  category: 'Community',
  light: {
    background:              raw('oklch(0.985 0 0)'),
    foreground:              raw('oklch(0.205 0 0)'),
    card:                    raw('oklch(0.97 0 0)'),
    cardForeground:          raw('oklch(0.205 0 0)'),
    popover:                 raw('oklch(0.97 0 0)'),
    popoverForeground:       raw('oklch(0.205 0 0)'),
    primary:                 raw('oklch(0.666 0.179 58.318)'),
    primaryForeground:       raw('oklch(0.985 0.001 106.423)'),
    secondary:               raw('oklch(0.985 0.001 106.423)'),
    secondaryForeground:     raw('oklch(0.268 0.007 34.298)'),
    muted:                   raw('oklch(0.923 0.003 48.717)'),
    mutedForeground:         raw('oklch(0.216 0.006 56.043)'),
    accent:                  raw('oklch(0.985 0.001 106.423)'),
    accentForeground:        raw('oklch(0.374 0.01 67.558)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(0.985 0.001 106.423)'),
    border:                  raw('oklch(0.869 0.005 56.366)'),
    input:                   raw('oklch(0.709 0.01 56.259)'),
    ring:                    raw('oklch(0.666 0.179 58.318)'),
  },
  dark: {
    background:              raw('oklch(0.145 0 0)'),
    foreground:              raw('oklch(0.97 0 0)'),
    card:                    raw('oklch(0.205 0 0)'),
    cardForeground:          raw('oklch(0.97 0.001 106.424)'),
    popover:                 raw('oklch(0.205 0 0)'),
    popoverForeground:       raw('oklch(0.97 0.001 106.424)'),
    primary:                 raw('oklch(0.666 0.179 58.318)'),
    primaryForeground:       raw('oklch(0.97 0.001 106.424)'),
    secondary:               raw('oklch(0.268 0.007 34.298)'),
    secondaryForeground:     raw('oklch(0.97 0.001 106.424)'),
    muted:                   raw('oklch(0.216 0.006 56.043)'),
    mutedForeground:         raw('oklch(0.709 0.01 56.259)'),
    accent:                  raw('oklch(0.374 0.01 67.558)'),
    accentForeground:        raw('oklch(0.97 0.001 106.424)'),
    destructive:             raw('oklch(0.505 0.213 27.518)'),
    destructiveForeground:   raw('oklch(0.97 0.001 106.424)'),
    border:                  raw('oklch(0.374 0.01 67.558)'),
    input:                   raw('oklch(0.268 0.007 34.298)'),
    ring:                    raw('oklch(0.473 0.137 46.201)'),
  },
  fonts: {
    body: 'Geist Mono, monospace',
    heading: 'Geist Mono, monospace',
  },
  radius: '0rem',
})
