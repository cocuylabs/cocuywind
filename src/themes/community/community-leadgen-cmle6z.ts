// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLeadgenCmle6zTheme = defineTheme({
  name: 'community-leadgen-cmle6z',
  label: 'Leadgen',
  _sourceName: 'Leadgen',
  category: 'Community',
  light: {
    background:              raw('#FFFFFF'),
    foreground:              raw('#0A0A0B'),
    card:                    raw('#F5F5F7'),
    cardForeground:          raw('#0A0A0B'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#0A0A0B'),
    primary:                 raw('#4F46E5'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#E0E0FF'),
    secondaryForeground:     raw('#1E1B4B'),
    muted:                   raw('#F0F0F3'),
    mutedForeground:         raw('#636366'),
    accent:                  raw('#6366F1'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#EF4444'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#E5E5E7'),
    input:                   raw('#E5E5E7'),
    ring:                    raw('#4F46E5'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#FFFFFF'),
    card:                    raw('#0A0A0C'),
    cardForeground:          raw('#F2F2F7'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#F2F2F7'),
    primary:                 raw('#5D5FEF'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#1E1E3F'),
    secondaryForeground:     raw('#E0E0FF'),
    muted:                   raw('#0F0F1A'),
    mutedForeground:         raw('#9898A0'),
    accent:                  raw('#2D2D6A'),
    accentForeground:        raw('#A5B4FC'),
    destructive:             raw('#FF453A'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#1C1C21'),
    input:                   raw('#1C1C21'),
    ring:                    raw('#5D5FEF'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Lora\', serif',
  },
  radius: '0.75rem',
})
