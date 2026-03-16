// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAstrovistaCmlk70Theme = defineTheme({
  name: 'community-astrovista-cmlk70',
  label: 'Astrovista',
  _sourceName: 'AstroVista',
  category: 'Community',
  light: {
    background:              raw('#e8ebed'),
    foreground:              raw('#333333'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#333333'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#333333'),
    primary:                 raw('#df6035'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#2f4b79'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f9fafb'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#d6e4f0'),
    accentForeground:        raw('#1e3a8a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#cccccc'),
    input:                   raw('#f4f5f7'),
    ring:                    raw('#e05d38'),
  },
  dark: {
    background:              raw('#1a1a1a'),
    foreground:              raw('#e5e5e5'),
    card:                    raw('#202020'),
    cardForeground:          raw('#e5e5e5'),
    popover:                 raw('#202020'),
    popoverForeground:       raw('#e5e5e5'),
    primary:                 raw('#df6035'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#284167'),
    secondaryForeground:     raw('#e5e5e5'),
    muted:                   raw('#2a2a2a'),
    mutedForeground:         raw('#808080'),
    accent:                  raw('#2a3656'),
    accentForeground:        raw('#bfdbfe'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#353535'),
    input:                   raw('#303030'),
    ring:                    raw('#e05d38'),
  },
  fonts: {
    body: 'Outfit, sans-serif',
    heading: 'Merriweather, serif',
  },
  radius: '0.5rem',
})
