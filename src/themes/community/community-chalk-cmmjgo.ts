// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityChalkCmmjgoTheme = defineTheme({
  name: 'community-chalk-cmmjgo',
  label: 'Chalk',
  _sourceName: 'Chalk',
  category: 'Community',
  light: {
    background:              raw('#f3f7fc'),
    foreground:              raw('#060a12'),
    card:                    raw('#f9fcff'),
    cardForeground:          raw('#060a12'),
    popover:                 raw('#f9fcff'),
    popoverForeground:       raw('#060a12'),
    primary:                 raw('#101723'),
    primaryForeground:       raw('#fafafa'),
    secondary:               raw('#e7edf6'),
    secondaryForeground:     raw('#101723'),
    muted:                   raw('#e7edf6'),
    mutedForeground:         raw('#636974'),
    accent:                  raw('#e7edf6'),
    accentForeground:        raw('#101723'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('#d8dfe9'),
    input:                   raw('#d8dfe9'),
    ring:                    raw('#87909d'),
  },
  dark: {
    background:              raw('#141d2b'),
    foreground:              raw('#e5ecf1'),
    card:                    raw('#1a2533'),
    cardForeground:          raw('#e5ecf1'),
    popover:                 raw('#202c3c'),
    popoverForeground:       raw('#e5ecf1'),
    primary:                 raw('#d7dfe5'),
    primaryForeground:       raw('#182230'),
    secondary:               raw('#243040'),
    secondaryForeground:     raw('#e5ecf1'),
    muted:                   raw('#232d3c'),
    mutedForeground:         raw('#8794a1'),
    accent:                  raw('#2b3a4d'),
    accentForeground:        raw('#e5ecf1'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('#2b3646'),
    input:                   raw('#273444'),
    ring:                    raw('#6e7c8c'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.625rem',
})
