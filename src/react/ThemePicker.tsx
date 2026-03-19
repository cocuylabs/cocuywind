import React, { useState, useEffect } from 'react'
import type { Theme, TailwindColor, ThemeFonts, ThemePattern, PatternType, ThemeTokens, StoredTheme } from '../types.js'
import { createTheme } from '../factory.js'
import { FONTS } from '../fonts.js'
import { resolveColor } from '../colors.js'
import { generatePattern } from '../patterns.js'
import { Button } from './ui/button.js'
import { Input } from './ui/input.js'
import { Label } from './ui/label.js'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select.js'
import { cn } from './ui/utils.js'

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
  /** Size (px) of the three palette dots in each swatch row */
  paletteSwatchSize?: number
  /** Show the preset palette grid */
  showPalette?: boolean
  /** Show the custom palette controls */
  showCustomPalette?: boolean
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
      { label: 'Inter',             value: FONTS.INTER },
      { label: 'Geist',             value: FONTS.GEIST },
      { label: 'Plus Jakarta Sans', value: FONTS.PLUS_JAKARTA },
      { label: 'Space Grotesk',     value: FONTS.SPACE_GROTESK },
      { label: 'Josefin Sans',      value: FONTS.JOSEFIN_SANS },
      { label: 'Raleway',           value: FONTS.RALEWAY },
      { label: 'Nunito',            value: FONTS.NUNITO },
      { label: 'Poppins',           value: FONTS.POPPINS },
      { label: 'Outfit',            value: FONTS.OUTFIT },
      { label: 'DM Sans',           value: FONTS.DM_SANS },
      { label: 'Manrope',           value: FONTS.MANROPE },
    ],
  },
  {
    label: 'Serif',
    options: [
      { label: 'Cormorant Garamond', value: FONTS.CORMORANT },
      { label: 'Bodoni Moda',        value: FONTS.BODONI_MODA },
      { label: 'Cinzel',             value: FONTS.CINZEL },
      { label: 'Fraunces',           value: FONTS.FRAUNCES },
      { label: 'Instrument Serif',   value: FONTS.INSTRUMENT_SERIF },
      { label: 'Playfair Display',   value: FONTS.PLAYFAIR },
      { label: 'Lora',               value: FONTS.LORA },
      { label: 'Merriweather',       value: FONTS.MERRIWEATHER },
      { label: 'DM Serif Display',   value: FONTS.DM_SERIF },
    ],
  },
  {
    label: 'Display',
    options: [
      { label: 'Bebas Neue',    value: FONTS.BEBAS_NEUE },
      { label: 'Syne',          value: FONTS.SYNE },
      { label: 'Unbounded',     value: FONTS.UNBOUNDED },
      { label: 'Archivo Black', value: FONTS.ARCHIVO_BLACK },
      { label: 'Righteous',     value: FONTS.RIGHTEOUS },
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

const DEFAULT_LABELS: Record<'en' | 'es' | 'pt', Record<string, string>> = {
  en: {
    'ui.primary': 'Primary',
    'ui.secondary': 'Secondary',
    'ui.neutralBase': 'Neutral base',
    'ui.auto': 'Auto',
    'ui.usingPreset': 'Using preset',
    'ui.autoFromPrimary': 'Auto from primary',
    'ui.primaryFamily': 'Primary family',
    'ui.surfacesSuffix': 'surfaces',
    'ui.pattern': 'Pattern',
    'ui.pattern.none': 'No pattern',
    'ui.pattern.size': 'Size',
    'ui.pattern.density': 'Density',
    'ui.backgroundImage': 'Background Image',
    'ui.backgroundPlaceholder': "https://… or url('…') or gradient CSS",
    'ui.clear': 'Clear',
    'ui.patternOverlayHint': 'Pattern always overlays on top of background image.',
    'ui.overrideOnPreset': 'overrides on preset',
    'ui.font.body': 'body',
    'ui.font.heading': 'heading',
    'ui.font.sameAsBody': 'Same as body',
    'ui.font.systemDefault': 'System default',
    'ui.font.systemDefaultSans': 'System default (sans-serif)',
    'ui.font.systemSerif': 'System serif',
    'ui.size.sm': 'SM',
    'ui.size.md': 'MD',
    'ui.size.lg': 'LG',
    'ui.opacity.subtle': 'Subtle',
    'ui.opacity.normal': 'Normal',
    'ui.opacity.bold': 'Bold',
    'ui.neutral.none': 'none',
  },
  es: {
    'ui.primary': 'Primario',
    'ui.secondary': 'Secundario',
    'ui.neutralBase': 'Base neutral',
    'ui.auto': 'Auto',
    'ui.usingPreset': 'Usando preset',
    'ui.autoFromPrimary': 'Auto desde primario',
    'ui.primaryFamily': 'Familia primaria',
    'ui.surfacesSuffix': 'superficies',
    'ui.pattern': 'Patrón',
    'ui.pattern.none': 'Sin patrón',
    'ui.pattern.size': 'Tamaño',
    'ui.pattern.density': 'Densidad',
    'ui.backgroundImage': 'Imagen de fondo',
    'ui.backgroundPlaceholder': "https://… o url('…') o CSS de gradiente",
    'ui.clear': 'Borrar',
    'ui.patternOverlayHint': 'El patrón siempre se superpone a la imagen de fondo.',
    'ui.overrideOnPreset': 'sobrescribe el preset',
    'ui.font.body': 'cuerpo',
    'ui.font.heading': 'títulos',
    'ui.font.sameAsBody': 'Igual que cuerpo',
    'ui.font.systemDefault': 'Sistema por defecto',
    'ui.font.systemDefaultSans': 'Sistema por defecto (sans-serif)',
    'ui.font.systemSerif': 'Sistema serif',
    'ui.size.sm': 'SM',
    'ui.size.md': 'MD',
    'ui.size.lg': 'LG',
    'ui.opacity.subtle': 'Sutil',
    'ui.opacity.normal': 'Normal',
    'ui.opacity.bold': 'Fuerte',
    'ui.neutral.none': 'ninguno',
  },
  pt: {
    'ui.primary': 'Primário',
    'ui.secondary': 'Secundário',
    'ui.neutralBase': 'Base neutra',
    'ui.auto': 'Auto',
    'ui.usingPreset': 'Usando preset',
    'ui.autoFromPrimary': 'Auto do primário',
    'ui.primaryFamily': 'Família primária',
    'ui.surfacesSuffix': 'superfícies',
    'ui.pattern': 'Padrão',
    'ui.pattern.none': 'Sem padrão',
    'ui.pattern.size': 'Tamanho',
    'ui.pattern.density': 'Densidade',
    'ui.backgroundImage': 'Imagem de fundo',
    'ui.backgroundPlaceholder': "https://… ou url('…') ou CSS de gradiente",
    'ui.clear': 'Limpar',
    'ui.patternOverlayHint': 'O padrão sempre sobrepõe a imagem de fundo.',
    'ui.overrideOnPreset': 'sobrescreve o preset',
    'ui.font.body': 'corpo',
    'ui.font.heading': 'títulos',
    'ui.font.sameAsBody': 'Igual ao corpo',
    'ui.font.systemDefault': 'Sistema padrão',
    'ui.font.systemDefaultSans': 'Sistema padrão (sans-serif)',
    'ui.font.systemSerif': 'Sistema serif',
    'ui.size.sm': 'SM',
    'ui.size.md': 'MD',
    'ui.size.lg': 'LG',
    'ui.opacity.subtle': 'Suave',
    'ui.opacity.normal': 'Normal',
    'ui.opacity.bold': 'Forte',
    'ui.neutral.none': 'nenhum',
  },
}

function translate(labels: ThemePickerProps['labels'], locale: string | undefined, key: string, fallback: string): string {
  const lang = (locale === 'es' || locale === 'pt' || locale === 'en') ? locale : 'en'
  return labels?.[lang]?.[key] ?? DEFAULT_LABELS[lang][key] ?? fallback
}

function getSwatchColors(theme: Theme, mode: 'light' | 'dark' = 'light'): [string, string, string] {
  const t = mode === 'dark' ? theme.dark : theme.light
  return [resolveColor(t.background), resolveColor(t.primary), resolveColor(t.secondary)]
}

function ThemeSwatch({ theme, selected, onClick, previewMode = 'light', labelOverride, swatchSize = 14 }: {
  theme: Theme; selected: boolean; onClick: () => void; previewMode?: 'light' | 'dark'; labelOverride?: string; swatchSize?: number
}) {
  const [bg, pri, sec] = getSwatchColors(theme, previewMode)
  const label = labelOverride ?? theme.label
  return (
    <button
      onClick={onClick}
      title={label}
      className={cn(
        'flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition-colors',
        selected ? 'border-ring bg-accent text-accent-foreground' : 'border-border hover:bg-muted/50'
      )}
    >
      <span className="flex shrink-0 gap-1.5">
        <span
          className="inline-block rounded-full border border-border"
          style={{ backgroundColor: bg, width: swatchSize, height: swatchSize }}
        />
        <span
          className="inline-block rounded-full"
          style={{ backgroundColor: pri, width: swatchSize, height: swatchSize }}
        />
        <span
          className="inline-block rounded-full"
          style={{ backgroundColor: sec, width: swatchSize, height: swatchSize }}
        />
      </span>
      <span className="truncate">{label}</span>
    </button>
  )
}

export interface ThemePalettePickerProps {
  themes: Theme[]
  value: string | null
  onChange: (name: string) => void
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
  paletteMaxHeight?: string | number
  previewMode?: 'light' | 'dark'
  className?: string
  swatchSize?: number
}

export function ThemePalettePicker({
  themes,
  value,
  onChange,
  labels,
  locale = 'en',
  paletteMaxHeight,
  previewMode = 'light',
  className,
  swatchSize,
}: ThemePalettePickerProps) {
  if (themes.length === 0) return null
  const lang = (locale === 'es' || locale === 'pt' || locale === 'en') ? locale : 'en'
  return (
    <div className={className} style={paletteMaxHeight ? { maxHeight: paletteMaxHeight, overflowY: 'auto' } : undefined}>
      <div className="grid grid-cols-2 gap-2">
        {themes.map(t => (
          <ThemeSwatch
            key={t.name}
            theme={t}
            selected={t.name === value}
            onClick={() => onChange(t.name)}
            labelOverride={labels?.[lang]?.[t.name]}
            previewMode={previewMode}
            swatchSize={swatchSize}
          />
        ))}
      </div>
    </div>
  )
}

export interface ThemeCustomPalettePickerProps {
  hasPreset: boolean
  primary: TailwindColor | null
  secondary: TailwindColor | null
  neutral: TailwindColor | 'none' | null
  onPrimaryChange: (value: TailwindColor | null) => void
  onSecondaryChange: (value: TailwindColor | null) => void
  onNeutralChange: (value: TailwindColor | 'none' | null) => void
  className?: string
  title?: string
  subtitle?: string
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
}

export function ThemeCustomPalettePicker({
  hasPreset,
  primary,
  secondary,
  neutral,
  onPrimaryChange,
  onSecondaryChange,
  onNeutralChange,
  className,
  title,
  subtitle,
  labels,
  locale = 'en',
}: ThemeCustomPalettePickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-baseline gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{title}</span>
        {subtitle && <span className="text-[11px] text-muted-foreground/70">{subtitle}</span>}
      </div>

      <section className="space-y-2">
        <h4 className="text-xs font-semibold text-muted-foreground">{t('ui.primary', 'Primary')}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset && (
            <Button variant={primary === null ? 'secondary' : 'outline'} size="xs" onClick={() => onPrimaryChange(null)}>
              {t('ui.auto', 'Auto')}
            </Button>
          )}
          {TAILWIND_COLORS.map(color => (
            <button
              key={color}
              onClick={() => onPrimaryChange(color)}
              title={color}
              className={cn(
                'h-6 w-6 rounded-full border transition-colors',
                primary === color ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{ backgroundColor: resolveColor(`${color}-500`) }}
            />
          ))}
        </div>
        {primary === null && hasPreset && (
          <p className="text-[11px] text-muted-foreground">{t('ui.usingPreset', 'Using preset')}</p>
        )}
      </section>

      <section className="space-y-2">
        <h4 className="text-xs font-semibold text-muted-foreground">{t('ui.secondary', 'Secondary')}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset ? (
            <Button variant={secondary === null ? 'secondary' : 'outline'} size="xs" onClick={() => onSecondaryChange(null)}>
              {t('ui.auto', 'Auto')}
            </Button>
          ) : (
            <button
              onClick={() => onSecondaryChange(null)}
              title="Auto (derived from primary)"
              className={cn(
                'h-6 w-6 rounded-full border transition-colors',
                secondary === null ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{
                backgroundImage: `conic-gradient(${TAILWIND_COLORS.slice(5, 10).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
              }}
            />
          )}
          {TAILWIND_COLORS.map(color => (
            <button
              key={color}
              onClick={() => onSecondaryChange(color)}
              title={color}
              className={cn(
                'h-6 w-6 rounded-full border transition-colors',
                secondary === color ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{ backgroundColor: resolveColor(`${color}-500`) }}
            />
          ))}
        </div>
        {secondary === null && (
          <p className="text-[11px] text-muted-foreground">
            {hasPreset ? t('ui.usingPreset', 'Using preset') : t('ui.autoFromPrimary', 'Auto from primary')}
          </p>
        )}
      </section>

      <section className="space-y-2">
        <h4 className="text-xs font-semibold text-muted-foreground">{t('ui.neutralBase', 'Neutral base')}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset
            ? (
              <Button variant={neutral === null ? 'secondary' : 'outline'} size="xs" onClick={() => onNeutralChange(null)}>
                {t('ui.auto', 'Auto')}
              </Button>
            ) : (
              <Button
                variant={(neutral === null || neutral === 'none') ? 'secondary' : 'outline'}
                size="xs"
                onClick={() => onNeutralChange('none')}
              >
                {t('ui.neutral.none', 'none')}
              </Button>
            )
          }
          {NEUTRAL_COLORS.map(color => (
            <Button
              key={color}
              variant={neutral === color ? 'secondary' : 'outline'}
              size="xs"
              onClick={() => onNeutralChange(color)}
            >
              {color}
            </Button>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">
          {neutral === null
            ? (hasPreset ? t('ui.usingPreset', 'Using preset') : t('ui.primaryFamily', 'Primary family'))
            : neutral === 'none' ? t('ui.primaryFamily', 'Primary family')
            : `${neutral} ${t('ui.surfacesSuffix', 'surfaces')}`}
        </p>
      </section>
    </div>
  )
}

export interface ThemeFontsPickerProps {
  value: ThemeFonts
  onChange: (value: ThemeFonts) => void
  className?: string
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
}

export function ThemeFontsPicker({ value, onChange, className, labels, locale = 'en' }: ThemeFontsPickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  const DEFAULT = '__default__'
  return (
    <div className={cn('space-y-3', className)}>
      <div className="space-y-2">
        {(['body', 'heading'] as const).map(fontType => (
          <div key={fontType} className="grid grid-cols-[64px_1fr] items-center gap-3">
            <Label className="text-xs text-muted-foreground capitalize">
              {fontType === 'heading' ? t('ui.font.heading', 'heading') : t('ui.font.body', 'body')}
            </Label>
            <Select
              value={value[fontType] ?? DEFAULT}
              onValueChange={(v) => onChange({ ...value, [fontType]: v === DEFAULT ? undefined : v })}
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder={fontType === 'heading' ? t('ui.font.sameAsBody', 'Same as body') : t('ui.font.systemDefault', 'System default')} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={DEFAULT}>
                    {fontType === 'heading' ? t('ui.font.sameAsBody', 'Same as body') : t('ui.font.systemDefault', 'System default')}
                  </SelectItem>
                </SelectGroup>
                {FONT_GROUPS.map(group => (
                  <SelectGroup key={group.label}>
                    <SelectLabel>{group.label}</SelectLabel>
                    {group.options.map(f => (
                      <SelectItem key={f.value} value={f.value}>
                        {f.label === 'System default (sans-serif)' ? t('ui.font.systemDefaultSans', f.label) :
                         f.label === 'System serif' ? t('ui.font.systemSerif', f.label) : f.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface ThemePatternsPickerProps {
  value: ThemePattern
  onChange: (value: ThemePattern) => void
  className?: string
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
}

export function ThemePatternsPicker({ value, onChange, className, labels, locale = 'en' }: ThemePatternsPickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  const lang = (locale === 'es' || locale === 'pt' || locale === 'en') ? locale : 'en'
  const activeType = value.type
  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-semibold">{t('ui.pattern', 'Pattern')}</h4>
      <div className="flex flex-wrap gap-2">
        {PATTERN_TYPES.map(pt => {
          const active = activeType === pt
          const ps = pt !== 'none' ? generatePattern({ type: pt, opacity: 0.18, size: 'sm' }) : null
          return (
            <button
              key={pt}
              onClick={() => onChange({ ...value, type: pt })}
              title={PATTERN_LABELS[pt]}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-md border bg-background text-[10px] text-muted-foreground transition-colors',
                active ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{
                backgroundImage: ps?.backgroundImage ?? 'none',
                backgroundSize: ps?.backgroundSize ?? 'auto',
                backgroundPosition: ps?.backgroundPosition ?? 'center',
              }}
            >
              {pt === 'none' && <span>{t('ui.neutral.none', 'none')}</span>}
            </button>
          )
        })}
      </div>

      {activeType !== 'none' && (
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-16 text-xs text-muted-foreground">{t('ui.pattern.size', 'Size')}</span>
            <div className="flex gap-2">
              {(['sm', 'md', 'lg'] as const).map(s => (
                <Button key={s} variant={(value.size ?? 'md') === s ? 'secondary' : 'outline'} size="xs" onClick={() => onChange({ ...value, size: s })}>
                  {s === 'sm' ? t('ui.size.sm', 'SM') : s === 'md' ? t('ui.size.md', 'MD') : t('ui.size.lg', 'LG')}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-16 text-xs text-muted-foreground">{t('ui.pattern.density', 'Density')}</span>
            <div className="flex gap-2">
              {PATTERN_OPACITY_PRESETS.map(o => (
                <Button
                  key={o.label}
                  variant={(value.opacity ?? 0.12) === o.value ? 'secondary' : 'outline'}
                  size="xs"
                  onClick={() => onChange({ ...value, opacity: o.value })}
                >
                  {o.label === 'Subtle' ? t('ui.opacity.subtle', o.label)
                    : o.label === 'Normal' ? t('ui.opacity.normal', o.label)
                    : t('ui.opacity.bold', o.label)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        {activeType === 'none'
          ? t('ui.pattern.none', 'No pattern')
          : (labels?.[lang]?.[`ui.pattern.${activeType}`] ?? PATTERN_LABELS[activeType])}
      </p>
    </div>
  )
}

export interface ThemeRadiusPickerProps {
  value: string
  onChange: (value: string) => void
  className?: string
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
}

export function ThemeRadiusPicker({ value, onChange, className, labels, locale = 'en' }: ThemeRadiusPickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap gap-2">
        {RADIUS_PRESETS.map(r => (
          <Button
            key={r.value}
            variant={value === r.value ? 'secondary' : 'outline'}
            size="xs"
            onClick={() => onChange(r.value)}
          >
            {r.label === 'None' ? t('ui.neutral.none', r.label) : r.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export interface ThemeBackgroundImagePickerProps {
  value: string
  onChange: (value: string) => void
  className?: string
  labels?: Record<string, Record<string, string>>
  locale?: 'en' | 'es' | 'pt'
}

export function ThemeBackgroundImagePicker({ value, onChange, className, labels, locale = 'en' }: ThemeBackgroundImagePickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-semibold">{t('ui.backgroundImage', 'Background Image')}</h4>
      <div className="flex flex-wrap gap-2">
        <Input
          value={value}
          onChange={e => {
            const raw = e.target.value.trim()
            if (!raw) { onChange(''); return }
            const val = /^https?:\/\/|^\//.test(raw) && !raw.startsWith('url(')
              ? `url('${raw}')`
              : raw
            onChange(val)
          }}
          placeholder={t('ui.backgroundPlaceholder', "https://… or url('…') or gradient CSS")}
          className="text-xs"
        />
        {value && (
          <Button variant="outline" size="xs" onClick={() => onChange('')}>{t('ui.clear', 'Clear')}</Button>
        )}
      </div>
      <p className="text-xs text-muted-foreground">{t('ui.patternOverlayHint', 'Pattern always overlays on top of background image.')}</p>
    </div>
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
  themes,
  value,
  onChange,
  allowCustom = false,
  sections = [],
  className,
  locale = 'en',
  labels,
  paletteMaxHeight,
  paletteSwatchSize,
  showPalette = true,
  showCustomPalette = allowCustom,
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

  const hasPreset = selectedPresetName !== null

  return (
    <div className={cn('space-y-4 text-sm text-foreground', className)}>
      {showPalette && (
        <ThemePalettePicker
          themes={themes}
          value={selectedPresetName}
          onChange={(name) => {
            setSelectedPresetName(name)
            const selected = themes.find(t => t.name === name)
            if (selected) setOverrideRadius(selected.radius ?? '0.5rem')
            setCustomPrimary(null)
            setCustomSecondary(null)
            setCustomNeutral(null)
          }}
          labels={labels}
          locale={locale}
          paletteMaxHeight={paletteMaxHeight}
          swatchSize={paletteSwatchSize}
        />
      )}

      {showCustomPalette && (
        <div className={cn(showPalette ? 'border-t border-border pt-4' : '')}>
          <ThemeCustomPalettePicker
            hasPreset={hasPreset}
            primary={customPrimary}
            secondary={customSecondary}
            neutral={customNeutral}
            onPrimaryChange={setCustomPrimary}
            onSecondaryChange={setCustomSecondary}
            onNeutralChange={setCustomNeutral}
            subtitle={hasPreset ? translate(labels, locale, 'ui.overrideOnPreset', 'overrides on preset') : undefined}
            labels={labels}
            locale={locale}
          />
        </div>
      )}

      {sections.length > 0 && (
        <div className="space-y-4 border-t border-border pt-4">
          {sections.includes('fonts') && (
            <ThemeFontsPicker value={overrideFonts} onChange={setOverrideFonts} labels={labels} locale={locale} />
          )}
          {sections.includes('patterns') && (
            <ThemePatternsPicker value={overridePattern} onChange={setOverridePattern} labels={labels} locale={locale} />
          )}
          {sections.includes('radius') && (
            <ThemeRadiusPicker value={overrideRadius} onChange={setOverrideRadius} labels={labels} locale={locale} />
          )}
          {sections.includes('background') && (
            <ThemeBackgroundImagePicker value={overrideBgImage} onChange={setOverrideBgImage} labels={labels} locale={locale} />
          )}
        </div>
      )}
    </div>
  )
}
