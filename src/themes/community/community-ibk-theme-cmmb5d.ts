// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityIbkThemeCmmb5dTheme = defineTheme({
  name: 'community-ibk-theme-cmmb5d',
  label: 'IBK Theme',
  _sourceName: 'IBK theme ',
  category: 'Community',
  light: {
    background:              raw('#f5f5ff'),
    foreground:              raw('#2a2a4a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#2a2a4a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#2a2a4a'),
    primary:                 raw('#6e56cf'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e4dfff'),
    secondaryForeground:     raw('#4a4080'),
    muted:                   raw('#f0f0fa'),
    mutedForeground:         raw('#6c6c8a'),
    accent:                  raw('#d8e6ff'),
    accentForeground:        raw('#2a2a4a'),
    destructive:             raw('#ff5470'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e0e0f0'),
    input:                   raw('#e0e0f0'),
    ring:                    raw('#6e56cf'),
  },
  dark: {
    background:              raw('oklch(0.938 0.127 124.321)'),
    foreground:              raw('oklch(0.532 0.157 131.589)'),
    card:                    raw('oklch(0.938 0.127 124.321)'),
    cardForeground:          raw('oklch(0.274 0.072 132.109)'),
    popover:                 raw('oklch(0.967 0.067 122.328)'),
    popoverForeground:       raw('#e2e2f5'),
    primary:                 raw('oklch(0.938 0.127 124.321)'),
    primaryForeground:       raw('oklch(0.532 0.157 131.589)'),
    secondary:               raw('oklch(0.967 0.067 122.328)'),
    secondaryForeground:     raw('oklch(0.723 0.219 149.579)'),
    muted:                   raw('oklch(0.266 0.065 152.934)'),
    mutedForeground:         raw('#a0a0c0'),
    accent:                  raw('oklch(0.648 0.2 131.684)'),
    accentForeground:        raw('oklch(0.897 0.196 126.665)'),
    destructive:             raw('oklch(0.453 0 .124 130.933)'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('oklch(0.627 0.194 149.214)'),
    input:                   raw('#303052'),
    ring:                    raw('#a48fff'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
