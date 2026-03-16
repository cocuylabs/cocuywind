// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBlueOrangeCmm5x6Theme = defineTheme({
  name: 'community-blue-orange-cmm5x6',
  label: 'Blue Orange',
  _sourceName: 'blue-orange',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1e293b'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1e293b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1e293b'),
    primary:                 raw('#0f172a'),
    primaryForeground:       raw('#f8fafc'),
    secondary:               raw('#f97316'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f1f5f9'),
    mutedForeground:         raw('#64748b'),
    accent:                  raw('#fff7ed'),
    accentForeground:        raw('#f97316'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#e2e8f0'),
    input:                   raw('#e2e8f0'),
    ring:                    raw('#1e293b'),
  },
  dark: {
    background:              raw('#0f172a'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#1e293b'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#1e293b'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#f8fafc'),
    primaryForeground:       raw('#0f172a'),
    secondary:               raw('#f97316'),
    secondaryForeground:     raw('#0f172a'),
    muted:                   raw('#334155'),
    mutedForeground:         raw('#94a3b8'),
    accent:                  raw('#f97316'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#334155'),
    input:                   raw('#334155'),
    ring:                    raw('#f97316'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
