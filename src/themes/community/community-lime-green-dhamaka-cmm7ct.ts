// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLimeGreenDhamakaCmm7ctTheme = defineTheme({
  name: 'community-lime-green-dhamaka-cmm7ct',
  label: 'Lime Green Dhamaka',
  _sourceName: 'Lime green dhamaka',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#17171c'),
    card:                    raw('oklch(0.967 0.003 264.542)'),
    cardForeground:          raw('#17171c'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#17171c'),
    primary:                 raw('#d9e96e'),
    primaryForeground:       raw('#17171c'),
    secondary:               raw('#e4e4e7'),
    secondaryForeground:     raw('#18181b'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#71717a'),
    accent:                  raw('#fafafa'),
    accentForeground:        raw('#18181b'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e4e4e7'),
    input:                   raw('#fafafa'),
    ring:                    raw('#18181b'),
  },
  dark: {
    background:              raw('#0d0d0d'),
    foreground:              raw('#f4f4f5'),
    card:                    raw('#161616'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#0d0d0d'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#d9e96e'),
    primaryForeground:       raw('#17171c'),
    secondary:               raw('#303030'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#1a1a1a'),
    mutedForeground:         raw('#a1a1aa'),
    accent:                  raw('#222121'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#27272a'),
    input:                   raw('#222121'),
    ring:                    raw('#d9e96e'),
  },
  fonts: {
    body: 'Chakra Petch, ui-sans-serif, sans-serif, system-ui',
    heading: '\'Georgia\', serif',
  },
  radius: '0.2rem',
})
