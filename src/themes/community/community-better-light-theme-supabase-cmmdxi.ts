// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityBetterLightThemeSupabaseCmmdxiTheme = defineTheme({
  name: 'community-better-light-theme-supabase-cmmdxi',
  label: 'Better Light Theme Supabase',
  _sourceName: 'Better Light Theme Supabase',
  category: 'Community',
  light: {
    background:              raw('#fcfcfc'),
    foreground:              raw('#171717'),
    card:                    raw('#fcfcfc'),
    cardForeground:          raw('#171717'),
    popover:                 raw('#fcfcfc'),
    popoverForeground:       raw('#525252'),
    primary:                 raw('#008a50'),
    primaryForeground:       raw('#fff'),
    secondary:               raw('#fdfdfd'),
    secondaryForeground:     raw('#171717'),
    muted:                   raw('#ededed'),
    mutedForeground:         raw('#202020'),
    accent:                  raw('#ededed'),
    accentForeground:        raw('#202020'),
    destructive:             raw('#ca3214'),
    destructiveForeground:   raw('#fffcfc'),
    border:                  raw('#dfdfdf'),
    input:                   raw('#f6f6f6'),
    ring:                    raw('#008a50'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#e2e8f0'),
    card:                    raw('#171717'),
    cardForeground:          raw('#e2e8f0'),
    popover:                 raw('#242424'),
    popoverForeground:       raw('#a9a9a9'),
    primary:                 raw('#008a50'),
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
    ring:                    raw('#008a50'),
  },
  fonts: {
    body: 'Outfit, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.5rem',
})
