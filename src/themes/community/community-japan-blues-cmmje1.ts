// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityJapanBluesCmmje1Theme = defineTheme({
  name: 'community-japan-blues-cmmje1',
  label: 'Japan Blues',
  _sourceName: 'Japan Blues',
  category: 'Community',
  light: {
    background:              raw('#faf9f5'),
    foreground:              raw('oklch(0.145 0 0)'),
    card:                    raw('#faf9f5'),
    cardForeground:          raw('#oklch(0.145 0 0)'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#28261b'),
    primary:                 raw('oklch(0.704 0.04 256.788)'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('oklch(0.869 0.022 252.894)'),
    secondaryForeground:     raw('oklch(0.372 0.044 257.287)'),
    muted:                   raw('oklch(0.923 0.003 48.717)'),
    mutedForeground:         raw('oklch(0.553 0.013 58.071)'),
    accent:                  raw('#e9e6dc'),
    accentForeground:        raw('#1b1d27'),
    destructive:             raw('#141413'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('oklch(0.869 0.005 56.366)'),
    input:                   raw('oklch(0.922 0 0)'),
    ring:                    raw('oklch(0.554 0.046 257.417)'),
  },
  dark: {
    background:              raw('#262624'),
    foreground:              raw('#c3c0b6'),
    card:                    raw('#262624'),
    cardForeground:          raw('#faf9f5'),
    popover:                 raw('#30302e'),
    popoverForeground:       raw('#e5e5e2'),
    primary:                 raw('oklch(0.901 0.058 230.902)'),
    primaryForeground:       raw('oklch(0.145 0 0)'),
    secondary:               raw('#faf9f5'),
    secondaryForeground:     raw('#30302e'),
    muted:                   raw('#1b1b19'),
    mutedForeground:         raw('#b7b5a9'),
    accent:                  raw('#1a1915'),
    accentForeground:        raw('#f5f4ee'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#3e3e38'),
    input:                   raw('#52514a'),
    ring:                    raw('oklch(0.869 0.022 252.894)'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
