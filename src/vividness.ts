import { resolveColor } from './colors.js'
import { raw } from './types.js'
import type { Theme, ThemeTokens } from './types.js'
import { ensureThemeContrast } from './contrast.js'

// ─── Types & Constants ────────────────────────────────────────────────────────

export type VividnessPreset = 'playful' | 'vivid' | 'default' | 'professional' | 'elegant'

export const VIVIDNESS_PRESETS: Record<VividnessPreset, number> = {
  playful:      1.3,
  vivid:        1.15,
  default:      1.0,
  professional: 0.75,
  elegant:      0.5,
}

/** Maximum chroma value — slightly above the highest Tailwind palette value (~0.295) */
const MAX_CHROMA = 0.4

// ─── OKLCH helpers ────────────────────────────────────────────────────────────

function parseOklch(value: string): { l: number; c: number; h: number } | null {
  const match = value.trim().match(/^oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)$/)
  if (!match) return null
  return { l: parseFloat(match[1]), c: parseFloat(match[2]), h: parseFloat(match[3]) }
}

function scaleChroma(cssValue: string, factor: number): string {
  const parsed = parseOklch(cssValue)
  if (!parsed) return cssValue
  const newC = Math.min(MAX_CHROMA, Math.max(0, parsed.c * factor))
  // Keep same precision as Tailwind's own values (4 decimal places)
  return `oklch(${parsed.l} ${parseFloat(newC.toFixed(4))} ${parsed.h})`
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface AdjustVividnessOptions {
  /**
   * Repair any text/ring pairs the chroma change pushed below WCAG AA
   * (via `ensureThemeContrast`). Default true — pass false for the raw,
   * unguarded scaling.
   */
  contrastFloor?: boolean
}

/**
 * Scale the chroma (saturation) of every color token in a theme.
 *
 * Works on any Theme — factory-generated, TweakCN, or stolen.
 * All tokens are resolved to CSS oklch strings before scaling,
 * so the returned theme has no TailwindToken refs.
 *
 * Chroma changes shift WCAG contrast, so by default the result is passed
 * through `ensureThemeContrast` — foreground tokens that fell below AA get
 * their lightness nudged back to compliance. Disable with
 * `{ contrastFloor: false }`.
 *
 * @param factor  Multiplier on the chroma (C) component of every OKLCH color.
 *                1.0 = unchanged, 0.5 = half-saturated, 1.3 = more vivid.
 *                Clamped to [0, 0.4] to stay in gamut.
 *
 * @example
 * adjustVividness(oceanTheme, VIVIDNESS_PRESETS.elegant)   // muted
 * adjustVividness(oceanTheme, VIVIDNESS_PRESETS.playful)   // boosted
 */
export function adjustVividness(
  theme: Theme,
  factor: number,
  options?: AdjustVividnessOptions,
): Theme {
  if (factor === 1.0) return theme

  function scaleTokens(tokens: ThemeTokens): ThemeTokens {
    const result = {} as ThemeTokens
    for (const key of Object.keys(tokens) as (keyof ThemeTokens)[]) {
      const resolved = resolveColor(tokens[key])
      result[key] = raw(scaleChroma(resolved, factor))
    }
    return result
  }

  const scaled: Theme = {
    ...theme,
    light: scaleTokens(theme.light),
    dark:  scaleTokens(theme.dark),
  }
  return options?.contrastFloor === false ? scaled : ensureThemeContrast(scaled)
}
