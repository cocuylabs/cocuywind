// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityV2CmlofgTheme = defineTheme({
  name: 'community-v2-cmlofg',
  label: 'Ivory Studio',
  _sourceName: 'v2',
  category: 'Community',
  light: {
    background:              raw('#F8FAFC'),
    foreground:              raw('#0F172A'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#0F172A'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#0F172A'),
    primary:                 raw('#6366F1'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#E2E8F0'),
    secondaryForeground:     raw('#1E293B'),
    muted:                   raw('#F1F5F9'),
    mutedForeground:         raw('#64748B'),
    accent:                  raw('#E0E7FF'),
    accentForeground:        raw('#3730A3'),
    destructive:             raw('#EF4444'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#E2E8F0'),
    input:                   raw('#E2E8F0'),
    ring:                    raw('#6366F1'),
  },
  dark: {
    background:              raw('#0F172A'),
    foreground:              raw('#F8FAFC'),
    card:                    raw('#1E293B'),
    cardForeground:          raw('#F8FAFC'),
    popover:                 raw('#1E293B'),
    popoverForeground:       raw('#F8FAFC'),
    primary:                 raw('#8B5CF6'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#334155'),
    secondaryForeground:     raw('#F8FAFC'),
    muted:                   raw('#1E293B'),
    mutedForeground:         raw('#94A3B8'),
    accent:                  raw('#3730A3'),
    accentForeground:        raw('#F8FAFC'),
    destructive:             raw('#F87171'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#334155'),
    input:                   raw('#334155'),
    ring:                    raw('#8B5CF6'),
  },
  fonts: {
    body: 'Afacad, ui-sans-serif, sans-serif, system-ui',
    heading: 'Adamina, ui-serif, serif',
  },
  radius: '0.5rem',
})
