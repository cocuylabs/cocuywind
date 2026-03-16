// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBainDesignSystemCmm5y6Theme = defineTheme({
  name: 'community-bain-design-system-cmm5y6',
  label: 'Bain Design System',
  _sourceName: 'Bain Design System',
  category: 'Community',
  light: {
    background:              raw('#f6f5f4'),
    foreground:              raw('#161614'),
    card:                    raw('#fff'),
    cardForeground:          raw('#161614'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#161614'),
    primary:                 raw('#d10001'),
    primaryForeground:       raw('#f6f5f4'),
    secondary:               raw('#434340'),
    secondaryForeground:     raw('#f6f5f4'),
    muted:                   raw('#f4f1ef'),
    mutedForeground:         raw('#a8a5a1'),
    accent:                  raw('#f4f1ef'),
    accentForeground:        raw('#2b2b27'),
    destructive:             raw('#ffd5c0'),
    destructiveForeground:   raw('#eb001f'),
    border:                  raw('#e9e5e0'),
    input:                   raw('#c9c6c1'),
    ring:                    raw('#776beb'),
  },
  dark: {
    background:              raw('#1D1D1D'),
    foreground:              raw('#FFFFFF'),
    card:                    raw('#1D1D1D'),
    cardForeground:          raw('#FFFFFF'),
    popover:                 raw('#1D1D1D'),
    popoverForeground:       raw('#FFFFFF'),
    primary:                 raw('#FF4B32'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#808080'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#333333'),
    mutedForeground:         raw('#808080'),
    accent:                  raw('#404040'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#D00000'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#333333'),
    input:                   raw('#1D1D1D'),
    ring:                    raw('#FF4B32'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0rem',
})
