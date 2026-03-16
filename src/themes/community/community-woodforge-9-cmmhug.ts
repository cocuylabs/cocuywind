// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityWoodforge9CmmhugTheme = defineTheme({
  name: 'community-woodforge-9-cmmhug',
  label: 'Woodforge 9',
  _sourceName: 'WoodForge 9',
  category: 'Community',
  light: {
    background:              raw('hsl(40, 15%, 98%)'),
    foreground:              raw('hsl(210, 25%, 15%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(210, 25%, 12%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(210, 25%, 12%)'),
    primary:                 raw('hsl(24, 45%, 35%)'),
    primaryForeground:       raw('hsl(40, 15%, 98%)'),
    secondary:               raw('hsl(210, 15%, 25%)'),
    secondaryForeground:     raw('hsl(40, 15%, 98%)'),
    muted:                   raw('hsl(210, 10%, 94%)'),
    mutedForeground:         raw('hsl(210, 10%, 45%)'),
    accent:                  raw('hsl(145, 25%, 32%)'),
    accentForeground:        raw('hsl(40, 15%, 98%)'),
    destructive:             raw('hsl(0, 60%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(210, 10%, 85%)'),
    input:                   raw('hsl(210, 10%, 90%)'),
    ring:                    raw('hsl(24, 45%, 35%)'),
  },
  dark: {
    background:              raw('hsl(210, 20%, 10%)'),
    foreground:              raw('hsl(40, 10%, 94%)'),
    card:                    raw('hsl(210, 20%, 12%)'),
    cardForeground:          raw('hsl(40, 10%, 94%)'),
    popover:                 raw('hsl(210, 20%, 12%)'),
    popoverForeground:       raw('hsl(40, 10%, 94%)'),
    primary:                 raw('hsl(24, 50%, 45%)'),
    primaryForeground:       raw('hsl(40, 10%, 98%)'),
    secondary:               raw('hsl(210, 10%, 25%)'),
    secondaryForeground:     raw('hsl(40, 10%, 94%)'),
    muted:                   raw('hsl(210, 20%, 18%)'),
    mutedForeground:         raw('hsl(210, 10%, 70%)'),
    accent:                  raw('hsl(145, 30%, 38%)'),
    accentForeground:        raw('hsl(40, 10%, 98%)'),
    destructive:             raw('hsl(0, 65%, 55%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(210, 15%, 20%)'),
    input:                   raw('hsl(210, 15%, 20%)'),
    ring:                    raw('hsl(24, 50%, 45%)'),
  },
  fonts: {
    body: 'Inter, -apple-system, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.125rem',
})
