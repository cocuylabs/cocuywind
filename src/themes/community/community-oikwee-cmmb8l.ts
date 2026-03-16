// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOikweeCmmb8lTheme = defineTheme({
  name: 'community-oikwee-cmmb8l',
  label: 'Oikwee',
  _sourceName: 'oikwee',
  category: 'Community',
  light: {
    background:              raw('#f0f4f2'),
    foreground:              raw('#1f2e24'),
    card:                    raw('#f2f2f2'),
    cardForeground:          raw('#141f18'),
    popover:                 raw('#ededed'),
    popoverForeground:       raw('#141f18'),
    primary:                 raw('#367d50'),
    primaryForeground:       raw('#f9fafa'),
    secondary:               raw('#a17045'),
    secondaryForeground:     raw('#fafaf9'),
    muted:                   raw('#e7eee7'),
    mutedForeground:         raw('#4c6756'),
    accent:                  raw('#d5ddd8'),
    accentForeground:        raw('#1f2e24'),
    destructive:             raw('#a14545'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#d1d1d1'),
    input:                   raw('#e3e8e5'),
    ring:                    raw('#367d50'),
  },
  dark: {
    background:              raw('#070503'),
    foreground:              raw('#d6d6d6'),
    card:                    raw('#100d08'),
    cardForeground:          raw('#dee3e0'),
    popover:                 raw('#0b0905'),
    popoverForeground:       raw('#cbe6d5'),
    primary:                 raw('#45a167'),
    primaryForeground:       raw('#040302'),
    secondary:               raw('#81542c'),
    secondaryForeground:     raw('#d9d9d9'),
    muted:                   raw('#1e1a14'),
    mutedForeground:         raw('#928f8a'),
    accent:                  raw('#222a25'),
    accentForeground:        raw('#cbe6d5'),
    destructive:             raw('#ac3939'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#2f281b'),
    input:                   raw('#1a150e'),
    ring:                    raw('#45a167'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'Georgia, serif',
  },
  radius: '0.625rem',
})
