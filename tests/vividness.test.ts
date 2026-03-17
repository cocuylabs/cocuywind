import { describe, it, expect } from 'vitest'
import { adjustVividness, VIVIDNESS_PRESETS } from '../src/vividness.js'
import { createTheme, defineTheme } from '../src/factory.js'
import { resolveColor } from '../src/colors.js'
import { raw } from '../src/types.js'
import { oceanTheme } from '../src/themes/builtin/ocean.js'

// ─── VIVIDNESS_PRESETS ────────────────────────────────────────────────────────

describe('VIVIDNESS_PRESETS', () => {
  it('contains all 5 named presets', () => {
    expect(Object.keys(VIVIDNESS_PRESETS)).toEqual(['playful', 'vivid', 'default', 'professional', 'elegant'])
  })

  it('default preset is exactly 1.0', () => {
    expect(VIVIDNESS_PRESETS.default).toBe(1.0)
  })

  it('presets are ordered most vivid to least vivid', () => {
    expect(VIVIDNESS_PRESETS.playful).toBeGreaterThan(VIVIDNESS_PRESETS.vivid)
    expect(VIVIDNESS_PRESETS.vivid).toBeGreaterThan(VIVIDNESS_PRESETS.default)
    expect(VIVIDNESS_PRESETS.default).toBeGreaterThan(VIVIDNESS_PRESETS.professional)
    expect(VIVIDNESS_PRESETS.professional).toBeGreaterThan(VIVIDNESS_PRESETS.elegant)
  })
})

// ─── adjustVividness ──────────────────────────────────────────────────────────

describe('adjustVividness', () => {
  it('returns the exact same reference when factor is 1.0', () => {
    expect(adjustVividness(oceanTheme, 1.0)).toBe(oceanTheme)
  })

  it('scales chroma on light tokens', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const adjusted = adjustVividness(theme, 0.5)
    // blue-600 = oklch(0.4479 0.2158 264.376) — chroma should be ~halved
    const basePrimary = resolveColor('blue-600')
    const baseC = parseFloat(basePrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    const adjPrimary = adjusted.light.primary as string
    const adjC = parseFloat(adjPrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeCloseTo(baseC * 0.5, 3)
  })

  it('scales chroma on dark tokens', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'rose' })
    const adjusted = adjustVividness(theme, 0.5)
    const basePrimary = resolveColor('rose-400')
    const baseC = parseFloat(basePrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    const adjPrimary = adjusted.dark.primary as string
    const adjC = parseFloat(adjPrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeCloseTo(baseC * 0.5, 3)
  })

  it('does not change lightness (L) or hue (H)', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'violet' })
    const adjusted = adjustVividness(theme, 0.7)
    const base = resolveColor('violet-600')
    const baseMatch = base.match(/oklch\(([\d.]+) [\d.]+ ([\d.]+)\)/)!
    const adjMatch = (adjusted.light.primary as string).match(/oklch\(([\d.]+) [\d.]+ ([\d.]+)\)/)!
    expect(parseFloat(adjMatch[1])).toBeCloseTo(parseFloat(baseMatch[1]), 3) // L unchanged
    expect(parseFloat(adjMatch[2])).toBeCloseTo(parseFloat(baseMatch[2]), 3) // H unchanged
  })

  it('clamps chroma to MAX_CHROMA (0.4) when boosting a high-chroma color', () => {
    // fuchsia-600 has one of the highest chroma values in the palette
    const theme = createTheme({ name: 't', label: 'T', primary: 'fuchsia' })
    const adjusted = adjustVividness(theme, 2.0) // aggressive boost
    const adjPrimary = adjusted.light.primary as string
    const adjC = parseFloat(adjPrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeLessThanOrEqual(0.4)
  })

  it('clamps chroma to 0 (never negative)', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const adjusted = adjustVividness(theme, -1) // negative factor
    for (const key of Object.keys(adjusted.light) as (keyof typeof adjusted.light)[]) {
      const val = adjusted.light[key] as string
      const match = val.match(/oklch\([\d.]+ ([\d.]+)/)
      if (match) expect(parseFloat(match[1])).toBeGreaterThanOrEqual(0)
    }
  })

  it('zero-chroma colors (white, neutral) remain unchanged in hue regardless of factor', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', neutral: 'neutral' })
    const adjusted = adjustVividness(theme, 1.5)
    // neutral-50 has chroma ≈ 0 — scaling keeps it at 0
    const bgVal = adjusted.light.background as string
    const match = bgVal.match(/oklch\([\d.]+ ([\d.]+)/)
    if (match) expect(parseFloat(match[1])).toBe(0)
  })

  it('preserves non-color theme properties', () => {
    const theme = createTheme({ name: 'test', label: 'Test', primary: 'blue', radius: '1rem' })
    const adjusted = adjustVividness(theme, 0.6)
    expect(adjusted.name).toBe('test')
    expect(adjusted.label).toBe('Test')
    expect(adjusted.radius).toBe('1rem')
  })

  it('preserves _generatorConfig metadata', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'teal' })
    const adjusted = adjustVividness(theme, 0.6)
    const cfg = (adjusted as unknown as { _generatorConfig: { primary: string } })._generatorConfig
    expect(cfg?.primary).toBe('teal')
  })

  it('handles raw oklch inputs (TweakCN-style)', () => {
    const base = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const withRaw = {
      ...base,
      light: { ...base.light, primary: raw('oklch(0.62 0.2 263)') },
      dark:  { ...base.dark,  primary: raw('oklch(0.5  0.2 263)') },
    }
    const adjusted = adjustVividness(withRaw, 0.5)
    const adjC = parseFloat((adjusted.light.primary as string).match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeCloseTo(0.1, 3)
  })

  it('non-oklch raw values pass through unchanged', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const withHex = { ...theme, light: { ...theme.light, primary: raw('#3b82f6') } }
    const adjusted = adjustVividness(withHex, 0.5)
    expect(adjusted.light.primary).toBe('#3b82f6')
  })
})

