// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityLogisticoneCmm0zkTheme = defineTheme({
  name: 'community-logisticone-cmm0zk',
  label: 'Logisticone',
  _sourceName: 'LogisticOne',
  category: 'Community',
  light: {
    background:              raw('#f3f5fb'),
    foreground:              raw('#010101'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#010101'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#010101'),
    primary:                 raw('#19398d'),
    primaryForeground:       raw('#f3f5f9'),
    secondary:               raw('#0a0a0a'),
    secondaryForeground:     raw('#f5f7fb'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#454545'),
    accent:                  raw('#19398d'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#9b0033'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e3e3e3'),
    input:                   raw('#ffffff'),
    ring:                    raw('#324f9a'),
  },
  dark: {
    background:              raw('#050505'),
    foreground:              raw('#fafafa'),
    card:                    raw('#0a0a0a'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#171717'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#6a8dd8'),
    primaryForeground:       raw('#0a0a0a'),
    secondary:               raw('#171717'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a1a1a1'),
    accent:                  raw('#404040'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#cd6e7b'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#282828'),
    input:                   raw('#121212'),
    ring:                    raw('#6a8dd8'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
