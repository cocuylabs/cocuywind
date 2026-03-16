// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityGreenbarbequeueCmm9aeTheme = defineTheme({
  name: 'community-greenbarbequeue-cmm9ae',
  label: 'Greenbarbequeue',
  _sourceName: 'GreenBarbequeue',
  category: 'Community',
  light: {
    background:              raw('hsl(100, 30%, 98%)'),
    foreground:              raw('hsl(220, 45%, 10%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(220, 45%, 10%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(220, 45%, 10%)'),
    primary:                 raw('hsl(145, 85%, 45%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(100, 20%, 94%)'),
    secondaryForeground:     raw('hsl(220, 45%, 15%)'),
    muted:                   raw('hsl(145, 30%, 94%)'),
    mutedForeground:         raw('hsl(220, 15%, 45%)'),
    accent:                  raw('hsl(145, 80%, 48%)'),
    accentForeground:        raw('hsl(0, 0%, 100%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(145, 20%, 90%)'),
    input:                   raw('hsl(145, 20%, 92%)'),
    ring:                    raw('hsl(145, 85%, 45%)'),
  },
  dark: {
    background:              raw('hsl(220, 45%, 6%)'),
    foreground:              raw('hsl(100, 20%, 98%)'),
    card:                    raw('hsl(220, 45%, 10%)'),
    cardForeground:          raw('hsl(100, 20%, 98%)'),
    popover:                 raw('hsl(220, 45%, 10%)'),
    popoverForeground:       raw('hsl(100, 20%, 98%)'),
    primary:                 raw('hsl(145, 85%, 45%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(220, 30%, 15%)'),
    secondaryForeground:     raw('hsl(100, 20%, 90%)'),
    muted:                   raw('hsl(220, 30%, 15%)'),
    mutedForeground:         raw('hsl(220, 15%, 65%)'),
    accent:                  raw('hsl(145, 80%, 48%)'),
    accentForeground:        raw('hsl(0, 0%, 100%)'),
    destructive:             raw('hsl(0, 62%, 30%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(220, 30%, 18%)'),
    input:                   raw('hsl(220, 30%, 18%)'),
    ring:                    raw('hsl(145, 85%, 45%)'),
  },
  fonts: {
    body: 'Inter, -apple-system, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1rem',
})
