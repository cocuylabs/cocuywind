// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityNubanckCmlf40Theme = defineTheme({
  name: 'community-nubanck-cmlf40',
  label: 'Nubanck',
  _sourceName: 'nubanck',
  category: 'Community',
  light: {
    background:              raw('hsl(270, 20%, 98%)'),
    foreground:              raw('hsl(270, 40%, 10%)'),
    card:                    raw('hsl(270, 20%, 96%)'),
    cardForeground:          raw('hsl(270, 40%, 10%)'),
    popover:                 raw('hsl(270, 20%, 98%)'),
    popoverForeground:       raw('hsl(270, 40%, 10%)'),
    primary:                 raw('hsl(270, 60%, 50%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(270, 20%, 90%)'),
    secondaryForeground:     raw('hsl(270, 40%, 20%)'),
    muted:                   raw('hsl(270, 15%, 92%)'),
    mutedForeground:         raw('hsl(270, 10%, 40%)'),
    accent:                  raw('hsl(270, 30%, 92%)'),
    accentForeground:        raw('hsl(270, 60%, 40%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(270, 15%, 85%)'),
    input:                   raw('hsl(270, 15%, 85%)'),
    ring:                    raw('hsl(270, 60%, 50%)'),
  },
  dark: {
    background:              raw('hsl(270, 50%, 4%)'),
    foreground:              raw('hsl(270, 20%, 98%)'),
    card:                    raw('hsl(270, 45%, 7%)'),
    cardForeground:          raw('hsl(270, 20%, 98%)'),
    popover:                 raw('hsl(270, 50%, 5%)'),
    popoverForeground:       raw('hsl(270, 20%, 98%)'),
    primary:                 raw('hsl(270, 70%, 60%)'),
    primaryForeground:       raw('hsl(270, 20%, 5%)'),
    secondary:               raw('hsl(270, 30%, 15%)'),
    secondaryForeground:     raw('hsl(270, 20%, 90%)'),
    muted:                   raw('hsl(270, 30%, 12%)'),
    mutedForeground:         raw('hsl(270, 10%, 65%)'),
    accent:                  raw('hsl(270, 40%, 18%)'),
    accentForeground:        raw('hsl(270, 20%, 98%)'),
    destructive:             raw('hsl(0, 70%, 40%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(270, 30%, 18%)'),
    input:                   raw('hsl(270, 30%, 18%)'),
    ring:                    raw('hsl(270, 70%, 60%)'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
