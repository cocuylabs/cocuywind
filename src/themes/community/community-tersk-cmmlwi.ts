// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTerskCmmlwiTheme = defineTheme({
  name: 'community-tersk-cmmlwi',
  label: 'Tersk',
  _sourceName: 'tersk',
  category: 'Community',
  light: {
    background:              raw('oklch(1 0 0)'),
    foreground:              raw('oklch(0.145 0 0)'),
    card:                    raw('oklch(1 0 0)'),
    cardForeground:          raw('oklch(0.145 0 0)'),
    popover:                 raw('oklch(1 0 0)'),
    popoverForeground:       raw('oklch(0.145 0 0)'),
    primary:                 raw('#5ea85d'),
    primaryForeground:       raw('#f8f9f2'),
    secondary:               raw('#5ea85d'),
    secondaryForeground:     raw('#f8f9f2'),
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
    primary:                 raw('#5ea85d'),
    primaryForeground:       raw('#f8f9f2'),
    secondary:               raw('#5ea85d'),
    secondaryForeground:     raw('#f8f9f2'),
    muted:                   raw('oklch(0.269 0 0)'),
    mutedForeground:         raw('oklch(0.708 0 0)'),
    accent:                  raw('#5ea85d'),
    accentForeground:        raw('#f8f9f2'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('oklch(0.275 0 0)'),
    input:                   raw('oklch(0.325 0 0)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '1rem',
})
