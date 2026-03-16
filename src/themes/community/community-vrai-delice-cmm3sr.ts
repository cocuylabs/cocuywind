// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityVraiDeliceCmm3srTheme = defineTheme({
  name: 'community-vrai-delice-cmm3sr',
  label: 'Vrai Delice',
  _sourceName: 'vrai delice',
  category: 'Community',
  light: {
    background:              raw('#f1fff0'),
    foreground:              raw('#171717'),
    card:                    raw('#fcfcfc'),
    cardForeground:          raw('#171717'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#525252'),
    primary:                 raw('#53d596'),
    primaryForeground:       raw('#1e2723'),
    secondary:               raw('#fdfdfd'),
    secondaryForeground:     raw('#171717'),
    muted:                   raw('#ffffff'),
    mutedForeground:         raw('#202020'),
    accent:                  raw('#fafcff'),
    accentForeground:        raw('#202020'),
    destructive:             raw('#ca3214'),
    destructiveForeground:   raw('#fffcfc'),
    border:                  raw('#dfdfdf'),
    input:                   raw('#f6f6f6'),
    ring:                    raw('#72e3ad'),
  },
  dark: {
    background:              raw('#091f00'),
    foreground:              raw('#e2e8f0'),
    card:                    raw('#171717'),
    cardForeground:          raw('#e2e8f0'),
    popover:                 raw('#242424'),
    popoverForeground:       raw('#a9a9a9'),
    primary:                 raw('#006239'),
    primaryForeground:       raw('#dde8e3'),
    secondary:               raw('#242424'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#1f1f1f'),
    mutedForeground:         raw('#a2a2a2'),
    accent:                  raw('#313131'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#541c15'),
    destructiveForeground:   raw('#ede9e8'),
    border:                  raw('#292929'),
    input:                   raw('#242424'),
    ring:                    raw('#4ade80'),
  },
  fonts: {
    body: 'Outfit, sans-serif',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
