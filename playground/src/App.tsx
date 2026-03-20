import React, { useState } from 'react'
import { ThemeProvider, useTheme } from 'cocuywind/react'
import { ThemePicker } from 'cocuywind/react'
import { themes, builtinThemes, tweakcnThemes, communityThemes, tailwindBasicThemes, generateCSS, themeLabelsEn, themeLabelsEs, themeLabelsPt, generatePattern, FONTS, raw } from 'cocuywind'
import type { Theme, ThemeFonts, ThemePattern, PatternType } from 'cocuywind'
import './styles.css'

const INITIAL_THEME = builtinThemes[0]
const curatedThemes = builtinThemes.filter(t => !tailwindBasicThemes.includes(t))
const allThemes = [...themes, ...communityThemes]

const PATTERN_TYPES: PatternType[] = [
  'none', 'dots', 'grid', 'cross', 'diagonal-lines',
  'horizontal-lines', 'vertical-lines', 'zigzag', 'checkerboard',
  'triangles', 'hexagons', 'noise',
]
const PATTERN_LABELS: Record<PatternType, string> = {
  'none': 'None',
  'dots': 'Dots',
  'grid': 'Grid',
  'cross': 'Cross',
  'diagonal-lines': 'Diagonal',
  'horizontal-lines': 'H-Lines',
  'vertical-lines': 'V-Lines',
  'zigzag': 'Zigzag',
  'checkerboard': 'Checker',
  'triangles': 'Triangles',
  'hexagons': 'Hexagons',
  'noise': 'Noise',
}
const RADIUS_PRESETS = [
  { label: 'None', value: '0rem' }, { label: 'SM', value: '0.25rem' },
  { label: 'MD', value: '0.5rem' }, { label: 'LG', value: '0.75rem' },
  { label: 'XL', value: '1rem' }, { label: 'Full', value: '9999px' },
]
const FONT_OPTIONS = Object.entries(FONTS).map(([key, value]) => ({
  label: key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
  value,
}))

