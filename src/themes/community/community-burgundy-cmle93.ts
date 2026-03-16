// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBurgundyCmle93Theme = defineTheme({
  name: 'community-burgundy-cmle93',
  label: 'Burgundy',
  _sourceName: 'Burgundy',
  category: 'Community',
  light: {
    background:              raw('#fdf8f9'),
    foreground:              raw('#3d0a0d'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#3d0a0d'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#3d0a0d'),
    primary:                 raw('#800020'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f4e7ea'),
    secondaryForeground:     raw('#800020'),
    muted:                   raw('#f4e7ea'),
    mutedForeground:         raw('#7c5c5f'),
    accent:                  raw('#9a1b32'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#be123c'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5d1d4'),
    input:                   raw('#e5d1d4'),
    ring:                    raw('#800020'),
  },
  dark: {
    background:              raw('#0f0203'),
    foreground:              raw('#fceef0'),
    card:                    raw('#1a0507'),
    cardForeground:          raw('#fceef0'),
    popover:                 raw('#1a0507'),
    popoverForeground:       raw('#fceef0'),
    primary:                 raw('#e63946'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#3d0a0d'),
    secondaryForeground:     raw('#ffdce0'),
    muted:                   raw('#2a0a0d'),
    mutedForeground:         raw('#d4a1a6'),
    accent:                  raw('#cd182a'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff4d6d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2b0d10'),
    input:                   raw('#4a151b'),
    ring:                    raw('#ff2e44'),
  },
  fonts: {
    body: '\'Inter\', \'Lora\', sans-serif',
    heading: '\'Lora\', serif',
  },
  radius: '0.75rem',
})
