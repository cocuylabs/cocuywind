import React, { useState } from 'react'
import type { Theme, TailwindColor, ThemeFonts, ThemePattern, PatternType } from '../types.js'
import { createTheme } from '../factory.js'
import { FONTS } from '../fonts.js'
import { resolveColor } from '../colors.js'

export type ThemePickerSection = 'colors' | 'fonts' | 'patterns' | 'radius'

export interface ThemePickerProps {
  /** Available preset themes to show as swatches */
  themes: Theme[]
  /** Currently selected theme */
  value: Theme
  /** Called when theme selection changes */
  onChange: (theme: Theme) => void
  /** Show custom theme builder */
  allowCustom?: boolean
  /** Which sections to show in the custom builder */
  sections?: ThemePickerSection[]
  className?: string
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
  'horizontal-lines', 'vertical-lines', 'zigzag',
  'checkerboard', 'triangles',
]

const RADIUS_PRESETS = [
  { label: 'None', value: '0rem' },
  { label: 'SM', value: '0.25rem' },
  { label: 'MD', value: '0.5rem' },
  { label: 'LG', value: '0.75rem' },
  { label: 'XL', value: '1rem' },
  { label: 'Full', value: '9999px' },
]

const FONT_OPTIONS = Object.entries(FONTS).map(([key, value]) => ({
  label: key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
  value,
}))

/** Get preview colors for a theme swatch (primary, background, accent) */
function getSwatchColors(theme: Theme): [string, string, string] {
  const bg  = resolveColor(theme.light.background)
  const pri = resolveColor(theme.light.primary)
  const sec = resolveColor(theme.light.secondary)
  return [bg, pri, sec]
}

/** Dot swatch component */
function ThemeSwatch({ theme, selected, onClick }: {
  theme: Theme
  selected: boolean
  onClick: () => void
}) {
  const [bg, pri, sec] = getSwatchColors(theme)
  return (
    <button
      onClick={onClick}
      title={theme.label}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3px',
        padding: '6px 10px',
        borderRadius: '8px',
        border: selected ? '2px solid currentColor' : '2px solid transparent',
        background: 'transparent',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: bg, border: '1px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: pri, display: 'inline-block' }} />
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: sec, display: 'inline-block' }} />
      <span style={{ marginLeft: 4, fontSize: 12 }}>{theme.label}</span>
    </button>
  )
}

/**
 * ThemePicker — preset swatches + optional custom builder.
 *
 * Renders:
 * 1. Preset swatches grouped by Built-in / TweakCN
 * 2. Custom builder (if allowCustom) with color, font, pattern, radius sections
 */
export function ThemePicker({
  themes,
  value,
  onChange,
  allowCustom = false,
  sections = ['colors', 'fonts', 'patterns', 'radius'],
  className,
}: ThemePickerProps) {
  const [tab, setTab] = useState<'presets' | 'custom'>('presets')
  const [customPrimary, setCustomPrimary] = useState<TailwindColor>('blue')
  const [customNeutral, setCustomNeutral] = useState<TailwindColor>('slate')
  const [customRadius, setCustomRadius] = useState('0.5rem')
  const [customFonts, setCustomFonts] = useState<ThemeFonts>({})
  const [customPattern, setCustomPattern] = useState<ThemePattern>({ type: 'none' })

  const builtinThemes = themes.filter(
    (t) => !t.name.includes('-') || ['ocean', 'forest', 'sunset', 'midnight', 'candy'].some((n) => t.name === n)
  )

  const handleCustomApply = () => {
    const theme = createTheme({
      name: `custom-${customPrimary}-${customNeutral}`,
      label: `Custom (${customPrimary})`,
      primary: customPrimary,
      neutral: customNeutral,
      radius: customRadius,
      fonts: Object.keys(customFonts).length > 0 ? customFonts : undefined,
      pattern: customPattern.type !== 'none' ? customPattern : undefined,
    })
    onChange(theme)
  }

  const containerStyle: React.CSSProperties = {
    fontFamily: 'system-ui, sans-serif',
    fontSize: 14,
    maxWidth: 480,
  }

  const tabBarStyle: React.CSSProperties = {
    display: 'flex',
    gap: 4,
    marginBottom: 12,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    paddingBottom: 8,
  }

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: '4px 12px',
    border: 'none',
    background: active ? 'rgba(0,0,0,0.08)' : 'transparent',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: active ? 600 : 400,
  })

  return (
    <div className={className} style={containerStyle}>
      {allowCustom && (
        <div style={tabBarStyle}>
          <button style={tabBtnStyle(tab === 'presets')} onClick={() => setTab('presets')}>Presets</button>
          <button style={tabBtnStyle(tab === 'custom')} onClick={() => setTab('custom')}>Custom</button>
        </div>
      )}

      {tab === 'presets' && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {themes.map((t) => (
              <ThemeSwatch
                key={t.name}
                theme={t}
                selected={t.name === value.name}
                onClick={() => onChange(t)}
              />
            ))}
          </div>
        </div>
      )}

      {tab === 'custom' && allowCustom && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sections.includes('colors') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Primary Color</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {TAILWIND_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setCustomPrimary(color)}
                    title={color}
                    style={{
                      width: 28, height: 28,
                      borderRadius: '50%',
                      border: customPrimary === color ? '3px solid black' : '2px solid transparent',
                      background: resolveColor(`${color}-500`),
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  />
                ))}
              </div>
              <h4 style={{ margin: '12px 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Neutral Base</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {NEUTRAL_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setCustomNeutral(color)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: customNeutral === color ? '2px solid black' : '1px solid rgba(0,0,0,0.15)',
                      background: resolveColor(`${color}-100`),
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </section>
          )}

          {sections.includes('fonts') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Fonts</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(['sans', 'serif', 'mono'] as const).map((fontType) => (
                  <label key={fontType} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 40, fontSize: 12, opacity: 0.7 }}>{fontType}</span>
                    <select
                      value={customFonts[fontType] ?? ''}
                      onChange={(e) => setCustomFonts((f) => ({ ...f, [fontType]: e.target.value || undefined }))}
                      style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid rgba(0,0,0,0.15)', fontSize: 12 }}
                    >
                      <option value="">System default</option>
                      {FONT_OPTIONS.map((f) => (
                        <option key={f.value} value={f.value}>{f.label}</option>
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {PATTERN_TYPES.map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setCustomPattern({ type: pt })}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: customPattern.type === pt ? '2px solid black' : '1px solid rgba(0,0,0,0.15)',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: 11,
                    }}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </section>
          )}

          {sections.includes('radius') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Border Radius</h4>
              <div style={{ display: 'flex', gap: 6 }}>
                {RADIUS_PRESETS.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setCustomRadius(r.value)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: r.value === '9999px' ? 9999 : parseInt(r.value) * 8,
                      border: customRadius === r.value ? '2px solid black' : '1px solid rgba(0,0,0,0.15)',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </section>
          )}

          <button
            onClick={handleCustomApply}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: 'none',
              background: 'black',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Apply Custom Theme
          </button>
        </div>
      )}
    </div>
  )
}
