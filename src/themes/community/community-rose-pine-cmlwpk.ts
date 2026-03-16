// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRosePineCmlwpkTheme = defineTheme({
  name: 'community-rose-pine-cmlwpk',
  label: 'Rose Pine',
  _sourceName: 'Rose Pine',
  category: 'Community',
  light: {
    background:              raw('#faf4ed'),
    foreground:              raw('#575279'),
    card:                    raw('#fffaf3'),
    cardForeground:          raw('#575279'),
    popover:                 raw('#f2e9e1'),
    popoverForeground:       raw('#575279'),
    primary:                 raw('#575279'),
    primaryForeground:       raw('#faf4ed'),
    secondary:               raw('#dfdad9'),
    secondaryForeground:     raw('#575279'),
    muted:                   raw('#f4ede8'),
    mutedForeground:         raw('#797593'),
    accent:                  raw('#f2e9e1'),
    accentForeground:        raw('#575279'),
    destructive:             raw('#b4637a'),
    destructiveForeground:   raw('#faf4ed'),
    border:                  raw('#cecacd'),
    input:                   raw('#dfdad9'),
    ring:                    raw('#907aa9'),
  },
  dark: {
    background:              raw('#191724'),
    foreground:              raw('#e0def4'),
    card:                    raw('#1f1d2e'),
    cardForeground:          raw('#e0def4'),
    popover:                 raw('#26233a'),
    popoverForeground:       raw('#e0def4'),
    primary:                 raw('#e0def4'),
    primaryForeground:       raw('#191724'),
    secondary:               raw('#403d52'),
    secondaryForeground:     raw('#e0def4'),
    muted:                   raw('#21202e'),
    mutedForeground:         raw('#908caa'),
    accent:                  raw('#26233a'),
    accentForeground:        raw('#e0def4'),
    destructive:             raw('#eb6f92'),
    destructiveForeground:   raw('#191724'),
    border:                  raw('#403d52'),
    input:                   raw('#524f67'),
    ring:                    raw('#c4a7e7'),
  },
  fonts: {
    body: 'Geist, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
