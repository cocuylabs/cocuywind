// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityImhicihuCmmp28Theme = defineTheme({
  name: 'community-imhicihu-cmmp28',
  label: 'Imhicihu',
  _sourceName: 'imhicihu',
  category: 'Community',
  light: {
    background:              raw('#faf9f5'),
    foreground:              raw('#3d3929'),
    card:                    raw('oklch(0.97 0.014 254.604)'),
    cardForeground:          raw('#141413'),
    popover:                 raw('#faf9f5'),
    popoverForeground:       raw('#28261b'),
    primary:                 raw('#bce4f8'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#bce4f8'),
    secondaryForeground:     raw('#000000'),
    muted:                   raw('#ede9de'),
    mutedForeground:         raw('#83827d'),
    accent:                  raw('#bce4f8'),
    accentForeground:        raw('#28261b'),
    destructive:             raw('#141413'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#dad9d4'),
    input:                   raw('#bce4f8'),
    ring:                    raw('#4194d7'),
  },
  dark: {
    background:              raw('#262624'),
    foreground:              raw('#c3c0b6'),
    card:                    raw('#262624'),
    cardForeground:          raw('#faf9f5'),
    popover:                 raw('#30302e'),
    popoverForeground:       raw('#e5e5e2'),
    primary:                 raw('#4194d7'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#faf9f5'),
    secondaryForeground:     raw('#30302e'),
    muted:                   raw('#1b1b19'),
    mutedForeground:         raw('#b7b5a9'),
    accent:                  raw('#1a1915'),
    accentForeground:        raw('#f5f4ee'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#3e3e38'),
    input:                   raw('#52514a'),
    ring:                    raw('#4194d7'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
