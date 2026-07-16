/**
 * WCAG 2.2 contrast utilities.
 *
 * Works on resolved CSS color strings (oklch, hex, rgb, hsl) — the formats
 * that appear in StoredTheme.styles and in the TAILWIND_COLORS table. Colors
 * that cannot be parsed statically (e.g. `var(--primary)`, `color-mix(...)`)
 * return null from `parseColorToRgb` and NaN from `contrastRatio`.
 */

import type { Theme, ThemeTokens } from './types.js'
import { raw } from './types.js'
import { resolveColor } from './colors.js'

// ─── Color parsing ────────────────────────────────────────────────────────────

export interface Rgb {
  /** Linear-light sRGB channels, clamped to [0, 1] (gamut-mapped by clamp) */
  r: number
  g: number
  b: number
}

interface Oklch {
  l: number
  c: number
  h: number
}

const OKLCH_RE = /^oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?\s*(?:\/\s*[\d.]+%?\s*)?\)$/i

export function parseOklch(value: string): Oklch | null {
  const match = value.trim().match(OKLCH_RE)
  if (!match) return null
  let l = parseFloat(match[1])
  if (match[1].endsWith('%')) l /= 100
  return { l, c: parseFloat(match[2]), h: parseFloat(match[3]) }
}

/** OKLCH → linear sRGB (Björn Ottosson's OKLab matrices), channels clamped to gamut */
function oklchToLinearRgb({ l, c, h }: Oklch): Rgb {
  const hRad = (h * Math.PI) / 180
  const a = c * Math.cos(hRad)
  const b = c * Math.sin(hRad)

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b
  const s_ = l - 0.0894841775 * a - 1.291485548 * b

  const l3 = l_ ** 3
  const m3 = m_ ** 3
  const s3 = s_ ** 3

  const clamp = (v: number) => Math.min(1, Math.max(0, v))
  return {
    r: clamp(+4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3),
    g: clamp(-1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3),
    b: clamp(-0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3),
  }
}

