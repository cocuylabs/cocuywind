// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDesignbyteCmlpf5Theme = defineTheme({
  name: 'community-designbyte-cmlpf5',
  label: 'Designbyte',
  _sourceName: 'designbyte',
  category: 'Community',
  light: {
    background:              raw('#fdfdfd'),
    foreground:              raw('#000000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#51f0a8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#fcfdfd'),
    secondaryForeground:     raw('#080808'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#f9fffc'),
    accentForeground:        raw('#0d9f5d'),
    destructive:             raw('#f54a88'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#f4f6f8'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#51f0a8'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#0a0a0a'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#1a1b1b'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#51f0a8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#216a49'),
    secondaryForeground:     raw('#f0f0f0'),
    muted:                   raw('#252527'),
    mutedForeground:         raw('#969696'),
    accent:                  raw('#093723'),
    accentForeground:        raw('#fefefe'),
    destructive:             raw('#ff78a5'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#19191a'),
    input:                   raw('#3b3b3b'),
    ring:                    raw('#51f0a8'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Lora, serif',
  },
  radius: '1.4rem',
})
