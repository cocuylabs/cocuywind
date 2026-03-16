// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLaraCmm277Theme = defineTheme({
  name: 'community-lara-cmm277',
  label: 'Lara',
  _sourceName: 'Lara',
  category: 'Community',
  light: {
    background:              raw('oklch(0.985 0 0)'),
    foreground:              raw('oklch(0.145 0 0)'),
    card:                    raw('oklch(99.5% 0 0)'),
    cardForeground:          raw('oklch(0.145 0 0)'),
    popover:                 raw('oklch(99.5% 0 0)'),
    popoverForeground:       raw('oklch(0.145 0 0)'),
    primary:                 raw('oklch(0.637 0.237 25.331)'),
    primaryForeground:       raw('oklch(0.985 0 0)'),
    secondary:               raw('oklch(0.97 0 0)'),
    secondaryForeground:     raw('oklch(0.269 0 0)'),
    muted:                   raw('oklch(0.968 0.007 247.896)'),
    mutedForeground:         raw('oklch(0.554 0.046 257.417)'),
    accent:                  raw('oklch(0.637 0.237 25.331)'),
    accentForeground:        raw('oklch(0.985 0 0)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('oklch(0.929 0.013 255.508)'),
    input:                   raw('oklch(0.929 0.013 255.508)'),
    ring:                    raw('oklch(0.637 0.237 25.331)'),
  },
  dark: {
    background:              raw('oklch(0.145 0 0)'),
    foreground:              raw('oklch(0.985 0 0)'),
    card:                    raw('oklch(0.21 0.006 285.885)'),
    cardForeground:          raw('oklch(0.985 0 0)'),
    popover:                 raw('oklch(0.269 0 0)'),
    popoverForeground:       raw('oklch(0.985 0 0)'),
    primary:                 raw('oklch(0.637 0.237 25.331)'),
    primaryForeground:       raw('oklch(0.985 0 0)'),
    secondary:               raw('oklch(0.269 0 0)'),
    secondaryForeground:     raw('oklch(0.985 0 0)'),
    muted:                   raw('oklch(0.274 0.006 286.033)'),
    mutedForeground:         raw('oklch(0.923 0.003 48.717)'),
    accent:                  raw('oklch(0.637 0.237 25.331)'),
    accentForeground:        raw('oklch(0.985 0 0)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('oklch(0.371 0 0)'),
    input:                   raw('oklch(0.371 0 0)'),
    ring:                    raw('oklch(0.637 0.237 25.331)'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'Noto Serif Georgian, ui-serif, serif',
  },
  radius: '0.5rem',
})
