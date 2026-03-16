import React, { useState } from 'react'
import { ThemeProvider, useTheme } from 'tailtheme/react'
import { ThemePicker } from 'tailtheme/react'
import { themes, builtinThemes, tweakcnThemes, communityThemes, tailwindBasicThemes, generateCSS, themeLabelsEs, themeLabelsPt } from 'tailtheme'
import './styles.css'

const INITIAL_THEME = builtinThemes[0]
const curatedThemes = builtinThemes.filter(t => !tailwindBasicThemes.includes(t))
const allThemes = [...themes, ...communityThemes]

function AccordionSection({ title, count, defaultOpen = true, children }: {
  title: string; count: number; defaultOpen?: boolean; children: React.ReactNode
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
          {title} ({count})
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

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700 }}>tailtheme playground</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['en', 'es', 'pt'] as const).map(l => (
            <button key={l} onClick={() => setLocale(l)} style={{
              padding: '4px 10px', borderRadius: 6, border: '1px solid var(--border)',
              background: locale === l ? 'var(--primary)' : 'var(--card)',
              color: locale === l ? 'var(--primary-foreground)' : 'var(--foreground)',
              cursor: 'pointer', fontSize: 12,
            }}>{l}</button>
          ))}
          {(['light', 'dark', 'system'] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              padding: '4px 12px', borderRadius: 6, border: '1px solid var(--border)',
              background: mode === m ? 'var(--primary)' : 'var(--card)',
              color: mode === m ? 'var(--primary-foreground)' : 'var(--foreground)',
              cursor: 'pointer', fontSize: 13,
            }}>{m}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: 'calc(100vh - 57px)' }}>
        {/* Sidebar — ThemePicker */}
        <div style={{ borderRight: '1px solid var(--border)', padding: '0 20px', overflowY: 'auto', background: 'var(--card)' }}>
          <AccordionSection title="Built-in" count={curatedThemes.length} defaultOpen>
            <ThemePicker
              themes={curatedThemes}
              value={theme}
              onChange={setTheme}
              locale={locale}
              labels={{ es: themeLabelsEs, pt: themeLabelsPt }}
              allowCustom
              sections={['colors', 'fonts', 'patterns', 'radius']}
            />
          </AccordionSection>

          <AccordionSection title="Basic" count={tailwindBasicThemes.length} defaultOpen={false}>
            <ThemePicker
              themes={tailwindBasicThemes}
              value={theme}
              onChange={setTheme}
              locale={locale}
              labels={{ es: themeLabelsEs, pt: themeLabelsPt }}
            />
          </AccordionSection>

          <AccordionSection title="TweakCN" count={tweakcnThemes.length} defaultOpen={false}>
            <ThemePicker
              themes={tweakcnThemes}
              value={theme}
              onChange={setTheme}
              locale={locale}
              labels={{ es: themeLabelsEs, pt: themeLabelsPt }}
            />
          </AccordionSection>

          <AccordionSection title="Community" count={communityThemes.length} defaultOpen={false}>
            <ThemePicker
              themes={communityThemes}
              value={theme}
              onChange={setTheme}
              locale={locale}
              labels={{ es: themeLabelsEs, pt: themeLabelsPt }}
            />
          </AccordionSection>
        </div>

        {/* Main — preview */}
        <div style={{ padding: 32, overflowY: 'auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{theme.label}</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: 32, fontSize: 14 }}>Live preview of the selected theme</p>

          {/* Color swatches */}
          <section style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 11, fontWeight: 600, opacity: 0.5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Color tokens</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
              {[
                ['background', 'var(--background)', 'var(--foreground)'],
                ['card', 'var(--card)', 'var(--card-foreground)'],
                ['primary', 'var(--primary)', 'var(--primary-foreground)'],
                ['secondary', 'var(--secondary)', 'var(--secondary-foreground)'],
                ['muted', 'var(--muted)', 'var(--muted-foreground)'],
                ['accent', 'var(--accent)', 'var(--accent-foreground)'],
                ['destructive', 'var(--destructive)', 'var(--destructive-foreground)'],
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
