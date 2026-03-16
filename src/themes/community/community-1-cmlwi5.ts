// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const community1Cmlwi5Theme = defineTheme({
  name: 'community-1-cmlwi5',
  label: 'Cobalt Vista',
  _sourceName: '1 ',
  category: 'Community',
  light: {
    background:              raw('hsl(35, 30%, 98%)'),
    foreground:              raw('hsl(25, 25%, 15%)'),
    card:                    raw('hsl(35, 40%, 99%)'),
    cardForeground:          raw('hsl(25, 25%, 15%)'),
    popover:                 raw('hsl(35, 40%, 99%)'),
    popoverForeground:       raw('hsl(25, 25%, 15%)'),
    primary:                 raw('hsl(38, 95%, 48%)'),
    primaryForeground:       raw('hsl(35, 30%, 98%)'),
    secondary:               raw('hsl(145, 25%, 35%)'),
    secondaryForeground:     raw('hsl(35, 30%, 98%)'),
    muted:                   raw('hsl(35, 20%, 92%)'),
    mutedForeground:         raw('hsl(25, 10%, 45%)'),
    accent:                  raw('hsl(155, 30%, 90%)'),
    accentForeground:        raw('hsl(155, 40%, 25%)'),
    destructive:             raw('hsl(0, 60%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(30, 15%, 85%)'),
    input:                   raw('hsl(30, 15%, 85%)'),
    ring:                    raw('hsl(38, 95%, 48%)'),
  },
  dark: {
    background:              raw('hsl(25, 20%, 8%)'),
    foreground:              raw('hsl(35, 25%, 90%)'),
    card:                    raw('hsl(25, 20%, 10%)'),
    cardForeground:          raw('hsl(35, 25%, 90%)'),
    popover:                 raw('hsl(25, 20%, 10%)'),
    popoverForeground:       raw('hsl(35, 25%, 90%)'),
    primary:                 raw('hsl(42, 90%, 55%)'),
    primaryForeground:       raw('hsl(25, 20%, 5%)'),
    secondary:               raw('hsl(145, 20%, 45%)'),
    secondaryForeground:     raw('hsl(35, 25%, 95%)'),
    muted:                   raw('hsl(25, 15%, 15%)'),
    mutedForeground:         raw('hsl(35, 10%, 65%)'),
    accent:                  raw('hsl(165, 30%, 18%)'),
    accentForeground:        raw('hsl(165, 40%, 85%)'),
    destructive:             raw('hsl(0, 65%, 55%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(25, 15%, 20%)'),
    input:                   raw('hsl(25, 15%, 20%)'),
    ring:                    raw('hsl(42, 90%, 55%)'),
  },
  fonts: {
    body: '"Plus Jakarta Sans", sans-serif',
    heading: '"Cormorant Garamond", serif',
  },
  radius: '0.6rem',
})
