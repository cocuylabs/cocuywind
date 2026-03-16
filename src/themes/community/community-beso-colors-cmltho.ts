// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBesoColorsCmlthoTheme = defineTheme({
  name: 'community-beso-colors-cmltho',
  label: 'Beso Colors',
  _sourceName: 'beso-colors',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0a0e1a'),
    card:                    raw('#f9fafb'),
    cardForeground:          raw('#0a0e1a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a0e1a'),
    primary:                 raw('#00bcd4'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#7c3aed'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#f3f4f6'),
    mutedForeground:         raw('#374151'),
    accent:                  raw('#00bcd4'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#374151'),
    input:                   raw('#f3f4f6'),
    ring:                    raw('#00bcd4'),
  },
  dark: {
    background:              raw('#0a0e1a'),
    foreground:              raw('#ffffff'),
    card:                    raw('#111827'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('#111827'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#00bcd4'),
    primaryForeground:       raw('#0a0e1a'),
    secondary:               raw('#7c3aed'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#1f2937'),
    mutedForeground:         raw('#9ca3af'),
    accent:                  raw('#00bcd4'),
    accentForeground:        raw('#0a0e1a'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#374151'),
    input:                   raw('#1f2937'),
    ring:                    raw('#00bcd4'),
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
