import React, { useState, useEffect } from 'react'
import type { Theme, TailwindColor, ThemeFonts, ThemePattern, StoredTheme } from '../types.js'
import { ThemePalettePicker, ThemeCustomPalettePicker } from './ThemePalettePickers.js'
import {
  ThemeFontsPicker,
  ThemePatternsPicker,
  ThemeRadiusPicker,
  ThemeBackgroundImagePicker,
} from './ThemeStylePickers.js'
import { buildTheme } from './theme-picker-build.js'
import { translate, type ThemePickerLabels } from './theme-picker-labels.js'
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
  labels?: ThemePickerLabels
  /** Max height for the palette swatches area only — sections remain visible below */
  paletteMaxHeight?: string | number
  /** Size (px) of the three palette dots in each swatch row */
  paletteSwatchSize?: number
  /** Show the preset palette grid */
  showPalette?: boolean
  /** Show the custom palette controls */
  showCustomPalette?: boolean
}

export { ThemePalettePicker, ThemeCustomPalettePicker } from './ThemePalettePickers.js'
export type { ThemePalettePickerProps, ThemeCustomPalettePickerProps } from './ThemePalettePickers.js'
export {
  ThemeFontsPicker,
  ThemePatternsPicker,
  ThemeRadiusPicker,
  ThemeBackgroundImagePicker,
} from './ThemeStylePickers.js'
export type {
  ThemeFontsPickerProps,
  ThemePatternsPickerProps,
  ThemeRadiusPickerProps,
  ThemeBackgroundImagePickerProps,
} from './ThemeStylePickers.js'

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

  const [customPrimary,   setCustomPrimary]   = useState<TailwindColor | null>(
    () => v._overlayConfig?.primary   ?? (v._generatorConfig?.primary   ?? null)
  )
  const [customSecondary, setCustomSecondary] = useState<TailwindColor | null>(
    () => v._overlayConfig?.secondary ?? (v._generatorConfig?.secondary ?? null)
  )
  const [customAccent, setCustomAccent] = useState<TailwindColor | null>(
    () => v._overlayConfig?.accent ?? (v._generatorConfig?.accent ?? null)
  )
  const [customNeutral,   setCustomNeutral]   = useState<TailwindColor | 'none' | null>(
    () => v._overlayConfig?.neutral   ?? (v._generatorConfig?.neutral   ? v._generatorConfig.neutral as TailwindColor : null)
  )

  const [overrideRadius,  setOverrideRadius]  = useState(value.radius ?? '0.5rem')
  const [overrideFonts,   setOverrideFonts]   = useState<ThemeFonts>(value.fonts ?? {})
  const [overridePattern, setOverridePattern] = useState<ThemePattern>(value.pattern ?? { type: 'none' })
  const [overrideBgImage, setOverrideBgImage] = useState(value.backgroundImage ?? '')

  useEffect(() => {
    const base = buildTheme(themes, selectedPresetName, customPrimary, customSecondary, customAccent, customNeutral)
    if (!base) return
    onChange({
      ...base,
      radius:          overrideRadius,
      fonts:           Object.keys(overrideFonts).length > 0 ? overrideFonts : undefined,
      pattern:         overridePattern.type !== 'none' ? overridePattern : undefined,
      backgroundImage: overrideBgImage || undefined,
    })
  }, [selectedPresetName, customPrimary, customSecondary, customAccent, customNeutral, overrideRadius, overrideFonts, overridePattern, overrideBgImage])

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
            setCustomAccent(null)
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
            accent={customAccent}
            neutral={customNeutral}
            onPrimaryChange={setCustomPrimary}
            onSecondaryChange={setCustomSecondary}
            onAccentChange={setCustomAccent}
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
