// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMagic3Cmmt0aTheme = defineTheme({
  name: 'community-magic-3-cmmt0a',
  label: 'Magic 3',
  _sourceName: 'Magic 3',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1d1b16'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1d1b16'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#1d1b16'),
    primary:                 raw('#4d0b61'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#ff9405'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#d5d7d2'),
    mutedForeground:         raw('#6a665d'),
    accent:                  raw('#d6b2ff'),
    accentForeground:        raw('#4d0b61'),
    destructive:             raw('#ff550c'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#ccc8c4'),
    input:                   raw('#e7d8b8'),
    ring:                    raw('#4d0b61'),
  },
  dark: {
    background:              raw('#1b061e'),
    foreground:              raw('#d8dbd4'),
    card:                    raw('#230c2c'),
    cardForeground:          raw('#d8dbd4'),
    popover:                 raw('#2a1133'),
    popoverForeground:       raw('#d8dbd4'),
    primary:                 raw('#ff9a10'),
    primaryForeground:       raw('#1f0c2c'),
    secondary:               raw('#ff5c86'),
    secondaryForeground:     raw('#120217'),
    muted:                   raw('#240e2b'),
    mutedForeground:         raw('#969186'),
    accent:                  raw('#4f2b5b'),
    accentForeground:        raw('#d8dbd4'),
    destructive:             raw('#d74709'),
    destructiveForeground:   raw('#d8dbd4'),
    border:                  raw('#3e2049'),
    input:                   raw('#3e2049'),
    ring:                    raw('#aa27ff'),
  },
  fonts: {
    body: 'Roboto, ui-sans-serif, sans-serif, system-ui',
    heading: 'Merriweather, ui-serif, serif',
  },
  radius: '0.4rem',
})
