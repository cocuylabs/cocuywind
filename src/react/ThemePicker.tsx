import React, { useState, useEffect } from 'react'
import type { Theme, TailwindColor, ThemeFonts, ThemePattern, PatternType } from '../types.js'
import { createTheme } from '../factory.js'
import { FONTS } from '../fonts.js'
import { resolveColor } from '../colors.js'

export type ThemePickerSection = 'colors' | 'fonts' | 'patterns' | 'radius'

export interface ThemePickerProps {
  themes: Theme[]
  value: Theme
  onChange: (theme: Theme) => void
  allowCustom?: boolean
  sections?: ThemePickerSection[]
  className?: string
  locale?: 'en' | 'es' | 'pt'
  labels?: Record<string, Record<string, string>>
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
  'horizontal-lines', 'vertical-lines', 'zigzag', 'checkerboard', 'triangles',
]
const RADIUS_PRESETS = [
  { label: 'None', value: '0rem' }, { label: 'SM', value: '0.25rem' },
  { label: 'MD',   value: '0.5rem' }, { label: 'LG', value: '0.75rem' },
  { label: 'XL',   value: '1rem' },  { label: 'Full', value: '9999px' },
]
const FONT_OPTIONS = Object.entries(FONTS).map(([key, value]) => ({
  label: key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
  value,
}))

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
      display: 'flex', alignItems: 'center', gap: 3, padding: '6px 10px',
      borderRadius: 8, border: selected ? '2px solid currentColor' : '2px solid transparent',
      background: 'transparent', cursor: 'pointer', outline: 'none', color: 'var(--foreground)',
    }}>
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: bg, border: '1px solid var(--border)', display: 'inline-block' }} />
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: pri, display: 'inline-block' }} />
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: sec, display: 'inline-block' }} />
      <span style={{ marginLeft: 4, fontSize: 12 }}>{label}</span>
    </button>
  )
}

export function ThemePicker({ themes, value, onChange, allowCustom = false, sections = ['colors', 'fonts', 'patterns', 'radius'], className, locale = 'en', labels }: ThemePickerProps) {
  const [tab, setTab] = useState<'presets' | 'custom'>('presets')
  const [customPrimary, setCustomPrimary] = useState<TailwindColor>('blue')
  const [customSecondary, setCustomSecondary] = useState<TailwindColor | null>(null)
  const [customNeutral, setCustomNeutral] = useState<TailwindColor | null>(null)
  const [customRadius, setCustomRadius] = useState('0.5rem')
  const [customFonts, setCustomFonts] = useState<ThemeFonts>({})
  const [customPattern, setCustomPattern] = useState<ThemePattern>({ type: 'none' })

  const buildCustomTheme = (
    primary: TailwindColor,
    secondary: TailwindColor | null,
    neutral: TailwindColor | null,
    radius: string,
    fonts: ThemeFonts,
    pattern: ThemePattern,
  ) => createTheme({
    name: `custom-${primary}${neutral ? `-${neutral}` : ''}${secondary ? `-${secondary}` : ''}`,
    label: `Custom (${primary})`,
    primary,
    neutral:   neutral   ?? undefined,
    secondary: secondary ?? undefined,
    radius,
    fonts: Object.keys(fonts).length > 0 ? fonts : undefined,
    pattern: pattern.type !== 'none' ? pattern : undefined,
  })

  useEffect(() => {
    if (tab === 'custom') {
      onChange(buildCustomTheme(customPrimary, customSecondary, customNeutral, customRadius, customFonts, customPattern))
    }
  }, [tab, customPrimary, customSecondary, customNeutral, customRadius, customFonts, customPattern])

  const btn = (active: boolean): React.CSSProperties => ({
    padding: '4px 12px', border: 'none', background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-foreground)' : 'var(--foreground)',
    borderRadius: 6, cursor: 'pointer', fontWeight: active ? 600 : 400,
  })
  const chip = (active: boolean): React.CSSProperties => ({
    padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12,
    color: 'var(--foreground)',
    border: active ? '2px solid var(--foreground)' : '1px solid var(--border)',
    background: active ? 'var(--accent)' : 'transparent',
  })

  return (
    <div className={className} style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: 'var(--foreground)' }}>
      {allowCustom && (
        <div style={{ display: 'flex', gap: 4, marginBottom: 12, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
          <button style={btn(tab === 'presets')} onClick={() => setTab('presets')}>Presets</button>
          <button style={btn(tab === 'custom')}  onClick={() => setTab('custom')}>Custom</button>
        </div>
      )}

      {tab === 'presets' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {themes.map(t => (
            <ThemeSwatch
              key={t.name}
              theme={t}
              selected={t.name === value.name}
              onClick={() => onChange(t)}
              labelOverride={labels?.[locale]?.[t.name]}
            />
          ))}
        </div>
      )}

      {tab === 'custom' && allowCustom && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sections.includes('colors') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Primary Color</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {TAILWIND_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomPrimary(color)} title={color} style={{
                    width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                    background: resolveColor(`${color}-500`),
                    border: customPrimary === color ? '3px solid var(--foreground)' : '2px solid transparent',
                  }} />
                ))}
              </div>
              <h4 style={{ margin: '12px 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Secondary Color</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <button onClick={() => setCustomSecondary(null)} title="Auto (same as primary)" style={{
                  width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                  background: `conic-gradient(${TAILWIND_COLORS.slice(5, 10).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
                  border: customSecondary === null ? '3px solid var(--foreground)' : '2px solid transparent',
                }} />
                {TAILWIND_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomSecondary(color)} title={color} style={{
                    width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', outline: 'none',
                    background: resolveColor(`${color}-500`),
                    border: customSecondary === color ? '3px solid var(--foreground)' : '2px solid transparent',
                  }} />
                ))}
              </div>
              {customSecondary === null && (
                <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.5 }}>Auto — derived from primary</p>
              )}
              <h4 style={{ margin: '12px 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Neutral Base</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <button onClick={() => setCustomNeutral(null)} style={chip(customNeutral === null)}>none</button>
                {NEUTRAL_COLORS.map(color => (
                  <button key={color} onClick={() => setCustomNeutral(color)} style={chip(customNeutral === color)}>{color}</button>
                ))}
              </div>
              <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.5 }}>
                {customNeutral === null
                  ? 'None — backgrounds use the primary color family'
                  : `${customNeutral} — overrides backgrounds and surfaces`}
              </p>
            </section>
          )}
          {sections.includes('fonts') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Fonts</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(['body', 'heading'] as const).map(fontType => (
                  <label key={fontType} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 52, fontSize: 12, opacity: 0.7 }}>{fontType}</span>
                    <select value={customFonts[fontType] ?? ''} onChange={e => setCustomFonts(f => ({ ...f, [fontType]: e.target.value || undefined }))}
                      style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 12 }}>
                      <option value="">{fontType === 'heading' ? 'Same as body' : 'System default'}</option>
                      {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
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
                {PATTERN_TYPES.map(pt => (
                  <button key={pt} onClick={() => setCustomPattern({ type: pt })} style={chip(customPattern.type === pt)}>{pt}</button>
                ))}
              </div>
            </section>
          )}
          {sections.includes('radius') && (
            <section>
              <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Border Radius</h4>
              <div style={{ display: 'flex', gap: 6 }}>
                {RADIUS_PRESETS.map(r => (
                  <button key={r.value} onClick={() => setCustomRadius(r.value)} style={chip(customRadius === r.value)}>{r.label}</button>
                ))}
              </div>
            </section>
          )}

        </div>
      )}
    </div>
  )
}
