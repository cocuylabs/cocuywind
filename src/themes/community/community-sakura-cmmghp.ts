// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communitySakuraCmmghpTheme = defineTheme({
  name: 'community-sakura-cmmghp',
  label: 'Sakura',
  _sourceName: 'sakura',
  category: 'Community',
  light: {
    background:              raw('#FFF9F6'),
    foreground:              raw('#5C4B43'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#5C4B43'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#5C4B43'),
    primary:                 raw('#FF7EA5'),
    primaryForeground:       raw('#FFFFFF'),
    secondary:               raw('#F3EBE6'),
    secondaryForeground:     raw('#5C4B43'),
    muted:                   raw('#FAF3F0'),
    mutedForeground:         raw('#A18E84'),
    accent:                  raw('#FFDBE4'),
    accentForeground:        raw('#B33E5D'),
    destructive:             raw('#E5484D'),
    destructiveForeground:   raw('#FDFCFD'),
    border:                  raw('#EBE0DA'),
    input:                   raw('#EBE0DA'),
    ring:                    raw('#FF7EA5'),
  },
  dark: {
    background:              raw('#1A1412'),
    foreground:              raw('#EAE0DC'),
    card:                    raw('#241D1A'),
    cardForeground:          raw('#EAE0DC'),
    popover:                 raw('#241D1A'),
    popoverForeground:       raw('#EAE0DC'),
    primary:                 raw('#FF7EA5'),
    primaryForeground:       raw('#1A1412'),
    secondary:               raw('#2D2421'),
    secondaryForeground:     raw('#EAE0DC'),
    muted:                   raw('#2D2421'),
    mutedForeground:         raw('#A18E84'),
    accent:                  raw('#3D252A'),
    accentForeground:        raw('#FFB3C6'),
    destructive:             raw('#E5484D'),
    destructiveForeground:   raw('#FDFCFD'),
    border:                  raw('#332A26'),
    input:                   raw('#332A26'),
    ring:                    raw('#FF7EA5'),
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
