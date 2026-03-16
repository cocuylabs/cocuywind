// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySkyCmmjhaTheme = defineTheme({
  name: 'community-sky-cmmjha',
  label: 'Sky',
  _sourceName: 'Sky',
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
    secondary:               raw('#f5f5f5'),
    secondaryForeground:     raw('#171717'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#737373'),
    accent:                  raw('#f5f5f5'),
    accentForeground:        raw('#171717'),
    destructive:             raw('#e7000b'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#e5e5e5'),
    ring:                    raw('#1447e6'),
  },
  dark: {
    background:              raw('#151d2a'),
    foreground:              raw('#fafafa'),
    card:                    raw('#1b2533'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#202b3a'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#2b7fff'),
    primaryForeground:       raw('#fafafa'),
    secondary:               raw('#232f3e'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#242d3b'),
    mutedForeground:         raw('#9099a6'),
    accent:                  raw('#2b394b'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#ff6467'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#293442'),
    input:                   raw('#2b3646'),
    ring:                    raw('#2b7fff'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.625rem',
})
