// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPartyRockCmlqxfTheme = defineTheme({
  name: 'community-party-rock-cmlqxf',
  label: 'Party Rock',
  _sourceName: 'Party Rock ',
  category: 'Community',
  light: {
    background:              raw('#F2F1E6'),
    foreground:              raw('#000000'),
    card:                    raw('#F2F1E6'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#A855F7'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#C084FC'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#E8E7DB'),
    mutedForeground:         raw('#666666'),
    accent:                  raw('#A855F7'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#FF4D4D'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#000000'),
    input:                   raw('#FFFFFF'),
    ring:                    raw('#A855F7'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#F2F1E6'),
    card:                    raw('#1F1F1F'),
    cardForeground:          raw('#F2F1E6'),
    popover:                 raw('#1F1F1F'),
    popoverForeground:       raw('#F2F1E6'),
    primary:                 raw('#A855F7'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#2A2A2A'),
    secondaryForeground:     raw('#F2F1E6'),
    muted:                   raw('#2A2A2A'),
    mutedForeground:         raw('#A0A0A0'),
    accent:                  raw('#A855F7'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#800000'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#333333'),
    input:                   raw('#1F1F1F'),
    ring:                    raw('#A855F7'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '2rem',
})
