// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityIndiaCmlpfeTheme = defineTheme({
  name: 'community-india-cmlpfe',
  label: 'India',
  _sourceName: 'india',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#fafafa'),
    cardForeground:          raw('#1f1f1f'),
    popover:                 raw('#fdfdfc'),
    popoverForeground:       raw('#1f1f1f'),
    primary:                 raw('#fa7d00'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f5f5f5'),
    secondaryForeground:     raw('#262626'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#595959'),
    accent:                  raw('#fef3e7'),
    accentForeground:        raw('#b35900'),
    destructive:             raw('#e7000b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#dcd9d0'),
    ring:                    raw('#fa7d00'),
  },
  dark: {
    background:              raw('#0a0a0a'),
    foreground:              raw('#ebebeb'),
    card:                    raw('#050505'),
    cardForeground:          raw('#ebebeb'),
    popover:                 raw('#1a1a1a'),
    popoverForeground:       raw('#ebebeb'),
    primary:                 raw('#ff9933'),
    primaryForeground:       raw('#2e1700'),
    secondary:               raw('#262626'),
    secondaryForeground:     raw('#ebebeb'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#999999'),
    accent:                  raw('#331f0a'),
    accentForeground:        raw('#fa7d00'),
    destructive:             raw('#ff2e2e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#212121'),
    input:                   raw('#383838'),
    ring:                    raw('#fa7d00'),
  },
  fonts: {
    body: 'Plus Jakarta Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0rem',
})
