// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAgoraEventsCmlpmfTheme = defineTheme({
  name: 'community-agora-events-cmlpmf',
  label: 'Agora Events',
  _sourceName: 'Agora Events',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#09090b'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#09090b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#09090b'),
    primary:                 raw('#e274ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f4f4f5'),
    secondaryForeground:     raw('#18181b'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#71717a'),
    accent:                  raw('#f4f4f5'),
    accentForeground:        raw('#18181b'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e274ff'),
    input:                   raw('#e274ff'),
    ring:                    raw('#e274ff'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#fafafa'),
    card:                    raw('#09090b'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#09090b'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#e274ff'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#18181b'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#18181b'),
    mutedForeground:         raw('#a1a1aa'),
    accent:                  raw('#27272a'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e274ff'),
    input:                   raw('#18181b'),
    ring:                    raw('#e274ff'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Georgia\', serif',
  },
  radius: '0.5rem',
})
