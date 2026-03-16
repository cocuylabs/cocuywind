// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityZenInspiredThemeCmlm0cTheme = defineTheme({
  name: 'community-zen-inspired-theme-cmlm0c',
  label: 'Zen Inspired Theme',
  _sourceName: 'Zen Inspired Theme',
  category: 'Community',
  light: {
    background:              raw('#E9E4D8'),
    foreground:              raw('#1E1E1E'),
    card:                    raw('#F4EFE4'),
    cardForeground:          raw('#1E1E1E'),
    popover:                 raw('#F4EFE4'),
    popoverForeground:       raw('#1E1E1E'),
    primary:                 raw('#2E2E2E'),
    primaryForeground:       raw('#E6E4D7'),
    secondary:               raw('#D8D2C4'),
    secondaryForeground:     raw('#2E2E2E'),
    muted:                   raw('#CFC8B8'),
    mutedForeground:         raw('#5E5A52'),
    accent:                  raw('#E6E4D7'),
    accentForeground:        raw('#2E2E2E'),
    destructive:             raw('#DC2626'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#D2CBBB'),
    input:                   raw('#D2CBBB'),
    ring:                    raw('#2E2E2E'),
  },
  dark: {
    background:              raw('#141414'),
    foreground:              raw('#E8E3DA'),
    card:                    raw('#1C1C1C'),
    cardForeground:          raw('#E8E3DA'),
    popover:                 raw('#1C1C1C'),
    popoverForeground:       raw('#E8E3DA'),
    primary:                 raw('#D1CFC0'),
    primaryForeground:       raw('#363636'),
    secondary:               raw('#222222'),
    secondaryForeground:     raw('#D1CFC0'),
    muted:                   raw('#2A2A2A'),
    mutedForeground:         raw('#8E8A83'),
    accent:                  raw('#363636'),
    accentForeground:        raw('#D1CFC0'),
    destructive:             raw('#EF4444'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#2C2C2C'),
    input:                   raw('#2C2C2C'),
    ring:                    raw('#D1CFC0'),
  },
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Playfair Display", serif',
  },
  radius: '0.5rem',
})
