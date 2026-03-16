// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMyAweasomeThemeCmlxzfTheme = defineTheme({
  name: 'community-my-aweasome-theme-cmlxzf',
  label: 'My Aweasome Theme',
  _sourceName: 'my aweasome theme',
  category: 'Community',
  light: {
    background:              raw('hsl(160 30% 99%)'),
    foreground:              raw('hsl(160 50% 10%)'),
    card:                    raw('hsl(0 0% 100%)'),
    cardForeground:          raw('hsl(160 50% 10%)'),
    popover:                 raw('hsl(0 0% 100%)'),
    popoverForeground:       raw('hsl(160 50% 10%)'),
    primary:                 raw('hsl(160 84% 35%)'),
    primaryForeground:       raw('hsl(160 100% 98%)'),
    secondary:               raw('hsl(160 25% 94%)'),
    secondaryForeground:     raw('hsl(160 50% 25%)'),
    muted:                   raw('hsl(160 15% 94%)'),
    mutedForeground:         raw('hsl(160 15% 45%)'),
    accent:                  raw('hsl(160 40% 92%)'),
    accentForeground:        raw('hsl(160 60% 25%)'),
    destructive:             raw('hsl(0 84% 60%)'),
    destructiveForeground:   raw('hsl(0 0% 98%)'),
    border:                  raw('hsl(160 20% 88%)'),
    input:                   raw('hsl(160 20% 88%)'),
    ring:                    raw('hsl(160 84% 35%)'),
  },
  dark: {
    background:              raw('hsl(160 40% 3%)'),
    foreground:              raw('hsl(160 20% 98%)'),
    card:                    raw('hsl(160 40% 5%)'),
    cardForeground:          raw('hsl(160 20% 98%)'),
    popover:                 raw('hsl(160 40% 4%)'),
    popoverForeground:       raw('hsl(160 20% 98%)'),
    primary:                 raw('hsl(160 84% 45%)'),
    primaryForeground:       raw('hsl(160 100% 98%)'),
    secondary:               raw('hsl(160 25% 12%)'),
    secondaryForeground:     raw('hsl(160 20% 90%)'),
    muted:                   raw('hsl(160 25% 10%)'),
    mutedForeground:         raw('hsl(160 15% 65%)'),
    accent:                  raw('hsl(160 35% 15%)'),
    accentForeground:        raw('hsl(160 20% 98%)'),
    destructive:             raw('hsl(0 62% 35%)'),
    destructiveForeground:   raw('hsl(0 0% 98%)'),
    border:                  raw('hsl(160 20% 15%)'),
    input:                   raw('hsl(160 20% 15%)'),
    ring:                    raw('hsl(160 84% 45%)'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.6rem',
})
