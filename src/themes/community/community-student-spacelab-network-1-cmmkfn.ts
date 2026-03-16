// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityStudentSpacelabNetwork1CmmkfnTheme = defineTheme({
  name: 'community-student-spacelab-network-1-cmmkfn',
  label: 'Spacelab Network',
  _sourceName: 'Student Spacelab Network 1.',
  category: 'Community',
  light: {
    background:              raw('#f7f9fa'),
    foreground:              raw('#333333'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0B1F3A'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#333333'),
    primary:                 raw('#0B1F3A'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#B11226'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#ddd9c4'),
    mutedForeground:         raw('#6e6e6e'),
    accent:                  raw('#c0d5f2'),
    accentForeground:        raw('#1b4d8d'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d4d4d4'),
    input:                   raw('#d4d4d4'),
    ring:                    raw('#99f3ff'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#061322'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#2f3436'),
    popoverForeground:       raw('#e5e5e5'),
    primary:                 raw('#0B1F3A'),
    primaryForeground:       raw('#fffffff'),
    secondary:               raw('#B11226'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#444444'),
    mutedForeground:         raw('#a4a2a2'),
    accent:                  raw('#1b4d8d'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#f41a1a'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#242424'),
    input:                   raw('#4d4d4d'),
    ring:                    raw('#99f3ff'),
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
