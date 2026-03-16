// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityInfoseerCmmcv8Theme = defineTheme({
  name: 'community-infoseer-cmmcv8',
  label: 'Infoseer',
  _sourceName: 'infoseer',
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
    destructive:             raw('#cf003f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#e5e5e5'),
    ring:                    raw('#a1a1a1'),
  },
  dark: {
    background:              raw('#19191a'),
    foreground:              raw('#fafafa'),
    card:                    raw('#19191a'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#262626'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#e5e5e5'),
    primaryForeground:       raw('#19191a'),
    secondary:               raw('#262626'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a1a1a1'),
    accent:                  raw('#404040'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#ff6582'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#282828'),
    input:                   raw('#343434'),
    ring:                    raw('#737373'),
  },
  fonts: {
    body: 'Fira Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Noto Serif SC, ui-serif, serif',
  },
  radius: '0.625rem',
})
