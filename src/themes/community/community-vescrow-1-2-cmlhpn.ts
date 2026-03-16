// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityVescrow12CmlhpnTheme = defineTheme({
  name: 'community-vescrow-1-2-cmlhpn',
  label: 'Vescrow 1.2',
  _sourceName: 'Vescrow 1.2',
  category: 'Community',
  light: {
    background:              raw('#FDFCFE'),
    foreground:              raw('#0A050D'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#0A050D'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#0A050D'),
    primary:                 raw('#03035e'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#e2ebfd'),
    secondaryForeground:     raw('#0248d4'),
    muted:                   raw('#F0EEF2'),
    mutedForeground:         raw('#635D69'),
    accent:                  raw('#e5e8ff'),
    accentForeground:        raw('#0248d4'),
    destructive:             raw('#E11D48'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#E6E1E9'),
    input:                   raw('#E6E1E9'),
    ring:                    raw('#3d7eff'),
  },
  dark: {
    background:              raw('#020409'),
    foreground:              raw('#FDFCFE'),
    card:                    raw('#060a13'),
    cardForeground:          raw('#FDFCFE'),
    popover:                 raw('#060913'),
    popoverForeground:       raw('#FDFCFE'),
    primary:                 raw('#0f2ea9'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#11172c'),
    secondaryForeground:     raw('#FDFCFE'),
    muted:                   raw('#0c1022'),
    mutedForeground:         raw('#9999a8'),
    accent:                  raw('#1a1f42'),
    accentForeground:        raw('#FDFCFE'),
    destructive:             raw('#811D33'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#1b1a42'),
    input:                   raw('#1a2142'),
    ring:                    raw('#232686'),
  },
  fonts: {
    body: 'Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '1.25rem',
})
