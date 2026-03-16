// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBlackCmmls5Theme = defineTheme({
  name: 'community-black-cmmls5',
  label: 'Black',
  _sourceName: 'Black',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#19191a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#19191a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#19191a'),
    primary:                 raw('#19191a'),
    primaryForeground:       raw('#fafafa'),
    secondary:               raw('#f5f5f5'),
    secondaryForeground:     raw('#19191a'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#737373'),
    accent:                  raw('#f5f5f5'),
    accentForeground:        raw('#19191a'),
    destructive:             raw('#cf1000'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#e5e5e5'),
    ring:                    raw('#a1a1a1'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#000000'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#ffffff'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#111111'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#111111'),
    mutedForeground:         raw('#a1a1a1'),
    accent:                  raw('#111111'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff3700'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#111111'),
    input:                   raw('#111111'),
    ring:                    raw('#111111'),
  },
  fonts: {
    body: 'Nunito, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
