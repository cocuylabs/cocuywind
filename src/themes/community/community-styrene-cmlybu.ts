// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityStyreneCmlybuTheme = defineTheme({
  name: 'community-styrene-cmlybu',
  label: 'Styrene',
  _sourceName: 'Styrene',
  category: 'Community',
  light: {
    background:              raw('#f8fafc'),
    foreground:              raw('#233039'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#253639'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#253839'),
    primary:                 raw('#567159'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e5e7eb'),
    secondaryForeground:     raw('#394f49'),
    muted:                   raw('#f3f4f6'),
    mutedForeground:         raw('#28312b'),
    accent:                  raw('#d1edd1'),
    accentForeground:        raw('#3c4e4f'),
    destructive:             raw('#d3300e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#d1d5db'),
    input:                   raw('#dae8d9'),
    ring:                    raw('#78b27f'),
  },
  dark: {
    background:              raw('#16171d'),
    foreground:              raw('#cbf4ed'),
    card:                    raw('#202b30'),
    cardForeground:          raw('#cbf4ed'),
    popover:                 raw('#161a1d'),
    popoverForeground:       raw('#00f0d3'),
    primary:                 raw('#00f0d3'),
    primaryForeground:       raw('#0b2821'),
    secondary:               raw('#304345'),
    secondaryForeground:     raw('#d1d5db'),
    muted:                   raw('#1f2b30'),
    mutedForeground:         raw('#9ca3af'),
    accent:                  raw('#374151'),
    accentForeground:        raw('#d1d5db'),
    destructive:             raw('#e98100'),
    destructiveForeground:   raw('#1d2725'),
    border:                  raw('#4a6767'),
    input:                   raw('#375656'),
    ring:                    raw('#00f0d3'),
  },
  fonts: {
    body: 'Tomorrow, ui-sans-serif, sans-serif, system-ui',
    heading: 'BioRhyme, ui-serif, serif',
  },
  radius: '0.15rem',
})
