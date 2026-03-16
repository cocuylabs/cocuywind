// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPapayaCmmgxhTheme = defineTheme({
  name: 'community-papaya-cmmgxh',
  label: 'Papaya',
  _sourceName: 'Papaya',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1a4731'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a4731'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a4731'),
    primary:                 raw('#1f473e'),
    primaryForeground:       raw('#F9F9F9'),
    secondary:               raw('#f4b034'),
    secondaryForeground:     raw('#1a4731'),
    muted:                   raw('#f2f5f3'),
    mutedForeground:         raw('#4b6b5a'),
    accent:                  raw('#1a4731'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#8b0000'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e1e8e4'),
    input:                   raw('#e1e8e4'),
    ring:                    raw('#1a4731'),
  },
  dark: {
    background:              raw('#313a36'),
    foreground:              raw('#ffffff'),
    card:                    raw('#153a28'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#153a28'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#ffffff'),
    primaryForeground:       raw('#143926'),
    secondary:               raw('#294c3b'),
    secondaryForeground:     raw('#f4b034'),
    muted:                   raw('#245d41'),
    mutedForeground:         raw('#a4cbb7'),
    accent:                  raw('#69b54a'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff4d4d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2d6349'),
    input:                   raw('#2d6349'),
    ring:                    raw('#ffffff'),
  },
  fonts: {
    body: 'Roboto, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.65rem',
})
