// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityVermillionCmmtjpTheme = defineTheme({
  name: 'community-vermillion-cmmtjp',
  label: 'Vermillion',
  _sourceName: 'Vermillion',
  category: 'Community',
  light: {
    background:              raw('#f7f8f9'),
    foreground:              raw('#191b1e'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#191b1e'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#191b1e'),
    primary:                 raw('#d24730'),
    primaryForeground:       raw('#f7f8f9'),
    secondary:               raw('#f0f2f3'),
    secondaryForeground:     raw('#35383f'),
    muted:                   raw('#edeff1'),
    mutedForeground:         raw('#838a93'),
    accent:                  raw('#f0f2f3'),
    accentForeground:        raw('#35383f'),
    destructive:             raw('#d24730'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#dfe2e5'),
    input:                   raw('#dfe2e5'),
    ring:                    raw('#d24730'),
  },
  dark: {
    background:              raw('#131416'),
    foreground:              raw('#edeef0'),
    card:                    raw('#1b1d20'),
    cardForeground:          raw('#edeef0'),
    popover:                 raw('#1b1d20'),
    popoverForeground:       raw('#edeef0'),
    primary:                 raw('#d24730'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#24262a'),
    secondaryForeground:     raw('#a8abb2'),
    muted:                   raw('#24262a'),
    mutedForeground:         raw('#6a6f77'),
    accent:                  raw('#24262a'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#d24730'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2b2e32'),
    input:                   raw('#2b2e32'),
    ring:                    raw('#d24730'),
  },
  fonts: {
    body: 'DM Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'DM Serif Text, ui-serif, serif',
  },
  radius: '0.5rem',
})
