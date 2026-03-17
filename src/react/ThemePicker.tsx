import React, { useState, useEffect } from 'react'
import type { Theme, TailwindColor, ThemeFonts, ThemePattern, PatternType, ThemeTokens, StoredTheme } from '../types.js'
import { createTheme } from '../factory.js'
import { FONTS } from '../fonts.js'
import { resolveColor } from '../colors.js'
import { generatePattern } from '../patterns.js'

export type ThemePickerSection = 'fonts' | 'patterns' | 'radius' | 'background'

export interface ThemePickerProps {
  themes: Theme[]
  value: Theme
  onChange: (theme: Theme) => void
  allowCustom?: boolean
  sections?: ThemePickerSection[]
  className?: string
  locale?: 'en' | 'es' | 'pt'
  labels?: Record<string, Record<string, string>>
  /** Max height for the palette swatches area only — sections remain visible below */
  paletteMaxHeight?: string | number
}

const TAILWIND_COLORS: TailwindColor[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald',
  'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple',
  'fuchsia', 'pink', 'rose',
]
const NEUTRAL_COLORS: TailwindColor[] = ['slate', 'gray', 'zinc', 'neutral', 'stone']
const PATTERN_TYPES: PatternType[] = [
  'none', 'dots', 'grid', 'cross', 'diagonal-lines',
  'horizontal-lines', 'vertical-lines', 'zigzag', 'checkerboard',
  'triangles', 'hexagons', 'noise',
]
const PATTERN_LABELS: Record<PatternType, string> = {
  'none': 'None', 'dots': 'Dots', 'grid': 'Grid', 'cross': 'Cross',
  'diagonal-lines': 'Diagonal', 'horizontal-lines': 'H-Lines',
  'vertical-lines': 'V-Lines', 'zigzag': 'Zigzag', 'checkerboard': 'Checker',
  'triangles': 'Triangles', 'hexagons': 'Hexagons', 'noise': 'Noise',
}
const PATTERN_OPACITY_PRESETS = [
  { label: 'Subtle', value: 0.06 },
  { label: 'Normal', value: 0.12 },
  { label: 'Bold',   value: 0.25 },
]
const RADIUS_PRESETS = [
  { label: 'None', value: '0rem' },   { label: 'SM', value: '0.25rem' },
  { label: 'MD',   value: '0.5rem' }, { label: 'LG', value: '0.75rem' },
  { label: 'XL',   value: '1rem' },   { label: 'Full', value: '9999px' },
]
const FONT_GROUPS = [
  {
    label: 'System',
    options: [
      { label: 'System default (sans-serif)', value: FONTS.SYSTEM_SANS },
      { label: 'System serif',                value: FONTS.SYSTEM_SERIF },
    ],
  },
  {
    label: 'Sans-serif',
    options: [
      { label: 'Inter',            value: FONTS.INTER },
      { label: 'Geist',            value: FONTS.GEIST },
      { label: 'Plus Jakarta Sans', value: FONTS.PLUS_JAKARTA },
      { label: 'Nunito',           value: FONTS.NUNITO },
      { label: 'Poppins',          value: FONTS.POPPINS },
      { label: 'Outfit',           value: FONTS.OUTFIT },
      { label: 'DM Sans',          value: FONTS.DM_SANS },
      { label: 'Manrope',          value: FONTS.MANROPE },
    ],
  },
  {
    label: 'Serif',
    options: [
      { label: 'Playfair Display', value: FONTS.PLAYFAIR },
      { label: 'Lora',             value: FONTS.LORA },
      { label: 'Merriweather',     value: FONTS.MERRIWEATHER },
      { label: 'DM Serif Display', value: FONTS.DM_SERIF },
    ],
  },
]

