// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityJknmCmmrfzTheme = defineTheme({
  name: 'community-jknm-cmmrfz',
  label: 'Jknm',
  _sourceName: 'jknm,',
  category: 'Community',
  light: {
    background:              raw('oklch(1 0 0)'),
    foreground:              raw('oklch(0.145 0 0)'),
    card:                    raw('oklch(1 0 0)'),
    cardForeground:          raw('oklch(0.145 0 0)'),
    popover:                 raw('oklch(1 0 0)'),
    popoverForeground:       raw('oklch(0.145 0 0)'),
    primary:                 raw('oklch(0.205 0 0)'),
    primaryForeground:       raw('oklch(0.985 0 0)'),
    secondary:               raw('oklch(0.97 0 0)'),
    secondaryForeground:     raw('oklch(0.205 0 0)'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('oklch(0.556 0 0)'),
    accent:                  raw('oklch(0.97 0 0)'),
    accentForeground:        raw('oklch(0.205 0 0)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('oklch(0.922 0 0)'),
    input:                   raw('oklch(0.922 0 0)'),
    ring:                    raw('oklch(0.708 0 0)'),
  },
  dark: {
    background:              raw('oklch(0.145 0 0)'),
    foreground:              raw('oklch(0.985 0 0)'),
    card:                    raw('oklch(0.205 0 0)'),
    cardForeground:          raw('oklch(0.985 0 0)'),
    popover:                 raw('oklch(0.269 0 0)'),
    popoverForeground:       raw('oklch(0.985 0 0)'),
    primary:                 raw('oklch(0.922 0 0)'),
    primaryForeground:       raw('oklch(0.205 0 0)'),
    secondary:               raw('oklch(0.269 0 0)'),
    secondaryForeground:     raw('oklch(0.985 0 0)'),
    muted:                   raw('oklch(0.269 0 0)'),
    mutedForeground:         raw('oklch(0.708 0 0)'),
    accent:                  raw('oklch(0.371 0 0)'),
    accentForeground:        raw('oklch(0.985 0 0)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('oklch(0.275 0 0)'),
    input:                   raw('oklch(0.325 0 0)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.625rem',
})
