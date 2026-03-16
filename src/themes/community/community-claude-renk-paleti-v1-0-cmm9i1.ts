// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityClaudeRenkPaletiV10Cmm9i1Theme = defineTheme({
  name: 'community-claude-renk-paleti-v1-0-cmm9i1',
  label: 'Claude Renk Paleti V1.0',
  _sourceName: 'Claude Renk Paleti v1.0',
  category: 'Community',
  light: {
    background:              raw('#faf9f5'),
    foreground:              raw('#3d3929'),
    card:                    raw('#faf9f5'),
    cardForeground:          raw('#141413'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#28261b'),
    primary:                 raw('#c96442'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e9e6dc'),
    secondaryForeground:     raw('#535146'),
    muted:                   raw('#ede9de'),
    mutedForeground:         raw('#83827d'),
    accent:                  raw('#e9e6dc'),
    accentForeground:        raw('#28261b'),
    destructive:             raw('#141413'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#dad9d4'),
    input:                   raw('#b4b2a7'),
    ring:                    raw('#c96442'),
  },
  dark: {
    background:              raw('#262624'),
    foreground:              raw('#c3c0b6'),
    card:                    raw('#262624'),
    cardForeground:          raw('#faf9f5'),
    popover:                 raw('#30302e'),
    popoverForeground:       raw('#e5e5e2'),
    primary:                 raw('#d97757'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#faf9f5'),
    secondaryForeground:     raw('#30302e'),
    muted:                   raw('#1b1b19'),
    mutedForeground:         raw('#b7b5a9'),
    accent:                  raw('#1a1915'),
    accentForeground:        raw('#f5f4ee'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#3e3e38'),
    input:                   raw('#52514a'),
    ring:                    raw('#d97757'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'Inter, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0.5rem',
})
