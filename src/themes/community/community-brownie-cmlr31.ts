// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBrownieCmlr31Theme = defineTheme({
  name: 'community-brownie-cmlr31',
  label: 'Brownie',
  _sourceName: 'Brownie',
  category: 'Community',
  light: {
    background:              raw('#F7F5E9'),
    foreground:              raw('#503E33'),
    card:                    raw('#F7F5E9'),
    cardForeground:          raw('#503E33'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#503E33'),
    primary:                 raw('#A95C64'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#C3A697'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#E9C9BE'),
    mutedForeground:         raw('#946F5C'),
    accent:                  raw('#E9C9BE'),
    accentForeground:        raw('#503E33'),
    destructive:             raw('#1F1C18'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#946F5C'),
    input:                   raw('#946F5C'),
    ring:                    raw('#A95C64'),
  },
  dark: {
    background:              raw('#2B2421'),
    foreground:              raw('#F7F5E9'),
    card:                    raw('#3C332E'),
    cardForeground:          raw('#F7F5E9'),
    popover:                 raw('#3C332E'),
    popoverForeground:       raw('#F7F5E9'),
    primary:                 raw('#C9A188'),
    primaryForeground:       raw('#2B2421'),
    secondary:               raw('#946F5C'),
    secondaryForeground:     raw('#F7F5E9'),
    muted:                   raw('#503E33'),
    mutedForeground:         raw('#C5AA9B'),
    accent:                  raw('#C3A697'),
    accentForeground:        raw('#2B2421'),
    destructive:             raw('#E57373'),
    destructiveForeground:   raw('#2B2421'),
    border:                  raw('#503E33'),
    input:                   raw('#503E33'),
    ring:                    raw('#C9A188'),
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0px',
})
