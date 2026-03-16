// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDibyCmlhruTheme = defineTheme({
  name: 'community-diby-cmlhru',
  label: 'Diby',
  _sourceName: 'Diby',
  category: 'Community',
  light: {
    background:              raw('#FFFFFF'),
    foreground:              raw('#1A1A1A'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1A1A1A'),
    popover:                 raw('#F5F5F7'),
    popoverForeground:       raw('#1A1A1A'),
    primary:                 raw('#0073FF'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#ffffff'),
    secondaryForeground:     raw('#1A1A1A'),
    muted:                   raw('#E5E5EA'),
    mutedForeground:         raw('#6B6B6B'),
    accent:                  raw('#0073FF'),
    accentForeground:        raw('#1A1A1A'),
    destructive:             raw('#E74C3C'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#ededed'),
    input:                   raw('#ededed'),
    ring:                    raw('#3f73ff'),
  },
  dark: {
    background:              raw('#0D0D0F'),
    foreground:              raw('#FFFFFF'),
    card:                    raw('#1A1A1A'),
    cardForeground:          raw('#FFFFFF'),
    popover:                 raw('#1A1A1A'),
    popoverForeground:       raw('#FFFFFF'),
    primary:                 raw('#0073FF'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#1A1A1A'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#2C2C2E'),
    mutedForeground:         raw('#98989D'),
    accent:                  raw('#0073FF'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#FF453A'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#38383A'),
    input:                   raw('#38383A'),
    ring:                    raw('#0073FF'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.85rem',
})
