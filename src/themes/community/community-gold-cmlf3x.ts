// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityGoldCmlf3xTheme = defineTheme({
  name: 'community-gold-cmlf3x',
  label: 'Gold',
  _sourceName: 'Gold?',
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
    background:              raw('#070503'),
    foreground:              raw('#f9f8f7'),
    card:                    raw('#100d08'),
    cardForeground:          raw('#f9f8f7'),
    popover:                 raw('#0b0905'),
    popoverForeground:       raw('#f9f8f7'),
    primary:                 raw('#d9a514'),
    primaryForeground:       raw('#040302'),
    secondary:               raw('#26211a'),
    secondaryForeground:     raw('#e7e4df'),
    muted:                   raw('#1e1a14'),
    mutedForeground:         raw('#928f8a'),
    accent:                  raw('#7f4413'),
    accentForeground:        raw('#f9f8f7'),
    destructive:             raw('#ee343b'),
    destructiveForeground:   raw('#f9f8f7'),
    border:                  raw('#2f281b'),
    input:                   raw('#1a150e'),
    ring:                    raw('#d9a514'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Lora, serif',
  },
  radius: '1.4rem',
})
