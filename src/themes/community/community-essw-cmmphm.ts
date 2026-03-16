// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityEsswCmmphmTheme = defineTheme({
  name: 'community-essw-cmmphm',
  label: 'Essw',
  _sourceName: 'essw',
  category: 'Community',
  light: {
    background:              raw('#fcfcfd'),
    foreground:              raw('#09090b'),
    card:                    raw('#fcfcfd'),
    cardForeground:          raw('#09090b'),
    popover:                 raw('#fcfcfd'),
    popoverForeground:       raw('#09090b'),
    primary:                 raw('#6366f1'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f0f9ff'),
    secondaryForeground:     raw('#0c4a6e'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#71717a'),
    accent:                  raw('#f5f3ff'),
    accentForeground:        raw('#4338ca'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e4e4e7'),
    input:                   raw('#e4e4e7'),
    ring:                    raw('#818cf8'),
  },
  dark: {
    background:              raw('#020617'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#020617'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#020617'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#818cf8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#1e293b'),
    secondaryForeground:     raw('#bae6fd'),
    muted:                   raw('#1e293b'),
    mutedForeground:         raw('#94a3b8'),
    accent:                  raw('#2e1065'),
    accentForeground:        raw('#c4b5fd'),
    destructive:             raw('#991b1b'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#1e293b'),
    input:                   raw('#1e293b'),
    ring:                    raw('#6366f1'),
  },
  fonts: {
    body: 'Poppins, ui-sans-serif, sans-serif, system-ui',
    heading: 'PT Serif, ui-serif, serif',
  },
  radius: '0.6rem',
})
