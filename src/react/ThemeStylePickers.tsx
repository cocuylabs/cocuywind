import React from 'react'
import type { ThemeFonts, ThemePattern } from '../types.js'
import { raw } from '../types.js'
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
import {
  FONT_GROUPS,
  PATTERN_TYPES,
  PATTERN_LABELS,
  PATTERN_OPACITY_PRESETS,
  RADIUS_PRESETS,
} from './theme-picker-constants.js'
import { translate, type ThemePickerLabels } from './theme-picker-labels.js'

export interface ThemeFontsPickerProps {
  value: ThemeFonts
  onChange: (value: ThemeFonts) => void
  className?: string
  labels?: ThemePickerLabels
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
                      <SelectItem key={f.value} value={f.value} style={{ fontFamily: f.value }}>
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
  labels?: ThemePickerLabels
  locale?: 'en' | 'es' | 'pt'
}

export function ThemePatternsPicker({ value, onChange, className, labels, locale = 'en' }: ThemePatternsPickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)
  const lang = (locale === 'es' || locale === 'pt' || locale === 'en') ? locale : 'en'
  const activeType = value.type
  const previewColor = value.tint === 'primary'
    ? raw('var(--primary)')
    : value.tint === 'secondary'
      ? raw('var(--secondary)')
      : value.tint === 'accent'
        ? raw('var(--accent)')
        : undefined
  const previewOpacity = value.tint === 'accent'
    ? (value.opacity ?? 0.08) * 2.0
    : value.tint === 'secondary'
      ? (value.opacity ?? 0.08) * 1.4
    : value.opacity

  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-semibold">{t('ui.pattern', 'Pattern')}</h4>
      <div className="flex flex-wrap gap-2">
        {PATTERN_TYPES.map(pt => {
          const active = activeType === pt
          const ps = pt !== 'none'
            ? generatePattern({ type: pt, opacity: previewOpacity ?? 0.18, size: 'sm', color: previewColor })
            : null
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
            <span className="w-16 text-xs text-muted-foreground">{t('ui.pattern.tint', 'Tint')}</span>
            <div className="flex gap-2">
              <Button
                variant={!value.tint ? 'secondary' : 'outline'}
                size="xs"
                onClick={() => onChange({ ...value, tint: undefined })}
              >
                {t('ui.pattern.tint.foreground', 'Foreground')}
              </Button>
              <Button
                variant={value.tint === 'primary' ? 'secondary' : 'outline'}
                size="xs"
                onClick={() => onChange({ ...value, tint: 'primary' })}
              >
                {t('ui.pattern.tint.primary', 'Primary')}
              </Button>
              <Button
                variant={value.tint === 'secondary' ? 'secondary' : 'outline'}
                size="xs"
                onClick={() => onChange({ ...value, tint: 'secondary' })}
              >
                {t('ui.pattern.tint.secondary', 'Secondary')}
              </Button>
              <Button
                variant={value.tint === 'accent' ? 'secondary' : 'outline'}
                size="xs"
                onClick={() => onChange({ ...value, tint: 'accent' })}
              >
                {t('ui.pattern.tint.accent', 'Accent')}
              </Button>
            </div>
          </div>
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
                  variant={(value.opacity ?? 0.08) === o.value ? 'secondary' : 'outline'}
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
  labels?: ThemePickerLabels
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
  labels?: ThemePickerLabels
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
