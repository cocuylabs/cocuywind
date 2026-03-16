// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAutoblogCmlpf8Theme = defineTheme({
  name: 'community-autoblog-cmlpf8',
  label: 'Autoblog',
  _sourceName: 'autoblog',
  category: 'Community',
  light: {
    background:              raw('#fdfdfd'),
    foreground:              raw('#000000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#f2470c'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#edf0f4'),
    secondaryForeground:     raw('#080808'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#fff0eb'),
    accentForeground:        raw('#cb3706'),
    destructive:             raw('#e54b4f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e7ee'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#f2470c'),
  },
  dark: {
    background:              raw('#0a0a0a'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#121212'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#19191a'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#f2470c'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#cd3a0a'),
    secondaryForeground:     raw('#f0f0f0'),
    muted:                   raw('#232325'),
    mutedForeground:         raw('#969696'),
    accent:                  raw('#741e02'),
    accentForeground:        raw('#fefefe'),
    destructive:             raw('#fb6a6a'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#1f1f1f'),
    input:                   raw('#3b3b3b'),
    ring:                    raw('#f2470c'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Lora, serif',
  },
  radius: '1.4rem',
})
