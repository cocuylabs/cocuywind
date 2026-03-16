// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityGreenWithYellowThemeCmlewmTheme = defineTheme({
  name: 'community-green-with-yellow-theme-cmlewm',
  label: 'Green With Yellow Theme',
  _sourceName: 'green with yellow theme',
  category: 'Community',
  light: {
    background:              raw('hsl(140, 20%, 98%)'),
    foreground:              raw('hsl(140, 60%, 5%)'),
    card:                    raw('hsl(140, 20%, 98%)'),
    cardForeground:          raw('hsl(140, 60%, 5%)'),
    popover:                 raw('hsl(140, 20%, 98%)'),
    popoverForeground:       raw('hsl(140, 60%, 5%)'),
    primary:                 raw('hsl(142, 76%, 36%)'),
    primaryForeground:       raw('hsl(140, 20%, 98%)'),
    secondary:               raw('hsl(48, 96%, 53%)'),
    secondaryForeground:     raw('hsl(48, 20%, 5%)'),
    muted:                   raw('hsl(140, 15%, 92%)'),
    mutedForeground:         raw('hsl(140, 10%, 40%)'),
    accent:                  raw('hsl(48, 90%, 90%)'),
    accentForeground:        raw('hsl(48, 60%, 15%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(140, 15%, 88%)'),
    input:                   raw('hsl(140, 15%, 88%)'),
    ring:                    raw('hsl(142, 76%, 36%)'),
  },
  dark: {
    background:              raw('hsl(145, 45%, 3%)'),
    foreground:              raw('hsl(140, 10%, 95%)'),
    card:                    raw('hsl(145, 45%, 5%)'),
    cardForeground:          raw('hsl(140, 10%, 95%)'),
    popover:                 raw('hsl(145, 45%, 3%)'),
    popoverForeground:       raw('hsl(140, 10%, 95%)'),
    primary:                 raw('hsl(142, 70%, 45%)'),
    primaryForeground:       raw('hsl(145, 45%, 3%)'),
    secondary:               raw('hsl(48, 90%, 50%)'),
    secondaryForeground:     raw('hsl(145, 45%, 3%)'),
    muted:                   raw('hsl(145, 30%, 15%)'),
    mutedForeground:         raw('hsl(140, 10%, 65%)'),
    accent:                  raw('hsl(48, 80%, 15%)'),
    accentForeground:        raw('hsl(48, 90%, 90%)'),
    destructive:             raw('hsl(0, 62%, 30%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(145, 30%, 18%)'),
    input:                   raw('hsl(145, 30%, 18%)'),
    ring:                    raw('hsl(142, 70%, 45%)'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
