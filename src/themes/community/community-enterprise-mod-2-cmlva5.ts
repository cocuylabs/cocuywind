// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityEnterpriseMod2Cmlva5Theme = defineTheme({
  name: 'community-enterprise-mod-2-cmlva5',
  label: 'Enterprise Mod 2',
  _sourceName: 'Enterprise Mod 2',
  category: 'Community',
  light: {
    background:              raw('#fdfdff'),
    foreground:              raw('#0d0d12'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0d0d12'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0d0d12'),
    primary:                 raw('#0F62FE'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#edebff'),
    secondaryForeground:     raw('#483d8b'),
    muted:                   raw('#f1f1f8'),
    mutedForeground:         raw('#62627a'),
    accent:                  raw('#f0f2ff'),
    accentForeground:        raw('#6b46ff'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#e2e2ee'),
    input:                   raw('#e2e2ee'),
    ring:                    raw('#0F62FE'),
  },
  dark: {
    background:              raw('#0a0a0c'),
    foreground:              raw('#f8f8fc'),
    card:                    raw('#121216'),
    cardForeground:          raw('#f8f8fc'),
    popover:                 raw('#121216'),
    popoverForeground:       raw('#f8f8fc'),
    primary:                 raw('#8c71ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1e1b3a'),
    secondaryForeground:     raw('#d4ccff'),
    muted:                   raw('#1a1a24'),
    mutedForeground:         raw('#a1a1b5'),
    accent:                  raw('#252445'),
    accentForeground:        raw('#c7b8ff'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#f8fafc'),
    border:                  raw('#2a2a35'),
    input:                   raw('#2a2a35'),
    ring:                    raw('#8c71ff'),
  },
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Merriweather\', serif',
  },
  radius: '1.4rem',
})
