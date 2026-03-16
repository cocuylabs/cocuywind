// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityViolateEyeCmm3ebTheme = defineTheme({
  name: 'community-violate-eye-cmm3eb',
  label: 'Violate Eye',
  _sourceName: 'Violate eye',
  category: 'Community',
  light: {
    background:              raw('#fbfbff'),
    foreground:              raw('#1a1b25'),
    card:                    raw('#fbfbff'),
    cardForeground:          raw('#1a1b25'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1b25'),
    primary:                 raw('#846feb'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f0effd'),
    secondaryForeground:     raw('#3b3464'),
    muted:                   raw('#f1f1f8'),
    mutedForeground:         raw('#63637e'),
    accent:                  raw('#f0effd'),
    accentForeground:        raw('#4b36cc'),
    destructive:             raw('#eb4f4f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2e2f2'),
    input:                   raw('#d0d0eb'),
    ring:                    raw('#846feb'),
  },
  dark: {
    background:              raw('#0b0a12'),
    foreground:              raw('#e6e6f2'),
    card:                    raw('#0b0a12'),
    cardForeground:          raw('#e6e6f2'),
    popover:                 raw('#14131f'),
    popoverForeground:       raw('#e6e6f2'),
    primary:                 raw('#846feb'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1d1b30'),
    secondaryForeground:     raw('#e6e6f2'),
    muted:                   raw('#161524'),
    mutedForeground:         raw('#9898b8'),
    accent:                  raw('#252244'),
    accentForeground:        raw('#b5a9f2'),
    destructive:             raw('#811d1d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#222135'),
    input:                   raw('#2c2a47'),
    ring:                    raw('#846feb'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Merriweather, serif',
  },
  radius: '0.5rem',
})
