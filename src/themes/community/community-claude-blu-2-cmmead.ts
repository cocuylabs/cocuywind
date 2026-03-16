// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityClaudeBlu2CmmeadTheme = defineTheme({
  name: 'community-claude-blu-2-cmmead',
  label: 'Claude Blu 2',
  _sourceName: 'claude blu 2',
  category: 'Community',
  light: {
    background:              raw('#f1f1f1'),
    foreground:              raw('#29323d'),
    card:                    raw('#f5f8fa'),
    cardForeground:          raw('#131814'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1b2328'),
    primary:                 raw('#4288c9'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#dce3e9'),
    secondaryForeground:     raw('#464e53'),
    muted:                   raw('#dee6ed'),
    mutedForeground:         raw('#7d8283'),
    accent:                  raw('#dce3e9'),
    accentForeground:        raw('#1b2328'),
    destructive:             raw('#131514'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d4dadb'),
    input:                   raw('#a7adb4'),
    ring:                    raw('#4288c9'),
  },
  dark: {
    background:              raw('#111111'),
    foreground:              raw('#b6bbc3'),
    card:                    raw('#242526'),
    cardForeground:          raw('#f5f7fa'),
    popover:                 raw('#2e2f30'),
    popoverForeground:       raw('#e2e4e5'),
    primary:                 raw('#5795d9'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f5f8fa'),
    secondaryForeground:     raw('#2e2f30'),
    muted:                   raw('#191a1b'),
    mutedForeground:         raw('#a9b1b7'),
    accent:                  raw('#15171a'),
    accentForeground:        raw('#eef2f5'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#383b3e'),
    input:                   raw('#4a4e52'),
    ring:                    raw('#5795d9'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
