import React from 'react'
import type { Theme, TailwindColor } from '../types.js'
import { resolveColor } from '../colors.js'
import { Button } from './ui/button.js'
import { cn } from './ui/utils.js'
import { TAILWIND_COLORS, NEUTRAL_COLORS } from './theme-picker-constants.js'
import { translate, type ThemePickerLabels } from './theme-picker-labels.js'

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
    <button
      onClick={onClick}
      title={label}
      className={cn(
        'flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
        selected ? 'border-primary/60 bg-primary/10' : 'border-border hover:bg-muted/50'
      )}
    >
      <span className="flex shrink-0 gap-1">
        <span className="inline-block rounded-md" style={{ backgroundColor: bg, width: 20, height: 20 }} />
        <span className="inline-block rounded-md" style={{ backgroundColor: pri, width: 20, height: 20 }} />
        <span className="inline-block rounded-md" style={{ backgroundColor: sec, width: 20, height: 20 }} />
      </span>
      <span className="truncate">{label}</span>
    </button>
  )
}

export interface ThemePalettePickerProps {
  themes: Theme[]
  value: string | null
  onChange: (name: string) => void
  labels?: ThemePickerLabels
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
  accent: TailwindColor | null
  neutral: TailwindColor | 'none' | null
  onPrimaryChange: (value: TailwindColor | null) => void
  onSecondaryChange: (value: TailwindColor | null) => void
  onAccentChange: (value: TailwindColor | null) => void
  onNeutralChange: (value: TailwindColor | 'none' | null) => void
  className?: string
  title?: string
  subtitle?: string
  labels?: ThemePickerLabels
  locale?: 'en' | 'es' | 'pt'
}

export function ThemeCustomPalettePicker({
  hasPreset,
  primary,
  secondary,
  accent,
  neutral,
  onPrimaryChange,
  onSecondaryChange,
  onAccentChange,
  onNeutralChange,
  className,
  labels,
  locale = 'en',
}: ThemeCustomPalettePickerProps) {
  const t = (key: string, fallback: string) => translate(labels, locale, key, fallback)

  const autoBtn = (isAuto: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        isAuto
          ? 'border-transparent bg-primary text-primary-foreground'
          : 'border-border bg-transparent text-foreground hover:border-muted-foreground',
      )}
    >
      {t('ui.auto', 'Auto')}
    </button>
  )

  const colorBtn = (color: string, isActive: boolean, onClick: () => void) => (
    <button
      key={color}
      onClick={onClick}
      title={color}
      className={cn(
        'h-7 w-7 rounded-full border-2 transition-all',
        isActive ? 'border-foreground scale-110' : 'border-transparent hover:border-muted-foreground',
      )}
      style={{ backgroundColor: resolveColor(`${color}-500`) }}
    />
  )

  return (
    <div className={cn('space-y-5', className)}>

      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold">{t('ui.primary', 'Primary')}</h4>
          {primary === null && hasPreset && (
            <span className="text-xs text-muted-foreground">{t('ui.usingPreset', 'Using preset color')}</span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset && autoBtn(primary === null, () => onPrimaryChange(null))}
          {TAILWIND_COLORS.map(color => colorBtn(color, primary === color, () => onPrimaryChange(color)))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold">{t('ui.secondary', 'Secondary')}</h4>
          {secondary === null && (
            <span className="text-xs text-muted-foreground">
              {hasPreset ? t('ui.usingPreset', 'Using preset color') : t('ui.autoFromPrimary', 'Auto from primary')}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset
            ? autoBtn(secondary === null, () => onSecondaryChange(null))
            : (
              <button
                onClick={() => onSecondaryChange(null)}
                title="Auto (derived from primary)"
                className={cn(
                  'h-7 w-7 rounded-full border-2 transition-all',
                  secondary === null ? 'border-foreground scale-110' : 'border-transparent hover:border-muted-foreground',
                )}
                style={{
                  backgroundImage: `conic-gradient(${TAILWIND_COLORS.slice(5, 10).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
                }}
              />
            )
          }
          {TAILWIND_COLORS.map(color => colorBtn(color, secondary === color, () => onSecondaryChange(color)))}
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold">{t('ui.accent', 'Accent')}</h4>
          {accent === null && (
            <span className="text-xs text-muted-foreground">
              {hasPreset ? t('ui.usingPreset', 'Using preset color') : t('ui.autoFromSecondary', 'Auto from secondary')}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset
            ? autoBtn(accent === null, () => onAccentChange(null))
            : (
              <button
                onClick={() => onAccentChange(null)}
                title="Auto (derived from secondary/primary)"
                className={cn(
                  'h-7 w-7 rounded-full border-2 transition-all',
                  accent === null ? 'border-foreground scale-110' : 'border-transparent hover:border-muted-foreground',
                )}
                style={{
                  backgroundImage: `conic-gradient(${TAILWIND_COLORS.slice(0, 5).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
                }}
              />
            )
          }
          {TAILWIND_COLORS.map(color => colorBtn(color, accent === color, () => onAccentChange(color)))}
        </div>
      </section>

      <section className="space-y-2">
        <h4 className="text-base font-semibold">{t('ui.neutralBase', 'Neutral base')}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset
            ? autoBtn(neutral === null, () => onNeutralChange(null))
            : (
              <button
                onClick={() => onNeutralChange('none')}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors',
                  (neutral === null || neutral === 'none')
                    ? 'border-transparent bg-primary text-primary-foreground'
                    : 'border-border bg-transparent text-foreground hover:border-muted-foreground',
                )}
              >
                {t('ui.neutral.none', 'None')}
              </button>
            )
          }
          {NEUTRAL_COLORS.map(color => (
            <button
              key={color}
              onClick={() => onNeutralChange(color)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors',
                neutral === color
                  ? 'border-transparent bg-primary text-primary-foreground'
                  : 'border-border bg-transparent text-foreground hover:border-muted-foreground',
              )}
            >
              {color}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
