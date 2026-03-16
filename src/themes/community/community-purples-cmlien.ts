// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPurplesCmlienTheme = defineTheme({
  name: 'community-purples-cmlien',
  label: 'Purples',
  _sourceName: 'Purples',
  category: 'Community',
  light: {
    background:              raw('#f5f5ff'),
    foreground:              raw('#2a2a4a'),
    card:                    raw('#f5f5ff'),
    cardForeground:          raw('#2a2a4a'),
    popover:                 raw('#f5f5ff'),
    popoverForeground:       raw('#2a2a4a'),
    primary:                 raw('#6e56cf'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e4dfff'),
    secondaryForeground:     raw('#4a4080'),
    muted:                   raw('#f0f0fa'),
    mutedForeground:         raw('#6c6c8a'),
    accent:                  raw('#d8e6ff'),
    accentForeground:        raw('#2a2a4a'),
    destructive:             raw('#ff5470'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e0e0f0'),
    input:                   raw('#e0e0f0'),
    ring:                    raw('#6e56cf'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#000000'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#a48fff'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#2d2b55'),
    secondaryForeground:     raw('#c4c2ff'),
    muted:                   raw('#1a1a1a'),
    mutedForeground:         raw('#a0a0c0'),
    accent:                  raw('#303060'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff5470'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#303052'),
    input:                   raw('#303052'),
    ring:                    raw('#a48fff'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
