// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityThemeCmlpl5Cmlpl5Theme = defineTheme({
  name: 'community-theme-cmlpl5-cmlpl5',
  label: 'Theme Cmlpl5',
  _sourceName: '世界之外',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0a0a0b'),
    card:                    raw('#f8fafc'),
    cardForeground:          raw('#0a0a0b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a0a0b'),
    primary:                 raw('#ff4d4d'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2dd4bf'),
    secondaryForeground:     raw('#0f172a'),
    muted:                   raw('#f1f5f9'),
    mutedForeground:         raw('#64748b'),
    accent:                  raw('#f1f5f9'),
    accentForeground:        raw('#0f172a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#e2e8f0'),
    input:                   raw('#e2e8f0'),
    ring:                    raw('#ff4d4d'),
  },
  dark: {
    background:              raw('#030303'),
    foreground:              raw('#f8fafc'),
    card:                    raw('#09090b'),
    cardForeground:          raw('#f8fafc'),
    popover:                 raw('#030303'),
    popoverForeground:       raw('#f8fafc'),
    primary:                 raw('#ff4d4d'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2dd4bf'),
    secondaryForeground:     raw('#030303'),
    muted:                   raw('#18181b'),
    mutedForeground:         raw('#a1a1aa'),
    accent:                  raw('#18181b'),
    accentForeground:        raw('#f8fafc'),
    destructive:             raw('#991b1b'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#27272a'),
    input:                   raw('#27272a'),
    ring:                    raw('#ff4d4d'),
  },
  fonts: {
    body: 'Alegreya Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.75rem',
})
