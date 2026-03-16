// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityExamdedoCmlpf1Theme = defineTheme({
  name: 'community-examdedo-cmlpf1',
  label: 'Examdedo',
  _sourceName: 'examdedo',
  category: 'Community',
  light: {
    background:              raw('#f9f7f1'),
    foreground:              raw('#4e3f31'),
    card:                    raw('#fffcf5'),
    cardForeground:          raw('#4e3f31'),
    popover:                 raw('#fffcf5'),
    popoverForeground:       raw('#4e3f31'),
    primary:                 raw('#b77c41'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e8dabd'),
    secondaryForeground:     raw('#624d39'),
    muted:                   raw('#f0e6d4'),
    mutedForeground:         raw('#856c4e'),
    accent:                  raw('#dccca2'),
    accentForeground:        raw('#4e3f31'),
    destructive:             raw('#cf391b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2d2b3'),
    input:                   raw('#e2d2b3'),
    ring:                    raw('#b77c41'),
  },
  dark: {
    background:              raw('#1c1c17'),
    foreground:              raw('#f0e6d4'),
    card:                    raw('#0f0f0f'),
    cardForeground:          raw('#f0e6d4'),
    popover:                 raw('#3d3229'),
    popoverForeground:       raw('#f0e6d4'),
    primary:                 raw('#cda073'),
    primaryForeground:       raw('#2f261f'),
    secondary:               raw('#4d3f36'),
    secondaryForeground:     raw('#f0e6d4'),
    muted:                   raw('#332b24'),
    mutedForeground:         raw('#cabda7'),
    accent:                  raw('#5e4839'),
    accentForeground:        raw('#f0e6d4'),
    destructive:             raw('#cf391b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#4d3f36'),
    input:                   raw('#4d3f36'),
    ring:                    raw('#cda073'),
  },
  fonts: {
    body: 'Manrope, ui-sans-serif, sans-serif, system-ui',
    heading: 'Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0.25rem',
})