// ─── createTheme + vividness integration ─────────────────────────────────────

describe('createTheme with vividness', () => {
  it('accepts a VividnessPreset string', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', vividness: 'elegant' })
    // elegant = 0.5 — primary chroma should be less than without vividness
    const base = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const basePrimary = resolveColor(base.light.primary as never)
    const baseC = parseFloat(basePrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    const adjC = parseFloat((theme.light.primary as string).match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeCloseTo(baseC * 0.5, 3)
  })

  it('accepts a numeric vividness factor', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'rose', vividness: 0.8 })
    const base = createTheme({ name: 't', label: 'T', primary: 'rose' })
    const basePrimary = resolveColor(base.light.primary as never)
    const baseC = parseFloat(basePrimary.match(/oklch\([\d.]+ ([\d.]+)/)![1])
    const adjC = parseFloat((theme.light.primary as string).match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(adjC).toBeCloseTo(baseC * 0.8, 3)
  })

  it('stores vividness factor in _generatorConfig', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', vividness: 'professional' })
    const cfg = (theme as unknown as { _generatorConfig: { vividness: number; vividnessPreset: string } })._generatorConfig
    expect(cfg.vividness).toBe(VIVIDNESS_PRESETS.professional)
    expect(cfg.vividnessPreset).toBe('professional')
  })

  it('stores vividness factor but no preset name when numeric', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue', vividness: 0.9 })
    const cfg = (theme as unknown as { _generatorConfig: { vividness: number; vividnessPreset?: string } })._generatorConfig
    expect(cfg.vividness).toBe(0.9)
    expect(cfg.vividnessPreset).toBeUndefined()
  })

  it('without vividness param, _generatorConfig.vividness is undefined', () => {
    const theme = createTheme({ name: 't', label: 'T', primary: 'blue' })
    const cfg = (theme as unknown as { _generatorConfig: { vividness?: number } })._generatorConfig
    expect(cfg.vividness).toBeUndefined()
  })

  it('vividness: "default" is a no-op — tokens match unmodified theme', () => {
    const a = createTheme({ name: 't', label: 'T', primary: 'green' })
    const b = createTheme({ name: 't', label: 'T', primary: 'green', vividness: 'default' })
    // TailwindToken refs should be equal (adjustVividness short-circuits at factor=1.0)
    expect(b.light.primary).toBe(a.light.primary)
  })

  it('elegant produces lower chroma than default', () => {
    const elegant = createTheme({ name: 't', label: 'T', primary: 'indigo', vividness: 'elegant' })
    const dflt    = createTheme({ name: 't', label: 'T', primary: 'indigo' })
    const elegantC = parseFloat((elegant.light.primary as string).match(/oklch\([\d.]+ ([\d.]+)/)![1])
    const dfltC    = parseFloat(resolveColor(dflt.light.primary as never).match(/oklch\([\d.]+ ([\d.]+)/)![1])
    expect(elegantC).toBeLessThan(dfltC)
  })
})