function AccordionSection({ title, count, defaultOpen = true, children }: {
  title: string; count?: number; defaultOpen?: boolean; children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 0', background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'var(--foreground)',
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {title}{count !== undefined ? ` (${count})` : ''}
        </span>
        <span style={{ fontSize: 12, opacity: 0.4, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▾</span>
      </button>
      {open && <div style={{ paddingBottom: 12 }}>{children}</div>}
    </div>
  )
}

function Demo() {
  const { theme, setTheme, mode, setMode } = useTheme()
  const [locale, setLocale] = useState<'en' | 'es' | 'pt'>('en')

  // Style state — independent of palette
  const [styleFonts, setStyleFonts] = useState<ThemeFonts>({})
  const [stylePattern, setStylePattern] = useState<ThemePattern>({ type: 'none' })
  const [styleRadius, setStyleRadius] = useState('0.5rem')
  const [styleBgImage, setStyleBgImage] = useState('')
  const [bgImageInput, setBgImageInput] = useState('')

  const chip = (active: boolean): React.CSSProperties => ({
    padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12,
    color: 'var(--foreground)',
    border: active ? '2px solid var(--foreground)' : '1px solid var(--border)',
    background: active ? 'var(--accent)' : 'transparent',
  })

  // Called by each catalog's ThemePicker — merges palette with current style overrides
  const applyPalette = (palette: Theme) => {
    setTheme({
      ...palette,
      radius: styleRadius,
      fonts: Object.keys(styleFonts).length > 0 ? styleFonts : undefined,
      pattern: stylePattern.type !== 'none' ? stylePattern : undefined,
      backgroundImage: styleBgImage || undefined,
    })
  }

  const applyStyle = (fonts: ThemeFonts, pattern: ThemePattern, radius: string, bgImage?: string) => {
    setStyleFonts(fonts)
    setStylePattern(pattern)
    setStyleRadius(radius)
    if (bgImage !== undefined) setStyleBgImage(bgImage)
    setTheme({
      ...theme,
      fonts: Object.keys(fonts).length > 0 ? fonts : undefined,
      pattern: pattern.type !== 'none' ? pattern : undefined,
      radius,
      backgroundImage: (bgImage ?? styleBgImage) || undefined,
    })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)', backgroundImage: 'var(--pattern-image, none), var(--bg-image, none)', backgroundSize: 'var(--pattern-size, auto), cover', backgroundPosition: 'var(--pattern-position, center), center', color: 'var(--foreground)', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      {/* Header */}
      <div style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary-foreground)' }}>Cocuywind Playground</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['en', 'es', 'pt'] as const).map(l => (
            <button key={l} onClick={() => setLocale(l)} style={{
              padding: '4px 10px', borderRadius: 6,
              border: locale === l ? '2px solid var(--primary-foreground)' : '1px solid color-mix(in oklch, var(--primary-foreground) 40%, transparent)',
              background: locale === l ? 'color-mix(in oklch, var(--primary-foreground) 20%, transparent)' : 'transparent',
              color: 'var(--primary-foreground)',
              cursor: 'pointer', fontSize: 12,
            }}>{l.toUpperCase()}</button>
          ))}
          {(['light', 'dark', 'system'] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              padding: '4px 12px', borderRadius: 6,
              border: mode === m ? '2px solid var(--primary-foreground)' : '1px solid color-mix(in oklch, var(--primary-foreground) 40%, transparent)',
              background: mode === m ? 'color-mix(in oklch, var(--primary-foreground) 20%, transparent)' : 'transparent',
              color: 'var(--primary-foreground)',
              cursor: 'pointer', fontSize: 13,
            }}>{m.charAt(0).toUpperCase() + m.slice(1)}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: 'calc(100vh - 57px)' }}>
        {/* Sidebar */}
        <div style={{ borderRight: '1px solid var(--border)', padding: '0 20px', overflowY: 'auto', background: 'var(--card)' }}>

          {/* Style section — fonts, pattern, radius — placed above palette sections */}
          <AccordionSection title="Style" defaultOpen>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Fonts */}
              <section>
                <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Fonts</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(['body', 'heading'] as const).map(fontType => (
                    <label key={fontType} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 52, fontSize: 12, opacity: 0.7 }}>{fontType}</span>
                      <select
                        value={styleFonts[fontType] ?? ''}
                        onChange={e => {
                          const updated = { ...styleFonts, [fontType]: e.target.value || undefined }
                          applyStyle(updated, stylePattern, styleRadius)
                        }}
                        style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 12 }}
                      >
                        <option value="">{fontType === 'heading' ? 'Same as body' : 'System default'}</option>
                        {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                      </select>
                    </label>
                  ))}
                </div>
              </section>

              {/* Pattern */}
              <section>
                <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Pattern</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {PATTERN_TYPES.map(pt => {
                    const active = stylePattern.type === pt
                    const previewColor = stylePattern.tint === 'primary'
                      ? raw('var(--primary)')
                      : stylePattern.tint === 'secondary'
                        ? raw('var(--secondary)')
                        : stylePattern.tint === 'accent'
                          ? raw('var(--accent)')
                          : undefined
                    const previewOpacity = stylePattern.tint === 'accent'
                      ? (stylePattern.opacity ?? 0.08) * 2.0
                      : stylePattern.tint === 'secondary'
                        ? (stylePattern.opacity ?? 0.08) * 1.4
                      : stylePattern.opacity
                    const ps = pt !== 'none'
                      ? generatePattern({ type: pt, opacity: previewOpacity ?? 0.18, size: 'sm', color: previewColor })
                      : null
                    return (
                      <button
                        key={pt}
                        onClick={() => {
                          const updated: ThemePattern = { ...stylePattern, type: pt }
                          applyStyle(styleFonts, updated, styleRadius)
                        }}
                        title={PATTERN_LABELS[pt]}
                        style={{
                          width: 44, height: 44, borderRadius: 8, cursor: 'pointer', padding: 0,
                          border: active ? '2px solid var(--foreground)' : '1px solid var(--border)',
                          backgroundColor: 'var(--background)',
                          backgroundImage: ps?.backgroundImage ?? 'none',
                          backgroundSize: ps?.backgroundSize ?? 'auto',
                          backgroundPosition: ps?.backgroundPosition ?? 'center',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexDirection: 'column', gap: 2, overflow: 'hidden',
                          outline: active ? '2px solid var(--ring)' : 'none',
                          outlineOffset: 1,
                        }}
                      >
                        {pt === 'none' && (
                          <span style={{ fontSize: 9, opacity: 0.5, color: 'var(--foreground)', pointerEvents: 'none' }}>none</span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.5 }}>
                  {stylePattern.type === 'none' ? 'No pattern — solid background' : PATTERN_LABELS[stylePattern.type]}
                </p>
                {stylePattern.type !== 'none' && (
                  <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                    <button
                      onClick={() => applyStyle(styleFonts, { ...stylePattern, tint: undefined }, styleRadius)}
                      style={chip(!stylePattern.tint)}
                    >
                      Foreground
                    </button>
                    <button
                      onClick={() => applyStyle(styleFonts, { ...stylePattern, tint: 'primary' }, styleRadius)}
                      style={chip(stylePattern.tint === 'primary')}
                    >
                      Primary
                    </button>
                    <button
                      onClick={() => applyStyle(styleFonts, { ...stylePattern, tint: 'secondary' }, styleRadius)}
                      style={chip(stylePattern.tint === 'secondary')}
                    >
                      Secondary
                    </button>
                    <button
                      onClick={() => applyStyle(styleFonts, { ...stylePattern, tint: 'accent' }, styleRadius)}
                      style={chip(stylePattern.tint === 'accent')}
                    >
                      Accent
                    </button>
                  </div>
                )}
              </section>

              {/* Radius */}
              <section>
                <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Border Radius</h4>
                <div style={{ display: 'flex', gap: 6 }}>
                  {RADIUS_PRESETS.map(r => (
                    <button key={r.value} onClick={() => applyStyle(styleFonts, stylePattern, r.value)} style={chip(styleRadius === r.value)}>{r.label}</button>
                  ))}
                </div>
              </section>

              {/* Background image */}
              <section>
                <h4 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, opacity: 0.7 }}>Background Image</h4>
                <p style={{ margin: '0 0 8px', fontSize: 11, opacity: 0.5 }}>
                  Paste an image URL — cocuywind stores it, your app handles the upload.
                </p>
                <div style={{ display: 'flex', gap: 6 }}>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    value={bgImageInput}
                    onChange={e => setBgImageInput(e.target.value)}
                    style={{ flex: 1, padding: '5px 8px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 12 }}
                  />
                  <button
                    onClick={() => {
                      const val = bgImageInput.trim() ? `url('${bgImageInput.trim()}')` : ''
                      applyStyle(styleFonts, stylePattern, styleRadius, val)
                    }}
                    style={{ ...chip(false), whiteSpace: 'nowrap' }}
                  >Apply</button>
                  {styleBgImage && (
                    <button
                      onClick={() => { setBgImageInput(''); applyStyle(styleFonts, stylePattern, styleRadius, '') }}
                      style={{ ...chip(false), opacity: 0.6 }}
                    >✕</button>
                  )}
                </div>
                {styleBgImage && (
                  <p style={{ margin: '4px 0 0', fontSize: 11, opacity: 0.5 }}>
                    Active — pattern overlays on top
                  </p>
                )}
              </section>
            </div>
          </AccordionSection>

          {/* Palette section */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
            <div style={{ padding: '0 0 12px', fontSize: 11, fontWeight: 600, opacity: 0.5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Palette
            </div>
            <AccordionSection title="Built-in" count={curatedThemes.length} defaultOpen>
              <ThemePicker
                themes={curatedThemes}
                value={theme}
                onChange={applyPalette}
                locale={locale}
                labels={{ en: themeLabelsEn, es: themeLabelsEs, pt: themeLabelsPt }}
                allowCustom
              />
            </AccordionSection>
            <AccordionSection title="Basic" count={tailwindBasicThemes.length} defaultOpen={false}>
              <ThemePicker
                themes={tailwindBasicThemes}
                value={theme}
                onChange={applyPalette}
                locale={locale}
                labels={{ en: themeLabelsEn, es: themeLabelsEs, pt: themeLabelsPt }}
              />
            </AccordionSection>
            <AccordionSection title="TweakCN" count={tweakcnThemes.length} defaultOpen={false}>
              <ThemePicker
                themes={tweakcnThemes}
                value={theme}
                onChange={applyPalette}
                locale={locale}
                labels={{ en: themeLabelsEn, es: themeLabelsEs, pt: themeLabelsPt }}
              />
            </AccordionSection>
            <AccordionSection title="Community" count={communityThemes.length} defaultOpen={false}>
              <ThemePicker
                themes={communityThemes}
                value={theme}
                onChange={applyPalette}
                locale={locale}
                labels={{ en: themeLabelsEn, es: themeLabelsEs, pt: themeLabelsPt }}
              />
            </AccordionSection>
          </div>
        </div>

        {/* Main — preview */}
        <div style={{ padding: 32, overflowY: 'auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{theme.label}</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: 32, fontSize: 14 }}>Live preview of the selected theme.</p>

          {/* Color swatches */}
          <section style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Color tokens</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
              {[
                ['Background', 'var(--background)', 'var(--foreground)'],
                ['Card', 'var(--card)', 'var(--card-foreground)'],
                ['Primary', 'var(--primary)', 'var(--primary-foreground)'],
                ['Secondary', 'var(--secondary)', 'var(--secondary-foreground)'],
                ['Muted', 'var(--muted)', 'var(--muted-foreground)'],
                ['Accent', 'var(--accent)', 'var(--accent-foreground)'],
                ['Destructive', 'var(--destructive)', 'var(--destructive-foreground)'],
              ].map(([name, bg, fg]) => (
                <div key={name} style={{ background: bg, color: fg, padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>{name}</div>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Sample text</div>
                </div>
              ))}
            </div>
          </section>

          {/* UI elements */}
          <section style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Elements</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              <button style={{ padding: '8px 20px', borderRadius: 'var(--radius)', background: 'var(--primary)', color: 'var(--primary-foreground)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>Primary</button>
              <button style={{ padding: '8px 20px', borderRadius: 'var(--radius)', background: 'var(--secondary)', color: 'var(--secondary-foreground)', border: 'none', cursor: 'pointer', fontSize: 14 }}>Secondary</button>
              <button style={{ padding: '8px 20px', borderRadius: 'var(--radius)', background: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: 14 }}>Outline</button>
              <button style={{ padding: '8px 20px', borderRadius: 'var(--radius)', background: 'var(--destructive)', color: 'var(--destructive-foreground)', border: 'none', cursor: 'pointer', fontSize: 14 }}>Destructive</button>
              <input placeholder="Input field" style={{ padding: '8px 12px', borderRadius: 'var(--radius)', border: '1px solid var(--input)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 14, outline: 'none' }} />
            </div>
          </section>

          {/* Card sample */}
          <section style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Card</h3>
            <div style={{ background: 'var(--card)', color: 'var(--card-foreground)', border: '1px solid var(--border)', borderRadius: 12, padding: 20, maxWidth: 400 }}>
              <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Card title</h4>
              <p style={{ color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.5 }}>Sample card showing how content looks with the selected theme.</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                <button style={{ padding: '6px 14px', borderRadius: 'var(--radius)', background: 'var(--primary)', color: 'var(--primary-foreground)', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Confirm</button>
                <button style={{ padding: '6px 14px', borderRadius: 'var(--radius)', background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: 13 }}>Cancel</button>
              </div>
            </div>
          </section>

          {/* Generated CSS */}
          <section>
            <h3 style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Generated CSS</h3>
            <pre style={{ background: 'var(--muted)', color: 'var(--muted-foreground)', padding: 16, borderRadius: 8, fontSize: 11, lineHeight: 1.6, overflow: 'auto', maxHeight: 300, border: '1px solid var(--border)' }}>
              {generateCSS(theme)}
            </pre>
          </section>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider themes={allThemes} defaultTheme={INITIAL_THEME} defaultMode="light">
      <Demo />
    </ThemeProvider>
  )
}
