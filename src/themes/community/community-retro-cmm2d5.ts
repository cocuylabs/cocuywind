// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRetroCmm2d5Theme = defineTheme({
  name: 'community-retro-cmm2d5',
  label: 'Retro',
  _sourceName: 'retro',
  category: 'Community',
  light: {
    background:              raw('#fff'),
    foreground:              raw('#000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#fffd33'),
    primaryForeground:       raw('#000'),
    secondary:               raw('#000'),
    secondaryForeground:     raw('#fff'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#faf983'),
    accentForeground:        raw('#000'),
    destructive:             raw('#e5614b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#000'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#000000'),
  },
  dark: {
    background:              raw('#1a1a1e'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#222227'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#222227'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#a75cff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2a2b33'),
    secondaryForeground:     raw('#f0f0f0'),
    muted:                   raw('#2a2b33'),
    mutedForeground:         raw('#a0a0a0'),
    accent:                  raw('#1e243b'),
    accentForeground:        raw('#79aaff'),
    destructive:             raw('#f88771'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#33343a'),
    input:                   raw('#33343a'),
    ring:                    raw('#a75cff'),
  },
  fonts: {
    body: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
    heading: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0rem',
})
