// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityEslinksCmmaoeTheme = defineTheme({
  name: 'community-eslinks-cmmaoe',
  label: 'Eslinks',
  _sourceName: 'ESLinks',
  category: 'Community',
  light: {
    background:              raw('oklch(0.9842 0.0034 247.86)'),
    foreground:              raw('oklch(0.2795 0.0368 260.03)'),
    card:                    raw('oklch(1 0 0)'),
    cardForeground:          raw('oklch(0.2795 0.0368 260.03)'),
    popover:                 raw('oklch(1 0 0)'),
    popoverForeground:       raw('oklch(0.145 0 0)'),
    primary:                 raw('oklch(0.546 0.245 262.881)'),
    primaryForeground:       raw('oklch(1 0 0)'),
    secondary:               raw('oklch(0.696 0.17 162.48)'),
    secondaryForeground:     raw('oklch(1 0 0)'),
    muted:                   raw('oklch(0.9288 0.0126 255.51)'),
    mutedForeground:         raw('oklch(0.4455 0.0374 257.28)'),
    accent:                  raw('oklch(0.7148 0.1257 215.22)'),
    accentForeground:        raw('oklch(1 0 0)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('oklch(0.869 0.0198 252.89)'),
    input:                   raw('oklch(0.922 0 0)'),
    ring:                    raw('oklch(0.7107 0.0351 256.79)'),
  },
  dark: {
    background:              raw('#11161f'),
    foreground:              raw('#f4f9ff'),
    card:                    raw('#1a2029'),
    cardForeground:          raw('#f4f9ff'),
    popover:                 raw('#1a2029'),
    popoverForeground:       raw('#f4f9ff'),
    primary:                 raw('#409cff'),
    primaryForeground:       raw('#11161f'),
    secondary:               raw('#00c47f'),
    secondaryForeground:     raw('#11161f'),
    muted:                   raw('#232933'),
    mutedForeground:         raw('#95a0ab'),
    accent:                  raw('#00ced9'),
    accentForeground:        raw('#11161f'),
    destructive:             raw('#cc272e'),
    destructiveForeground:   raw('#f4f9ff'),
    border:                  raw('oklch(0.275 0 0)'),
    input:                   raw('oklch(0.325 0 0)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.625rem',
})
