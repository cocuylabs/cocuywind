// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAlpineCmleclTheme = defineTheme({
  name: 'community-alpine-cmlecl',
  label: 'Alpine',
  _sourceName: 'Alpine',
  category: 'Community',
  light: {
    background:              raw('#fcf5f7'),
    foreground:              raw('#0a1931'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0a1931'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a1931'),
    primary:                 raw('#0047ab'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ff4d6d'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#e5eaf5'),
    mutedForeground:         raw('#4a5568'),
    accent:                  raw('#ffb3c1'),
    accentForeground:        raw('#0a1931'),
    destructive:             raw('#e11d48'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#cbd5e1'),
    input:                   raw('#ffffff'),
    ring:                    raw('#0047ab'),
  },
  dark: {
    background:              raw('#00050d'),
    foreground:              raw('#ffffff'),
    card:                    raw('#001026'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#00050d'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#4dabff'),
    primaryForeground:       raw('#00050d'),
    secondary:               raw('#ff4d6d'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#001a40'),
    mutedForeground:         raw('#cbd5e1'),
    accent:                  raw('#d02f4d'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff3333'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#021c45'),
    input:                   raw('#001a40'),
    ring:                    raw('#4dabff'),
  },
  fonts: {
    body: '\'Montserrat\', sans-serif',
    heading: '\'Playfair Display\', serif',
  },
  radius: '0.75rem',
})
