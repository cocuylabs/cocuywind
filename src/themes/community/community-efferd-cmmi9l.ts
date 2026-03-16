// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityEfferdCmmi9lTheme = defineTheme({
  name: 'community-efferd-cmmi9l',
  label: 'Efferd',
  _sourceName: 'Efferd',
  category: 'Community',
  light: {
    background:              raw('oklch(0.985 0 0)'),
    foreground:              raw('oklch(0.12 0 0)'),
    card:                    raw('oklch(1 0 0)'),
    cardForeground:          raw('oklch(0.12 0 0)'),
    popover:                 raw('oklch(1 0 0)'),
    popoverForeground:       raw('oklch(0.12 0 0)'),
    primary:                 raw('oklch(0.205 0 0)'),
    primaryForeground:       raw('oklch(88.005% 0.00547 16.256)'),
    secondary:               raw('oklch(0.95 0 0)'),
    secondaryForeground:     raw('oklch(0.205 0 0)'),
    muted:                   raw('oklch(0.95 0 0)'),
    mutedForeground:         raw('oklch(0.556 0 0)'),
    accent:                  raw('oklch(0.95 0 0)'),
    accentForeground:        raw('oklch(0.205 0 0)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(0.12 0 0);'),
    border:                  raw('oklch(0.9 0 0)'),
    input:                   raw('oklch(0.92 0 0)'),
    ring:                    raw('oklch(0.8 0 0)'),
  },
  dark: {
    background:              raw('oklch(0.1 0 0)'),
    foreground:              raw('oklch(0.99 0 0)'),
    card:                    raw('oklch(0.16 0 0)'),
    cardForeground:          raw('oklch(0.99 0 0)'),
    popover:                 raw('oklch(0.16 0 0)'),
    popoverForeground:       raw('oklch(0.99 0 0)'),
    primary:                 raw('oklch(0.99 0 0)'),
    primaryForeground:       raw('oklch(0.16 0 0)'),
    secondary:               raw('oklch(0.25 0 0)'),
    secondaryForeground:     raw('oklch(0.99 0 0)'),
    muted:                   raw('oklch(0.25 0 0)'),
    mutedForeground:         raw('oklch(0.708 0 0)'),
    accent:                  raw('oklch(0.25 0 0)'),
    accentForeground:        raw('oklch(0.99 0 0)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.99 0 0)'),
    border:                  raw('#303030'),
    input:                   raw('oklch(1 0 0 / 15%)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.65rem',
})
