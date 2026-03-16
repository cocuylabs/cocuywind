// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTerminalMutedCmlvazTheme = defineTheme({
  name: 'community-terminal-muted-cmlvaz',
  label: 'Terminal Muted',
  _sourceName: 'terminal-muted',
  category: 'Community',
  light: {
    background:              raw('hsl(142, 15%, 95%)'),
    foreground:              raw('hsl(142, 20%, 15%)'),
    card:                    raw('hsl(142, 15%, 92%)'),
    cardForeground:          raw('hsl(142, 20%, 10%)'),
    popover:                 raw('hsl(142, 15%, 92%)'),
    popoverForeground:       raw('hsl(142, 20%, 10%)'),
    primary:                 raw('hsl(142, 40%, 35%)'),
    primaryForeground:       raw('hsl(142, 10%, 98%)'),
    secondary:               raw('hsl(28, 40%, 45%)'),
    secondaryForeground:     raw('hsl(28, 10%, 98%)'),
    muted:                   raw('hsl(142, 10%, 88%)'),
    mutedForeground:         raw('hsl(142, 15%, 35%)'),
    accent:                  raw('hsl(142, 10%, 85%)'),
    accentForeground:        raw('hsl(142, 20%, 15%)'),
    destructive:             raw('hsl(0, 40%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(142, 10%, 80%)'),
    input:                   raw('hsl(142, 10%, 90%)'),
    ring:                    raw('hsl(142, 40%, 35%)'),
  },
  dark: {
    background:              raw('hsl(142, 15%, 4%)'),
    foreground:              raw('hsl(142, 35%, 75%)'),
    card:                    raw('hsl(142, 15%, 6%)'),
    cardForeground:          raw('hsl(142, 35%, 85%)'),
    popover:                 raw('hsl(142, 15%, 6%)'),
    popoverForeground:       raw('hsl(142, 35%, 85%)'),
    primary:                 raw('hsl(142, 40%, 45%)'),
    primaryForeground:       raw('hsl(142, 15%, 5%)'),
    secondary:               raw('hsl(28, 50%, 45%)'),
    secondaryForeground:     raw('hsl(28, 15%, 5%)'),
    muted:                   raw('hsl(142, 10%, 12%)'),
    mutedForeground:         raw('hsl(142, 20%, 55%)'),
    accent:                  raw('hsl(142, 10%, 15%)'),
    accentForeground:        raw('hsl(142, 35%, 85%)'),
    destructive:             raw('hsl(0, 50%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(142, 15%, 15%)'),
    input:                   raw('hsl(142, 15%, 10%)'),
    ring:                    raw('hsl(142, 40%, 45%)'),
  },
  fonts: {
    body: 'ui-monospace, \'JetBrains Mono\', \'Fira Code\', \'Menlo\', monospace',
    heading: 'Georgia, serif',
  },
  radius: '0rem',
})
