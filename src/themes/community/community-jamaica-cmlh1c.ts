// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityJamaicaCmlh1cTheme = defineTheme({
  name: 'community-jamaica-cmlh1c',
  label: 'Jamaica',
  _sourceName: 'Jamaica',
  category: 'Community',
  light: {
    background:              raw('hsl(45, 30%, 98%)'),
    foreground:              raw('hsl(150, 60%, 5%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(150, 60%, 5%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(150, 60%, 5%)'),
    primary:                 raw('hsl(142, 76%, 36%)'),
    primaryForeground:       raw('hsl(45, 30%, 98%)'),
    secondary:               raw('hsl(48, 96%, 53%)'),
    secondaryForeground:     raw('hsl(150, 60%, 5%)'),
    muted:                   raw('hsl(45, 20%, 94%)'),
    mutedForeground:         raw('hsl(150, 10%, 40%)'),
    accent:                  raw('hsl(142, 70%, 92%)'),
    accentForeground:        raw('hsl(142, 76%, 30%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(150, 20%, 90%)'),
    input:                   raw('hsl(150, 20%, 90%)'),
    ring:                    raw('hsl(142, 76%, 36%)'),
  },
  dark: {
    background:              raw('hsl(150, 30%, 3%)'),
    foreground:              raw('hsl(45, 20%, 95%)'),
    card:                    raw('hsl(150, 30%, 6%)'),
    cardForeground:          raw('hsl(45, 20%, 95%)'),
    popover:                 raw('hsl(150, 30%, 5%)'),
    popoverForeground:       raw('hsl(45, 20%, 95%)'),
    primary:                 raw('hsl(142, 70%, 50%)'),
    primaryForeground:       raw('hsl(150, 30%, 3%)'),
    secondary:               raw('hsl(48, 90%, 55%)'),
    secondaryForeground:     raw('hsl(150, 30%, 3%)'),
    muted:                   raw('hsl(150, 20%, 12%)'),
    mutedForeground:         raw('hsl(150, 10%, 70%)'),
    accent:                  raw('hsl(142, 50%, 15%)'),
    accentForeground:        raw('hsl(142, 70%, 50%)'),
    destructive:             raw('hsl(0, 80%, 50%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(150, 20%, 15%)'),
    input:                   raw('hsl(150, 20%, 15%)'),
    ring:                    raw('hsl(142, 70%, 50%)'),
  },
  fonts: {
    body: 'Outfit, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1.25rem',
})
