// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMtCmmdl8Theme = defineTheme({
  name: 'community-mt-cmmdl8',
  label: 'Nimbus Circuit',
  _sourceName: 'Mt',
  category: 'Community',
  light: {
    background:              raw('#fdfdfd'),
    foreground:              raw('#000000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#AFBEA5'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#edf0f4'),
    secondaryForeground:     raw('#080808'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#878787'),
    accent:                  raw('#495940'),
    accentForeground:        raw('#FFFF'),
    destructive:             raw('#b3191f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e7ee'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#AFBEA5'),
  },
  dark: {
    background:              raw('#070503'),
    foreground:              raw('#f9f8f7'),
    card:                    raw('#100d08'),
    cardForeground:          raw('#f9f8f7'),
    popover:                 raw('#0b0905'),
    popoverForeground:       raw('#f9f8f7'),
    primary:                 raw('#AFBEA5'),
    primaryForeground:       raw('#040302'),
    secondary:               raw('#26211a'),
    secondaryForeground:     raw('#e7e4df'),
    muted:                   raw('#1e1a14'),
    mutedForeground:         raw('#928f8a'),
    accent:                  raw('#495940'),
    accentForeground:        raw('#FFF'),
    destructive:             raw('#b3191f'),
    destructiveForeground:   raw('#f9f8f7'),
    border:                  raw('#2f281b'),
    input:                   raw('#1a150e'),
    ring:                    raw('#AFBEA5'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, sans-serif',
    heading: 'Lora, serif',
  },
  radius: '0rem',
})
