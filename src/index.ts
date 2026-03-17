// ─── Types ────────────────────────────────────────────────────────────────────
export type {
  TailwindColor,
  TailwindShade,
  TailwindToken,
  RawColor,
  ColorToken,
  ThemeTokens,
  ThemeFonts,
  PatternType,
  ThemePattern,
  Theme,
  ResolvedTokens,
  StoredTheme,
} from './types.js'
export { raw } from './types.js'

// ─── Colors ───────────────────────────────────────────────────────────────────
export { TAILWIND_COLORS, resolveColor } from './colors.js'

// ─── CSS Generation ───────────────────────────────────────────────────────────
export {
  generateCSS,
  generateThemeVariables,
  storedThemeToCSS,
  resolveTokens,
} from './generate.js'

// ─── Factory ──────────────────────────────────────────────────────────────────
export { createTheme, extendTheme, defineTheme } from './factory.js'
export type { CreateThemeConfig } from './factory.js'

// ─── Vividness ────────────────────────────────────────────────────────────────
export { adjustVividness, VIVIDNESS_PRESETS } from './vividness.js'
export type { VividnessPreset } from './vividness.js'

// ─── Serialization ────────────────────────────────────────────────────────────
export { serializeTheme, deserializeTheme, validateStoredTheme } from './serialize.js'
export type { ThemeValidationResult } from './serialize.js'

// ─── Theme Stealing ───────────────────────────────────────────────────────────
export {
  themeFromCSSVars,
  themeFromCSS,
  themeFromSnippetOutput,
  browserSnippet,
  bookmarkletUrl,
} from './steal.js'
export type { StealMeta } from './steal.js'

// ─── TweakCN Theme Stealing ───────────────────────────────────────────────────
export {
  themeFromTweakCNItem,
  fetchTweakCNTheme,
  fetchTweakCNRegistry,
  fetchAllTweakCNThemes,
  tweakcnSnippet,
  tweakcnBookmarkletUrl,
} from './steal-tweakcn.js'
export type { TweakCNThemeItem, TweakCNRegistryEntry } from './steal-tweakcn.js'

// ─── Fonts ────────────────────────────────────────────────────────────────────
export { FONTS, googleFontsUrl } from './fonts.js'
export type { FontFamily, FontKey } from './fonts.js'

// ─── Patterns ─────────────────────────────────────────────────────────────────
export { generatePattern } from './patterns.js'
export type { PatternStyle } from './patterns.js'

// ─── i18n ─────────────────────────────────────────────────────────────────────
export { default as themeLabelsEn } from './i18n/theme-labels.en.json'
export { default as themeLabelsEs } from './i18n/theme-labels.es.json'
export { default as themeLabelsPt } from './i18n/theme-labels.pt.json'

// ─── Themes ───────────────────────────────────────────────────────────────────
export { themes, builtinThemes, tweakcnThemes, communityThemes, tailwindBasicThemes, claudeThemes } from './themes/index.js'

// Built-in themes
export {
  defaultTheme,
  oceanTheme,
  forestTheme,
  sunsetTheme,
  midnightTheme,
  roseTheme,
  amberTheme,
  indigoTheme,
  tealTheme,
  candyTheme,
} from './themes/builtin/index.js'

// TweakCN themes
export {
  modernMinimalTheme,
  violetBloomTheme,
  t3ChatTheme,
  twitterTheme,
  mochaMousseTheme,
  bubblegumTheme,
  amethystHazeTheme,
  notebookTheme,
  doom64Theme,
  catppuccinTheme,
  graphiteTheme,
  perpetuityTheme,
  kodamaGroveTheme,
  cosmicNightTheme,
  tangerineTheme,
  quantumRoseTheme,
  natureTheme,
  boldTechTheme,
  elegantLuxuryTheme,
  amberMinimalTheme,
  supabaseTheme,
  neoBrutalismTheme,
  solarDuskTheme,
  claymorphismTheme,
  cyberpunkTheme,
  pastelDreamsTheme,
  cleanSlateTheme,
  caffeineTheme,
  oceanBreezeTheme,
  retroArcadeTheme,
  midnightBloomTheme,
  candylandTheme,
  northernLightsTheme,
  vintagePaperTheme,
  sunsetHorizonTheme,
  starryNightTheme,
  claudeTheme,
} from './themes/tweakcn/index.js'
