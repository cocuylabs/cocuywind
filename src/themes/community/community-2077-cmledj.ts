// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const community2077CmledjTheme = defineTheme({
  name: 'community-2077-cmledj',
  label: '2077',
  _sourceName: '2077',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a1a1a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1a1a'),
    primary:                 raw('#1c1c1c'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffffff'),
    secondaryForeground:     raw('#1c1c1c'),
    muted:                   raw('#ffffff'),
    mutedForeground:         raw('#8a8a8a'),
    accent:                  raw('#ffffff'),
    accentForeground:        raw('#1c1c1c'),
    destructive:             raw('#ea1330'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#ffffff'),
    input:                   raw('#ffffff'),
    ring:                    raw('#c1c1c1'),
  },
  dark: {
    background:              raw('#000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#000'),
    cardForeground:          raw('#fff'),
    popover:                 raw('#000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#d6544b'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#d6544b'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#1c1c17'),
    mutedForeground:         raw('#ffffff'),
    accent:                  raw('#d6544b'),
    accentForeground:        raw('#000'),
    destructive:             raw('#d6544b'),
    destructiveForeground:   raw('#000'),
    border:                  raw('#222'),
    input:                   raw('#000'),
    ring:                    raw('#d6544b'),
  },
  fonts: {
    body: 'Chakra Petch, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0rem',
})
