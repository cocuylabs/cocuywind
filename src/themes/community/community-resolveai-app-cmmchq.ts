// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityResolveaiAppCmmchqTheme = defineTheme({
  name: 'community-resolveai-app-cmmchq',
  label: 'Resolveai App',
  _sourceName: 'ResolveAI App',
  category: 'Community',
  light: {
    background:              raw('#e8ebed'),
    foreground:              raw('#333333'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#333333'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#333333'),
    primary:                 raw('#1c2f40'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f3f4f6'),
    secondaryForeground:     raw('#a68446'),
    muted:                   raw('#f9fafb'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#d6e4f0'),
    accentForeground:        raw('#1e3a8a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d9d9d9'),
    input:                   raw('#f4f5f7'),
    ring:                    raw('#a68446'),
  },
  dark: {
    background:              raw('#1c2433'),
    foreground:              raw('#e5e5e5'),
    card:                    raw('#2a3040'),
    cardForeground:          raw('#e5e5e5'),
    popover:                 raw('#262b38'),
    popoverForeground:       raw('#e5e5e5'),
    primary:                 raw('#a68446'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#d9d9d9'),
    secondaryForeground:     raw('#4b5563'),
    muted:                   raw('#2a303e'),
    mutedForeground:         raw('#a3a3a3'),
    accent:                  raw('#2a3656'),
    accentForeground:        raw('#a68446'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#3d4354'),
    input:                   raw('#3d4354'),
    ring:                    raw('#d9b36c'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Source Serif 4, serif',
  },
  radius: '0.75rem',
})
