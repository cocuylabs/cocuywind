// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDeSwissDesignCmlureTheme = defineTheme({
  name: 'community-de-swiss-design-cmlure',
  label: 'DE Swiss Design',
  _sourceName: 'DE-Swiss-Design',
  category: 'Community',
  light: {
    background:              raw('hsl(0,0%,100%)'),
    foreground:              raw('hsl(0,0%,0%)'),
    card:                    raw('hsl(0,0%,100%)'),
    cardForeground:          raw('hsl(0,0%,0%)'),
    popover:                 raw('hsl(0,0%,100%)'),
    popoverForeground:       raw('hsl(0,0%,0%)'),
    primary:                 raw('hsl(0, 100%, 43%)'),
    primaryForeground:       raw('hsl(0,0%,100%)'),
    secondary:               raw('hsl(0,0%,0%)'),
    secondaryForeground:     raw('hsl(0,0%,100%)'),
    muted:                   raw('hsl(0,0%,96%)'),
    mutedForeground:         raw('hsl(0,0%,40%)'),
    accent:                  raw('hsl(45,100%,50%)'),
    accentForeground:        raw('hsl(0,0%,0%)'),
    destructive:             raw('hsl(0,100%,40%)'),
    destructiveForeground:   raw('hsl(0,0%,100%)'),
    border:                  raw('hsl(0,0%,0%)'),
    input:                   raw('hsl(0,0%,100%)'),
    ring:                    raw('hsl(0,100%,45%)'),
  },
  dark: {
    background:              raw('hsl(0,0%,0%)'),
    foreground:              raw('hsl(0,0%,100%)'),
    card:                    raw('hsl(0,0%,4%)'),
    cardForeground:          raw('hsl(0,0%,100%)'),
    popover:                 raw('hsl(0,0%,4%)'),
    popoverForeground:       raw('hsl(0,0%,100%)'),
    primary:                 raw('hsl(0,100%,50%)'),
    primaryForeground:       raw('hsl(0,0%,100%)'),
    secondary:               raw('hsl(0,0%,100%)'),
    secondaryForeground:     raw('hsl(0,0%,0%)'),
    muted:                   raw('hsl(0,0%,12%)'),
    mutedForeground:         raw('hsl(0,0%,70%)'),
    accent:                  raw('hsl(45,100%,55%)'),
    accentForeground:        raw('hsl(0,0%,0%)'),
    destructive:             raw('hsl(0,100%,60%)'),
    destructiveForeground:   raw('hsl(0,0%,100%)'),
    border:                  raw('hsl(0,0%,100%)'),
    input:                   raw('hsl(0,0%,0%)'),
    ring:                    raw('hsl(0,100%,50%)'),
  },
  fonts: {
    body: '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
    heading: '\'Georgia\', serif',
  },
  radius: '0px',
})
