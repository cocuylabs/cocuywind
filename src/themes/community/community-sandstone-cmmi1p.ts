// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySandstoneCmmi1pTheme = defineTheme({
  name: 'community-sandstone-cmmi1p',
  label: 'Sandstone',
  _sourceName: 'Sandstone',
  category: 'Community',
  light: {
    background:              raw('#f8f8f7'),
    foreground:              raw('#1d1d1b'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1d1d1b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1d1d1b'),
    primary:                 raw('#2c2c2c'),
    primaryForeground:       raw('#f8f8f7'),
    secondary:               raw('#f5f5f0'),
    secondaryForeground:     raw('#3d3d38'),
    muted:                   raw('#f6f3ee'),
    mutedForeground:         raw('#6e6e68'),
    accent:                  raw('#ffd061'),
    accentForeground:        raw('#2c2c2c'),
    destructive:             raw('#db3837'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e4dd'),
    input:                   raw('#e7e4dd'),
    ring:                    raw('#ffd061'),
  },
  dark: {
    background:              raw('#1a1a19'),
    foreground:              raw('#eeeeec'),
    card:                    raw('#1b1b19'),
    cardForeground:          raw('#eeeeec'),
    popover:                 raw('#1b1b19'),
    popoverForeground:       raw('#eeeeec'),
    primary:                 raw('#eeeeec'),
    primaryForeground:       raw('#1a1a19'),
    secondary:               raw('#272725'),
    secondaryForeground:     raw('#bbbbb5'),
    muted:                   raw('#272725'),
    mutedForeground:         raw('#8d8d85'),
    accent:                  raw('#c4972a'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#df4343'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2e2e2b'),
    input:                   raw('#2e2e2b'),
    ring:                    raw('#c4972a'),
  },
  fonts: {
    body: 'DM Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'DM Serif Text, ui-serif, serif',
  },
  radius: '0.375rem',
})
