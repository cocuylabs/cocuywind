// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityStellaCmm2mfTheme = defineTheme({
  name: 'community-stella-cmm2mf',
  label: 'Stella',
  _sourceName: 'Stella',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#000000'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('hsl(35, 100%, 71%)'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('hsl(35, 100%, 90%)'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('hsl(35, 40%, 94%)'),
    mutedForeground:         raw('hsl(35, 20%, 40%)'),
    accent:                  raw('hsl(35, 100%, 85%)'),
    accentForeground:        raw('#000000'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(35, 40%, 85%)'),
    input:                   raw('hsl(35, 40%, 85%)'),
    ring:                    raw('hsl(35, 100%, 71%)'),
  },
  dark: {
    background:              raw('hsl(35, 40%, 5%)'),
    foreground:              raw('hsl(35, 100%, 95%)'),
    card:                    raw('hsl(35, 40%, 8%)'),
    cardForeground:          raw('hsl(35, 100%, 95%)'),
    popover:                 raw('hsl(35, 40%, 6%)'),
    popoverForeground:       raw('hsl(35, 100%, 95%)'),
    primary:                 raw('hsl(35, 100%, 71%)'),
    primaryForeground:       raw('hsl(35, 100%, 5%)'),
    secondary:               raw('hsl(35, 40%, 15%)'),
    secondaryForeground:     raw('hsl(35, 100%, 85%)'),
    muted:                   raw('hsl(35, 30%, 15%)'),
    mutedForeground:         raw('hsl(35, 20%, 65%)'),
    accent:                  raw('hsl(35, 60%, 20%)'),
    accentForeground:        raw('hsl(35, 100%, 85%)'),
    destructive:             raw('hsl(0, 62%, 30%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(35, 30%, 20%)'),
    input:                   raw('hsl(35, 30%, 20%)'),
    ring:                    raw('hsl(35, 100%, 71%)'),
  },
  fonts: {
    body: 'Montserrat, ui-sans-serif, sans-serif, system-ui',
    heading: 'Cormorant Garamond, ui-serif, serif',
  },
  radius: '0.85rem',
})
