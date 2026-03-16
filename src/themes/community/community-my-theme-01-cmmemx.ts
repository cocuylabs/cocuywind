// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMyTheme01CmmemxTheme = defineTheme({
  name: 'community-my-theme-01-cmmemx',
  label: 'My Theme 01',
  _sourceName: 'My Theme 01',
  category: 'Community',
  light: {
    background:              raw('oklch(0.938 0.127 124.321)'),
    foreground:              raw('oklch(0.391 0.09 240.876)'),
    card:                    raw('oklch(0.938 0.127 124.321)'),
    cardForeground:          raw('oklch(0.274 0.072 132.109)'),
    popover:                 raw('oklch(0.95 0.052 163.051)'),
    popoverForeground:       raw('oklch(0.527 0.154 150.069)'),
    primary:                 raw('oklch(0.938 0.127 124.321)'),
    primaryForeground:       raw('oklch(0.508 0.118 165.612)'),
    secondary:               raw('oklch(0.414 0.112 45.904)'),
    secondaryForeground:     raw('oklch(0.837 0.128 66.29)'),
    muted:                   raw('oklch(0.855 0.138 181.071)'),
    mutedForeground:         raw('oklch(0.414 0.112 45.904)'),
    accent:                  raw('oklch(0.648 0.2 131.684)'),
    accentForeground:        raw('oklch(0.378 0.077 168.94)'),
    destructive:             raw('oklch(0.453 0 .124 130.933)'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('oklch(0.627 0.194 149.214)'),
    input:                   raw('#303052'),
    ring:                    raw('#a48fff'),
  },
  dark: {
    background:              raw('oklch(0.938 0.127 124.321)'),
    foreground:              raw('oklch(0.391 0.09 240.876)'),
    card:                    raw('oklch(0.938 0.127 124.321)'),
    cardForeground:          raw('oklch(0.274 0.072 132.109)'),
    popover:                 raw('oklch(0.95 0.052 163.051)'),
    popoverForeground:       raw('oklch(0.527 0.154 150.069)'),
    primary:                 raw('oklch(0.938 0.127 124.321)'),
    primaryForeground:       raw('oklch(0.508 0.118 165.612)'),
    secondary:               raw('oklch(0.414 0.112 45.904)'),
    secondaryForeground:     raw('oklch(0.837 0.128 66.29)'),
    muted:                   raw('oklch(0.855 0.138 181.071)'),
    mutedForeground:         raw('oklch(0.414 0.112 45.904)'),
    accent:                  raw('oklch(0.648 0.2 131.684)'),
    accentForeground:        raw('oklch(0.378 0.077 168.94)'),
    destructive:             raw('oklch(0.453 0 .124 130.933)'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('oklch(0.627 0.194 149.214)'),
    input:                   raw('#303052'),
    ring:                    raw('#a48fff'),
  },
  fonts: {
    body: 'Abyssinica SIL, ui-serif, serif',
    heading: 'Adamina, ui-serif, serif',
  },
  radius: '1.725rem',
})
