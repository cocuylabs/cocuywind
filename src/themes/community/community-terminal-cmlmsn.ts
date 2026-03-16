// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTerminalCmlmsnTheme = defineTheme({
  name: 'community-terminal-cmlmsn',
  label: 'Terminal',
  _sourceName: 'Terminal',
  category: 'Community',
  light: {
    background:              raw('#fafafa'),
    foreground:              raw('#0a0a0a'),
    card:                    raw('#f5f5f5'),
    cardForeground:          raw('#0a0a0a'),
    popover:                 raw('#fafafa'),
    popoverForeground:       raw('#0a0a0a'),
    primary:                 raw('#ff6900'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#e5e5e5'),
    secondaryForeground:     raw('#0a0a0a'),
    muted:                   raw('#ebebeb'),
    mutedForeground:         raw('#555555'),
    accent:                  raw('#ff8b38'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff0000'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#cecece'),
    input:                   raw('#cecece'),
    ring:                    raw('#ff6900'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#f2f2f2'),
    card:                    raw('#1a1a1a'),
    cardForeground:          raw('#f2f2f2'),
    popover:                 raw('#121212'),
    popoverForeground:       raw('#f2f2f2'),
    primary:                 raw('#ff6900'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#333333'),
    secondaryForeground:     raw('#f2f2f2'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a6a6a6'),
    accent:                  raw('#ff8b38'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#ff0000'),
    destructiveForeground:   raw('#f2f2f2'),
    border:                  raw('#404040'),
    input:                   raw('#404040'),
    ring:                    raw('#ff6900'),
  },
  fonts: {
    body: 'IBM Plex Mono, ui-monospace, monospace',
    heading: 'IBM Plex Mono, ui-monospace, monospace',
  },
  radius: '0rem',
})
