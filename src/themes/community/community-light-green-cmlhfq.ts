// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLightGreenCmlhfqTheme = defineTheme({
  name: 'community-light-green-cmlhfq',
  label: 'Light Green',
  _sourceName: 'Light Green',
  category: 'Community',
  light: {
    background:              raw('#fbfcf8'),
    foreground:              raw('#0f172a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0f172a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0f172a'),
    primary:                 raw('#aff33e'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#334155'),
    secondaryForeground:     raw('#f8fafc'),
    muted:                   raw('#f1f5f9'),
    mutedForeground:         raw('#64748b'),
    accent:                  raw('#f0fdf4'),
    accentForeground:        raw('#166534'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2e8f0'),
    input:                   raw('#e2e8f0'),
    ring:                    raw('#aff33e'),
  },
  dark: {
    background:              raw('#020617'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#0f172a'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#0f172a'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#aff33e'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#1e293b'),
    secondaryForeground:     raw('#f8fafc'),
    muted:                   raw('#1e293b'),
    mutedForeground:         raw('#94a3b8'),
    accent:                  raw('#14532d'),
    accentForeground:        raw('#aff33e'),
    destructive:             raw('#991b1b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#1e293b'),
    input:                   raw('#1e293b'),
    ring:                    raw('#aff33e'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1rem',
})
