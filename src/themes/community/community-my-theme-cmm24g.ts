// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityMyThemeCmm24gTheme = defineTheme({
  name: 'community-my-theme-cmm24g',
  label: 'MY THEME',
  _sourceName: 'MY THEME',
  category: 'Community',
  light: {
    background:              raw('#f9f9f9'),
    foreground:              raw('#202020'),
    card:                    raw('#fcfcfc'),
    cardForeground:          raw('#202020'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#202020'),
    primary:                 raw('#644a40'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#ffdfb5'),
    secondaryForeground:     raw('#582d1d'),
    muted:                   raw('#efefef'),
    mutedForeground:         raw('#646464'),
    accent:                  raw('#e8e8e8'),
    accentForeground:        raw('#202020'),
    destructive:             raw('#e54d2e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d8d8d8'),
    input:                   raw('#d8d8d8'),
    ring:                    raw('#644a40'),
  },
  dark: {
    background:              raw('#111111'),
    foreground:              raw('#eeeeee'),
    card:                    raw('#191919'),
    cardForeground:          raw('#eeeeee'),
    popover:                 raw('#191919'),
    popoverForeground:       raw('#eeeeee'),
    primary:                 raw('#ffe0c2'),
    primaryForeground:       raw('#081a1b'),
    secondary:               raw('#393028'),
    secondaryForeground:     raw('#ffe0c2'),
    muted:                   raw('#222222'),
    mutedForeground:         raw('#b4b4b4'),
    accent:                  raw('#2a2a2a'),
    accentForeground:        raw('#eeeeee'),
    destructive:             raw('#e54d2e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#201e18'),
    input:                   raw('#484848'),
    ring:                    raw('#ffe0c2'),
  },
  fonts: {
    body: 'AR One Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'Adamina, ui-serif, serif',
  },
  radius: '0.5rem',
})
