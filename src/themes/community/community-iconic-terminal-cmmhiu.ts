// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityIconicTerminalCmmhiuTheme = defineTheme({
  name: 'community-iconic-terminal-cmmhiu',
  label: 'Iconic Terminal',
  _sourceName: 'iconic terminal',
  category: 'Community',
  light: {
    background:              raw('hsl(160 30% 98%)'),
    foreground:              raw('hsl(160 84% 10%)'),
    card:                    raw('hsl(160 30% 96%)'),
    cardForeground:          raw('hsl(160 84% 10%)'),
    popover:                 raw('hsl(160 30% 96%)'),
    popoverForeground:       raw('hsl(160 84% 10%)'),
    primary:                 raw('hsl(160 84% 35%)'),
    primaryForeground:       raw('hsl(160 100% 98%)'),
    secondary:               raw('hsl(160 20% 90%)'),
    secondaryForeground:     raw('hsl(160 84% 20%)'),
    muted:                   raw('hsl(160 10% 90%)'),
    mutedForeground:         raw('hsl(160 10% 40%)'),
    accent:                  raw('hsl(160 40% 88%)'),
    accentForeground:        raw('hsl(160 84% 25%)'),
    destructive:             raw('hsl(0 84% 60%)'),
    destructiveForeground:   raw('hsl(0 0% 98%)'),
    border:                  raw('hsl(160 40% 80%)'),
    input:                   raw('hsl(160 40% 85%)'),
    ring:                    raw('hsl(160 84% 35%)'),
  },
  dark: {
    background:              raw('hsl(160 50% 2%)'),
    foreground:              raw('hsl(160 84% 45%)'),
    card:                    raw('hsl(160 50% 4%)'),
    cardForeground:          raw('hsl(160 84% 45%)'),
    popover:                 raw('hsl(160 50% 3%)'),
    popoverForeground:       raw('hsl(160 84% 45%)'),
    primary:                 raw('hsl(160 84% 45%)'),
    primaryForeground:       raw('hsl(160 50% 2%)'),
    secondary:               raw('hsl(160 40% 10%)'),
    secondaryForeground:     raw('hsl(160 84% 45%)'),
    muted:                   raw('hsl(160 40% 8%)'),
    mutedForeground:         raw('hsl(160 40% 30%)'),
    accent:                  raw('hsl(160 40% 15%)'),
    accentForeground:        raw('hsl(160 84% 50%)'),
    destructive:             raw('hsl(0 62% 35%)'),
    destructiveForeground:   raw('hsl(0 0% 98%)'),
    border:                  raw('hsl(160 84% 20%)'),
    input:                   raw('hsl(160 84% 15%)'),
    ring:                    raw('hsl(160 84% 45%)'),
  },
  fonts: {
    body: 'JetBrains Mono, monospace',
    heading: 'Georgia, serif',
  },
  radius: '0rem',
})
