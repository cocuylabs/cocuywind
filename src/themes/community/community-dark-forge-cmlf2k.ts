// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityDarkForgeCmlf2kTheme = defineTheme({
  name: 'community-dark-forge-cmlf2k',
  label: 'Dark Forge',
  _sourceName: 'Dark Forge',
  category: 'Community',
  light: {
    background:              raw('#faf8f6'),
    foreground:              raw('#1c1412'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1c1412'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1c1412'),
    primary:                 raw('#92400e'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#fdf4ef'),
    secondaryForeground:     raw('#6b3a1f'),
    muted:                   raw('#f2eee9'),
    mutedForeground:         raw('#7a706a'),
    accent:                  raw('#f5dcc8'),
    accentForeground:        raw('#6b3a1f'),
    destructive:             raw('#c52525'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e3dbd4'),
    input:                   raw('#e3dbd4'),
    ring:                    raw('#92400e'),
  },
  dark: {
    background:              raw('#0c0908'),
    foreground:              raw('#e3dad4'),
    card:                    raw('#141110'),
    cardForeground:          raw('#e3dad4'),
    popover:                 raw('#100d0c'),
    popoverForeground:       raw('#e3dad4'),
    primary:                 raw('#c2956a'),
    primaryForeground:       raw('#1a0e04'),
    secondary:               raw('#1c1614'),
    secondaryForeground:     raw('#a39890'),
    muted:                   raw('#1e1816'),
    mutedForeground:         raw('#7a706a'),
    accent:                  raw('#2a1e14'),
    accentForeground:        raw('#d4a574'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fef2f2'),
    border:                  raw('#28211c'),
    input:                   raw('#2a231d'),
    ring:                    raw('#c2956a'),
  },
  fonts: {
    body: '"IBM Plex Sans", "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
    heading: '"IBM Plex Serif", "Georgia", ui-serif, serif',
  },
  radius: '0.5rem',
})
