// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityGreattingsCmlfwcTheme = defineTheme({
  name: 'community-greattings-cmlfwc',
  label: 'Greattings',
  _sourceName: 'Greattings',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1c3a41'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1c3a41'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#66abff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffffff'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#f2f0f0'),
    mutedForeground:         raw('#404f54'),
    accent:                  raw('#f8f6fc'),
    accentForeground:        raw('#375258'),
    destructive:             raw('#ff4395'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#f0f9ff'),
    input:                   raw('#f0ad60'),
    ring:                    raw('#002757'),
  },
  dark: {
    background:              raw('#201919'),
    foreground:              raw('#f1f8f9'),
    card:                    raw('#2f2626'),
    cardForeground:          raw('#f1f8f9'),
    popover:                 raw('#2f2626'),
    popoverForeground:       raw('#f1f8f9'),
    primary:                 raw('#8dc8ff'),
    primaryForeground:       raw('#201919'),
    secondary:               raw('#3e3535'),
    secondaryForeground:     raw('#dce4e5'),
    muted:                   raw('#211a1a'),
    mutedForeground:         raw('#a3b4b8'),
    accent:                  raw('#4c4445'),
    accentForeground:        raw('#dce4e5'),
    destructive:             raw('#ff4395'),
    destructiveForeground:   raw('#201919'),
    border:                  raw('#3e3535'),
    input:                   raw('#3e3535'),
    ring:                    raw('#8dc8ff'),
  },
  fonts: {
    body: 'DM Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Libre Caslon Text, ui-serif, serif',
  },
  radius: '1.25rem',
})
