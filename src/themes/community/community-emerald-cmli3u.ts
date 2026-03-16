// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityEmeraldCmli3uTheme = defineTheme({
  name: 'community-emerald-cmli3u',
  label: 'Emerald',
  _sourceName: 'Emerald',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#103c1f'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#103c1f'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#103c1f'),
    primary:                 raw('#30bd2e'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#66f06f'),
    secondaryForeground:     raw('#0f8000'),
    muted:                   raw('#f2f2f2'),
    mutedForeground:         raw('#778d7e'),
    accent:                  raw('#dbffde'),
    accentForeground:        raw('#103c1f'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('#f0f0f0'),
    input:                   raw('oklch(0.922 0 0)'),
    ring:                    raw('oklch(0.708 0 0)'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#cdffb8'),
    card:                    raw('#050b05'),
    cardForeground:          raw('#1c9b25'),
    popover:                 raw('#092202'),
    popoverForeground:       raw('#f7f7f7'),
    primary:                 raw('#77c940'),
    primaryForeground:       raw('#14410b'),
    secondary:               raw('#1e5809'),
    secondaryForeground:     raw('#77c940'),
    muted:                   raw('#091f00'),
    mutedForeground:         raw('#c0e8ab'),
    accent:                  raw('#1f3c0b'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('#081802'),
    input:                   raw('#193d05'),
    ring:                    raw('#2d6e11'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '1.875rem',
})
