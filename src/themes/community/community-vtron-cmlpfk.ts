// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityVtronCmlpfkTheme = defineTheme({
  name: 'community-vtron-cmlpfk',
  label: 'VTRON',
  _sourceName: 'VTRON',
  category: 'Community',
  light: {
    background:              raw('#fcfcfc'),
    foreground:              raw('#0e142b'),
    card:                    raw('#fafafa'),
    cardForeground:          raw('#0e142b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#0e142b'),
    primary:                 raw('#2e67ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#0e142b'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#ffffff'),
    mutedForeground:         raw('#0e142b'),
    accent:                  raw('#ffffff'),
    accentForeground:        raw('#2e67ff'),
    destructive:             raw('#ff6c35'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e4e4'),
    input:                   raw('#cccccc'),
    ring:                    raw('#2e6aff'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#ffffff'),
    card:                    raw('#0f0f0f'),
    cardForeground:          raw('#d9d9d9'),
    popover:                 raw('#000000'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#2b65ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffffff'),
    secondaryForeground:     raw('#0e142b'),
    muted:                   raw('#181818'),
    mutedForeground:         raw('#7b7e8c'),
    accent:                  raw('#000e39'),
    accentForeground:        raw('#2b65ff'),
    destructive:             raw('#ff6c35'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#26272e'),
    input:                   raw('#162151'),
    ring:                    raw('#2e6aff'),
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1.3rem',
})
