// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRetro2Cmm2e2Theme = defineTheme({
  name: 'community-retro-2-cmm2e2',
  label: 'Retro 2',
  _sourceName: 'retro-2',
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
    foreground:              raw('#f5f5f5'),
    card:                    raw('#242424'),
    cardForeground:          raw('#f5f5f5'),
    popover:                 raw('#222227'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#fffd33'),
    primaryForeground:       raw('#000'),
    secondary:               raw('#3a3a3a'),
    secondaryForeground:     raw('#f5f5f5'),
    muted:                   raw('#3f3f46'),
    mutedForeground:         raw('#a0a0a0'),
    accent:                  raw('#faf983'),
    accentForeground:        raw('#000'),
    destructive:             raw('#e63946'),
    destructiveForeground:   raw('#fff'),
    border:                  raw('#5c5c5c'),
    input:                   raw('#33343a'),
    ring:                    raw('#ffff'),
  },
  fonts: {
    body: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
    heading: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0rem',
})
