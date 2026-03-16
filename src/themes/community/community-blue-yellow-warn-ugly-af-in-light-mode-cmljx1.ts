// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBlueYellowWarnUglyAfInLightModeCmljx1Theme = defineTheme({
  name: 'community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1',
  label: 'Blue Yellow. Warn: Ugly Af In Light Mode',
  _sourceName: 'Blue Yellow. warn: ugly af in light mode',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0a0a0a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0a0a0a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a0a0a'),
    primary:                 raw('#fdc700'),
    primaryForeground:       raw('#fefce8'),
    secondary:               raw('#00bcff'),
    secondaryForeground:     raw('#f0f9ff'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#737373'),
    accent:                  raw('#f5f5f5'),
    accentForeground:        raw('#171717'),
    destructive:             raw('#e7000b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#e5e5e5'),
    ring:                    raw('#a1a1a1'),
  },
  dark: {
    background:              raw('#0a0a0a'),
    foreground:              raw('#fafafa'),
    card:                    raw('#171717'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#262626'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#ffdf20'),
    primaryForeground:       raw('#432004'),
    secondary:               raw('#74d4ff'),
    secondaryForeground:     raw('#052f4a'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a1a1a1'),
    accent:                  raw('#404040'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#ff6467'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#282828'),
    input:                   raw('#343434'),
    ring:                    raw('#737373'),
  },
  fonts: {
    body: 'Poppins, ui-sans-serif, sans-serif, system-ui',
    heading: 'Playfair Display, ui-serif, serif',
  },
  radius: '0.625rem',
})
