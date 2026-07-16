import type { ThemePattern, PatternType } from './types.js'
import { resolveColor } from './colors.js'

export interface PatternStyle {
  backgroundImage: string
  backgroundSize: string
  /** @deprecated Never set by any pattern type — will be removed in a future major. */
  backgroundColor?: string
  backgroundPosition?: string
}

const SIZE_MAP = {
  sm: { dots: 12, grid: 16, lines: 16, cross: 16, zigzag: 14, checker: 12, tri: 12, hex: 24, wave: 24, hatch: 8,  iso: 20, half: 16, conf: 48,  topo: 120 },
  md: { dots: 20, grid: 24, lines: 24, cross: 24, zigzag: 20, checker: 20, tri: 20, hex: 36, wave: 40, hatch: 12, iso: 32, half: 24, conf: 72,  topo: 200 },
  lg: { dots: 32, grid: 40, lines: 40, cross: 40, zigzag: 30, checker: 32, tri: 32, hex: 56, wave: 64, hatch: 18, iso: 48, half: 36, conf: 104, topo: 320 },
}

function getSize(s: 'sm' | 'md' | 'lg' | undefined, key: keyof typeof SIZE_MAP.md): number {
  return SIZE_MAP[s ?? 'md'][key]
}

/**
 * Generates CSS background pattern properties.
 * Returns CSS properties to apply directly — no class names, no dependencies.
 *
 * Inspired by pattern.css (MIT License).
 */
