// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPurplePopinsCmlvfbTheme = defineTheme({
  name: 'community-purple-popins-cmlvfb',
  label: 'Purple Poppins',
  _sourceName: 'Purple Popins',
  category: 'Community',
  light: {
    background:              raw('#fdfdfd'),
    foreground:              raw('#000000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#7033ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#edf0f4'),
    secondaryForeground:     raw('#080808'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#e2ebff'),
    accentForeground:        raw('#1e69dc'),
    destructive:             raw('#e54b4f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e7ee'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#000000'),
  },
  dark: {
    background:              raw('#1a1b1e'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#222327'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#222327'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#8c5cff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2a2c33'),
    secondaryForeground:     raw('#f0f0f0'),
    muted:                   raw('#2a2c33'),
    mutedForeground:         raw('#a0a0a0'),
    accent:                  raw('#1e293b'),
    accentForeground:        raw('#79c0ff'),
    destructive:             raw('#f87171'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#33353a'),
    input:                   raw('#33353a'),
    ring:                    raw('#8c5cff'),
  },
  fonts: {
    body: 'Poppins, ui-sans-serif, sans-serif, system-ui',
    heading: 'Lora, serif',
  },
  radius: '1.4rem',
})
