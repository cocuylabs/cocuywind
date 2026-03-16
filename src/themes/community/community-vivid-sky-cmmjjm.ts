// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityVividSkyCmmjjmTheme = defineTheme({
  name: 'community-vivid-sky-cmmjjm',
  label: 'Vivid Sky',
  _sourceName: 'Vivid Sky',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0a0a0a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0a0a0a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a0a0a'),
    primary:                 raw('#1447e6'),
    primaryForeground:       raw('#fafafa'),
    secondary:               raw('#e5e7eb'),
    secondaryForeground:     raw('#171717'),
    muted:                   raw('#e5e7eb'),
    mutedForeground:         raw('#737373'),
    accent:                  raw('#e5e7eb'),
    accentForeground:        raw('#171717'),
    destructive:             raw('#e7000b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#dadee4'),
    input:                   raw('#dadee4'),
    ring:                    raw('#1447e6'),
  },
  dark: {
    background:              raw('#141c30'),
    foreground:              raw('#e2e8f0'),
    card:                    raw('#212b3e'),
    cardForeground:          raw('#e2e8f0'),
    popover:                 raw('#212b3e'),
    popoverForeground:       raw('#e2e8f0'),
    primary:                 raw('#5085fb'),
    primaryForeground:       raw('#141c30'),
    secondary:               raw('#2e384b'),
    secondaryForeground:     raw('#d1d5db'),
    muted:                   raw('#1c2639'),
    mutedForeground:         raw('#8f96a3'),
    accent:                  raw('#374153'),
    accentForeground:        raw('#d1d5db'),
    destructive:             raw('#ff6467'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#3e4858'),
    input:                   raw('#3e4858'),
    ring:                    raw('#5085fb'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.625rem',
})