// Token groups — which tokens each custom control affects
const PRIMARY_KEYS   = ['primary', 'primaryForeground', 'ring'] as const
const SECONDARY_KEYS = ['secondary', 'secondaryForeground', 'accent', 'accentForeground'] as const
const NEUTRAL_KEYS   = [
  'background', 'foreground', 'card', 'cardForeground',
  'popover', 'popoverForeground', 'muted', 'mutedForeground',
  'border', 'input',
] as const

function getSwatchColors(theme: Theme, mode: 'light' | 'dark' = 'light'): [string, string, string] {
  const t = mode === 'dark' ? theme.dark : theme.light
  return [resolveColor(t.background), resolveColor(t.primary), resolveColor(t.secondary)]
}

function ThemeSwatch({ theme, selected, onClick, previewMode = 'light', labelOverride }: {
  theme: Theme; selected: boolean; onClick: () => void; previewMode?: 'light' | 'dark'; labelOverride?: string
}) {
  const [bg, pri, sec] = getSwatchColors(theme, previewMode)
  const label = labelOverride ?? theme.label
  return (
    <button onClick={onClick} title={label} style={{
      display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px',
      borderRadius: 6, border: selected ? '2px solid var(--ring)' : '1px solid var(--border)',
      background: selected ? 'var(--accent)' : 'transparent',
      cursor: 'pointer', outline: 'none', color: 'var(--foreground)',
      width: '100%', textAlign: 'left', minWidth: 0,
    }}>
      <span style={{ flexShrink: 0, display: 'flex', gap: 2 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: bg, border: '1px solid var(--border)', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: pri, display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: sec, display: 'inline-block' }} />
      </span>
      <span style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
    </button>
  )
}

/**
 * Build the palette theme to emit (color tokens only — style layers applied separately).
 *
 * When a preset is selected, custom color overrides patch only the affected token group.
 * When no preset is selected (pure custom mode), createTheme() builds from scratch.
 */
function buildTheme(
  themes: Theme[],
  selectedPresetName: string | null,
  customPrimary:   TailwindColor | null,
  customSecondary: TailwindColor | null,
  customNeutral:   TailwindColor | 'none' | null,
): Theme | null {
  if (selectedPresetName) {
    const preset = themes.find(t => t.name === selectedPresetName) ?? themes[0]
    if (!preset) return null

    if (customPrimary === null && customSecondary === null && customNeutral === null) {
      return { ...preset, _source: 'preset', _presetName: preset.name } as Theme
    }

    const ref = createTheme({
      name: 'ref', label: 'ref',
      primary:   customPrimary   ?? 'blue',
      neutral:   customNeutral === 'none' ? undefined : (customNeutral ?? undefined),
      secondary: customSecondary ?? undefined,
    })

    const lightOverride: Partial<ThemeTokens> = {}
    const darkOverride:  Partial<ThemeTokens> = {}

    if (customPrimary !== null) {
      for (const k of PRIMARY_KEYS) { lightOverride[k] = ref.light[k]; darkOverride[k] = ref.dark[k] }
    }
    if (customSecondary !== null) {
      for (const k of SECONDARY_KEYS) { lightOverride[k] = ref.light[k]; darkOverride[k] = ref.dark[k] }
    }
    if (customNeutral !== null) {
      for (const k of NEUTRAL_KEYS) { lightOverride[k] = ref.light[k]; darkOverride[k] = ref.dark[k] }
    }

    return {
      ...preset,
      name:  `${preset.name}-custom`,
      light: { ...preset.light, ...lightOverride },
      dark:  { ...preset.dark,  ...darkOverride  },
      _source:       'preset',
      _presetName:   preset.name,
      _overlayConfig: {
        basePreset: preset.name,
        ...(customPrimary   !== null && { primary:   customPrimary }),
        ...(customSecondary !== null && { secondary: customSecondary }),
        ...(customNeutral   !== null && { neutral:   customNeutral }),
      },
    } as Theme
  }

  // Pure custom mode
  const primary   = customPrimary ?? 'blue'
  const neutral   = customNeutral === 'none' ? undefined : (customNeutral ?? undefined)
  const secondary = customSecondary ?? undefined
  return Object.assign(
    createTheme({
      name:  `custom-${primary}${neutral ? `-${neutral}` : ''}${secondary ? `-${secondary}` : ''}`,
      label: `Custom (${primary})`,
      primary, neutral, secondary,
    }),
    {
      _source: 'generated' as const,
      _generatorConfig: { primary, neutral, secondary },
    }
  )
}

