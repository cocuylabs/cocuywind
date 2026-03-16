// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPoppy1Cmlmc0Theme = defineTheme({
  name: 'community-poppy-1-cmlmc0',
  label: 'Poppy 1',
  _sourceName: 'poppy-1',
  category: 'Community',
  light: {
    background:              raw('#f7f9f3'),
    foreground:              raw('#000000'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#4f46e5'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#14b8a6'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f0f0f0'),
    mutedForeground:         raw('#333333'),
    accent:                  raw('#f59e0b'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#000000'),
    input:                   raw('#737373'),
    ring:                    raw('#a5b4fc'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#1a212b'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#1a212b'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#818cf8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#2dd4bf'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#333333'),
    mutedForeground:         raw('#cccccc'),
    accent:                  raw('#fcd34d'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#f87171'),
    destructiveForeground:   raw('#000000'),
    border:                  raw('#545454'),
    input:                   raw('#ffffff'),
    ring:                    raw('#818cf8'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'DM Sans, sans-serif',
  },
  radius: '1rem',
})
