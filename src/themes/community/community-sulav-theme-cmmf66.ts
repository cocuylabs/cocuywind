// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySulavThemeCmmf66Theme = defineTheme({
  name: 'community-sulav-theme-cmmf66',
  label: 'Sulav Theme',
  _sourceName: 'sulav-theme',
  category: 'Community',
  light: {
    background:              raw('hsl(40, 44%, 96%)'),
    foreground:              raw('hsl(25, 20%, 20%)'),
    card:                    raw('hsl(40, 44%, 98%)'),
    cardForeground:          raw('hsl(25, 20%, 20%)'),
    popover:                 raw('hsl(40, 44%, 96%)'),
    popoverForeground:       raw('hsl(25, 20%, 20%)'),
    primary:                 raw('hsl(145, 30%, 45%)'),
    primaryForeground:       raw('hsl(40, 44%, 98%)'),
    secondary:               raw('oklch(0.609 0.126 221.723)'),
    secondaryForeground:     raw('hsl(25, 30%, 25%)'),
    muted:                   raw('hsl(40, 20%, 90%)'),
    mutedForeground:         raw('hsl(25, 10%, 45%)'),
    accent:                  raw('hsl(15, 65%, 90%)'),
    accentForeground:        raw('hsl(15, 60%, 30%)'),
    destructive:             raw('hsl(0, 55%, 55%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(35, 30%, 85%)'),
    input:                   raw('hsl(35, 30%, 90%)'),
    ring:                    raw('hsl(145, 30%, 45%)'),
  },
  dark: {
    background:              raw('hsl(220, 25%, 12%)'),
    foreground:              raw('hsl(40, 30%, 92%)'),
    card:                    raw('hsl(220, 25%, 15%)'),
    cardForeground:          raw('hsl(40, 30%, 92%)'),
    popover:                 raw('hsl(220, 25%, 12%)'),
    popoverForeground:       raw('hsl(40, 30%, 92%)'),
    primary:                 raw('hsl(155, 35%, 45%)'),
    primaryForeground:       raw('hsl(220, 25%, 10%)'),
    secondary:               raw('hsl(210, 20%, 25%)'),
    secondaryForeground:     raw('hsl(40, 30%, 90%)'),
    muted:                   raw('hsl(220, 20%, 20%)'),
    mutedForeground:         raw('hsl(215, 15%, 70%)'),
    accent:                  raw('hsl(170, 30%, 25%)'),
    accentForeground:        raw('hsl(170, 30%, 90%)'),
    destructive:             raw('hsl(0, 60%, 45%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(220, 20%, 25%)'),
    input:                   raw('hsl(220, 20%, 20%)'),
    ring:                    raw('hsl(155, 35%, 45%)'),
  },
  fonts: {
    body: 'Quicksand, Inter, sans-serif',
    heading: 'Libre Baskerville, Georgia, serif',
  },
  radius: '0.8rem',
})
