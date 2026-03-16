// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const community53Cmmp8aTheme = defineTheme({
  name: 'community-53-cmmp8a',
  label: 'Copper Canyon',
  _sourceName: '53',
  category: 'Community',
  light: {
    background:              raw('hsl(210, 40%, 98%)'),
    foreground:              raw('hsl(222, 47%, 11%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(222, 47%, 11%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(222, 47%, 11%)'),
    primary:                 raw('hsl(221, 83%, 53%)'),
    primaryForeground:       raw('hsl(210, 40%, 98%)'),
    secondary:               raw('hsl(162, 72%, 40%)'),
    secondaryForeground:     raw('hsl(210, 40%, 98%)'),
    muted:                   raw('hsl(210, 40%, 96.1%)'),
    mutedForeground:         raw('hsl(215.4, 16.3%, 46.9%)'),
    accent:                  raw('hsl(162, 72%, 95%)'),
    accentForeground:        raw('hsl(221, 83%, 33%)'),
    destructive:             raw('hsl(0, 84.2%, 60.2%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(214.3, 31.8%, 91.4%)'),
    input:                   raw('hsl(214.3, 31.8%, 91.4%)'),
    ring:                    raw('hsl(221, 83%, 53%)'),
  },
  dark: {
    background:              raw('hsl(222, 47%, 11%)'),
    foreground:              raw('hsl(210, 40%, 98%)'),
    card:                    raw('hsl(222, 47%, 13%)'),
    cardForeground:          raw('hsl(210, 40%, 98%)'),
    popover:                 raw('hsl(222, 47%, 11%)'),
    popoverForeground:       raw('hsl(210, 40%, 98%)'),
    primary:                 raw('hsl(217, 91%, 60%)'),
    primaryForeground:       raw('hsl(222, 47%, 11%)'),
    secondary:               raw('hsl(162, 72%, 48%)'),
    secondaryForeground:     raw('hsl(222, 47%, 11%)'),
    muted:                   raw('hsl(217, 32%, 17%)'),
    mutedForeground:         raw('hsl(215, 20.2%, 65.1%)'),
    accent:                  raw('hsl(217, 32%, 17%)'),
    accentForeground:        raw('hsl(210, 40%, 98%)'),
    destructive:             raw('hsl(0, 62.8%, 30.6%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(217, 32%, 17%)'),
    input:                   raw('hsl(217, 32%, 17%)'),
    ring:                    raw('hsl(224, 76.3%, 48%)'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
