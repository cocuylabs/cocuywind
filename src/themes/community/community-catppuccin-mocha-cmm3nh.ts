// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCatppuccinMochaCmm3nhTheme = defineTheme({
  name: 'community-catppuccin-mocha-cmm3nh',
  label: 'Catppuccin Mocha',
  _sourceName: 'Catppuccin Mocha',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#4e5069'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#4e5069'),
    popover:                 raw('#ced1d8'),
    popoverForeground:       raw('#4e5069'),
    primary:                 raw('#8839ef'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ced1d8'),
    secondaryForeground:     raw('#4e5069'),
    muted:                   raw('#dee1e8'),
    mutedForeground:         raw('#6d7083'),
    accent:                  raw('#9353d3'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#d20f39'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#bcc1ce'),
    input:                   raw('#ced1d8'),
    ring:                    raw('#8839ef'),
  },
  dark: {
    background:              raw('#11111b'),
    foreground:              raw('#cdd6f4'),
    card:                    raw('#11111b'),
    cardForeground:          raw('#cdd6f4'),
    popover:                 raw('#181825'),
    popoverForeground:       raw('#cdd6f4'),
    primary:                 raw('#cba6f7'),
    primaryForeground:       raw('#11111b'),
    secondary:               raw('#313244'),
    secondaryForeground:     raw('#cdd6f4'),
    muted:                   raw('#313244'),
    mutedForeground:         raw('#a6adc8'),
    accent:                  raw('#b4befe'),
    accentForeground:        raw('#11111b'),
    destructive:             raw('#f38ba8'),
    destructiveForeground:   raw('#11111b'),
    border:                  raw('#45475a'),
    input:                   raw('#313244'),
    ring:                    raw('#cba6f7'),
  },
  fonts: {
    body: 'Geist, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.35rem',
})
