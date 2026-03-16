// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityProfessionalThemeCmluajTheme = defineTheme({
  name: 'community-professional-theme-cmluaj',
  label: 'Professional Theme',
  _sourceName: 'Professional Theme',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 100%)'),
    foreground:              raw('hsl(222.2, 84%, 4.9%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(222.2, 84%, 4.9%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(222.2, 84%, 4.9%)'),
    primary:                 raw('hsl(221.2, 83.2%, 53.3%)'),
    primaryForeground:       raw('hsl(210, 40%, 98%)'),
    secondary:               raw('hsl(210, 40%, 96.1%)'),
    secondaryForeground:     raw('hsl(222.2, 47.4%, 11.2%)'),
    muted:                   raw('hsl(210, 40%, 96.1%)'),
    mutedForeground:         raw('hsl(215.4, 16.3%, 46.9%)'),
    accent:                  raw('hsl(210, 40%, 96.1%)'),
    accentForeground:        raw('hsl(222.2, 47.4%, 11.2%)'),
    destructive:             raw('hsl(0, 84.2%, 60.2%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(214.3, 31.8%, 91.4%)'),
    input:                   raw('hsl(214.3, 31.8%, 91.4%)'),
    ring:                    raw('hsl(221.2, 83.2%, 53.3%)'),
  },
  dark: {
    background:              raw('hsl(222.2, 84%, 4.9%)'),
    foreground:              raw('hsl(210, 40%, 98%)'),
    card:                    raw('hsl(222.2, 84%, 4.9%)'),
    cardForeground:          raw('hsl(210, 40%, 98%)'),
    popover:                 raw('hsl(222.2, 84%, 4.9%)'),
    popoverForeground:       raw('hsl(210, 40%, 98%)'),
    primary:                 raw('hsl(217.2, 91.2%, 59.8%)'),
    primaryForeground:       raw('hsl(222.2, 47.4%, 11.2%)'),
    secondary:               raw('hsl(217.2, 32.6%, 17.5%)'),
    secondaryForeground:     raw('hsl(210, 40%, 98%)'),
    muted:                   raw('hsl(217.2, 32.6%, 17.5%)'),
    mutedForeground:         raw('hsl(215, 20.2%, 65.1%)'),
    accent:                  raw('hsl(217.2, 32.6%, 17.5%)'),
    accentForeground:        raw('hsl(210, 40%, 98%)'),
    destructive:             raw('hsl(0, 62.8%, 30.6%)'),
    destructiveForeground:   raw('hsl(210, 40%, 98%)'),
    border:                  raw('hsl(217.2, 32.6%, 17.5%)'),
    input:                   raw('hsl(217.2, 32.6%, 17.5%)'),
    ring:                    raw('hsl(224.3, 76.3%, 48%)'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.375rem',
})
