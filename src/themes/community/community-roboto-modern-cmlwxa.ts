// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRobotoModernCmlwxaTheme = defineTheme({
  name: 'community-roboto-modern-cmlwxa',
  label: 'Roboto Modern',
  _sourceName: 'roboto_modern',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0f1624'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0f1624'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0f1624'),
    primary:                 raw('#bc5d27'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#425e5e'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#bbc1cc'),
    mutedForeground:         raw('#565b66'),
    accent:                  raw('#eeeeee'),
    accentForeground:        raw('#0f1624'),
    destructive:             raw('#e21313'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#b1b7c3'),
    input:                   raw('#b1b7c3'),
    ring:                    raw('#bc5d27'),
  },
  dark: {
    background:              raw('#1a181b'),
    foreground:              raw('#c1c1c1'),
    card:                    raw('#121212'),
    cardForeground:          raw('#c1c1c1'),
    popover:                 raw('#1a181b'),
    popoverForeground:       raw('#c1c1c1'),
    primary:                 raw('#dc651f'),
    primaryForeground:       raw('#1a181b'),
    secondary:               raw('#4c6c6c'),
    secondaryForeground:     raw('#1a181b'),
    muted:                   raw('#222222'),
    mutedForeground:         raw('#888888'),
    accent:                  raw('#333333'),
    accentForeground:        raw('#c1c1c1'),
    destructive:             raw('#4c6c6c'),
    destructiveForeground:   raw('#1a181b'),
    border:                  raw('#222222'),
    input:                   raw('#222222'),
    ring:                    raw('#dc651f'),
  },
  fonts: {
    body: 'Roboto, ui-sans-serif, sans-serif, system-ui',
    heading: 'serif',
  },
  radius: '0.75rem',
})
