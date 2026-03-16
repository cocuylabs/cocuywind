// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPalmCmlotmTheme = defineTheme({
  name: 'community-palm-cmlotm',
  label: 'Palm',
  _sourceName: 'Palm',
  category: 'Community',
  light: {
    background:              raw('#fff9f6'),
    foreground:              raw('#28150c'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#28150c'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#28150c'),
    primary:                 raw('#c83600'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffe6d1'),
    secondaryForeground:     raw('#28150c'),
    muted:                   raw('#ffeee8'),
    mutedForeground:         raw('#735e56'),
    accent:                  raw('#ffd1c5'),
    accentForeground:        raw('#321a14'),
    destructive:             raw('#d40924'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#edd5cc'),
    input:                   raw('#edd5cc'),
    ring:                    raw('#c83600'),
  },
  dark: {
    background:              raw('#0a0403'),
    foreground:              raw('#f4ede9'),
    card:                    raw('#150a06'),
    cardForeground:          raw('#f4ede9'),
    popover:                 raw('#0f0704'),
    popoverForeground:       raw('#f4ede9'),
    primary:                 raw('#ff8435'),
    primaryForeground:       raw('#120805'),
    secondary:               raw('#241711'),
    secondaryForeground:     raw('#f4ede9'),
    muted:                   raw('#1e130e'),
    mutedForeground:         raw('#9d8b83'),
    accent:                  raw('#3c2117'),
    accentForeground:        raw('#f4ede9'),
    destructive:             raw('#e62b34'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2e201a'),
    input:                   raw('#2e201a'),
    ring:                    raw('#ff8435'),
  },
  fonts: {
    body: '\'Outfit\', system-ui, sans-serif',
    heading: '\'Playfair Display\', Georgia, serif',
  },
  radius: '1.0rem',
})
