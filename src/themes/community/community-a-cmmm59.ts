// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityACmmm59Theme = defineTheme({
  name: 'community-a-cmmm59',
  label: 'Lumen Orbit',
  _sourceName: 'A',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1a1c1e'),
    card:                    raw('#f8f9fa'),
    cardForeground:          raw('#1a1c1e'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1c1e'),
    primary:                 raw('#0056b3'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#343a40'),
    secondaryForeground:     raw('#f8f9fa'),
    muted:                   raw('#e9ecef'),
    mutedForeground:         raw('#6c757d'),
    accent:                  raw('#ffc107'),
    accentForeground:        raw('#212529'),
    destructive:             raw('#dc3545'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#dee2e6'),
    input:                   raw('#ced4da'),
    ring:                    raw('#0056b3'),
  },
  dark: {
    background:              raw('#0b0e11'),
    foreground:              raw('#e9ecef'),
    card:                    raw('#161b22'),
    cardForeground:          raw('#e9ecef'),
    popover:                 raw('#0b0e11'),
    popoverForeground:       raw('#e9ecef'),
    primary:                 raw('#339af0'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#495057'),
    secondaryForeground:     raw('#f8f9fa'),
    muted:                   raw('#212529'),
    mutedForeground:         raw('#adb5bd'),
    accent:                  raw('#fcc419'),
    accentForeground:        raw('#1a1c1e'),
    destructive:             raw('#e03131'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#343a40'),
    input:                   raw('#495057'),
    ring:                    raw('#339af0'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.375rem',
})
