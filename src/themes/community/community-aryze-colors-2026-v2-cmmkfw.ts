// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAryzeColors2026V2CmmkfwTheme = defineTheme({
  name: 'community-aryze-colors-2026-v2-cmmkfw',
  label: 'Aryze Colors 2026 V2',
  _sourceName: 'Aryze Colors 2026 V2 ',
  category: 'Community',
  light: {
    background:              raw('#F7F9FA'),
    foreground:              raw('#001E2B'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#001E2B'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#001E2B'),
    primary:                 raw('#001E2B'),
    primaryForeground:       raw('#F7F9FA'),
    secondary:               raw('#BFD9EF'),
    secondaryForeground:     raw('#001E2B'),
    muted:                   raw('#E3E8EB'),
    mutedForeground:         raw('#122D47'),
    accent:                  raw('#D9F5EA'),
    accentForeground:        raw('#001E2B'),
    destructive:             raw('#DC2626'),
    destructiveForeground:   raw('#F7F9FA'),
    border:                  raw('#BFD9EF'),
    input:                   raw('#FFFFFF'),
    ring:                    raw('#007599'),
  },
  dark: {
    background:              raw('#1D1A15'),
    foreground:              raw('#F7F9FA'),
    card:                    raw('#463F37'),
    cardForeground:          raw('#F7F9FA'),
    popover:                 raw('#463F37'),
    popoverForeground:       raw('#F7F9FA'),
    primary:                 raw('#F7F9FA'),
    primaryForeground:       raw('#1D1A15'),
    secondary:               raw('#463F37'),
    secondaryForeground:     raw('#F7F9FA'),
    muted:                   raw('#463F37'),
    mutedForeground:         raw('#B8C1C7'),
    accent:                  raw('#006282'),
    accentForeground:        raw('#F7F9FA'),
    destructive:             raw('#DC2626'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#463F37'),
    input:                   raw('#463F37'),
    ring:                    raw('#007599'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'Geist, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0.625rem',
})