/** Gamma-encoded sRGB channel (0–1) → linear light */
function srgbChannelToLinear(v: number): number {
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

function hexToLinearRgb(value: string): Rgb | null {
  const hex = value.trim().replace(/^#/, '')
  let r: number, g: number, b: number
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    r = parseInt(hex[0] + hex[0], 16)
    g = parseInt(hex[1] + hex[1], 16)
    b = parseInt(hex[2] + hex[2], 16)
  } else if (/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(hex)) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else {
    return null
  }
  return {
    r: srgbChannelToLinear(r / 255),
    g: srgbChannelToLinear(g / 255),
    b: srgbChannelToLinear(b / 255),
  }
}

const RGB_RE = /^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i

function rgbToLinearRgb(value: string): Rgb | null {
  const match = value.trim().match(RGB_RE)
  if (!match) return null
  return {
    r: srgbChannelToLinear(parseInt(match[1], 10) / 255),
    g: srgbChannelToLinear(parseInt(match[2], 10) / 255),
    b: srgbChannelToLinear(parseInt(match[3], 10) / 255),
  }
}

const HSL_RE = /^hsla?\(\s*([\d.]+)(?:deg)?[,\s]+([\d.]+)%[,\s]+([\d.]+)%/i

function hslToLinearRgb(value: string): Rgb | null {
  const match = value.trim().match(HSL_RE)
  if (!match) return null
  const h = ((parseFloat(match[1]) % 360) + 360) % 360
  const s = parseFloat(match[2]) / 100
  const l = parseFloat(match[3]) / 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const hp = h / 60
  const x = c * (1 - Math.abs((hp % 2) - 1))
  let r = 0, g = 0, b = 0
  if (hp < 1)      { r = c; g = x }
  else if (hp < 2) { r = x; g = c }
  else if (hp < 3) { g = c; b = x }
  else if (hp < 4) { g = x; b = c }
  else if (hp < 5) { r = x; b = c }
  else             { r = c; b = x }
  const m = l - c / 2
  return {
    r: srgbChannelToLinear(r + m),
    g: srgbChannelToLinear(g + m),
    b: srgbChannelToLinear(b + m),
  }
}

/**
 * Parse a resolved CSS color string to linear sRGB.
 * Supports oklch(), #hex, rgb()/rgba(), hsl()/hsla(). Returns null for
 * anything else (var() references, color-mix, named colors...).
 */
export function parseColorToRgb(value: string): Rgb | null {
  const v = value.trim()
  const oklch = parseOklch(v)
  if (oklch) return oklchToLinearRgb(oklch)
  if (v.startsWith('#')) return hexToLinearRgb(v)
  return rgbToLinearRgb(v) ?? hslToLinearRgb(v)
}

// ─── WCAG math ────────────────────────────────────────────────────────────────

/** WCAG relative luminance from linear sRGB */
export function relativeLuminance(rgb: Rgb): number {
  return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b
}

/**
 * WCAG 2.x contrast ratio between two resolved CSS colors (1–21).
 * Returns NaN if either color cannot be parsed.
 */
export function contrastRatio(colorA: string, colorB: string): number {
  const a = parseColorToRgb(colorA)
  const b = parseColorToRgb(colorB)
  if (!a || !b) return NaN
  const la = relativeLuminance(a)
  const lb = relativeLuminance(b)
  const lighter = Math.max(la, lb)
  const darker = Math.min(la, lb)
  return (lighter + 0.05) / (darker + 0.05)
}

/** WCAG 2.2 AA thresholds */
export const CONTRAST_AA_TEXT = 4.5
export const CONTRAST_AA_LARGE_TEXT = 3
export const CONTRAST_AA_UI = 3

/** True when the pair meets the given ratio (default AA body text, 4.5:1) */
export function meetsContrast(fg: string, bg: string, ratio: number = CONTRAST_AA_TEXT): boolean {
  const r = contrastRatio(fg, bg)
  return !Number.isNaN(r) && r >= ratio
}

// ─── Contrast repair ──────────────────────────────────────────────────────────

function formatOklch({ l, c, h }: Oklch): string {
  const round = (v: number, places: number) => parseFloat(v.toFixed(places))
  return `oklch(${round(l, 4)} ${round(c, 4)} ${round(h, 4)})`
}

function ratioAgainst(fg: Oklch, bgLum: number): number {
  const lum = relativeLuminance(oklchToLinearRgb(fg))
  const lighter = Math.max(lum, bgLum)
  const darker = Math.min(lum, bgLum)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Binary-search OKLCH lightness in [lo, hi] for the smallest adjustment that
 * meets `target` against a background luminance. Returns null if even the
 * extreme of the range fails.
 */
function searchLightness(
  base: Oklch,
  bgLum: number,
  target: number,
  extreme: number,
): Oklch | null {
  if (ratioAgainst({ ...base, l: extreme }, bgLum) < target) return null
  // Ratio over L is V-shaped around the background's luminance; base fails and
  // extreme passes, so there is a single fail→pass boundary between them.
  let fail = base.l
  let pass = extreme
  for (let i = 0; i < 24; i++) {
    const mid = (fail + pass) / 2
    if (ratioAgainst({ ...base, l: mid }, bgLum) >= target) pass = mid
    else fail = mid
  }
  return { ...base, l: pass }
}

/**
 * Adjust a foreground color's OKLCH lightness (preserving hue and chroma)
 * until it meets `ratio` against `bg`. If lightness alone cannot get there
 * (very high chroma), chroma is reduced stepwise. Falls back to white/black.
 *
 * Returns `fg` unchanged when the pair already passes, or when either color
 * cannot be parsed (var() refs etc. — nothing sensible to do statically).
 *
 * @example ensureContrast('oklch(0.7 0.15 250)', 'oklch(0.98 0.01 250)')
 */
export function ensureContrast(fg: string, bg: string, ratio: number = CONTRAST_AA_TEXT): string {
  const bgRgb = parseColorToRgb(bg)
  if (!bgRgb) return fg
  const bgLum = relativeLuminance(bgRgb)

  let fgOklch = parseOklch(fg)
  if (!fgOklch) {
    const fgRgb = parseColorToRgb(fg)
    if (!fgRgb) return fg
    fgOklch = linearRgbToOklch(fgRgb)
  }

  if (ratioAgainst(fgOklch, bgLum) >= ratio) return fg

  // Search with a small margin so the 4-decimal rounding in formatOklch
  // can't drop the result back below the requested ratio.
  const searchTarget = ratio + 0.05
  // Prefer the direction that moves away from the background's luminance,
  // then try the other. Reduce chroma progressively if lightness isn't enough.
  const darkBg = bgLum < 0.35
  const directions = darkBg ? [1, 0] : [0, 1]
  for (let c = fgOklch.c; ; c *= 0.6) {
    const base = { ...fgOklch, c }
    for (const extreme of directions) {
      const found = searchLightness(base, bgLum, searchTarget, extreme)
      if (found) return formatOklch(found)
    }
    if (c < 0.005) break
  }
  // Achromatic fallback — guaranteed max contrast available
  return darkBg ? 'oklch(1 0 0)' : 'oklch(0 0 0)'
}

// ─── Theme-level contrast floor ───────────────────────────────────────────────

/** Foreground token → the background token it must read against */
const THEME_TEXT_PAIRS: [keyof ThemeTokens, keyof ThemeTokens][] = [
  ['foreground', 'background'],
  ['cardForeground', 'card'],
  ['popoverForeground', 'popover'],
  ['primaryForeground', 'primary'],
  ['secondaryForeground', 'secondary'],
  ['mutedForeground', 'muted'],
  ['accentForeground', 'accent'],
  ['destructiveForeground', 'destructive'],
]

export interface ContrastFloorOptions {
  /** Ratio for text pairs (foreground-on-surface tokens). Default 4.5 (AA body text). */
  textRatio?: number
  /** Ratio for the focus ring against the background. Default 3 (AA non-text). */
  uiRatio?: number
}

/**
 * Repair a theme's foreground tokens so every text pair meets WCAG contrast.
 *
 * Only foreground tokens (and `ring`) are touched — surfaces keep the design's
 * intent. Each failing foreground gets its OKLCH lightness adjusted via
 * `ensureContrast`; passing tokens are returned unchanged (still TailwindToken
 * refs if they were). Unparseable colors are left alone.
 *
 * @example ensureThemeContrast(adjustVividness(theme, 1.3))
 */
export function ensureThemeContrast(theme: Theme, options?: ContrastFloorOptions): Theme {
  const textRatio = options?.textRatio ?? CONTRAST_AA_TEXT
  const uiRatio = options?.uiRatio ?? CONTRAST_AA_UI

  function repair(tokens: ThemeTokens): ThemeTokens {
    const result = { ...tokens }
    let changed = false
    for (const [fgKey, bgKey] of THEME_TEXT_PAIRS) {
      const fg = resolveColor(tokens[fgKey])
      const bg = resolveColor(tokens[bgKey])
      const fixed = ensureContrast(fg, bg, textRatio)
      if (fixed !== fg) {
        result[fgKey] = raw(fixed)
        changed = true
      }
    }
    const ring = resolveColor(tokens.ring)
    const bg = resolveColor(tokens.background)
    const fixedRing = ensureContrast(ring, bg, uiRatio)
    if (fixedRing !== ring) {
      result.ring = raw(fixedRing)
      changed = true
    }
    return changed ? result : tokens
  }

  const light = repair(theme.light)
  const dark = repair(theme.dark)
  if (light === theme.light && dark === theme.dark) return theme
  return { ...theme, light, dark }
}

/** Linear sRGB → OKLCH (inverse of oklchToLinearRgb) */
function linearRgbToOklch({ r, g, b }: Rgb): Oklch {
  const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const bb = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_

  const c = Math.sqrt(a * a + bb * bb)
  let h = (Math.atan2(bb, a) * 180) / Math.PI
  if (h < 0) h += 360
  return { l: L, c, h }
}
