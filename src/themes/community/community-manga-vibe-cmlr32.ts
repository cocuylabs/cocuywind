// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMangaVibeCmlr32Theme = defineTheme({
  name: 'community-manga-vibe-cmlr32',
  label: 'Manga Vibe',
  _sourceName: 'Manga Vibe',
  category: 'Community',
  light: {
    background:              raw('#F7F7F7'),
    foreground:              raw('#000000'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#000000'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#808080'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#C0C0C0'),
    mutedForeground:         raw('#000000'),
    accent:                  raw('#000000'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#000000'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#000000'),
    input:                   raw('#FFFFFF'),
    ring:                    raw('#808080'),
  },
  dark: {
    background:              raw('#000000'),
    foreground:              raw('#F7F7F7'),
    card:                    raw('#1A1A1A'),
    cardForeground:          raw('#F7F7F7'),
    popover:                 raw('#1A1A1A'),
    popoverForeground:       raw('#F7F7F7'),
    primary:                 raw('#F7F7F7'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('#404040'),
    secondaryForeground:     raw('#F7F7F7'),
    muted:                   raw('#404040'),
    mutedForeground:         raw('#F7F7F7'),
    accent:                  raw('#F7F7F7'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#F7F7F7'),
    destructiveForeground:   raw('#000000'),
    border:                  raw('#F7F7F7'),
    input:                   raw('#1A1A1A'),
    ring:                    raw('#404040'),
  },
  fonts: {
    body: 'Architects Daughter',
    heading: 'Architects Daughter',
  },
  radius: '0px',
})
