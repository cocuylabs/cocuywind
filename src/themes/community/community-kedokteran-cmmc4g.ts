// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityKedokteranCmmc4gTheme = defineTheme({
  name: 'community-kedokteran-cmmc4g',
  label: 'Kedokteran',
  _sourceName: 'kedokteran',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0f172a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0f172a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0f172a'),
    primary:                 raw('#0284c7'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f1f5f9'),
    secondaryForeground:     raw('#0f172a'),
    muted:                   raw('#f8fafc'),
    mutedForeground:         raw('#64748b'),
    accent:                  raw('#f0f9ff'),
    accentForeground:        raw('#0284c7'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2e8f0'),
    input:                   raw('#f1f5f9'),
    ring:                    raw('#0284c7'),
  },
  dark: {
    background:              raw('#020617'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#0f172a'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#0f172a'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#38bdf8'),
    primaryForeground:       raw('#082f49'),
    secondary:               raw('#1e293b'),
    secondaryForeground:     raw('#f8fafc'),
    muted:                   raw('#1e293b'),
    mutedForeground:         raw('#94a3b8'),
    accent:                  raw('#1e293b'),
    accentForeground:        raw('#38bdf8'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#fecaca'),
    border:                  raw('#1e293b'),
    input:                   raw('#1e293b'),
    ring:                    raw('#38bdf8'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Merriweather\', serif',
  },
  radius: '0.5rem',
})
