// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCarbonEmberCmlf2hTheme = defineTheme({
  name: 'community-carbon-ember-cmlf2h',
  label: 'Carbon Ember',
  _sourceName: 'Carbon Ember',
  category: 'Community',
  light: {
    background:              raw('#faf8f6'),
    foreground:              raw('#1a1410'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a1410'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1410'),
    primary:                 raw('#a16207'),
    primaryForeground:       raw('#fefce8'),
    secondary:               raw('#f0ebe4'),
    secondaryForeground:     raw('#5c4620'),
    muted:                   raw('#f0ebe4'),
    mutedForeground:         raw('#78716c'),
    accent:                  raw('#fef3c7'),
    accentForeground:        raw('#92400e'),
    destructive:             raw('#b91c1c'),
    destructiveForeground:   raw('#fef2f2'),
    border:                  raw('#d6cfc6'),
    input:                   raw('#d6cfc6'),
    ring:                    raw('#a16207'),
  },
  dark: {
    background:              raw('#080604'),
    foreground:              raw('#e8e0d6'),
    card:                    raw('#12100c'),
    cardForeground:          raw('#e8e0d6'),
    popover:                 raw('#12100c'),
    popoverForeground:       raw('#e8e0d6'),
    primary:                 raw('#d97706'),
    primaryForeground:       raw('#1c1004'),
    secondary:               raw('#211c14'),
    secondaryForeground:     raw('#b8a88e'),
    muted:                   raw('#1a1610'),
    mutedForeground:         raw('#8e806e'),
    accent:                  raw('#2c2010'),
    accentForeground:        raw('#fbbf24'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#1a0606'),
    border:                  raw('#2a231a'),
    input:                   raw('#2a231a'),
    ring:                    raw('#d97706'),
  },
  fonts: {
    body: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Lora", "Georgia", "Times New Roman", serif',
  },
  radius: '0.375rem',
})
