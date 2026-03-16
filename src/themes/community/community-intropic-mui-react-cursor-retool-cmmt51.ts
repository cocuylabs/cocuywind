// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityIntropicMuiReactCursorRetoolCmmt51Theme = defineTheme({
  name: 'community-intropic-mui-react-cursor-retool-cmmt51',
  label: 'Intropic MUI React/cursor/retool',
  _sourceName: 'Intropic MUI - React/Cursor/Retool',
  category: 'Community',
  light: {
    background:              raw('#ffffff'),
    foreground:              raw('#262626'),
    card:                    raw('#ffffff'),
    cardForeground:          raw('#262626'),
    popover:                 raw('#ffffff'),
    popoverForeground:       raw('#262626'),
    primary:                 raw('#1400CA'),
    primaryForeground:       raw('#F7F7F7'),
    secondary:               raw('#1400CA'),
    secondaryForeground:     raw('#F7F7F7'),
    muted:                   raw('#fbfcf8'),
    mutedForeground:         raw('#7c8b61'),
    accent:                  raw('#f5ebff'),
    accentForeground:        raw('#1400CA'),
    destructive:             raw('#3474ff'),
    destructiveForeground:   raw('#ffffff'),
    border:                  raw('#bdbdbd'),
    input:                   raw('#78007A'),
    ring:                    raw('#5001ff'),
  },
  dark: {
    background:              raw('#121212'),
    foreground:              raw('#e5e5e5'),
    card:                    raw('#1c1c1c'),
    cardForeground:          raw('#e5e5e5'),
    popover:                 raw('#262626'),
    popoverForeground:       raw('#e5e5e5'),
    primary:                 raw('#5AF5FA'),
    primaryForeground:       raw('121212'),
    secondary:               raw('#9e9e9e'),
    secondaryForeground:     raw('#121212'),
    muted:                   raw('#262626'),
    mutedForeground:         raw('#a3a3a3'),
    accent:                  raw('#5AF5FA'),
    accentForeground:        raw('#121212'),
    destructive:             raw('#5AF5FA'),
    destructiveForeground:   raw('#f7f7f7'),
    border:                  raw('#595959'),
    input:                   raw('#404040'),
    ring:                    raw('#5AF5FA'),
  },
  fonts: {
    body: 'Space Grotesk, ui-sans-serif, sans-serif, system-ui',
    heading: 'Mulish, ui-sans-serif, sans-serif, system-ui',
  },
  radius: '0.25rem',
})
