import type { ThemePattern, PatternType } from './types.js'
import { resolveColor } from './colors.js'

export interface PatternStyle {
  backgroundImage: string
  backgroundSize: string
  backgroundColor?: string
}

const SIZE_MAP = {
  sm: { dots: 12, grid: 16, lines: 16, cross: 12, zigzag: 14, checker: 12, tri: 12, hex: 24 },
  md: { dots: 20, grid: 24, lines: 24, cross: 20, zigzag: 20, checker: 20, tri: 20, hex: 36 },
  lg: { dots: 32, grid: 40, lines: 40, cross: 32, zigzag: 30, checker: 32, tri: 32, hex: 56 },
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
  const opacity = config.opacity ?? 0.15
  const color = config.color ? resolveColor(config.color) : 'currentColor'

  // Wrap color with opacity using oklch if it's an oklch value, otherwise use color-mix
  const colorWithOpacity = wrapWithOpacity(color, opacity)

  switch (config.type) {
    case 'none':
      return { backgroundImage: 'none', backgroundSize: 'auto' }

    case 'dots': {
      const s = getSize(size, 'dots')
      return {
        backgroundImage: `radial-gradient(${colorWithOpacity} 1px, transparent 1px)`,
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
      const s = getSize(size, 'cross')
      const half = s / 2
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} 1px, transparent 1px)`,
          `linear-gradient(to right, ${colorWithOpacity} 1px, transparent 1px)`,
        ].join(', '),
        backgroundSize:  `${s}px ${s}px`,
        backgroundColor: 'transparent',
        // Cross pattern uses offset positioning — applied via CSS var usage
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
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%)`,
        ].join(', '),
        backgroundSize: `${s}px ${half}px`,
      }
    }

    case 'checkerboard': {
      const s = getSize(size, 'checker')
      return {
        backgroundImage: [
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%, transparent 75%, ${colorWithOpacity} 75%, ${colorWithOpacity})`,
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%, transparent 75%, ${colorWithOpacity} 75%, ${colorWithOpacity})`,
        ].join(', '),
        backgroundSize: `${s}px ${s}px`,
        backgroundColor: 'transparent',
      }
    }

    case 'triangles': {
      const s = getSize(size, 'tri')
      const half = s / 2
      return {
        backgroundImage: [
          `linear-gradient(120deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(240deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(0deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
        ].join(', '),
        backgroundSize: `${s}px ${half}px`,
      }
    }

    case 'hexagons': {
      const s = getSize(size, 'hex')
      const h = Math.round(s * 0.866) // sin(60°)
      return {
        backgroundImage: [
          `linear-gradient(120deg, ${colorWithOpacity} 25%, transparent 25% 75%, ${colorWithOpacity} 75%)`,
          `linear-gradient(60deg, ${colorWithOpacity} 25%, transparent 25% 75%, ${colorWithOpacity} 75%)`,
          `linear-gradient(${colorWithOpacity} 10%, transparent 10% 90%, ${colorWithOpacity} 90%)`,
        ].join(', '),
        backgroundSize: `${s}px ${h}px`,
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
 * Wraps a CSS color value with opacity.
 * Uses color-mix() for maximum browser compatibility.
 */
function wrapWithOpacity(color: string, opacity: number): string {
  if (color === 'currentColor') {
    // Use color-mix with transparent for currentColor
    const pct = Math.round(opacity * 100)
    return `color-mix(in oklch, currentColor ${pct}%, transparent)`
  }
  // For specific colors, use color-mix
  const pct = Math.round(opacity * 100)
  return `color-mix(in oklch, ${color} ${pct}%, transparent)`
}

/** Re-export PatternType for convenience */
export type { PatternType }
