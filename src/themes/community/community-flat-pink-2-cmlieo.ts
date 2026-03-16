// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityFlatPink2CmlieoTheme = defineTheme({
  name: 'community-flat-pink-2-cmlieo',
  label: 'Flat Pink 2',
  _sourceName: 'Flat pink 2',
  category: 'Community',
  light: {
    background:              raw('#fcfcfc'),
    foreground:              raw('oklch(0 0 0)'),
    card:                    raw('#fcfcfc'),
    cardForeground:          raw('oklch(0 0 0)'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('oklch(0 0 0)'),
    primary:                 raw('oklch(0 0 0)'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ebebeb'),
    secondaryForeground:     raw('oklch(0 0 0)'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#ebebeb'),
    accentForeground:        raw('oklch(0 0 0)'),
    destructive:             raw('#4b4fe5'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e4e4e4'),
    input:                   raw('#ebebeb'),
    ring:                    raw('oklch(0 0 0)'),
  },
  dark: {
    background:              raw('oklch(0 0 0)'),
    foreground:              raw('#ffffff'),
    card:                    raw('oklch(0 0 0)'),
    cardForeground:          raw('#ffffff'),
    popover:                 raw('oklch(0 0 0)'),
    popoverForeground:       raw('#ffffff'),
    primary:                 raw('#7c0051'),
    primaryForeground:       raw('oklch(0 0 0)'),
    secondary:               raw('#222222'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#1d1d1d'),
    mutedForeground:         raw('#a4a4a4'),
    accent:                  raw('#333333'),
    accentForeground:        raw('#5200ce'),
    destructive:             raw('#5b5bff'),
    destructiveForeground:   raw('oklch(0 0 0)'),
    border:                  raw('#242424'),
    input:                   raw('#333333'),
    ring:                    raw('#a4a4a4'),
  },
  fonts: {
    body: 'Geist, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
