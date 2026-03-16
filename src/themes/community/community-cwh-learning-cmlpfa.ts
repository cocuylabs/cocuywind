// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCwhLearningCmlpfaTheme = defineTheme({
  name: 'community-cwh-learning-cmlpfa',
  label: 'Cwh Learning',
  _sourceName: 'cwh-learning',
  category: 'Community',
  light: {
    background:              raw('#fdfdfd'),
    foreground:              raw('#000000'),
    card:                    raw('#fdfdfd'),
    cardForeground:          raw('#000000'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#000000'),
    primary:                 raw('#ad46ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1b1d1e'),
    secondaryForeground:     raw('#edf0f4'),
    muted:                   raw('#f5f5f5'),
    mutedForeground:         raw('#525252'),
    accent:                  raw('#fbdae7'),
    accentForeground:        raw('#ad46ff'),
    destructive:             raw('#e54b4f'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e7e7ee'),
    input:                   raw('#ebebeb'),
    ring:                    raw('#000000'),
  },
  dark: {
    background:              raw('#060606'),
    foreground:              raw('#f0f0f0'),
    card:                    raw('#121212'),
    cardForeground:          raw('#f0f0f0'),
    popover:                 raw('#222327'),
    popoverForeground:       raw('#f0f0f0'),
    primary:                 raw('#ad46ff'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#1b1d1e'),
    secondaryForeground:     raw('#f0f0f0'),
    muted:                   raw('#2a2c33'),
    mutedForeground:         raw('#a0a0a0'),
    accent:                  raw('#1e293b'),
    accentForeground:        raw('#ad46ff'),
    destructive:             raw('#f87171'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#2a2b2c'),
    input:                   raw('#33353a'),
    ring:                    raw('#ad46ff'),
  },
  fonts: {
    body: 'var(--font-montserrat), Montserrat, sans-serif',
    heading: 'Lora, serif',
  },
  radius: '1.4rem',
})
