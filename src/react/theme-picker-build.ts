import type { Theme, TailwindColor, ThemeTokens } from '../types.js'
import { createTheme } from '../factory.js'

const PRIMARY_KEYS   = ['primary', 'primaryForeground', 'ring'] as const
const SECONDARY_KEYS = ['secondary', 'secondaryForeground', 'accent', 'accentForeground'] as const
const NEUTRAL_KEYS   = [
  'background', 'foreground', 'card', 'cardForeground',
  'popover', 'popoverForeground', 'muted', 'mutedForeground',
  'border', 'input',
] as const

/**
 * Build the palette theme to emit (color tokens only — style layers applied separately).
 *
 * When a preset is selected, custom color overrides patch only the affected token group.
 * When no preset is selected (pure custom mode), createTheme() builds from scratch.
 */
export function buildTheme(
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
