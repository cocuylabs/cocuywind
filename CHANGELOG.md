# Changelog

## Unreleased — accessibility + appearance audit (2026-07)

### For waitless-admin (action requested)

- **`patternToCssVars(pattern, { mode? })` is now exported** — the single code
  path for pattern → `--pattern-image/-size/-position` with the tint mapping
  (opacity × 1 / 1.4 / 2 for primary / secondary / accent) resolved inside.
  Replace the local copy in `src/utils/build-preview-css-vars.ts` +
  `src/constants/preview.ts` (spec: waitless-admin-next/docs/PREVIEW_PROTOCOL.md)
  with this helper. `PATTERN_TINT_OPACITY_MULTIPLIER` and
  `PATTERN_MAX_EFFECTIVE_OPACITY` are exported for display purposes.

### Added

- **Contrast utilities** (`cocuywind` root export): `contrastRatio`,
  `meetsContrast`, `ensureContrast` (OKLCH-lightness repair, hue/chroma
  preserved), `ensureThemeContrast` (theme-level repair of foreground tokens +
  ring), `parseColorToRgb`, `relativeLuminance`, `CONTRAST_AA_TEXT`,
  `CONTRAST_AA_LARGE_TEXT`, `CONTRAST_AA_UI`. Parses oklch / hex / rgb / hsl.
- **8 new pattern types**: `waves`, `crosshatch`, `isometric`, `halftone`,
  `confetti`, `topography`, plus gradient backgrounds `gradient` (mesh from
  primary/secondary/accent) and `gradient-radial` (single glow).
- **Per-mode pattern opacity**: `ThemePattern.darkOpacity` (additive). When
  set, `generateCSS`/`storedThemeToCSS` re-emit pattern vars in `.dark { }`
  and `ThemeProvider` applies it in dark mode.
- **Theme-aware elevation**: both emitters always emit `--shadow-color`
  (foreground-tinted in light, near-black in dark) and
  `--shadow-sm/md/lg/xl`; mapped in `@theme inline` for Tailwind `shadow-*`
  utilities. Exported as `SHADOW_COLOR` / `SHADOW_SCALE`.
- **High-contrast support**: emitted CSS now includes
  `@media (forced-colors: active), (prefers-contrast: more)` disabling
  `--pattern-image` and `--bg-image`.

### Changed (visual, non-breaking API)

- `createTheme` now picks contrast-safe shades (WCAG 2.2 AA):
  `primaryForeground` walks white → primary-950 → black; light
  `mutedForeground` walks -600/-700/-800 (was -500); dark `mutedForeground`
  walks -300/-200/-100 (was -400); light `ring` steps darker when primary-600
  misses 3:1 on the background. Affects factory-generated and basic themes.
- Curated builtin themes: failing `mutedForeground`/`primaryForeground`
  tokens bumped to AA-passing shades (default, ocean, forest, sunset,
  midnight, rose, amber, indigo, teal, candy).
- `adjustVividness(theme, factor, options?)` now applies a contrast floor by
  default (repairs text pairs pushed below AA). Opt out with
  `{ contrastFloor: false }`.
- Tinted pattern effective opacity is clamped to 0.25
  (`PATTERN_MAX_EFFECTIVE_OPACITY`) — patterns paint behind text.
- `PatternStyle.backgroundColor` is deprecated (was never set by any type).

### Migration notes

- `StoredTheme` shape is unchanged; old rows keep rendering. New rows
  serialized after this version may carry `pattern.darkOpacity` — older
  library versions ignore it.
- Presets re-serialized through `serializeTheme` will store the new
  contrast-fixed values; this is intentional (a11y fix), not drift.
