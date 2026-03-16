// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySesiTheme2CmmmkbTheme = defineTheme({
  name: 'community-sesi-theme-2-cmmmkb',
  label: 'SESI THEME 2',
  _sourceName: 'SESI THEME 2',
  category: 'Community',
  light: {
    background:              raw('#FFFFFF'),
    foreground:              raw('#0F172A'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#0F172A'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#0F172A'),
    primary:                 raw('#194391'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#DCE6F9'),
    secondaryForeground:     raw('#194391'),
    muted:                   raw('#F1F5F9'),
    mutedForeground:         raw('#64748B'),
    accent:                  raw('#F1F5F9'),
    accentForeground:        raw('#194391'),
    destructive:             raw('#EF4444'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#E2E8F0'),
    input:                   raw('#ffffff'),
    ring:                    raw('#194391'),
  },
  dark: {
    background:              raw('#0F172A'),
    foreground:              raw('#F8FAFC'),
    card:                    raw('#1E293B'),
    cardForeground:          raw('#F8FAFC'),
    popover:                 raw('#0F172A'),
    popoverForeground:       raw('#F8FAFC'),
    primary:                 raw('#194391'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#1E293B'),
    secondaryForeground:     raw('#DCE6F9'),
    muted:                   raw('#1E293B'),
    mutedForeground:         raw('#94A3B8'),
    accent:                  raw('#1E293B'),
    accentForeground:        raw('#DCE6F9'),
    destructive:             raw('#7F1D1D'),
    destructiveForeground:   raw('#F8FAFC'),
    border:                  raw('#334155'),
    input:                   raw('#334155'),
    ring:                    raw('#194391'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
