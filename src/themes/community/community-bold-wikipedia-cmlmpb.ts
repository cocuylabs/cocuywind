// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBoldWikipediaCmlmpbTheme = defineTheme({
  name: 'community-bold-wikipedia-cmlmpb',
  label: 'Bold Wikipedia',
  _sourceName: 'Bold Wikipedia',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 100%)'),
    foreground:              raw('hsl(0, 0%, 15%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(0, 0%, 15%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(0, 0%, 15%)'),
    primary:                 raw('hsl(214, 85%, 45%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(210, 20%, 96%)'),
    secondaryForeground:     raw('hsl(0, 0%, 15%)'),
    muted:                   raw('hsl(0, 0%, 96%)'),
    mutedForeground:         raw('hsl(0, 0%, 45%)'),
    accent:                  raw('hsl(214, 85%, 96%)'),
    accentForeground:        raw('hsl(214, 85%, 35%)'),
    destructive:             raw('hsl(0, 84%, 44%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(0, 0%, 82%)'),
    input:                   raw('hsl(0, 0%, 90%)'),
    ring:                    raw('hsl(214, 85%, 45%)'),
  },
  dark: {
    background:              raw('hsl(0, 0%, 12%)'),
    foreground:              raw('hsl(0, 0%, 92%)'),
    card:                    raw('hsl(0, 0%, 15%)'),
    cardForeground:          raw('hsl(0, 0%, 92%)'),
    popover:                 raw('hsl(0, 0%, 15%)'),
    popoverForeground:       raw('hsl(0, 0%, 92%)'),
    primary:                 raw('hsl(212, 100%, 75%)'),
    primaryForeground:       raw('hsl(212, 100%, 10%)'),
    secondary:               raw('hsl(0, 0%, 20%)'),
    secondaryForeground:     raw('hsl(0, 0%, 92%)'),
    muted:                   raw('hsl(0, 0%, 18%)'),
    mutedForeground:         raw('hsl(0, 0%, 65%)'),
    accent:                  raw('hsl(212, 100%, 20%)'),
    accentForeground:        raw('hsl(212, 100%, 85%)'),
    destructive:             raw('hsl(0, 75%, 50%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(0, 0%, 25%)'),
    input:                   raw('hsl(0, 0%, 25%)'),
    ring:                    raw('hsl(212, 100%, 75%)'),
  },
  fonts: {
    body: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
    heading: 'Georgia, "Times New Roman", serif',
  },
  radius: '0.125rem',
})
