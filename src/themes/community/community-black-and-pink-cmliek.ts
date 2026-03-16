// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBlackAndPinkCmliekTheme = defineTheme({
  name: 'community-black-and-pink-cmliek',
  label: 'Black And Pink',
  _sourceName: 'Black and pink ',
  category: 'Community',
  light: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#000000'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#ff00c8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#222222'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#111111'),
    mutedForeground:         raw('#aaaaaa'),
    accent:                  raw('#ff00c8'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff3d00'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#333333'),
    input:                   raw('#1a1a1a'),
    ring:                    raw('#ff00c8'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#000000'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#ff00c8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#222222'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#111111'),
    mutedForeground:         raw('#aaaaaa'),
    accent:                  raw('#ff00c8'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff3d00'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#333333'),
    input:                   raw('#1a1a1a'),
    ring:                    raw('#ff00c8'),
  },
  fonts: {
    body: 'Outfit, sans-serif',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
