// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLastchatCmmi2xTheme = defineTheme({
  name: 'community-lastchat-cmmi2x',
  label: 'Lastchat',
  _sourceName: 'LastChat',
  category: 'Community',
  light: {
    background:              raw('#e9e4d8'),
    foreground:              raw('#1e1e1e'),
    card:                    raw('#f4efe4'),
    cardForeground:          raw('#1e1e1e'),
    popover:                 raw('#f4efe4'),
    popoverForeground:       raw('#1e1e1e'),
    primary:                 raw('#2e2e2e'),
    primaryForeground:       raw('#e6e4d7'),
    secondary:               raw('#d8d2c4'),
    secondaryForeground:     raw('#2e2e2e'),
    muted:                   raw('#cfc8b8'),
    mutedForeground:         raw('#5e5a52'),
    accent:                  raw('#e6e4d7'),
    accentForeground:        raw('#2e2e2e'),
    destructive:             raw('#dc2626'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d2cbbb'),
    input:                   raw('#d2cbbb'),
    ring:                    raw('#2e2e2e'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#c2c2c2'),
    card:                    raw('#1c1c1c'),
    cardForeground:          raw('#e8e3da'),
    popover:                 raw('#1c1c1c'),
    popoverForeground:       raw('#e8e3da'),
    primary:                 raw('#375758'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#363636'),
    secondaryForeground:     raw('#c2c0b2'),
    muted:                   raw('#080808'),
    mutedForeground:         raw('#8e8a83'),
    accent:                  raw('#363636'),
    accentForeground:        raw('#d1cfc0'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#121212'),
    input:                   raw('#454545'),
    ring:                    raw('#666666'),
  },
  fonts: {
    body: 'Google Sans Flex, ui-sans-serif, sans-serif, system-ui',
    heading: 'Google Sans Flex, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '1rem',
})
