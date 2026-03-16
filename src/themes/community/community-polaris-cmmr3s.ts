// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPolarisCmmr3sTheme = defineTheme({
  name: 'community-polaris-cmmr3s',
  label: 'Polaris',
  _sourceName: 'Polaris',
  category: 'Community',
  light: {
    background:              raw('#f5fafb'),
    foreground:              raw('#081e24'),
    card:                    raw('#fcffff'),
    cardForeground:          raw('#030d11'),
    popover:                 raw('#fcffff'),
    popoverForeground:       raw('#030d11'),
    primary:                 raw('#02677f'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffb500'),
    secondaryForeground:     raw('#321c04'),
    muted:                   raw('#e4eef0'),
    mutedForeground:         raw('#5a6569'),
    accent:                  raw('#03a2bc'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#d3451e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d4e1e4'),
    input:                   raw('#b3c0c4'),
    ring:                    raw('#02677f'),
  },
  dark: {
    background:              raw('#020608'),
    foreground:              raw('#d2d9da'),
    card:                    raw('#060e11'),
    cardForeground:          raw('#d2d9da'),
    popover:                 raw('#060e11'),
    popoverForeground:       raw('#d2d9da'),
    primary:                 raw('#03a2bc'),
    primaryForeground:       raw('#010406'),
    secondary:               raw('#eaaa2c'),
    secondaryForeground:     raw('#221202'),
    muted:                   raw('#111d20'),
    mutedForeground:         raw('#80888a'),
    accent:                  raw('#084150'),
    accentForeground:        raw('#d6e9ec'),
    destructive:             raw('#e45937'),
    destructiveForeground:   raw('#eeeeee'),
    border:                  raw('#1e2b30'),
    input:                   raw('#28353a'),
    ring:                    raw('#008095'),
  },
  fonts: {
    body: 'Google Sans Flex, ui-sans-serif, sans-serif, system-ui',
    heading: 'Google Sans Flex, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0px',
})
