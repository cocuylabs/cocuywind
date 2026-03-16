// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMetaMaskGeistCmlf9rTheme = defineTheme({
  name: 'community-meta-mask-geist-cmlf9r',
  label: 'Meta Mask Geist',
  _sourceName: 'Meta Mask Geist',
  category: 'Community',
  light: {
    background:              raw('#FFFBF8'),
    foreground:              raw('#1C1917'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#1C1917'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#1C1917'),
    primary:                 raw('#3C1765'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#F66A35'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#F5F5F4'),
    mutedForeground:         raw('#78716C'),
    accent:                  raw('#F5F3FF'),
    accentForeground:        raw('#3C1765'),
    destructive:             raw('#EF4444'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#E7E5E4'),
    input:                   raw('#F5EDE8'),
    ring:                    raw('#3C1765'),
  },
  dark: {
    background:              raw('#1A1026'),
    foreground:              raw('#F8F8F7'),
    card:                    raw('#251836'),
    cardForeground:          raw('#F8F8F7'),
    popover:                 raw('#251836'),
    popoverForeground:       raw('#F8F8F7'),
    primary:                 raw('#8B5CF6'),
    primaryForeground:       raw('#1A1026'),
    secondary:               raw('#FB713C'),
    secondaryForeground:     raw('#1A1026'),
    muted:                   raw('#20142E'),
    mutedForeground:         raw('#A8A29E'),
    accent:                  raw('#4A3763'),
    accentForeground:        raw('#F8F8F7'),
    destructive:             raw('#DC2626'),
    destructiveForeground:   raw('#F8F8F7'),
    border:                  raw('#3A2A4F'),
    input:                   raw('#3A2A4F'),
    ring:                    raw('#8B5CF6'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'serif',
  },
  radius: '1.0rem',
})
