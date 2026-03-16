// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityTerminalCmll24Theme = defineTheme({
  name: 'community-terminal-cmll24',
  label: 'Terminal',
  _sourceName: 'Terminal',
  category: 'Community',
  light: {
    background:              raw('#000000'),
    foreground:              raw('#00FF41'),
    card:                    raw('#050505'),
    cardForeground:          raw('#00FF41'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#00FF41'),
    primary:                 raw('#00FF41'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#003B00'),
    secondaryForeground:     raw('#00FF41'),
    muted:                   raw('#001A00'),
    mutedForeground:         raw('#008F11'),
    accent:                  raw('#00FF41'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#FF0000'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#003B00'),
    input:                   raw('#000000'),
    ring:                    raw('#00FF41'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#00FF41'),
    card:                    raw('#050505'),
    cardForeground:          raw('#00FF41'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#00FF41'),
    primary:                 raw('#00FF41'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#003B00'),
    secondaryForeground:     raw('#00FF41'),
    muted:                   raw('#001A00'),
    mutedForeground:         raw('#008F11'),
    accent:                  raw('#00FF41'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#FF0000'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#003B00'),
    input:                   raw('#000000'),
    ring:                    raw('#00FF41'),
  },
  fonts: {
    body: '"VT323", "Courier New", monospace',
    heading: 'Georgia, serif',
  },
  radius: '0rem',
})
