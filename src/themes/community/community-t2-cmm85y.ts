// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityT2Cmm85yTheme = defineTheme({
  name: 'community-t2-cmm85y',
  label: 'Sage Drift',
  _sourceName: 't2',
  category: 'Community',
  light: {
    background:              raw('#faf7f5'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#faf7f5'),
    cardForeground:          raw('#1a1a1a'),
    popover:                 raw('#faf7f5'),
    popoverForeground:       raw('#1a1a1a'),
    primary:                 raw('#9b2c2c'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#fdf2d6'),
    secondaryForeground:     raw('#805500'),
    muted:                   raw('#f0ebe8'),
    mutedForeground:         raw('#57534e'),
    accent:                  raw('#fef3c7'),
    accentForeground:        raw('#7f1d1d'),
    destructive:             raw('#991b1b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#f5e8d2'),
    input:                   raw('#f5e8d2'),
    ring:                    raw('#9b2c2c'),
  },
  dark: {
    background:              raw('#1c1917'),
    foreground:              raw('#f5f5f4'),
    card:                    raw('#292524'),
    cardForeground:          raw('#f5f5f4'),
    popover:                 raw('#292524'),
    popoverForeground:       raw('#f5f5f4'),
    primary:                 raw('#b91c1c'),
    primaryForeground:       raw('#faf7f5'),
    secondary:               raw('#92400e'),
    secondaryForeground:     raw('#fef3c7'),
    muted:                   raw('#1f1c1a'),
    mutedForeground:         raw('#d6d3d1'),
    accent:                  raw('#b45309'),
    accentForeground:        raw('#fef3c7'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#44403c'),
    input:                   raw('#44403c'),
    ring:                    raw('#b91c1c'),
  },
  fonts: {
    body: 'AR One Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Intel One Mono, ui-monospace, monospace',
  },
  radius: '0.375rem',
})
