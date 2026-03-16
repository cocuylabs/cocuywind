// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPurpleRainCmlh1lTheme = defineTheme({
  name: 'community-purple-rain-cmlh1l',
  label: 'Purple Rain',
  _sourceName: 'Purple Rain',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 98%)'),
    foreground:              raw('hsl(220, 40%, 15%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(220, 40%, 15%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(220, 40%, 15%)'),
    primary:                 raw('hsl(262, 83%, 58%)'),
    primaryForeground:       raw('hsl(210, 20%, 98%)'),
    secondary:               raw('hsl(210, 40%, 96.1%)'),
    secondaryForeground:     raw('hsl(222.2, 47.4%, 11.2%)'),
    muted:                   raw('hsl(210, 40%, 96.1%)'),
    mutedForeground:         raw('hsl(215.4, 16.3%, 46.9%)'),
    accent:                  raw('hsl(262, 80%, 96%)'),
    accentForeground:        raw('hsl(262, 83%, 58%)'),
    destructive:             raw('hsl(0, 84.2%, 60.2%)'),
    destructiveForeground:   raw('hsl(210, 20%, 98%)'),
    border:                  raw('hsl(214.3, 31.8%, 91.4%)'),
    input:                   raw('hsl(214.3, 31.8%, 91.4%)'),
    ring:                    raw('hsl(262, 83%, 58%)'),
  },
  dark: {
    background:              raw('hsl(222, 47%, 4%)'),
    foreground:              raw('hsl(210, 40%, 98%)'),
    card:                    raw('hsl(222, 47%, 6%)'),
    cardForeground:          raw('hsl(210, 40%, 98%)'),
    popover:                 raw('hsl(222, 47%, 6%)'),
    popoverForeground:       raw('hsl(210, 40%, 98%)'),
    primary:                 raw('hsl(263, 70%, 50%)'),
    primaryForeground:       raw('hsl(210, 40%, 98%)'),
    secondary:               raw('hsl(217.2, 32.6%, 17.5%)'),
    secondaryForeground:     raw('hsl(210, 40%, 98%)'),
    muted:                   raw('hsl(217.2, 32.6%, 17.5%)'),
    mutedForeground:         raw('hsl(215, 20.2%, 65.1%)'),
    accent:                  raw('hsl(263, 50%, 15%)'),
    accentForeground:        raw('hsl(263, 70%, 50%)'),
    destructive:             raw('hsl(0, 62.8%, 30.6%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(217.2, 32.6%, 17.5%)'),
    input:                   raw('hsl(217.2, 32.6%, 17.5%)'),
    ring:                    raw('hsl(263, 70%, 50%)'),
  },
  fonts: {
    body: 'Inter, -apple-system, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.75rem',
})
