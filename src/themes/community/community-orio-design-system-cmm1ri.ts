// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOrioDesignSystemCmm1riTheme = defineTheme({
  name: 'community-orio-design-system-cmm1ri',
  label: 'Orio Design System',
  _sourceName: 'Orio Design System',
  category: 'Community',
  light: {
    background:              raw('#f4f2f0'),
    foreground:              raw('#000000'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#c4b1f9'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#000000'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#ffffff'),
    mutedForeground:         raw('#000000'),
    accent:                  raw('#000000'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff1624'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e3e3e3'),
    input:                   raw('#ffffff'),
    ring:                    raw('#ffffff'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#e6e9eb'),
    card:                    raw('#16171d'),
    cardForeground:          raw('#d9d9d9'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#e6e9eb'),
    primary:                 raw('#0d9fff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#eff3f5'),
    secondaryForeground:     raw('#101a23'),
    muted:                   raw('#181818'),
    mutedForeground:         raw('#70767c'),
    accent:                  raw('#011d32'),
    accentForeground:        raw('#0d9fff'),
    destructive:             raw('#ff1624'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#232629'),
    input:                   raw('#1d3041'),
    ring:                    raw('#10a4ff'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.775rem',
})
