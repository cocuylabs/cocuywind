// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPurpleSoftPopinsCmlwkuTheme = defineTheme({
  name: 'community-purple-soft-popins-cmlwku',
  label: 'Purple Soft Poppins',
  _sourceName: 'Purple Soft Popins',
  category: 'Community',
  light: {
    background:              raw('hsl(210, 40%, 98%)'),
    foreground:              raw('hsl(224, 71%, 4%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(224, 71%, 4%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(224, 71%, 4%)'),
    primary:                 raw('hsl(263, 70%, 50%)'),
    primaryForeground:       raw('hsl(210, 40%, 98%)'),
    secondary:               raw('hsl(263, 20%, 94%)'),
    secondaryForeground:     raw('hsl(263, 70%, 30%)'),
    muted:                   raw('hsl(220, 14%, 96%)'),
    mutedForeground:         raw('hsl(220, 9%, 46%)'),
    accent:                  raw('hsl(263, 80%, 96%)'),
    accentForeground:        raw('hsl(263, 70%, 50%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(220, 13%, 91%)'),
    input:                   raw('hsl(220, 13%, 91%)'),
    ring:                    raw('hsl(263, 70%, 50%)'),
  },
  dark: {
    background:              raw('hsl(260, 25%, 2%)'),
    foreground:              raw('hsl(210, 40%, 98%)'),
    card:                    raw('hsl(260, 25%, 4%)'),
    cardForeground:          raw('hsl(210, 40%, 98%)'),
    popover:                 raw('hsl(260, 25%, 5%)'),
    popoverForeground:       raw('hsl(210, 40%, 98%)'),
    primary:                 raw('hsl(263, 85%, 65%)'),
    primaryForeground:       raw('hsl(260, 25%, 2%)'),
    secondary:               raw('hsl(263, 40%, 15%)'),
    secondaryForeground:     raw('hsl(263, 85%, 85%)'),
    muted:                   raw('hsl(260, 20%, 12%)'),
    mutedForeground:         raw('hsl(260, 10%, 70%)'),
    accent:                  raw('hsl(263, 60%, 15%)'),
    accentForeground:        raw('hsl(263, 85%, 65%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(260, 20%, 15%)'),
    input:                   raw('hsl(260, 20%, 15%)'),
    ring:                    raw('hsl(263, 85%, 65%)'),
  },
  fonts: {
    body: 'Poppins, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '1rem',
})
