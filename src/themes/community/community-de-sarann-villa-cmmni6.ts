// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDeSarannVillaCmmni6Theme = defineTheme({
  name: 'community-de-sarann-villa-cmmni6',
  label: 'De Sarann Villa',
  _sourceName: 'De Sarann Villa',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 98%)'),
    foreground:              raw('hsl(240, 5%, 3%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(240, 5%, 3%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(240, 5%, 3%)'),
    primary:                 raw('hsl(346, 94%, 37%)'),
    primaryForeground:       raw('hsl(0, 0%, 98%)'),
    secondary:               raw('hsl(220, 10%, 90%)'),
    secondaryForeground:     raw('hsl(240, 5%, 3%)'),
    muted:                   raw('hsl(220, 10%, 90%)'),
    mutedForeground:         raw('hsl(240, 3%, 47%)'),
    accent:                  raw('hsl(220, 10%, 90%)'),
    accentForeground:        raw('hsl(240, 5%, 3%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(220, 10%, 80%)'),
    input:                   raw('hsl(220, 10%, 80%)'),
    ring:                    raw('hsl(346, 94%, 37%)'),
  },
  dark: {
    background:              raw('hsl(240, 10%, 4%)'),
    foreground:              raw('hsl(0, 0%, 98%)'),
    card:                    raw('hsl(240, 10%, 8%)'),
    cardForeground:          raw('hsl(0, 0%, 98%)'),
    popover:                 raw('hsl(240, 10%, 8%)'),
    popoverForeground:       raw('hsl(0, 0%, 98%)'),
    primary:                 raw('hsl(346, 94%, 37%)'),
    primaryForeground:       raw('hsl(0, 0%, 98%)'),
    secondary:               raw('hsl(240, 8%, 20%)'),
    secondaryForeground:     raw('hsl(0, 0%, 98%)'),
    muted:                   raw('hsl(240, 8%, 20%)'),
    mutedForeground:         raw('hsl(240, 5%, 64%)'),
    accent:                  raw('hsl(240, 8%, 20%)'),
    accentForeground:        raw('hsl(0, 0%, 98%)'),
    destructive:             raw('hsl(0, 60%, 48%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(240, 8%, 28%)'),
    input:                   raw('hsl(240, 8%, 28%)'),
    ring:                    raw('hsl(346, 94%, 37%)'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Lora\', serif',
  },
  radius: '0.75rem',
})