export function generatePattern(config: ThemePattern): PatternStyle {
  const size = config.size ?? 'md'
  const opacity = config.opacity ?? 0.08
  // Default to foreground so patterns remain visible on dark backgrounds.
  const color = config.color ? resolveColor(config.color) : 'var(--foreground)'

  const colorWithOpacity = wrapWithOpacity(color, opacity)
 
  switch (config.type) {
    case 'none':
      return { backgroundImage: 'none', backgroundSize: 'auto' }

    case 'dots': {
      const s = getSize(size, 'dots')
      return {
        backgroundImage: `radial-gradient(${colorWithOpacity} 1.5px, transparent 1.5px)`,
        backgroundSize:  `${s}px ${s}px`,
      }
    }

    case 'grid': {
      const s = getSize(size, 'grid')
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} 1px, transparent 1px)`,
          `linear-gradient(to right, ${colorWithOpacity} 1px, transparent 1px)`,
        ].join(', '),
        backgroundSize: `${s}px ${s}px`,
      }
    }

    case 'cross': {
      // "+" marks centered in each grid cell
      const s = getSize(size, 'cross')
      const half = s / 2
      const arm = Math.max(1, Math.round(s * 0.08))
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} ${arm}px, transparent ${arm}px)`,
          `linear-gradient(to right, ${colorWithOpacity} ${arm}px, transparent ${arm}px)`,
        ].join(', '),
        backgroundSize:    `${s}px ${s}px`,
        backgroundPosition: `${half - arm / 2}px ${half - arm / 2}px, ${half - arm / 2}px ${half - arm / 2}px`,
      }
    }

    case 'diagonal-lines': {
      const s = getSize(size, 'lines')
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 0, transparent 50%)`,
        backgroundSize:  `${s}px ${s}px`,
      }
    }

    case 'horizontal-lines': {
      const s = getSize(size, 'lines')
      return {
        backgroundImage: `repeating-linear-gradient(0deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 1px, transparent ${s}px)`,
        backgroundSize:  `${s}px ${s}px`,
      }
    }

    case 'vertical-lines': {
      const s = getSize(size, 'lines')
      return {
        backgroundImage: `repeating-linear-gradient(90deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 1px, transparent ${s}px)`,
        backgroundSize:  `${s}px ${s}px`,
      }
    }

    case 'zigzag': {
      const s = getSize(size, 'zigzag')
      const half = s / 2
      return {
        backgroundImage: [
          `linear-gradient(135deg, ${colorWithOpacity} 25%, transparent 25%) -${half}px 0`,
          `linear-gradient(225deg, ${colorWithOpacity} 25%, transparent 25%) -${half}px 0`,
          `linear-gradient(315deg, ${colorWithOpacity} 25%, transparent 25%)`,
          `linear-gradient(45deg,  ${colorWithOpacity} 25%, transparent 25%)`,
        ].join(', '),
        backgroundSize: `${s}px ${half}px`,
      }
    }

    case 'checkerboard': {
      // conic-gradient creates a perfect checkerboard without needing backgroundPosition tricks
      const s = getSize(size, 'checker')
      return {
        backgroundImage: `conic-gradient(${colorWithOpacity} 90deg, transparent 90deg 180deg, ${colorWithOpacity} 180deg 270deg, transparent 270deg)`,
        backgroundSize:  `${s}px ${s}px`,
      }
    }

    case 'triangles': {
      const s = getSize(size, 'tri')
      return {
        backgroundImage: [
          `repeating-linear-gradient(60deg, ${colorWithOpacity} 0 1px, transparent 1px ${s}px)`,
          `repeating-linear-gradient(-60deg, ${colorWithOpacity} 0 1px, transparent 1px ${s}px)`,
          `repeating-linear-gradient(0deg, ${colorWithOpacity} 0 1px, transparent 1px ${s}px)`,
        ].join(', '),
        backgroundSize: `${s}px ${s}px`,
      }
    }

    case 'hexagons': {
      const s = getSize(size, 'hex')
      const h = Math.round(s * 0.866) // sin(60°)
      return {
        backgroundImage: [
          `linear-gradient(30deg, ${colorWithOpacity} 12%, transparent 12.5% 87%, ${colorWithOpacity} 87.5%)`,
          `linear-gradient(150deg, ${colorWithOpacity} 12%, transparent 12.5% 87%, ${colorWithOpacity} 87.5%)`,
          `linear-gradient(90deg, ${colorWithOpacity} 12%, transparent 12.5% 87%, ${colorWithOpacity} 87.5%)`,
        ].join(', '),
        backgroundSize: `${s}px ${h}px`,
        backgroundPosition: `0 0, 0 0, ${s / 2}px ${h / 2}px`,
      }
    }

    case 'noise': {
      // SVG-based noise pattern (no external dependency)
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(#n)' opacity='${opacity}'/></svg>`
      const encoded = encodeURIComponent(svg)
      return {
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundSize: '200px 200px',
      }
    }

    case 'waves': {
      // Scalloped rows — two half-circle arcs offset by half a tile
      const s = getSize(size, 'wave')
      const h = Math.round(s / 2)
      return {
        backgroundImage: [
          `radial-gradient(circle at 50% 0, transparent ${Math.round(s * 0.32)}px, ${colorWithOpacity} ${Math.round(s * 0.32)}px, ${colorWithOpacity} ${Math.round(s * 0.36)}px, transparent ${Math.round(s * 0.37)}px)`,
          `radial-gradient(circle at 50% ${h}px, transparent ${Math.round(s * 0.32)}px, ${colorWithOpacity} ${Math.round(s * 0.32)}px, ${colorWithOpacity} ${Math.round(s * 0.36)}px, transparent ${Math.round(s * 0.37)}px)`,
        ].join(', '),
        backgroundSize: `${s}px ${h}px`,
        backgroundPosition: `0 0, ${h}px 0`,
      }
    }

    case 'crosshatch': {
      // Fine 45°/135° hatching — denser and thinner than diagonal-lines
      const s = getSize(size, 'hatch')
      return {
        backgroundImage: [
          `repeating-linear-gradient(45deg, ${colorWithOpacity} 0, ${colorWithOpacity} 0.5px, transparent 0.5px, transparent ${s}px)`,
          `repeating-linear-gradient(135deg, ${colorWithOpacity} 0, ${colorWithOpacity} 0.5px, transparent 0.5px, transparent ${s}px)`,
        ].join(', '),
        backgroundSize: `${s * 2}px ${s * 2}px`,
      }
    }

    case 'isometric': {
      // Vertical lines + ±30° lines → isometric cube grid
      const s = getSize(size, 'iso')
      const h = Math.round(s * 1.732) // tan(60°) — vertical period of the 30° lines
      return {
        backgroundImage: [
          `repeating-linear-gradient(90deg, ${colorWithOpacity} 0 1px, transparent 1px ${s}px)`,
          `repeating-linear-gradient(30deg, ${colorWithOpacity} 0 1px, transparent 1px ${Math.round(h / 2)}px)`,
          `repeating-linear-gradient(150deg, ${colorWithOpacity} 0 1px, transparent 1px ${Math.round(h / 2)}px)`,
        ].join(', '),
        backgroundSize: `${s * 2}px ${h}px`,
      }
    }

    case 'halftone': {
      // Two offset dot lattices at different radii — print-style halftone feel
      const s = getSize(size, 'half')
      const half = s / 2
      return {
        backgroundImage: [
          `radial-gradient(circle, ${colorWithOpacity} 1.8px, transparent 1.8px)`,
          `radial-gradient(circle, ${colorWithOpacity} 1px, transparent 1px)`,
        ].join(', '),
        backgroundSize: `${s}px ${s}px`,
        backgroundPosition: `0 0, ${half}px ${half}px`,
      }
    }

    case 'confetti': {
      // Scattered dots and slivers inside one large tile
      const s = getSize(size, 'conf')
      const u = s / 72 // scale factor relative to the md tile
      const dot = (x: number, y: number, r: number) =>
        `radial-gradient(circle ${(r * u).toFixed(1)}px at ${Math.round(x * u)}px ${Math.round(y * u)}px, ${colorWithOpacity} 100%, transparent 100%)`
      return {
        backgroundImage: [
          dot(9, 12, 2.5), dot(30, 6, 1.8), dot(51, 16, 2.2),
          dot(66, 38, 1.6), dot(42, 33, 2.6), dot(18, 42, 1.8),
          dot(6, 60, 2.2), dot(33, 63, 1.6), dot(60, 58, 2.5),
        ].join(', '),
        backgroundSize: `${s}px ${s}px`,
      }
    }

    case 'topography': {
      // Organic contour rings — SVG-based. Like `noise`, the color is baked in:
      // mid-gray reads on both light and dark surfaces.
      const s = getSize(size, 'topo')
      const paths = [
        'M20 100c0-44 36-80 80-80s80 36 80 80-36 80-80 80-80-36-80-80z',
        'M40 100c0-33 27-60 60-60s60 27 60 60-27 60-60 60-60-27-60-60z',
        'M60 100c0-22 18-40 40-40s40 18 40 40-18 40-40 40-40-18-40-40z',
        'M80 100c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z',
      ]
        .map((d) => `<path d='${d}' fill='none' stroke='#808080' stroke-width='1.5' opacity='${opacity}'/>`)
        .join('')
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>${paths}</svg>`
      return {
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundSize: `${s}px ${s}px`,
      }
    }

    case 'gradient': {
      // Soft mesh wash from the three theme accents — corners + center
      const o = config.opacity ?? 0.15
      const mix = (c: string) => wrapWithOpacity(c, o)
      const c1 = config.color ? colorWithOpacity : mix('var(--primary)')
      const c2 = config.color ? colorWithOpacity : mix('var(--secondary)')
      const c3 = config.color ? colorWithOpacity : mix('var(--accent)')
      return {
        backgroundImage: [
          `radial-gradient(ellipse 80% 60% at 15% 0%, ${c1}, transparent 60%)`,
          `radial-gradient(ellipse 70% 60% at 85% 10%, ${c2}, transparent 60%)`,
          `radial-gradient(ellipse 90% 70% at 50% 100%, ${c3}, transparent 65%)`,
        ].join(', '),
        backgroundSize: '100% 100%',
      }
    }

    case 'gradient-radial': {
      // Single soft radial glow from the top — quiet spotlight
      const o = config.opacity ?? 0.15
      const c = config.color ? colorWithOpacity : wrapWithOpacity('var(--primary)', o)
      return {
        backgroundImage: `radial-gradient(ellipse 120% 80% at 50% 0%, ${c}, transparent 70%)`,
        backgroundSize: '100% 100%',
      }
    }

    default:
      return { backgroundImage: 'none', backgroundSize: 'auto' }
  }
}

/**
 * Wraps a CSS color value with opacity using color-mix().
 */
function wrapWithOpacity(color: string, opacity: number): string {
  const pct = Math.round(opacity * 100)
  return `color-mix(in oklch, ${color} ${pct}%, transparent)`
}

// ─── Pattern → CSS custom properties ─────────────────────────────────────────

/**
 * Opacity multipliers applied when a pattern uses `tint` instead of `color`.
 * Secondary/accent surfaces are lighter than foreground, so tinted patterns
 * need a boost to stay visible at the same nominal opacity.
 */
export const PATTERN_TINT_OPACITY_MULTIPLIER: Record<'primary' | 'secondary' | 'accent', number> = {
  primary: 1,
  secondary: 1.4,
  accent: 2,
}

/**
 * Ceiling on the effective pattern opacity after tint multipliers.
 * Patterns paint behind text — anything louder than this starts eating into
 * text contrast on worst-case overlaps.
 */
export const PATTERN_MAX_EFFECTIVE_OPACITY = 0.25

export interface PatternCssVars {
  '--pattern-image': string
  '--pattern-size': string
  '--pattern-position'?: string
}

export interface PatternCssVarsOptions {
  /**
   * Which mode's opacity to use. `'dark'` picks `pattern.darkOpacity` when
   * set (falls back to `pattern.opacity`). Default `'light'`.
   */
  mode?: 'light' | 'dark'
}

/**
 * Resolve a ThemePattern to its `--pattern-*` CSS custom properties, with the
 * tint → color/opacity mapping applied. This is the single code path behind
 * `generateCSS` and `storedThemeToCSS` — consumers building live previews
 * (e.g. postMessage var updates) should call this instead of replicating the
 * tint multipliers.
 *
 * @example
 * patternToCssVars({ type: 'dots', tint: 'accent' })
 * // → { '--pattern-image': 'radial-gradient(color-mix(in oklch, var(--accent) 16%, transparent) ...)', '--pattern-size': '20px 20px' }
 */
export function patternToCssVars(
  pattern: ThemePattern | undefined,
  options?: PatternCssVarsOptions,
): PatternCssVars {
  if (!pattern || pattern.type === 'none') {
    return { '--pattern-image': 'none', '--pattern-size': 'auto' }
  }

  const mode = options?.mode ?? 'light'
  const modeOpacity =
    mode === 'dark' && pattern.darkOpacity !== undefined ? pattern.darkOpacity : pattern.opacity

  let config: ThemePattern
  if (pattern.tint) {
    const tintVar = `var(--${pattern.tint})`
    const boosted = (modeOpacity ?? 0.08) * PATTERN_TINT_OPACITY_MULTIPLIER[pattern.tint]
    config = {
      ...pattern,
      color: tintVar as ThemePattern['color'],
      opacity: Math.min(PATTERN_MAX_EFFECTIVE_OPACITY, boosted),
    }
  } else {
    config = {
      ...pattern,
      opacity: modeOpacity === undefined
        ? undefined
        : Math.min(PATTERN_MAX_EFFECTIVE_OPACITY, modeOpacity),
    }
  }

  const style = generatePattern(config)
  const vars: PatternCssVars = {
    '--pattern-image': style.backgroundImage,
    '--pattern-size': style.backgroundSize,
  }
  if (style.backgroundPosition) vars['--pattern-position'] = style.backgroundPosition
  return vars
}

/** Re-export PatternType for convenience */
export type { PatternType }
