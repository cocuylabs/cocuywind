// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityRewaffCmmm3hTheme = defineTheme({
  name: 'community-rewaff-cmmm3h',
  label: 'Rewaff',
  _sourceName: 'Rewaff',
  category: 'Community',
  light: {
    background:              raw('#f3faff'),
    foreground:              raw('#09131a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#09131a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#09131a'),
    primary:                 raw('#00a33d'),
    primaryForeground:       raw('#f3faff'),
    secondary:               raw('#e0edf8'),
    secondaryForeground:     raw('#202a32'),
    muted:                   raw('#e0edf8'),
    mutedForeground:         raw('#4c575f'),
    accent:                  raw('#28bc5e'),
    accentForeground:        raw('#f3faff'),
    destructive:             raw('#f22a36'),
    destructiveForeground:   raw('#f3faff'),
    border:                  raw('#d3e0ea'),
    input:                   raw('#d3e0ea'),
    ring:                    raw('#00a33d'),
  },
  dark: {
    background:              raw('#02080e'),
    foreground:              raw('#e9f0f5'),
    card:                    raw('#09131a'),
    cardForeground:          raw('#e9f0f5'),
    popover:                 raw('#09131a'),
    popoverForeground:       raw('#e9f0f5'),
    primary:                 raw('#2fbc5b'),
    primaryForeground:       raw('#000408'),
    secondary:               raw('#172128'),
    secondaryForeground:     raw('#e9f0f5'),
    muted:                   raw('#172128'),
    mutedForeground:         raw('#85919a'),
    accent:                  raw('#32c364'),
    accentForeground:        raw('#000408'),
    destructive:             raw('#f22a36'),
    destructiveForeground:   raw('#f3faff'),
    border:                  raw('#202a32'),
    input:                   raw('#202a32'),
    ring:                    raw('#2fbc5b'),
  },
  fonts: {
    body: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
    heading: 'PT Serif, ui-serif, serif',
  },
  radius: '0.75rem',
})
