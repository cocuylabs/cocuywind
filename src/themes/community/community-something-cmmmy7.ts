// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySomethingCmmmy7Theme = defineTheme({
  name: 'community-something-cmmmy7',
  label: 'Something',
  _sourceName: 'something',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#262626'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#262626'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#262626'),
    primary:                 raw('#0abaf5'),
    primaryForeground:       raw('#c72929'),
    secondary:               raw('#f3f4f6'),
    secondaryForeground:     raw('#4b5563'),
    muted:                   raw('#f9fafb'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#fffbeb'),
    accentForeground:        raw('#92400e'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e7eb'),
    input:                   raw('#e5e7eb'),
    ring:                    raw('#f59e0b'),
  },
  dark: {
    background:              raw('#171717'),
    foreground:              raw('#e5e5e5'),
    card:                    raw('#262626'),
    cardForeground:          raw('#e5e5e5'),
    popover:                 raw('#262626'),
    popoverForeground:       raw('#e5e5e5'),
    primary:                 raw('#f59e0b'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#262626'),
    secondaryForeground:     raw('#e5e5e5'),
    muted:                   raw('#1f1f1f'),
    mutedForeground:         raw('#a3a3a3'),
    accent:                  raw('#92400e'),
    accentForeground:        raw('#fde68a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#404040'),
    input:                   raw('#404040'),
    ring:                    raw('#f59e0b'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Source Serif 4, serif',
  },
  radius: '0.375rem',
})
