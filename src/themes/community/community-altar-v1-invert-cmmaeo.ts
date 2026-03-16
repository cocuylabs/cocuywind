// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityAltarV1InvertCmmaeoTheme = defineTheme({
  name: 'community-altar-v1-invert-cmmaeo',
  label: 'ALTAR V1 INVERT',
  _sourceName: 'ALTAR V1 INVERT',
  category: 'Community',
  light: {
    background:              raw('#EDEDED'),
    foreground:              raw('#0D0D0D'),
    card:                    raw('#FAFAFA'),
    cardForeground:          raw('#0D0D0D'),
    popover:                 raw('#CDCDCD'),
    popoverForeground:       raw('#0D0D0D'),
    primary:                 raw('#e78a53'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#5f8787'),
    secondaryForeground:     raw('#ffffff'),
    muted:                   raw('#DEDEDE'),
    mutedForeground:         raw('#555555'),
    accent:                  raw('#CDCDCD'),
    accentForeground:        raw('#000000'),
    destructive:             raw('#e21313'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#DEDEDE'),
    input:                   raw('#BABABA'),
    ring:                    raw('#5f8787'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#D0D0D0'),
    card:                    raw('#0D0D0D'),
    cardForeground:          raw('#D0D0D0'),
    popover:                 raw('#333333'),
    popoverForeground:       raw('#D0D0D0'),
    primary:                 raw('#e78a53'),
    primaryForeground:       raw('#0D0D0D'),
    secondary:               raw('#5f8787'),
    secondaryForeground:     raw('#0D0D0D'),
    muted:                   raw('#222222'),
    mutedForeground:         raw('#888888'),
    accent:                  raw('#333333'),
    accentForeground:        raw('#FFFFFF'),
    destructive:             raw('#e21313'),
    destructiveForeground:   raw('#FFFFFF'),
    border:                  raw('#0D0D0D'),
    input:                   raw('#555555'),
    ring:                    raw('#5f8787'),
  },
  fonts: {
    body: 'Inter, ui-sans-serif, sans-serif, system-ui',
    heading: 'IBM Plex Serif, ui-serif, serif',
  },
  radius: '0.325rem',
})
