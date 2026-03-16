// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCelestialCmm720Theme = defineTheme({
  name: 'community-celestial-cmm720',
  label: 'Celestial',
  _sourceName: 'Celestial',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#000000'),
    card:                    raw('#f7f8f8'),
    cardForeground:          raw('#202020'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#323232'),
    primary:                 raw('#58D3DB'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#202020'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f1f5f9'),
    mutedForeground:         raw('#323232'),
    accent:                  raw('#E3ECF6'),
    accentForeground:        raw('#323232'),
    destructive:             raw('#f4212e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e1eaef'),
    input:                   raw('#f7f9fa'),
    ring:                    raw('#58D3DB'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#e7e9ea'),
    card:                    raw('#17181c'),
    cardForeground:          raw('#e7e9ea'),
    popover:                 raw('#121212'),
    popoverForeground:       raw('#e7e9ea'),
    primary:                 raw('#58D3DB'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#e7e9ea'),
    secondaryForeground:     raw('#202020'),
    muted:                   raw('#1a1d1e'),
    mutedForeground:         raw('#8b98a5'),
    accent:                  raw('#12383b'),
    accentForeground:        raw('#e7e9ea'),
    destructive:             raw('#f4212e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2f3336'),
    input:                   raw('#16181c'),
    ring:                    raw('#58D3DB'),
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
