// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLyteCmml0pTheme = defineTheme({
  name: 'community-lyte-cmml0p',
  label: 'Lyte',
  _sourceName: 'Lyte ',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#112539'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#112539'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#112539'),
    primary:                 raw('004365'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2da89c'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#112539'),
    accent:                  raw('#9ce8d0'),
    accentForeground:        raw('#112539'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e4e4e7'),
    input:                   raw('#e4e4e7'),
    ring:                    raw('#004365'),
  },
  dark: {
    background:              raw('#1e1e1e'),
    foreground:              raw('#ffffff'),
    card:                    raw('#112539'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#112539'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#2debae'),
    primaryForeground:       raw('#112539'),
    secondary:               raw('#8849ff'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#112539'),
    mutedForeground:         raw('#2debae'),
    accent:                  raw('#004365'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#004365'),
    input:                   raw('#004365'),
    ring:                    raw('#2debae'),
  },
  fonts: {
    body: 'Google Sans',
    heading: 'Inter',
  },
  radius: '0.5rem',
})
