// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOffworldCmlpw4Theme = defineTheme({
  name: 'community-offworld-cmlpw4',
  label: 'Offworld',
  _sourceName: 'offworld',
  category: 'Community',
  light: {
    background:              raw('#f5f5f5'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a1a1a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#1a1a1a'),
    primary:                 raw('#1a1a1a'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e0e0e0'),
    secondaryForeground:     raw('#1a1a1a'),
    muted:                   raw('#e0e0e0'),
    mutedForeground:         raw('#666666'),
    accent:                  raw('#e9e9e9'),
    accentForeground:        raw('#1a1a1a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#cccccc'),
    input:                   raw('#e0e0e0'),
    ring:                    raw('#1a1a1a'),
  },
  dark: {
    background:              raw('#10100E'),
    foreground:              raw('#FFFFE3'),
    card:                    raw('#10100E'),
    cardForeground:          raw('#FFFFE3'),
    popover:                 raw('#10100E'),
    popoverForeground:       raw('#FFFFE3'),
    primary:                 raw('#FFFFE3'),
    primaryForeground:       raw('#10100E'),
    secondary:               raw('#606055'),
    secondaryForeground:     raw('#FFFFE3'),
    muted:                   raw('#10100E'),
    mutedForeground:         raw('#8C8C7D'),
    accent:                  raw('#8C8C7D'),
    accentForeground:        raw('#FFFFE3'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#FFFFE3'),
    border:                  raw('#606055'),
    input:                   raw('#606055'),
    ring:                    raw('#FFFFE3'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'Sorts Mill Goudy, ui-serif, serif',
  },
  radius: '0rem',
})
