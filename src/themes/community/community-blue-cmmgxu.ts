// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBlueCmmgxuTheme = defineTheme({
  name: 'community-blue-cmmgxu',
  label: 'Blue',
  _sourceName: 'blue',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0f1419'),
    card:                    raw('#f7f8f8'),
    cardForeground:          raw('#0f1419'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0f1419'),
    primary:                 raw('#1e9df1'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#0f1419'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#E5E5E6'),
    mutedForeground:         raw('#0f1419'),
    accent:                  raw('#E3ECF6'),
    accentForeground:        raw('#1e9df1'),
    destructive:             raw('#f4212e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e1eaef'),
    input:                   raw('#f7f9fa'),
    ring:                    raw('#1da1f2'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#e7e9ea'),
    card:                    raw('#17181c'),
    cardForeground:          raw('#d9d9d9'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#e7e9ea'),
    primary:                 raw('#1c9cf0'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f0f3f4'),
    secondaryForeground:     raw('#0f1419'),
    muted:                   raw('#181818'),
    mutedForeground:         raw('#72767a'),
    accent:                  raw('#061622'),
    accentForeground:        raw('#1c9cf0'),
    destructive:             raw('#f4212e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#242628'),
    input:                   raw('#22303c'),
    ring:                    raw('#1da1f2'),
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1.3rem',
})
