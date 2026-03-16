// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOldSchoolCmlx21Theme = defineTheme({
  name: 'community-old-school-cmlx21',
  label: 'Old School',
  _sourceName: 'Old school',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#000000'),
    card:                    raw('#f0f0f0'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#0000ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffff00'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#cccccc'),
    mutedForeground:         raw('#555555'),
    accent:                  raw('#ff00ff'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ff0000'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#000000'),
    input:                   raw('#ffffff'),
    ring:                    raw('#0000ff'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#00ff00'),
    card:                    raw('#1a1a1a'),
    cardForeground:          raw('#00ff00'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#00ff00'),
    primary:                 raw('#ffff00'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#0000ff'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#333333'),
    mutedForeground:         raw('#008000'),
    accent:                  raw('#ff00ff'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff0000'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#00ff00'),
    input:                   raw('#000000'),
    ring:                    raw('#ffff00'),
  },
  fonts: {
    body: 'Times New Roman, serif',
    heading: 'Times New Roman, serif',
  },
  radius: '0rem',
})
