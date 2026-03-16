// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityOpenprofileCmlpf8Theme = defineTheme({
  name: 'community-openprofile-cmlpf8',
  label: 'Openprofile',
  _sourceName: 'openprofile',
  category: 'Community',
  light: {
    background:              raw('oklch(1 0 0)'),
    foreground:              raw('#1a1a1a'),
    card:                    raw('#fdfdfc'),
    cardForeground:          raw('#1f1f1f'),
    popover:                 raw('#fdfdfc'),
    popoverForeground:       raw('#1f1f1f'),
    primary:                 raw('#f3bc16'),
    primaryForeground:       raw('#383838'),
    secondary:               raw('oklch(0.97 0 0)'),
    secondaryForeground:     raw('#262626'),
    muted:                   raw('oklch(0.97 0 0)'),
    mutedForeground:         raw('#595959'),
    accent:                  raw('oklch(0.97 0 0)'),
    accentForeground:        raw('#886807'),
    destructive:             raw('oklch(0.577 0.245 27.325)'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('oklch(0.922 0 0)'),
    input:                   raw('#dcd9d0'),
    ring:                    raw('#f3bc16'),
  },
  dark: {
    background:              raw('oklch(0.145 0 0)'),
    foreground:              raw('#ebebeb'),
    card:                    raw('#141414'),
    cardForeground:          raw('#ebebeb'),
    popover:                 raw('#1a1a1a'),
    popoverForeground:       raw('#ebebeb'),
    primary:                 raw('#f3bc16'),
    primaryForeground:       raw('#000000'),
    secondary:               raw('oklch(0.269 0 0)'),
    secondaryForeground:     raw('#ebebeb'),
    muted:                   raw('oklch(0.269 0 0)'),
    mutedForeground:         raw('#999999'),
    accent:                  raw('#ffeebd'),
    accentForeground:        raw('#141414'),
    destructive:             raw('#ff2e2e'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#212121'),
    input:                   raw('#383838'),
    ring:                    raw('#f3bc16'),
  },
  fonts: {
    body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  radius: '1.4rem',
})
