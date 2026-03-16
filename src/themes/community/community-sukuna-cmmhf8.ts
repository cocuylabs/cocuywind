// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySukunaCmmhf8Theme = defineTheme({
  name: 'community-sukuna-cmmhf8',
  label: 'Sukuna',
  _sourceName: 'Sukuna',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 20%, 98%)'),
    foreground:              raw('hsl(340, 60%, 10%)'),
    card:                    raw('hsl(0, 15%, 95%)'),
    cardForeground:          raw('hsl(340, 60%, 15%)'),
    popover:                 raw('hsl(0, 15%, 95%)'),
    popoverForeground:       raw('hsl(340, 60%, 10%)'),
    primary:                 raw('hsl(345, 80%, 35%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(270, 50%, 40%)'),
    secondaryForeground:     raw('hsl(0, 0%, 100%)'),
    muted:                   raw('hsl(340, 10%, 90%)'),
    mutedForeground:         raw('hsl(340, 20%, 40%)'),
    accent:                  raw('hsl(340, 100%, 92%)'),
    accentForeground:        raw('hsl(345, 80%, 30%)'),
    destructive:             raw('hsl(0, 85%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(340, 20%, 85%)'),
    input:                   raw('hsl(340, 20%, 92%)'),
    ring:                    raw('hsl(345, 80%, 35%)'),
  },
  dark: {
    background:              raw('hsl(340, 40%, 3%)'),
    foreground:              raw('hsl(20, 30%, 85%)'),
    card:                    raw('hsl(340, 35%, 6%)'),
    cardForeground:          raw('hsl(20, 30%, 90%)'),
    popover:                 raw('hsl(340, 35%, 6%)'),
    popoverForeground:       raw('hsl(20, 30%, 90%)'),
    primary:                 raw('hsl(345, 90%, 45%)'),
    primaryForeground:       raw('hsl(340, 40%, 3%)'),
    secondary:               raw('hsl(275, 70%, 35%)'),
    secondaryForeground:     raw('hsl(20, 30%, 95%)'),
    muted:                   raw('hsl(340, 30%, 12%)'),
    mutedForeground:         raw('hsl(340, 15%, 65%)'),
    accent:                  raw('hsl(320, 80%, 20%)'),
    accentForeground:        raw('hsl(320, 100%, 85%)'),
    destructive:             raw('hsl(0, 100%, 40%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(340, 30%, 15%)'),
    input:                   raw('hsl(340, 30%, 10%)'),
    ring:                    raw('hsl(345, 90%, 45%)'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Playfair Display, serif',
  },
  radius: '0.25rem',
})
