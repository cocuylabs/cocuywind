// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityKupikodCmleuaTheme = defineTheme({
  name: 'community-kupikod-cmleua',
  label: 'Kupikod',
  _sourceName: 'Kupikod',
  category: 'Community',
  light: {
    background:              raw('#FFFFFF'),
    foreground:              raw('#1a1d1f'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#1a1d1f'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#1a1d1f'),
    primary:                 raw('#00FF93'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#f6fcff'),
    secondaryForeground:     raw('#1a3a4f'),
    muted:                   raw('#fcfcfc'),
    mutedForeground:         raw('#67696a'),
    accent:                  raw('#6ecbf5'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#f44cbc'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#eff1f1'),
    input:                   raw('#eff1f1'),
    ring:                    raw('#4eadeb'),
  },
  dark: {
    background:              raw('#14151B'),
    foreground:              raw('#ffffff'),
    card:                    raw('#26272D'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#1B1C22'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#00FF93'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#26272D'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#1B1C22'),
    mutedForeground:         raw('#9fa4a7'),
    accent:                  raw('#26272D'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#FF3E60'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#3A3F46'),
    input:                   raw('#3A3F46'),
    ring:                    raw('#5b6067'),
  },
  fonts: {
    body: 'Geologica, ui-sans-serif, sans-serif, system-ui',
    heading: 'Geologica, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0.75rem',
})
