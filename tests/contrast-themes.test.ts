/**
 * WCAG 2.2 AA contrast sweep over every exported theme.
 *
 * - builtin + claude themes: hard requirement — every text pair ≥ 4.5:1,
 *   ring vs background ≥ 3:1, both modes. These are ours; fix, don't flag.
 * - tweakcn themes: exact ports (Apache 2.0, attributed) — values are not
 *   ours to change. Known failures are frozen below; the test fails when a
 *   NEW failure appears (regression) and reports stale entries (fixed
 *   upstream) so the list can be pruned.
 * - community themes: user-submitted, opt-in, not asserted. Consumers can run
 *   them through ensureThemeContrast() before use.
 */
import { describe, it, expect } from 'vitest'
import { builtinThemes, claudeThemes, tweakcnThemes } from '../src/themes/index.js'
import { resolveTokens } from '../src/generate.js'
import { contrastRatio, CONTRAST_AA_TEXT, CONTRAST_AA_UI } from '../src/contrast.js'
import type { Theme } from '../src/types.js'

const TEXT_PAIRS: [string, string][] = [
  ['foreground', 'background'],
  ['cardForeground', 'card'],
  ['popoverForeground', 'popover'],
  ['primaryForeground', 'primary'],
  ['secondaryForeground', 'secondary'],
  ['mutedForeground', 'muted'],
  ['accentForeground', 'accent'],
  ['destructiveForeground', 'destructive'],
]

/** Returns failure keys like "ocean.light:mutedForeground" */
function sweep(themes: Theme[]): string[] {
  const failures: string[] = []
  for (const theme of themes) {
    for (const mode of ['light', 'dark'] as const) {
      const t = resolveTokens(theme[mode])
      for (const [fg, bg] of TEXT_PAIRS) {
        const r = contrastRatio(t[fg], t[bg])
        if (!Number.isNaN(r) && r < CONTRAST_AA_TEXT) {
          failures.push(`${theme.name}.${mode}:${fg}`)
        }
      }
      const ring = contrastRatio(t.ring, t.background)
      if (!Number.isNaN(ring) && ring < CONTRAST_AA_UI) {
        failures.push(`${theme.name}.${mode}:ring`)
      }
    }
  }
  return failures
}

describe('WCAG AA contrast — builtin themes', () => {
  it('every text pair ≥ 4.5:1 and ring ≥ 3:1, both modes', () => {
    expect(sweep(builtinThemes)).toEqual([])
  })
})

describe('WCAG AA contrast — claude themes', () => {
  it('every text pair ≥ 4.5:1 and ring ≥ 3:1, both modes', () => {
    expect(sweep(claudeThemes)).toEqual([])
  })
})

/**
 * TweakCN ports ship as-is. This list freezes the failures present at the
 * time of the 2026-07 accessibility audit — do not add entries for new
 * themes without a conscious decision; remove entries that start passing.
 */
const TWEAKCN_KNOWN_FAILURES = new Set([
  'modern-minimal.light:mutedForeground',
  'modern-minimal.light:ring',
  'modern-minimal.dark:destructiveForeground',
  'modern-minimal.dark:ring',
  'violet-bloom.light:mutedForeground',
  't3-chat.light:mutedForeground',
  't3-chat.dark:destructiveForeground',
  'twitter.light:primaryForeground',
  'twitter.light:mutedForeground',
  'twitter.light:destructiveForeground',
  'mocha-mousse.light:mutedForeground',
  'mocha-mousse.light:destructiveForeground',
  'mocha-mousse.dark:mutedForeground',
  'bubblegum.light:primaryForeground',
  'bubblegum.light:mutedForeground',
  'bubblegum.dark:mutedForeground',
  'notebook.dark:mutedForeground',
  'doom-64.light:mutedForeground',
  'doom-64.light:accentForeground',
  'doom-64.dark:mutedForeground',
  'doom-64.dark:accentForeground',
  'catppuccin.light:primaryForeground',
  'catppuccin.light:mutedForeground',
  'catppuccin.light:destructiveForeground',
  'catppuccin.dark:mutedForeground',
  'catppuccin.dark:accentForeground',
  'graphite.light:mutedForeground',
  'graphite.light:destructiveForeground',
  'graphite.dark:mutedForeground',
  'perpetuity.light:mutedForeground',
  'perpetuity.light:destructiveForeground',
  'perpetuity.dark:destructiveForeground',
  'perpetuity.dark:ring',
  'kodama-grove.light:destructiveForeground',
  'kodama-grove.dark:mutedForeground',
  'cosmic-night.light:accentForeground',
  'tangerine.light:primaryForeground',
  'tangerine.light:mutedForeground',
  'tangerine.dark:mutedForeground',
  'quantum-rose.light:mutedForeground',
  'quantum-rose.dark:mutedForeground',
  'nature.light:mutedForeground',
  'nature.light:destructiveForeground',
  'nature.dark:mutedForeground',
  'bold-tech.light:mutedForeground',
  'elegant-luxury.light:primaryForeground',
  'elegant-luxury.light:destructiveForeground',
  'amber-minimal.light:mutedForeground',
  'amber-minimal.light:ring',
  'supabase.dark:mutedForeground',
  'neo-brutalism.light:destructiveForeground',
  'solar-dusk.light:primaryForeground',
  'solar-dusk.light:mutedForeground',
  'solar-dusk.dark:mutedForeground',
  'claymorphism.light:primaryForeground',
  'claymorphism.light:mutedForeground',
  'claymorphism.light:destructiveForeground',
  'claymorphism.dark:mutedForeground',
  'pastel-dreams.light:primaryForeground',
  'pastel-dreams.light:mutedForeground',
  'pastel-dreams.light:destructiveForeground',
  'pastel-dreams.light:ring',
  'pastel-dreams.dark:mutedForeground',
  'pastel-dreams.dark:destructiveForeground',
  'clean-slate.light:mutedForeground',
  'clean-slate.dark:destructiveForeground',
  'caffeine.light:destructiveForeground',
  'caffeine.dark:mutedForeground',
  'ocean-breeze.light:mutedForeground',
  'ocean-breeze.dark:mutedForeground',
  'midnight-bloom.dark:mutedForeground',
  'candyland.light:primaryForeground',
  'candyland.light:mutedForeground',
  'candyland.light:destructiveForeground',
  'candyland.light:ring',
  'candyland.dark:mutedForeground',
  'northern-lights.light:primaryForeground',
  'northern-lights.light:mutedForeground',
  'northern-lights.dark:mutedForeground',
  'vintage-paper.dark:mutedForeground',
  'sunset-horizon.light:primaryForeground',
  'sunset-horizon.light:mutedForeground',
  'sunset-horizon.light:destructiveForeground',
  'sunset-horizon.dark:mutedForeground',
  'claude.light:primaryForeground',
  'claude.light:mutedForeground',
  'claude.light:destructiveForeground',
  'claude.dark:destructiveForeground',
])

describe('WCAG AA contrast — tweakcn themes (frozen known-failure list)', () => {
  it('no failures beyond the frozen list', () => {
    const failures = sweep(tweakcnThemes)
    const newFailures = failures.filter((f) => !TWEAKCN_KNOWN_FAILURES.has(f))
    expect(newFailures).toEqual([])
  })

  it('frozen list has no stale entries (prune when upstream fixes land)', () => {
    const failures = new Set(sweep(tweakcnThemes))
    const stale = [...TWEAKCN_KNOWN_FAILURES].filter((f) => !failures.has(f))
    expect(stale).toEqual([])
  })
})
