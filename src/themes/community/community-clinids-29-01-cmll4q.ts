// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityClinids2901Cmll4qTheme = defineTheme({
  name: 'community-clinids-29-01-cmll4q',
  label: 'Clinids (29/01)',
  _sourceName: 'CliniDS (29/01)',
  category: 'Community',
  light: {
    background:              raw('#FAFAf9'),
    foreground:              raw('#0c0a09'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0c0a09'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0c0a09'),
    primary:                 raw('#ec6726'),
    primaryForeground:       raw('#fafaf9'),
    secondary:               raw('fdf0e9'),
    secondaryForeground:     raw('#ec6726'),
    muted:                   raw('#f5f5f4'),
    mutedForeground:         raw('#78716c'),
    accent:                  raw('#f5f5f4'),
    accentForeground:        raw('#1c1917'),
    destructive:             raw('#d32f2f'),
    destructiveForeground:   raw('#fafaf9'),
    border:                  raw('#e7e5e4'),
    input:                   raw('#e7e5e4'),
    ring:                    raw('#ec6726'),
  },
  dark: {
    background:              raw('#0c0a09'),
    foreground:              raw('#fafaf9'),
    card:                    raw('#1c1917'),
    cardForeground:          raw('#fafaf9'),
    popover:                 raw('#1c1917'),
    popoverForeground:       raw('#fafaf9'),
    primary:                 raw('#ec6726'),
    primaryForeground:       raw('#fafaf9'),
    secondary:               raw('#292524'),
    secondaryForeground:     raw('#fafaf9'),
    muted:                   raw('#292524'),
    mutedForeground:         raw('#a8a29e'),
    accent:                  raw('#292524'),
    accentForeground:        raw('#fafaf9'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fafaf9'),
    border:                  raw('#292524'),
    input:                   raw('#292524'),
    ring:                    raw('#ec6726'),
  },
  fonts: {
    body: 'Roboto, ui-sans-serif, sans-serif, system-ui',
    heading: 'serif',
  },
  radius: '0.5rem',
})
