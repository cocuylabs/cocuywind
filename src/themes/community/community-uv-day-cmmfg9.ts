// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityUvDayCmmfg9Theme = defineTheme({
  name: 'community-uv-day-cmmfg9',
  label: 'Uv Day',
  _sourceName: 'uv day',
  category: 'Community',
  light: {
    background:              raw('#f9f6f6'),
    foreground:              raw('#262626'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#262626'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#262626'),
    primary:                 raw('#ff0000'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#ffc72e'),
    secondaryForeground:     raw('#4b5563'),
    muted:                   raw('#f9fafb'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#f3eb12'),
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
    primary:                 raw('#ffdd00'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#e20808'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#1f1f1f'),
    mutedForeground:         raw('#a3a3a3'),
    accent:                  raw('#bc1515'),
    accentForeground:        raw('#f2f2f2'),
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
