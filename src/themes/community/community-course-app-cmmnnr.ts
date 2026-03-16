// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityCourseAppCmmnnrTheme = defineTheme({
  name: 'community-course-app-cmmnnr',
  label: 'Course App',
  _sourceName: 'course-app',
  category: 'Community',
  light: {
    background:              raw('#FDFDFD'),
    foreground:              raw('#1B1B1B'),
    card:                    raw('#FFFFFF'),
    cardForeground:          raw('#1B1B1B'),
    popover:                 raw('#FFFFFF'),
    popoverForeground:       raw('#1B1B1B'),
    primary:                 raw('#C3ABFA'),
    primaryForeground:       raw('#1B1B1B'),
    secondary:               raw('#1B1B1B'),
    secondaryForeground:     raw('#FDFDFD'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('oklch(0.556 0 0)'),
    accent:                  raw('oklch(0.97 0 0)'),
    accentForeground:        raw('oklch(0.205 0 0)'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('oklch(1 0 0)'),
    border:                  raw('oklch(0.922 0 0)'),
    input:                   raw('oklch(0.922 0 0)'),
    ring:                    raw('oklch(0.708 0 0)'),
  },
  dark: {
    background:              raw('#1B1B1B'),
    foreground:              raw('#FDFDFD'),
    card:                    raw('oklch(0.205 0 0)'),
    cardForeground:          raw('#FDFDFD'),
    popover:                 raw('oklch(0.205 0 0)'),
    popoverForeground:       raw('#FDFDFD'),
    primary:                 raw('#C3ABFA'),
    primaryForeground:       raw('oklch(0.205 0 0)'),
    secondary:               raw('#FDFDFD'),
    secondaryForeground:     raw('#1B1B1B'),
    muted:                   raw('oklch(0.269 0 0)'),
    mutedForeground:         raw('oklch(0.708 0 0)'),
    accent:                  raw('oklch(0.371 0 0)'),
    accentForeground:        raw('oklch(0.985 0 0)'),
    destructive:             raw('oklch(0.704 0.191 22.216)'),
    destructiveForeground:   raw('oklch(0.985 0 0)'),
    border:                  raw('oklch(0.275 0 0)'),
    input:                   raw('oklch(0.325 0 0)'),
    ring:                    raw('oklch(0.556 0 0)'),
  },
  fonts: {
    body: 'Open Sans, ui-sans-serif, sans-serif, system-ui',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '0.85rem',
})
