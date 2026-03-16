// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityItadoriYujiCmmhf9Theme = defineTheme({
  name: 'community-itadori-yuji-cmmhf9',
  label: 'Itadori Yuji',
  _sourceName: 'Itadori Yuji',
  category: 'Community',
  light: {
    background:              raw('#fcfcfc'),
    foreground:              raw('#0d1117'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0d1117'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0d1117'),
    primary:                 raw('#e61919'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#24335c'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#71717a'),
    accent:                  raw('#ffafbd'),
    accentForeground:        raw('#5c111c'),
    destructive:             raw('#8b0000'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e4e4e7'),
    input:                   raw('#e4e4e7'),
    ring:                    raw('#e61919'),
  },
  dark: {
    background:              raw('#0d0e12'),
    foreground:              raw('#fcfcfc'),
    card:                    raw('#161922'),
    cardForeground:          raw('#fcfcfc'),
    popover:                 raw('#161922'),
    popoverForeground:       raw('#fcfcfc'),
    primary:                 raw('#ff2e2e'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1a233b'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#27272a'),
    mutedForeground:         raw('#a1a1aa'),
    accent:                  raw('#ff5e78'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#27272a'),
    input:                   raw('#27272a'),
    ring:                    raw('#ff2e2e'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Georgia\', serif',
  },
  radius: '0.75rem',
})
