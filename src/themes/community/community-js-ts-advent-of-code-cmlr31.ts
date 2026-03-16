// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityJsTsAdventOfCodeCmlr31Theme = defineTheme({
  name: 'community-js-ts-advent-of-code-cmlr31',
  label: 'Js/ts Advent Of Code',
  _sourceName: 'JS/TS Advent of Code',
  category: 'Community',
  light: {
    background:              raw('#F7F7F7'),
    foreground:              raw('#333333'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#333333'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#333333'),
    primary:                 raw('#F7DC6F'),
    primaryForeground:       raw('#333333'),
    secondary:               raw('#3178C6'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#AAAAAA'),
    mutedForeground:         raw('#333333'),
    accent:                  raw('#F7DC6F'),
    accentForeground:        raw('#333333'),
    destructive:             raw('#FF3737'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#CCCCCC'),
    input:                   raw('#FFFFFF'),
    ring:                    raw('#F7DC6F'),
  },
  dark: {
    background:              raw('#333333'),
    foreground:              raw('#FFFFFF'),
    card:                    raw('#444444'),
    cardForeground:          raw('#FFFFFF'),
    popover:                 raw('#444444'),
    popoverForeground:       raw('#FFFFFF'),
    primary:                 raw('#F2C464'),
    primaryForeground:       raw('#333333'),
    secondary:               raw('#6688CC'),
    secondaryForeground:     raw('#FFFFFF'),
    muted:                   raw('#666666'),
    mutedForeground:         raw('#FFFFFF'),
    accent:                  raw('#F2C464'),
    accentForeground:        raw('#333333'),
    destructive:             raw('#CC3737'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#555555'),
    input:                   raw('#444444'),
    ring:                    raw('#F2C464'),
  },
  fonts: {
    body: 'Geist Mono, monospace',
    heading: 'Geist Mono, monospace',
  },
  radius: '0px',
})
