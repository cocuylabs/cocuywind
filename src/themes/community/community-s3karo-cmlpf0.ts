// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityS3karoCmlpf0Theme = defineTheme({
  name: 'community-s3karo-cmlpf0',
  label: 'S3karo',
  _sourceName: 's3karo',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#0a0a0a'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#0a0a0a'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0a0a0a'),
    primary:                 raw('#ff6b6e'),
    primaryForeground:       raw('#fafafa'),
    secondary:               raw('#f5f5f5'),
    secondaryForeground:     raw('#171717'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#737373'),
    accent:                  raw('#f5f5f5'),
    accentForeground:        raw('#171717'),
    destructive:             raw('#ff3434'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e5e5e5'),
    input:                   raw('#e5e5e5'),
    ring:                    raw('#0a0a0a'),
  },
  dark: {
    background:              raw('#0a0a0a'),
    foreground:              raw('#fafafa'),
    card:                    raw('#0a0a0a'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#0a0a0a'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#ff6b6e'),
    primaryForeground:       raw('#171717'),
    secondary:               raw('#262626'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a3a3a3'),
    accent:                  raw('#262626'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#930909'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#262626'),
    input:                   raw('#262626'),
    ring:                    raw('#d4d4d4'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
