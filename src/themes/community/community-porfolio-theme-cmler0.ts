// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityPorfolioThemeCmler0Theme = defineTheme({
  name: 'community-porfolio-theme-cmler0',
  label: 'Portfolio Theme',
  _sourceName: 'Porfolio theme',
  category: 'Community',
  light: {
    background:              raw('#f8f7f2'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a1a1a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1a1a'),
    primary:                 raw('#c1a875'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e5e1d5'),
    secondaryForeground:     raw('#1a1a1a'),
    muted:                   raw('#f1ede1'),
    mutedForeground:         raw('#6b6352'),
    accent:                  raw('#c1a875'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#d32f2f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e2decb'),
    input:                   raw('#e2decb'),
    ring:                    raw('#c1a875'),
  },
  dark: {
    background:              raw('#141412'),
    foreground:              raw('#f8f7f2'),
    card:                    raw('#1e1e1c'),
    cardForeground:          raw('#f8f7f2'),
    popover:                 raw('#1e1e1c'),
    popoverForeground:       raw('#f8f7f2'),
    primary:                 raw('#d4bc8b'),
    primaryForeground:       raw('#141412'),
    secondary:               raw('#2d2b28'),
    secondaryForeground:     raw('#f8f7f2'),
    muted:                   raw('#242422'),
    mutedForeground:         raw('#a39e94'),
    accent:                  raw('#d4bc8b'),
    accentForeground:        raw('#141412'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#f8f7f2'),
    border:                  raw('#2d2b28'),
    input:                   raw('#2d2b28'),
    ring:                    raw('#d4bc8b'),
  },
  fonts: {
    body: 'Inter, -apple-system, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.75rem',
})
