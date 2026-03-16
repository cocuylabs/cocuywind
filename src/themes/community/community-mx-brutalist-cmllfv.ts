// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMxBrutalistCmllfvTheme = defineTheme({
  name: 'community-mx-brutalist-cmllfv',
  label: 'MX Brutalist',
  _sourceName: 'MX-Brutalist',
  category: 'Community',
  light: {
    background:              raw('hsl(45, 100%, 98%)'),
    foreground:              raw('hsl(150, 60%, 5%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(150, 60%, 5%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(150, 60%, 5%)'),
    primary:                 raw('hsl(150, 100%, 28%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(0, 100%, 48%)'),
    secondaryForeground:     raw('hsl(0, 0%, 100%)'),
    muted:                   raw('hsl(45, 60%, 90%)'),
    mutedForeground:         raw('hsl(45, 30%, 20%)'),
    accent:                  raw('hsl(35, 100%, 52%)'),
    accentForeground:        raw('hsl(150, 60%, 5%)'),
    destructive:             raw('hsl(0, 100%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(0, 0%, 0%)'),
    input:                   raw('hsl(0, 0%, 100%)'),
    ring:                    raw('hsl(150, 100%, 28%)'),
  },
  dark: {
    background:              raw('hsl(150, 80%, 4%)'),
    foreground:              raw('hsl(45, 100%, 95%)'),
    card:                    raw('hsl(150, 70%, 8%)'),
    cardForeground:          raw('hsl(45, 100%, 95%)'),
    popover:                 raw('hsl(150, 70%, 8%)'),
    popoverForeground:       raw('hsl(45, 100%, 95%)'),
    primary:                 raw('hsl(150, 100%, 48%)'),
    primaryForeground:       raw('hsl(150, 100%, 2%)'),
    secondary:               raw('hsl(0, 100%, 60%)'),
    secondaryForeground:     raw('hsl(0, 0%, 100%)'),
    muted:                   raw('hsl(150, 50%, 12%)'),
    mutedForeground:         raw('hsl(45, 20%, 75%)'),
    accent:                  raw('hsl(35, 100%, 58%)'),
    accentForeground:        raw('hsl(150, 100%, 2%)'),
    destructive:             raw('hsl(0, 100%, 50%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(45, 100%, 95%)'),
    input:                   raw('hsl(150, 40%, 12%)'),
    ring:                    raw('hsl(35, 100%, 58%)'),
  },
  fonts: {
    body: '\'Montserrat\', sans-serif',
    heading: '\'Lora\', serif',
  },
  radius: '0px',
})
