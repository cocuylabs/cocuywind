// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityWhatsappCmmbmnTheme = defineTheme({
  name: 'community-whatsapp-cmmbmn',
  label: 'Whatsapp',
  _sourceName: 'Whatsapp',
  category: 'Community',
  light: {
    background:              raw('#f0f2f5'),
    foreground:              raw('#111b21'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#111b21'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#111b21'),
    primary:                 raw('#075e54'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#e7f8f0'),
    secondaryForeground:     raw('#075e54'),
    muted:                   raw('#f0f2f5'),
    mutedForeground:         raw('#667781'),
    accent:                  raw('#25d366'),
    accentForeground:        raw('#ffffff'),
    destructive:             raw('#ea4335'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#e9edef'),
    input:                   raw('#e9edef'),
    ring:                    raw('#25d366'),
  },
  dark: {
    background:              raw('#0b141a'),
    foreground:              raw('#e9edef'),
    card:                    raw('#1f2c34'),
    cardForeground:          raw('#e9edef'),
    popover:                 raw('#1f2c34'),
    popoverForeground:       raw('#e9edef'),
    primary:                 raw('#00a884'),
    primaryForeground:       raw('#111b21'),
    secondary:               raw('#12332a'),
    secondaryForeground:     raw('#00a884'),
    muted:                   raw('#182229'),
    mutedForeground:         raw('#8696a0'),
    accent:                  raw('#25d366'),
    accentForeground:        raw('#111b21'),
    destructive:             raw('#ea4335'),
    destructiveForeground:   raw('#e9edef'),
    border:                  raw('#2a3942'),
    input:                   raw('#2a3942'),
    ring:                    raw('#00a884'),
  },
  fonts: {
    body: 'Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '1rem',
})
