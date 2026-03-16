// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityNxtbetQuadraInspiredCmmaeaTheme = defineTheme({
  name: 'community-nxtbet-quadra-inspired-cmmaea',
  label: 'NXTBET Quadra Inspired',
  _sourceName: 'NXTBET - Quadra Inspired',
  category: 'Community',
  light: {
    background:              raw('hsl(0,0%,100%)'),
    foreground:              raw('hsl(0,0%,8%)'),
    card:                    raw('hsl(0,0%,98%)'),
    cardForeground:          raw('hsl(0,0%,8%)'),
    popover:                 raw('hsl(0,0%,100%)'),
    popoverForeground:       raw('hsl(0,0%,8%)'),
    primary:                 raw('hsl(33,96%,51%)'),
    primaryForeground:       raw('hsl(0,0%,100%)'),
    secondary:               raw('hsl(0,0%,12%)'),
    secondaryForeground:     raw('hsl(33,96%,51%)'),
    muted:                   raw('hsl(0,0%,95%)'),
    mutedForeground:         raw('hsl(0,0%,40%)'),
    accent:                  raw('hsl(33,96%,93%)'),
    accentForeground:        raw('hsl(33,96%,20%)'),
    destructive:             raw('hsl(0,84%,60%)'),
    destructiveForeground:   raw('hsl(0,0%,100%)'),
    border:                  raw('hsl(0,0%,88%)'),
    input:                   raw('hsl(0,0%,88%)'),
    ring:                    raw('hsl(33,96%,51%)'),
  },
  dark: {
    background:              raw('hsl(0,0%,3%)'),
    foreground:              raw('hsl(0,0%,98%)'),
    card:                    raw('hsl(0,0%,6%)'),
    cardForeground:          raw('hsl(0,0%,98%)'),
    popover:                 raw('hsl(0,0%,5%)'),
    popoverForeground:       raw('hsl(0,0%,98%)'),
    primary:                 raw('hsl(33,96%,51%)'),
    primaryForeground:       raw('hsl(0,0%,0%)'),
    secondary:               raw('hsl(0,0%,15%)'),
    secondaryForeground:     raw('hsl(33,96%,51%)'),
    muted:                   raw('hsl(0,0%,10%)'),
    mutedForeground:         raw('hsl(0,0%,65%)'),
    accent:                  raw('hsl(33,96%,15%)'),
    accentForeground:        raw('hsl(33,96%,60%)'),
    destructive:             raw('hsl(0,84%,60%)'),
    destructiveForeground:   raw('hsl(0,0%,100%)'),
    border:                  raw('hsl(0,0%,18%)'),
    input:                   raw('hsl(0,0%,18%)'),
    ring:                    raw('hsl(33,96%,51%)'),
  },
  fonts: {
    body: 'Arial, Helvetica, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.375rem',
})
