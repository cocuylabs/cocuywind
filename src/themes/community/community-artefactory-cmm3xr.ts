// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityArtefactoryCmm3xrTheme = defineTheme({
  name: 'community-artefactory-cmm3xr',
  label: 'Artefactory',
  _sourceName: 'Artefactory',
  category: 'Community',
  light: {
    background:              raw('hsl(215, 30%, 96%)'),
    foreground:              raw('hsl(222, 47%, 11%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(222, 47%, 11%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(222, 47%, 11%)'),
    primary:                 raw('hsl(338, 100%, 50%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(215, 40%, 90%)'),
    secondaryForeground:     raw('hsl(222, 47%, 11%)'),
    muted:                   raw('hsl(215, 40%, 92%)'),
    mutedForeground:         raw('hsl(215, 16%, 47%)'),
    accent:                  raw('hsl(338, 100%, 94%)'),
    accentForeground:        raw('hsl(338, 100%, 50%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(214, 32%, 85%)'),
    input:                   raw('hsl(214, 32%, 85%)'),
    ring:                    raw('hsl(338, 100%, 50%)'),
  },
  dark: {
    background:              raw('#00011b'),
    foreground:              raw('hsl(210, 40%, 98%)'),
    card:                    raw('#020d2b'),
    cardForeground:          raw('hsl(210, 40%, 98%)'),
    popover:                 raw('hsl(220, 100%, 8%)'),
    popoverForeground:       raw('hsl(210, 40%, 98%)'),
    primary:                 raw('oklch(0.922 0 0)'),
    primaryForeground:       raw('oklch(0.205 0 0)'),
    secondary:               raw('#cd0e6b'),
    secondaryForeground:     raw('#ffedf3'),
    muted:                   raw('hsl(222, 47%, 15%)'),
    mutedForeground:         raw('hsl(215, 20%, 65%)'),
    accent:                  raw('#13223e'),
    accentForeground:        raw('oklch(0.922 0 0)'),
    destructive:             raw('hsl(0, 62%, 30%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(222, 47%, 18%)'),
    input:                   raw('hsl(222, 47%, 18%)'),
    ring:                    raw('hsl(338, 100%, 50%)'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
