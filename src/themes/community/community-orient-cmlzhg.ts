// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOrientCmlzhgTheme = defineTheme({
  name: 'community-orient-cmlzhg',
  label: 'Orient',
  _sourceName: 'orient',
  category: 'Community',
  light: {
    background:              raw('#fcfbf7'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#f8f5ed'),
    cardForeground:          raw('#1a1a1a'),
    popover:                 raw('#fcfbf7'),
    popoverForeground:       raw('#1a1a1a'),
    primary:                 raw('#ff0000'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffd700'),
    secondaryForeground:     raw('#1a1a1a'),
    muted:                   raw('#e8e4d8'),
    mutedForeground:         raw('#5e5e5e'),
    accent:                  raw('#fff492'),
    accentForeground:        raw('#1a1a1a'),
    destructive:             raw('#d32f2f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d6d0c0'),
    input:                   raw('#d6d0c0'),
    ring:                    raw('#ff0000'),
  },
  dark: {
    background:              raw('#0c0c0c'),
    foreground:              raw('#f5f5f5'),
    card:                    raw('#161616'),
    cardForeground:          raw('#f5f5f5'),
    popover:                 raw('#0c0c0c'),
    popoverForeground:       raw('#f5f5f5'),
    primary:                 raw('#ff1a1a'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffee00'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#2a2a2a'),
    mutedForeground:         raw('#b0b0b0'),
    accent:                  raw('#3d3a00'),
    accentForeground:        raw('#f5f5f5'),
    destructive:             raw('#ff4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#333333'),
    input:                   raw('#333333'),
    ring:                    raw('#ff1a1a'),
  },
  fonts: {
    body: 'Noto Serif SC, serif',
    heading: 'Noto Serif SC, serif',
  },
  radius: '0.25rem',
})
