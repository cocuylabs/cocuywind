// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTealHueCmm599Theme = defineTheme({
  name: 'community-teal-hue-cmm599',
  label: 'Teal Hue',
  _sourceName: 'Teal Hue',
  category: 'Community',
  light: {
    background:              raw('hsl(170, 40%, 98%)'),
    foreground:              raw('hsl(180, 40%, 15%)'),
    card:                    raw('hsl(170, 40%, 100%)'),
    cardForeground:          raw('hsl(180, 40%, 15%)'),
    popover:                 raw('hsl(170, 40%, 100%)'),
    popoverForeground:       raw('hsl(180, 40%, 15%)'),
    primary:                 raw('hsl(171, 100%, 35%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(185, 80%, 94%)'),
    secondaryForeground:     raw('hsl(185, 90%, 25%)'),
    muted:                   raw('hsl(170, 20%, 94%)'),
    mutedForeground:         raw('hsl(180, 15%, 45%)'),
    accent:                  raw('hsl(190, 100%, 94%)'),
    accentForeground:        raw('hsl(190, 100%, 25%)'),
    destructive:             raw('hsl(340, 90%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(171, 30%, 88%)'),
    input:                   raw('hsl(171, 30%, 88%)'),
    ring:                    raw('hsl(171, 100%, 35%)'),
  },
  dark: {
    background:              raw('hsl(180, 50%, 4%)'),
    foreground:              raw('hsl(170, 20%, 96%)'),
    card:                    raw('hsl(180, 45%, 7%)'),
    cardForeground:          raw('hsl(170, 20%, 96%)'),
    popover:                 raw('hsl(180, 45%, 7%)'),
    popoverForeground:       raw('hsl(170, 20%, 96%)'),
    primary:                 raw('hsl(171, 90%, 50%)'),
    primaryForeground:       raw('hsl(180, 50%, 5%)'),
    secondary:               raw('hsl(185, 40%, 15%)'),
    secondaryForeground:     raw('hsl(185, 90%, 90%)'),
    muted:                   raw('hsl(180, 30%, 12%)'),
    mutedForeground:         raw('hsl(170, 10%, 70%)'),
    accent:                  raw('hsl(190, 50%, 15%)'),
    accentForeground:        raw('hsl(190, 90%, 90%)'),
    destructive:             raw('hsl(340, 80%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(180, 30%, 18%)'),
    input:                   raw('hsl(180, 30%, 18%)'),
    ring:                    raw('hsl(171, 90%, 50%)'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, Quicksand, system-ui, sans-serif',
    heading: 'Chillax, Playfair Display, serif',
  },
  radius: '1rem',
})
