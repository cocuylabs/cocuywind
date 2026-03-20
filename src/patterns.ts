import type { ThemePattern, PatternType } from './types.js'
import { resolveColor } from './colors.js'

export interface PatternStyle {
  backgroundImage: string
  backgroundSize: string
  backgroundColor?: string
  backgroundPosition?: string
}

const SIZE_MAP = {
  sm: { dots: 12, grid: 16, lines: 16, cross: 16, zigzag: 14, checker: 12, tri: 12, hex: 24 },
  md: { dots: 20, grid: 24, lines: 24, cross: 24, zigzag: 20, checker: 20, tri: 20, hex: 36 },
  lg: { dots: 32, grid: 40, lines: 40, cross: 40, zigzag: 30, checker: 32, tri: 32, hex: 56 },
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

/** Re-export PatternType for convenience */
export type { PatternType }
