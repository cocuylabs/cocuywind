// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityHyperRedCmlielTheme = defineTheme({
  name: 'community-hyper-red-cmliel',
  label: 'Hyper Red',
  _sourceName: 'Hyper red',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#000000'),
    card:                    raw('#f8f8f8'),
    cardForeground:          raw('#1c1c1c'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#3b82f6'),
    primaryForeground:       raw('#f9fafb'),
    secondary:               raw('#e5e7eb'),
    secondaryForeground:     raw('#1c1c1c'),
    muted:                   raw('#f3f4f6'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#e5e7eb'),
    accentForeground:        raw('#1c1c1c'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f9fafb'),
    border:                  raw('#e5e7eb'),
    input:                   raw('#e5e7eb'),
    ring:                    raw('#3b82f6'),
  },
  dark: {
    background:              raw('#0d0d0d'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#0d0d0d'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#0d0d0d'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#e83363'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1a1a1a'),
    secondaryForeground:     raw('#e0e0e0'),
    muted:                   raw('#151515'),
    mutedForeground:         raw('#888888'),
    accent:                  raw('#50fa7b'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff5555'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#282828'),
    input:                   raw('#111111'),
    ring:                    raw('#e83363'),
  },
  fonts: {
    body: 'ui-sans-serif,system-ui,sans-serif',
    heading: 'ui-serif,Georgia,serif',
  },
  radius: '0.5rem',
})
