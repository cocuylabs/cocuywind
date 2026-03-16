// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTerminalDarkRussianCmmljkTheme = defineTheme({
  name: 'community-terminal-dark-russian-cmmljk',
  label: 'Terminal Dark Russian',
  _sourceName: 'Terminal Dark Russian',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 88%)'),
    foreground:              raw('hsl(0, 0%, 5%)'),
    card:                    raw('hsl(0, 0%, 85%)'),
    cardForeground:          raw('hsl(0, 0%, 5%)'),
    popover:                 raw('hsl(0, 0%, 85%)'),
    popoverForeground:       raw('hsl(0, 0%, 5%)'),
    primary:                 raw('hsl(0, 75%, 35%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(0, 0%, 25%)'),
    secondaryForeground:     raw('hsl(0, 0%, 95%)'),
    muted:                   raw('hsl(0, 0%, 80%)'),
    mutedForeground:         raw('hsl(0, 0%, 30%)'),
    accent:                  raw('hsl(0, 60%, 40%)'),
    accentForeground:        raw('hsl(0, 0%, 100%)'),
    destructive:             raw('hsl(0, 80%, 30%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(0, 0%, 10%)'),
    input:                   raw('hsl(0, 0%, 82%)'),
    ring:                    raw('hsl(0, 75%, 35%)'),
  },
  dark: {
    background:              raw('hsl(0, 0%, 2%)'),
    foreground:              raw('hsl(0, 0%, 92%)'),
    card:                    raw('hsl(0, 0%, 5%)'),
    cardForeground:          raw('hsl(0, 0%, 92%)'),
    popover:                 raw('hsl(0, 0%, 5%)'),
    popoverForeground:       raw('hsl(0, 0%, 92%)'),
    primary:                 raw('hsl(0, 80%, 42%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(0, 0%, 12%)'),
    secondaryForeground:     raw('hsl(0, 0%, 90%)'),
    muted:                   raw('hsl(0, 0%, 10%)'),
    mutedForeground:         raw('hsl(0, 0%, 50%)'),
    accent:                  raw('hsl(0, 70%, 30%)'),
    accentForeground:        raw('hsl(0, 0%, 100%)'),
    destructive:             raw('hsl(0, 90%, 25%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(0, 0%, 25%)'),
    input:                   raw('hsl(0, 0%, 8%)'),
    ring:                    raw('hsl(0, 80%, 42%)'),
  },
  fonts: {
    body: 'JetBrains Mono, monospace',
    heading: 'Courier New, Courier, monospace',
  },
  radius: '0rem',
})
