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

function ThemeSwatch({ theme, selected, onClick, previewMode = 'light', labelOverride, swatchSize = 12 }: {
  theme: Theme; selected: boolean; onClick: () => void; previewMode?: 'light' | 'dark'; labelOverride?: string; swatchSize?: number
}) {
  const [bg, pri, sec] = getSwatchColors(theme, previewMode)
  const label = labelOverride ?? theme.label
  return (
    <button
      onClick={onClick}
      title={label}
      className={cn(
        'flex w-full items-center rounded-md border px-3 py-2 text-left text-sm transition-colors',
        selected ? 'border-ring bg-accent text-accent-foreground' : 'border-border hover:bg-muted/50'
      )}
    >
      <span className="flex shrink-0 pr-2">
        <span
          className="inline-block border border-border rounded-l-full"
          style={{ backgroundColor: bg, width: swatchSize, height: (swatchSize * 1.2) }}
        />
        <span
          className="inline-block border border-border border-r-0 border-l-0"
          style={{ backgroundColor: pri, width: (swatchSize * 0.9), height: (swatchSize * 1.2) }}
        />
        <span
          className="inline-block border border-border rounded-r-full"
          style={{ backgroundColor: sec, width: swatchSize, height: (swatchSize * 1.2) }}
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
        <h4 className="text-xs font-semibold text-muted-foreground">{t('ui.accent', 'Accent')}</h4>
        <div className="flex flex-wrap items-center gap-2">
          {hasPreset ? (
            <Button variant={accent === null ? 'secondary' : 'outline'} size="xs" onClick={() => onAccentChange(null)}>
              {t('ui.auto', 'Auto')}
            </Button>
          ) : (
            <button
              onClick={() => onAccentChange(null)}
              title="Auto (derived from secondary/primary)"
              className={cn(
                'h-6 w-6 rounded-full border transition-colors',
                accent === null ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{
                backgroundImage: `conic-gradient(${TAILWIND_COLORS.slice(0, 5).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(', ')})`,
              }}
            />
          )}
          {TAILWIND_COLORS.map(color => (
            <button
              key={color}
              onClick={() => onAccentChange(color)}
              title={color}
              className={cn(
                'h-6 w-6 rounded-full border transition-colors',
                accent === color ? 'border-foreground ring-2 ring-ring' : 'border-border hover:border-muted-foreground'
              )}
              style={{ backgroundColor: resolveColor(`${color}-500`) }}
            />
          ))}
        </div>
        {accent === null && (
          <p className="text-[11px] text-muted-foreground">
            {hasPreset ? t('ui.usingPreset', 'Using preset') : t('ui.autoFromSecondary', 'Auto from secondary')}
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
              <span className="capitalize bg-muted rounded-md px-1 py-1 text-xs">
                {color}
              </span>
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}
