// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCaserCmm6p0Theme = defineTheme({
  name: 'community-caser-cmm6p0',
  label: 'Caser',
  _sourceName: 'Caser',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0f172a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0f172a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0f172a'),
    primary:                 raw('#1e293b'),
    primaryForeground:       raw('#f8fafc'),
    secondary:               raw('#f1f5f9'),
    secondaryForeground:     raw('#0f172a'),
    muted:                   raw('#f1f5f9'),
    mutedForeground:         raw('#64748b'),
    accent:                  raw('#f1f5f9'),
    accentForeground:        raw('#0f172a'),
    destructive:             raw('#e11d48'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2e8f0'),
    input:                   raw('#e2e8f0'),
    ring:                    raw('#94a3b8'),
  },
  dark: {
    background:              raw('#020617'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#0f172a'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#0f172a'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#f8fafc'),
    primaryForeground:       raw('#0f172a'),
    secondary:               raw('#1e293b'),
    secondaryForeground:     raw('#f8fafc'),
    muted:                   raw('#1e293b'),
    mutedForeground:         raw('#94a3b8'),
    accent:                  raw('#1e293b'),
    accentForeground:        raw('#f8fafc'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#1e293b'),
    input:                   raw('#1e293b'),
    ring:                    raw('#334155'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.375rem',
})
