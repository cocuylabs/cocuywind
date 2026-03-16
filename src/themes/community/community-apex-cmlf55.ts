// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityApexCmlf55Theme = defineTheme({
  name: 'community-apex-cmlf55',
  label: 'APEX',
  _sourceName: 'APEX',
  category: 'Community',
  light: {
    background:              raw('hsl(225.9 100% 99%)'),
    foreground:              raw('hsl(225.9 100% 10%)'),
    card:                    raw('hsl(225.9 40% 98%)'),
    cardForeground:          raw('hsl(222.2 47.4% 11.2%)'),
    popover:                 raw('hsl(225.9 60% 96%)'),
    popoverForeground:       raw('hsl(222.2 47.4% 11.2%)'),
    primary:                 raw('oklch(0.457 0.24 277.023)'),
    primaryForeground:       raw('oklch(0.962 0.018 272.314)'),
    secondary:               raw('oklch(0.609 0.126 221.723)'),
    secondaryForeground:     raw('oklch(0.984 0.019 200.873)'),
    muted:                   raw('hsl(188.7 44.5% 72%)'),
    mutedForeground:         raw('hsl(188.7 44.5% 22%)'),
    accent:                  raw('oklch(0.87 0.065 274.039)'),
    accentForeground:        raw('oklch(0.257 0.09 281.288)'),
    destructive:             raw('#bf616a'),
    destructiveForeground:   raw('hsl(355.7 100% 98%)'),
    border:                  raw('oklch(0.869 0.022 252.894)'),
    input:                   raw('oklch(0.869 0.022 252.894)'),
    ring:                    raw('oklch(0.869 0.022 252.894)'),
  },
  dark: {
    background:              raw('oklch(0.141 0.005 285.823)'),
    foreground:              raw('oklch(0.962 0.018 272.314)'),
    card:                    raw('hsl(243.8 47.1% 10%)'),
    cardForeground:          raw('oklch(0.962 0.018 272.314)'),
    popover:                 raw('hsl(243.8 47.1% 10%)'),
    popoverForeground:       raw('oklch(0.962 0.018 272.314)'),
    primary:                 raw('oklch(0.585 0.233 277.117)'),
    primaryForeground:       raw('hsl(243.8 47.1% 5%)'),
    secondary:               raw('oklch(0.715 0.143 215.221)'),
    secondaryForeground:     raw('oklch(0.302 0.056 229.695)'),
    muted:                   raw('oklch(0.257 0.09 281.288)'),
    mutedForeground:         raw('oklch(0.715 0.143 215.221)'),
    accent:                  raw('oklch(0.257 0.09 281.288)'),
    accentForeground:        raw('oklch(0.962 0.018 272.314)'),
    destructive:             raw('oklch(0.586 0.253 17.585)'),
    destructiveForeground:   raw('oklch(0.969 0.015 12.422)'),
    border:                  raw('oklch(0.279 0.041 260.031)'),
    input:                   raw('oklch(0.279 0.041 260.031)'),
    ring:                    raw('oklch(0.279 0.041 260.031)'),
  },
  fonts: {
    body: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
    heading: 'Aleo, ui-serif, serif',
  },
  radius: '0.9rem',
})
