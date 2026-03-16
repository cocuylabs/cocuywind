// Community theme from tweakcn.com (user-submitted)
// Use with care; verify before production use.

import { defineTheme } from '../../factory.js'
import { raw } from '../../types.js'

export const communityShopifyRedCmmabaTheme = defineTheme({
  name: 'community-shopify-red-cmmaba',
  label: 'Shopify Red',
  _sourceName: 'Shopify Red',
  category: 'Community',
  light: {
    background:              raw('hsl(0, 0%, 100%)'),
    foreground:              raw('hsl(210, 10%, 15%)'),
    card:                    raw('hsl(0, 0%, 100%)'),
    cardForeground:          raw('hsl(210, 10%, 15%)'),
    popover:                 raw('hsl(0, 0%, 100%)'),
    popoverForeground:       raw('hsl(210, 10%, 15%)'),
    primary:                 raw('hsl(356, 84%, 48%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(210, 10%, 96%)'),
    secondaryForeground:     raw('hsl(210, 10%, 20%)'),
    muted:                   raw('hsl(210, 10%, 97%)'),
    mutedForeground:         raw('hsl(210, 10%, 40%)'),
    accent:                  raw('hsl(356, 84%, 96%)'),
    accentForeground:        raw('hsl(356, 84%, 30%)'),
    destructive:             raw('hsl(0, 84%, 60%)'),
    destructiveForeground:   raw('hsl(0, 0%, 100%)'),
    border:                  raw('hsl(210, 10%, 90%)'),
    input:                   raw('hsl(210, 10%, 90%)'),
    ring:                    raw('hsl(356, 84%, 48%)'),
  },
  dark: {
    background:              raw('hsl(210, 10%, 4%)'),
    foreground:              raw('hsl(0, 0%, 98%)'),
    card:                    raw('hsl(210, 10%, 7%)'),
    cardForeground:          raw('hsl(0, 0%, 98%)'),
    popover:                 raw('hsl(210, 10%, 7%)'),
    popoverForeground:       raw('hsl(0, 0%, 98%)'),
    primary:                 raw('hsl(356, 84%, 48%)'),
    primaryForeground:       raw('hsl(0, 0%, 100%)'),
    secondary:               raw('hsl(210, 10%, 15%)'),
    secondaryForeground:     raw('hsl(0, 0%, 98%)'),
    muted:                   raw('hsl(210, 10%, 12%)'),
    mutedForeground:         raw('hsl(210, 10%, 65%)'),
    accent:                  raw('hsl(356, 84%, 15%)'),
    accentForeground:        raw('hsl(356, 84%, 80%)'),
    destructive:             raw('hsl(0, 62%, 30%)'),
    destructiveForeground:   raw('hsl(0, 0%, 98%)'),
    border:                  raw('hsl(210, 10%, 16%)'),
    input:                   raw('hsl(210, 10%, 16%)'),
    ring:                    raw('hsl(356, 84%, 48%)'),
  },
  fonts: {
    body: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: 'Georgia, serif',
  },
  radius: '0.5rem',
})
