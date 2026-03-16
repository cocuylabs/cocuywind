// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityQrafthiveCmlk6wTheme = defineTheme({
  name: 'community-qrafthive-cmlk6w',
  label: 'Qrafthive',
  _sourceName: 'qrafthive',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#111827'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#111827'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#111827'),
    primary:                 raw('#d87943'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#527575'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f3f4f6'),
    mutedForeground:         raw('#6b7280'),
    accent:                  raw('#eeeeee'),
    accentForeground:        raw('#111827'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e5e7eb'),
    input:                   raw('#e5e7eb'),
    ring:                    raw('#d87943'),
  },
  dark: {
    background:              raw('#121113'),
    foreground:              raw('#c1c1c1'),
    card:                    raw('#121212'),
    cardForeground:          raw('#c1c1c1'),
    popover:                 raw('#121113'),
    popoverForeground:       raw('#c1c1c1'),
    primary:                 raw('#e78a53'),
    primaryForeground:       raw('#121113'),
    secondary:               raw('#5f8787'),
    secondaryForeground:     raw('#121113'),
    muted:                   raw('#222222'),
    mutedForeground:         raw('#888888'),
    accent:                  raw('#333333'),
    accentForeground:        raw('#c1c1c1'),
    destructive:             raw('#5f8787'),
    destructiveForeground:   raw('#121113'),
    border:                  raw('#222222'),
    input:                   raw('#222222'),
    ring:                    raw('#e78a53'),
  },
  fonts: {
    body: 'Outfit, ui-sans-serif, sans-serif, system-ui',
    heading: 'Merriweather, ui-serif, serif',
  },
  radius: '0.75rem',
})
