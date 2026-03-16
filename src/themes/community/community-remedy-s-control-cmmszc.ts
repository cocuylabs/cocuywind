// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRemedySControlCmmszcTheme = defineTheme({
  name: 'community-remedy-s-control-cmmszc',
  label: 'Remedys Control',
  _sourceName: 'Remedy\'s Control',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 82%)'),
    foreground:              raw('hsl(0, 0%, 27%)'),
    card:                    raw('hsl(0, 0%, 78%)'),
    cardForeground:          raw('hsl(0, 0%, 10%)'),
    popover:                 raw('hsl(0, 0%, 10%)'),
    popoverForeground:       raw('hsl(0, 0%, 69%)'),
    primary:                 raw('hsl(0, 0%, 0%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(25, 100%, 43%)'),
    secondaryForeground:     raw('hsl(0, 0%, 96%)'),
    muted:                   raw('hsl(0, 0%, 69%)'),
    mutedForeground:         raw('hsl(0, 0%, 31%)'),
    accent:                  raw('hsl(173, 40%, 69%)'),
    accentForeground:        raw('hsl(0, 0%, 10%)'),
    destructive:             raw('hsl(357, 100%, 46%)'),
    destructiveForeground:   raw('hsl(0, 0%, 96%)'),
    border:                  raw('hsl(0, 0%, 53%)'),
    input:                   raw('hsl(25, 100%, 43%)'),
    ring:                    raw('hsl(0, 0%, 10%)'),
  },
  dark: {
    background:              raw('hsl(0, 0%, 0%)'),
    foreground:              raw('hsl(0, 0%, 100%)'),
    card:                    raw('hsl(0, 0%, 0%)'),
    cardForeground:          raw('hsl(0, 0%, 100%)'),
    popover:                 raw('hsl(0, 0%, 10%)'),
    popoverForeground:       raw('hsl(0, 0%, 100%)'),
    primary:                 raw('hsl(0, 0%, 100%)'),
    primaryForeground:       raw('hsl(0, 0%, 0%)'),
    secondary:               raw('hsl(357, 100%, 46%)'),
    secondaryForeground:     raw('hsl(0, 0%, 10%)'),
    muted:                   raw('hsl(0, 0%, 10%)'),
    mutedForeground:         raw('hsl(0, 0%, 36%)'),
    accent:                  raw('hsl(173, 40%, 10%)'),
    accentForeground:        raw('hsl(0, 0%, 96%)'),
    destructive:             raw('hsl(357, 100%, 46%)'),
    destructiveForeground:   raw('hsl(0, 0%, 0%)'),
    border:                  raw('hsl(0, 0%, 10%)'),
    input:                   raw('hsl(0, 0%, 10%)'),
    ring:                    raw('hsl(0, 0%, 100%)'),
  },
  fonts: {
    body: 'Montserrat, ui-sans-serif, sans-serif, system-ui',
    heading: 'Merriweather, ui-serif, serif',
  },
  radius: '0.4rem',
})