export function ThemePicker({
  themes, value, onChange, allowCustom = false, sections = [],
  className, locale = 'en', labels, paletteMaxHeight,
}: ThemePickerProps) {
  // Restore picker state from metadata when editing a previously saved theme
  const v = value as Theme & {
    _overlayConfig?:   StoredTheme['_overlayConfig']
    _generatorConfig?: StoredTheme['_generatorConfig']
    _presetName?:      string
  }

  const [selectedPresetName, setSelectedPresetName] = useState<string | null>(() => {
    if (v._overlayConfig?.basePreset) {
      const found = themes.find(t => t.name === v._overlayConfig!.basePreset)
      if (found) return found.name
    }
    if (v._presetName) {
      const found = themes.find(t => t.name === v._presetName)
      if (found) return found.name
    }
    return themes.find(t => t.name === value.name)?.name ?? null
  })

  // null = "use preset's group" when preset active; falls back to default in pure custom mode
  const [customPrimary,   setCustomPrimary]   = useState<TailwindColor | null>(
    () => v._overlayConfig?.primary   ?? (v._generatorConfig?.primary   ?? null)
  )
  const [customSecondary, setCustomSecondary] = useState<TailwindColor | null>(
    () => v._overlayConfig?.secondary ?? (v._generatorConfig?.secondary ?? null)
  )
  const [customNeutral,   setCustomNeutral]   = useState<TailwindColor | 'none' | null>(
    () => v._overlayConfig?.neutral   ?? (v._generatorConfig?.neutral   ? v._generatorConfig.neutral as TailwindColor : null)
  )

  // Style overrides — independent of palette, sticky across preset switches
  const [overrideRadius,  setOverrideRadius]  = useState(value.radius ?? '0.5rem')
  const [overrideFonts,   setOverrideFonts]   = useState<ThemeFonts>(value.fonts ?? {})
  const [overridePattern, setOverridePattern] = useState<ThemePattern>(value.pattern ?? { type: 'none' })
  const [overrideBgImage, setOverrideBgImage] = useState(value.backgroundImage ?? '')

  useEffect(() => {
    const base = buildTheme(themes, selectedPresetName, customPrimary, customSecondary, customNeutral)
    if (!base) return
    onChange({
      ...base,
      radius:          overrideRadius,
      fonts:           Object.keys(overrideFonts).length > 0 ? overrideFonts : undefined,
      pattern:         overridePattern.type !== 'none' ? overridePattern : undefined,
      backgroundImage: overrideBgImage || undefined,
    })
  }, [selectedPresetName, customPrimary, customSecondary, customNeutral, overrideRadius, overrideFonts, overridePattern, overrideBgImage])

  const chip = (active: boolean): React.CSSProperties => ({
    padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12,
    color: 'var(--foreground)',
    border: active ? '2px solid var(--foreground)' : '1px solid var(--border)',
    background: active ? 'var(--accent)' : 'transparent',
  })

  const hasPreset = selectedPresetName !== null

  return (
    <div className={className} style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: 'var(--foreground)' }}>

      {/* Palette — preset swatches */}
      {themes.length > 0 && (
        <div style={paletteMaxHeight ? { maxHeight: paletteMaxHeight, overflowY: 'auto' } : undefined}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
            {themes.map(t => (
              <ThemeSwatch
                key={t.name}
                theme={t}
                selected={t.name === selectedPresetName}
                onClick={() => {
                  setSelectedPresetName(t.name)
                  setOverrideRadius(t.radius ?? '0.5rem')
                  setCustomPrimary(null)
                  setCustomSecondary(null)
                  setCustomNeutral(null)
                }}
                labelOverride={labels?.[locale]?.[t.name]}
              />
            ))}
          </div>
        </div>
      )}

      {/* Custom palette controls */}
      {allowCustom && (
        <div style={{
          borderTop: themes.length > 0 ? '1px solid var(--border)' : undefined,
          marginTop: themes.length > 0 ? 12 : 0,
          paddingTop: themes.length > 0 ? 12 : 0,
        }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Custom palette
            </span>
            {hasPreset && (
              <span style={{ fontSize: 10, opacity: 0.45, marginLeft: 6 }}>overrides on preset</span>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <section>
              {/* Primary */}
              <h4 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, opacity: 0.7 }}>Primary</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
                {hasPreset && (
                  <button onClick={() => setCustomPrimary(null)} style={chip(customPrimary === null)}>Auto</button>
                )}
                {TAILWIND_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomPrimary(color)} title={color} style={{
                    width: 24, height: 24, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                    background: resolveColor(`${color}-500`),
                    border: customPrimary === color ? '2px solid var(--foreground)' : '1px solid var(--border)',
                  }} />
                ))}
              </div>
              {customPrimary === null && hasPreset && (
                <p style={{ margin: '4px 0 0', fontSize: 10, opacity: 0.45 }}>Using preset</p>
              )}

              {/* Secondary */}
              <h4 style={{ margin: '10px 0 6px', fontSize: 11, fontWeight: 600, opacity: 0.7 }}>Secondary</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
                {hasPreset ? (
                  <button onClick={() => setCustomSecondary(null)} style={chip(customSecondary === null)}>Auto</button>
                ) : (
                  <button onClick={() => setCustomSecondary(null)} title="Auto (derived from primary)" style={{
                    width: 24, height: 24, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                    background: `conic-gradient(${TAILWIND_COLORS.slice(5, 10).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
                    border: customSecondary === null ? '2px solid var(--foreground)' : '1px solid var(--border)',
                  }} />
                )}
                {TAILWIND_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomSecondary(color)} title={color} style={{
                    width: 24, height: 24, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                    background: resolveColor(`${color}-500`),
                    border: customSecondary === color ? '2px solid var(--foreground)' : '1px solid var(--border)',
                  }} />
                ))}
              </div>
              {customSecondary === null && (
                <p style={{ margin: '4px 0 0', fontSize: 10, opacity: 0.45 }}>
                  {hasPreset ? 'Using preset' : 'Auto from primary'}
                </p>
              )}

              {/* Neutral */}
              <h4 style={{ margin: '10px 0 6px', fontSize: 11, fontWeight: 600, opacity: 0.7 }}>Neutral base</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {hasPreset
                  ? <button onClick={() => setCustomNeutral(null)} style={chip(customNeutral === null)}>Auto</button>
                  : <button onClick={() => setCustomNeutral('none')} style={chip(customNeutral === null || customNeutral === 'none')}>none</button>
                }
                {NEUTRAL_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomNeutral(color)} style={chip(customNeutral === color)}>{color}</button>
                ))}
              </div>
              <p style={{ margin: '4px 0 0', fontSize: 10, opacity: 0.45 }}>
                {customNeutral === null
                  ? (hasPreset ? 'Using preset' : 'Primary family')
                  : customNeutral === 'none' ? 'Primary family'
                  : `${customNeutral} surfaces`}
              </p>
            </section>
          </div>
        </div>
      )}

      {/* Style sections */}
      {sections.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border)', marginTop: 16, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>

          {sections.includes('fonts') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Fonts</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(['body', 'heading'] as const).map(fontType => (
                  <label key={fontType} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 52, fontSize: 12, opacity: 0.7 }}>{fontType}</span>
                    <select
                      value={overrideFonts[fontType] ?? ''}
                      onChange={e => setOverrideFonts(f => ({ ...f, [fontType]: e.target.value || undefined }))}
                      style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 12 }}
                    >
                      <option value="">{fontType === 'heading' ? 'Same as body' : 'System default'}</option>
                      {FONT_GROUPS.map(group => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            </section>
          )}

          {sections.includes('patterns') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Pattern</h4>
              {/* Type grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {PATTERN_TYPES.map(pt => {
                  const active = overridePattern.type === pt
                  const ps = pt !== 'none' ? generatePattern({ type: pt, opacity: 0.18, size: 'sm' }) : null
                  return (
                    <button
                      key={pt}
                      onClick={() => setOverridePattern(p => ({ ...p, type: pt }))}
                      title={PATTERN_LABELS[pt]}
                      style={{
                        width: 44, height: 44, borderRadius: 8, cursor: 'pointer', padding: 0,
                        border: active ? '2px solid var(--foreground)' : '1px solid var(--border)',
                        backgroundColor: 'var(--background)',
                        backgroundImage: ps?.backgroundImage ?? 'none',
                        backgroundSize: ps?.backgroundSize ?? 'auto',
                        backgroundPosition: ps?.backgroundPosition ?? 'center',
                        outline: active ? '2px solid var(--ring)' : 'none', outlineOffset: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                      }}
                    >
                      {pt === 'none' && <span style={{ fontSize: 9, opacity: 0.5, color: 'var(--foreground)', pointerEvents: 'none' }}>none</span>}
                    </button>
                  )
                })}
              </div>

              {/* Size + opacity controls — only shown when a pattern is active */}
              {overridePattern.type !== 'none' && (
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 52, fontSize: 11, opacity: 0.6 }}>Size</span>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {(['sm', 'md', 'lg'] as const).map(s => (
                        <button key={s} onClick={() => setOverridePattern(p => ({ ...p, size: s }))} style={chip((overridePattern.size ?? 'md') === s)}>
                          {s.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 52, fontSize: 11, opacity: 0.6 }}>Density</span>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {PATTERN_OPACITY_PRESETS.map(o => (
                        <button key={o.label} onClick={() => setOverridePattern(p => ({ ...p, opacity: o.value }))} style={chip((overridePattern.opacity ?? 0.12) === o.value)}>
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.5 }}>
                {overridePattern.type === 'none' ? 'No pattern' : PATTERN_LABELS[overridePattern.type]}
              </p>
            </section>
          )}

          {sections.includes('radius') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Border Radius</h4>
              <div style={{ display: 'flex', gap: 6 }}>
                {RADIUS_PRESETS.map(r => (
                  <button key={r.value} onClick={() => setOverrideRadius(r.value)} style={chip(overrideRadius === r.value)}>{r.label}</button>
                ))}
              </div>
            </section>
          )}

          {sections.includes('background') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Background Image</h4>
              <div style={{ display: 'flex', gap: 6 }}>
                <input
                  type="text"
                  value={overrideBgImage}
                  onChange={e => {
                    const raw = e.target.value.trim()
                    if (!raw) { setOverrideBgImage(''); return }
                    // Wrap bare URLs in url('...')
                    const val = /^https?:\/\/|^\//.test(raw) && !raw.startsWith('url(')
                      ? `url('${raw}')`
                      : raw
                    setOverrideBgImage(val)
                  }}
                  placeholder="https://… or url('…') or gradient CSS"
                  style={{
                    flex: 1, padding: '6px 8px', borderRadius: 4, fontSize: 12,
                    border: '1px solid var(--border)', background: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                />
                {overrideBgImage && (
                  <button onClick={() => setOverrideBgImage('')} style={chip(false)}>Clear</button>
                )}
              </div>
              <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.5 }}>
                Pattern always overlays on top of background image.
              </p>
            </section>
          )}

        </div>
      )}
    </div>
  )
}
