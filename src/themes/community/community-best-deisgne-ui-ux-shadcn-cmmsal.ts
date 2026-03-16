// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBestDeisgneUiUxShadcnCmmsalTheme = defineTheme({
  name: 'community-best-deisgne-ui-ux-shadcn-cmmsal',
  label: 'Best Design UI UX Shadcn',
  _sourceName: 'Best deisgne ui ux shadcn ',
  category: 'Community',
  light: {
    background:              raw('#f4f4f5'),
    foreground:              raw('#18181b'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#18181b'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#18181b'),
    primary:                 raw('#3b82f6'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#f4f4f5'),
    secondaryForeground:     raw('#18181b'),
    muted:                   raw('#f4f4f5'),
    mutedForeground:         raw('#71717a'),
    accent:                  raw('#e4e4e7'),
    accentForeground:        raw('#18181b'),
    destructive:             raw('#ef4444'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#e4e4e7'),
    input:                   raw('#e4e4e7'),
    ring:                    raw('#3b82f6'),
  },
  dark: {
    background:              raw('#09090b'),
    foreground:              raw('#fafafa'),
    card:                    raw('#18181b'),
    cardForeground:          raw('#fafafa'),
    popover:                 raw('#09090b'),
    popoverForeground:       raw('#fafafa'),
    primary:                 raw('#3b82f6'),
    primaryForeground:       raw('#ffffff'),
    secondary:               raw('#27272a'),
    secondaryForeground:     raw('#fafafa'),
    muted:                   raw('#27272a'),
    mutedForeground:         raw('#a1a1aa'),
    accent:                  raw('#27272a'),
    accentForeground:        raw('#fafafa'),
    destructive:             raw('#7f1d1d'),
    destructiveForeground:   raw('#fafafa'),
    border:                  raw('#27272a'),
    input:                   raw('#27272a'),
    ring:                    raw('#3b82f6'),
  },
  fonts: {
    body: 'Inter, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.6rem',
})
