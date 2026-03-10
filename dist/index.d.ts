type TailwindColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type TailwindShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
/** A Tailwind color reference — resolved at runtime via TAILWIND_COLORS lookup */
type TailwindToken = `${TailwindColor}-${TailwindShade}` | 'white' | 'black';
/** Any valid CSS color string (oklch, hsl, hex, etc.) — passes through as-is */
type RawColor = string & {
    readonly __brand: 'RawColor';
};
/** ColorToken accepts both Tailwind token refs and raw CSS color values */
type ColorToken = TailwindToken | RawColor;
/**
 * Helper to create a raw color value (bypasses Tailwind lookup).
 * @example raw('oklch(0.623 0.214 259.815)')
 * @example raw('#3b82f6')
 */
declare const raw: (value: string) => RawColor;
/** shadcn/ui-compatible color token set */
interface ThemeTokens {
    background: ColorToken;
    foreground: ColorToken;
    card: ColorToken;
    cardForeground: ColorToken;
    popover: ColorToken;
    popoverForeground: ColorToken;
    primary: ColorToken;
    primaryForeground: ColorToken;
    secondary: ColorToken;
    secondaryForeground: ColorToken;
    muted: ColorToken;
    mutedForeground: ColorToken;
    accent: ColorToken;
    accentForeground: ColorToken;
    destructive: ColorToken;
    destructiveForeground: ColorToken;
    border: ColorToken;
    input: ColorToken;
    ring: ColorToken;
}
interface ThemeFonts {
    sans?: string;
    serif?: string;
    mono?: string;
}
type PatternType = 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' | 'horizontal-lines' | 'vertical-lines' | 'zigzag' | 'checkerboard' | 'triangles' | 'hexagons' | 'noise';
interface ThemePattern {
    type: PatternType;
    /** Defaults to current foreground at low opacity */
    color?: ColorToken;
    /** 0–1, default 0.15 */
    opacity?: number;
    /** default 'md' */
    size?: 'sm' | 'md' | 'lg';
}
interface Theme {
    /** Machine key: "ocean" */
    name: string;
    /** Display name: "Ocean Blue" */
    label: string;
    light: ThemeTokens;
    dark: ThemeTokens;
    fonts?: ThemeFonts;
    pattern?: ThemePattern;
    /** e.g. "0.5rem" */
    radius?: string;
}
/** Resolved CSS values as flat string maps — never Tailwind token refs */
type ResolvedTokens = Record<string, string>;
/**
 * The canonical format for persistence (DB storage).
 * Always contains resolved CSS values so derived apps never need
 * the library to look things up — just formatting.
 */
interface StoredTheme {
    name: string;
    label: string;
    styles: {
        light: ResolvedTokens;
        dark: ResolvedTokens;
    };
    fonts: ThemeFonts;
    pattern: ThemePattern;
    radius: string;
    _source?: 'preset' | 'generated' | 'custom';
    /** If source === 'preset', e.g. "ocean" */
    _presetName?: string;
    /** If source === 'generated' via createTheme() */
    _generatorConfig?: {
        primary: TailwindColor;
        neutral: TailwindColor;
        radius?: string;
    };
}

/**
 * Tailwind v4 oklch color lookup table.
 * All values match Tailwind CSS v4's default color palette.
 */

declare const TAILWIND_COLORS: Record<TailwindToken, string>;
/**
 * Resolve a ColorToken to its CSS value.
 * - TailwindToken: looks up in TAILWIND_COLORS
 * - RawColor: returns as-is (strips the brand type)
 */
declare function resolveColor(token: string): string;

/**
 * Resolves all ThemeTokens to a flat Record of CSS var → CSS value.
 */
declare function generateThemeVariables(tokens: ThemeTokens): Record<string, string>;
/**
 * Generates the full CSS block for a theme.
 * Includes :root (light), .dark, and @theme inline blocks.
 */
declare function generateCSS(theme: Theme): string;
/**
 * Generates CSS directly from a StoredTheme — no Theme object needed.
 * Ideal for Astro SSR: storedThemeToCSS(stored) → <style set:html={css} />
 */
declare function storedThemeToCSS(stored: StoredTheme): string;
/** Resolve all tokens in a ThemeTokens to their CSS values */
declare function resolveTokens(tokens: ThemeTokens): ResolvedTokens;

interface CreateThemeConfig {
    name: string;
    label: string;
    primary: TailwindColor;
    /** Drives backgrounds, surfaces, muted */
    neutral: TailwindColor;
    radius?: string;
    fonts?: ThemeFonts;
    pattern?: ThemePattern;
    overrides?: {
        light?: Partial<ThemeTokens>;
        dark?: Partial<ThemeTokens>;
    };
}
/**
 * Easiest factory: pick color families, library picks shades intelligently.
 *
 * @example
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', neutral: 'slate' })
 */
declare function createTheme(config: CreateThemeConfig): Theme;
/**
 * Start from a preset, override specific tokens.
 *
 * @example
 * extendTheme(ocean, { light: { primary: 'teal-600' } })
 */
declare function extendTheme(base: Theme, overrides: Partial<Omit<Theme, 'light' | 'dark'>> & {
    light?: Partial<ThemeTokens>;
    dark?: Partial<ThemeTokens>;
}): Theme;
/**
 * Fully explicit theme definition — identity function with type validation.
 * Use this when you want to define all tokens manually.
 *
 * @example
 * defineTheme({ name: 'brand', label: 'Brand', light: {...}, dark: {...} })
 */
declare function defineTheme(theme: Theme): Theme;

/**
 * Theme object → StoredTheme (for saving to DB).
 * Resolves all ColorToken references to CSS values.
 */
declare function serializeTheme(theme: Theme): StoredTheme;
/**
 * StoredTheme → Theme object (for passing to generateCSS / ThemeProvider).
 * Stored values are already resolved CSS strings, so they're treated as RawColor.
 */
declare function deserializeTheme(stored: StoredTheme): Theme;

interface StealMeta {
    /** Machine key for the stolen theme */
    name?: string;
    /** Display label */
    label?: string;
}
/**
 * Build a `StoredTheme` from a flat map of CSS custom property names → values.
 *
 * Accepts both `--background` and `background` as keys.
 * Handles oklch, hsl, hex, and any other valid CSS color string.
 *
 * @example
 * // From DevTools: copy the :root block, then parse manually, or:
 * const vars = {
 *   '--background': 'oklch(1 0 0)',
 *   '--primary': 'oklch(0.623 0.214 259.815)',
 *   '--radius': '0.5rem',
 *   // ... etc
 * }
 * const stored = themeFromCSSVars(vars, { name: 'stolen', label: 'Stolen' })
 *
 * @example
 * // From the browser snippet (see `browserSnippet`):
 * const stored = themeFromCSSVars(
 *   JSON.parse(clipboardText),
 *   { name: 'stolen', label: 'Stolen' }
 * )
 */
declare function themeFromCSSVars(vars: Record<string, string>, meta?: StealMeta): StoredTheme;
/**
 * Parse a CSS text block (e.g. pasted from DevTools) and extract a `StoredTheme`.
 *
 * Understands `:root { }` for light tokens and `.dark { }` for dark tokens.
 * Also handles `[data-theme="dark"]`, `@media (prefers-color-scheme: dark)`,
 * and plain HSL channel values used by older shadcn/ui setups.
 *
 * @example
 * const css = `
 *   :root {
 *     --background: oklch(1 0 0);
 *     --primary: oklch(0.623 0.214 259.815);
 *     --radius: 0.5rem;
 *   }
 *   .dark {
 *     --background: oklch(0.145 0 0);
 *     --primary: oklch(0.707 0.165 254.624);
 *   }
 * `
 * const stored = themeFromCSS(css, { name: 'stolen', label: 'Stolen' })
 */
declare function themeFromCSS(cssText: string, meta?: StealMeta): StoredTheme;
/**
 * A self-contained JavaScript snippet to paste into the browser DevTools console.
 * Extracts all shadcn/ui-compatible CSS custom properties from the current page
 * and copies them to the clipboard as JSON — ready for `themeFromCSSVars()`.
 *
 * @example
 * // In your app or documentation:
 * console.log(browserSnippet)
 * // User pastes it into DevTools console on the target site
 * // Then passes the copied JSON to themeFromCSSVars()
 */
declare const browserSnippet = "(function() {\n  var cs = getComputedStyle(document.documentElement);\n  var css = document.documentElement.style;\n  var keys = [\n    'background','foreground',\n    'card','card-foreground',\n    'popover','popover-foreground',\n    'primary','primary-foreground',\n    'secondary','secondary-foreground',\n    'muted','muted-foreground',\n    'accent','accent-foreground',\n    'destructive','destructive-foreground',\n    'border','input','ring',\n    'radius','font-sans','font-serif','font-mono'\n  ];\n  var light = {}, dark = {};\n  keys.forEach(function(k) {\n    var v = (css.getPropertyValue('--' + k) || cs.getPropertyValue('--' + k)).trim();\n    if (v) light['--' + k] = v;\n  });\n  // Switch to dark mode temporarily to capture dark vars\n  var wasDark = document.documentElement.classList.contains('dark');\n  document.documentElement.classList.add('dark');\n  var cs2 = getComputedStyle(document.documentElement);\n  keys.forEach(function(k) {\n    var v = cs2.getPropertyValue('--' + k).trim();\n    if (v) dark['--' + k] = v;\n  });\n  if (!wasDark) document.documentElement.classList.remove('dark');\n  var out = JSON.stringify({ light: light, dark: dark }, null, 2);\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(out).then(function() {\n      console.log('%c tailtheme steal: copied to clipboard!', 'color: #4ade80; font-weight: bold;');\n    });\n  }\n  console.log(out);\n  return out;\n})();";
/**
 * A bookmarklet URL version of `browserSnippet`.
 * Add this as a browser bookmark — clicking it on any page runs the extraction.
 *
 * @example
 * // In your dashboard UI, render as a draggable link:
 * <a href={bookmarkletUrl}>Steal Theme</a>
 */
declare const bookmarkletUrl: string;
/**
 * Parse the two-mode output from `browserSnippet` (which returns `{ light, dark }`).
 * This is the companion to `browserSnippet` — pass its JSON output directly here.
 *
 * @example
 * const json = '{"light":{"--background":"oklch(1 0 0)",...},"dark":{"--background":"oklch(0.145 0 0)",...}}'
 * const stored = themeFromSnippetOutput(JSON.parse(json), { name: 'stolen' })
 */
declare function themeFromSnippetOutput(snippetOutput: {
    light: Record<string, string>;
    dark: Record<string, string>;
}, meta?: StealMeta): StoredTheme;

/**
 * Shape of a single theme from the tweakcn public registry API.
 * Endpoint: GET https://tweakcn.com/r/themes/{name}.json
 */
interface TweakCNThemeItem {
    name: string;
    title: string;
    cssVars: {
        /** Light-mode CSS custom property values (keys include leading --) */
        light: Record<string, string>;
        /** Dark-mode CSS custom property values (keys include leading --) */
        dark: Record<string, string>;
        /** Shared vars: --radius, --font-sans, --font-serif, --font-mono */
        theme?: Record<string, string>;
    };
}
/**
 * Shape of a single entry in the tweakcn registry index.
 * Endpoint: GET https://tweakcn.com/r/themes/registry.json
 */
interface TweakCNRegistryEntry {
    name: string;
    title: string;
    /** Registry item type — always "theme" for theme entries */
    type?: string;
}
/**
 * Convert a tweakcn registry item (the JSON returned by their public API) into
 * a `StoredTheme`.  Only the 19 shadcn/ui-compatible color tokens are extracted;
 * chart-*, sidebar-*, shadow-*, and spacing vars are intentionally ignored.
 *
 * @example
 * const json = await fetch('https://tweakcn.com/r/themes/catppuccin.json').then(r => r.json())
 * const stored = themeFromTweakCNItem(json)
 */
declare function themeFromTweakCNItem(item: TweakCNThemeItem, meta?: StealMeta): StoredTheme;
/**
 * Fetch a single theme from the tweakcn public registry by name and convert it
 * to a `StoredTheme`.
 *
 * Requires a global `fetch` (Node ≥ 18, browsers, Bun, Deno).
 *
 * @example
 * const stored = await fetchTweakCNTheme('catppuccin')
 * // → StoredTheme ready to persist or pass to ThemeProvider
 *
 * @example
 * // With custom name/label override:
 * const stored = await fetchTweakCNTheme('catppuccin', { name: 'brand', label: 'Brand Theme' })
 */
declare function fetchTweakCNTheme(themeName: string, meta?: StealMeta): Promise<StoredTheme>;
/**
 * Fetch all available themes from the tweakcn public registry.
 * Returns the registry index (name + title for each theme) — does NOT fetch
 * individual theme data.  Use `fetchTweakCNTheme` for that.
 *
 * @example
 * const registry = await fetchTweakCNRegistry()
 * console.log(registry.map(t => t.name))
 * // → ['catppuccin', 'violet-bloom', 'modern-minimal', ...]
 */
declare function fetchTweakCNRegistry(): Promise<TweakCNRegistryEntry[]>;
/**
 * Fetch every theme from tweakcn and return them all as `StoredTheme` objects.
 * Makes N+1 HTTP requests (1 for registry + 1 per theme).
 * Prefer `fetchTweakCNTheme` when you only need a specific theme.
 *
 * @example
 * const all = await fetchAllTweakCNThemes()
 * // → StoredTheme[] — ready to spread into your themes array
 */
declare function fetchAllTweakCNThemes(): Promise<StoredTheme[]>;
/**
 * A browser DevTools snippet that detects the current tweakcn theme name from
 * the page URL or DOM, fetches it from tweakcn's public API, and copies the
 * `StoredTheme`-compatible JSON to clipboard.
 *
 * Works when run on tweakcn.com (detects theme from URL hash/search params)
 * and on any page after you identify the theme name.
 *
 * @example
 * // Paste into DevTools console while on tweakcn.com/?theme=catppuccin
 * console.log(tweakcnSnippet)
 */
declare const tweakcnSnippet = "(async function() {\n  // Try to detect theme name from URL params or hash\n  var url = new URL(location.href);\n  var name = url.searchParams.get('theme') ||\n             url.searchParams.get('name') ||\n             url.hash.replace('#', '') ||\n             prompt('Enter tweakcn theme name (e.g. catppuccin):');\n  if (!name) { console.warn('No theme name provided.'); return; }\n  name = name.trim();\n  var apiUrl = 'https://tweakcn.com/r/themes/' + encodeURIComponent(name) + '.json';\n  console.log('%c tailtheme: fetching ' + apiUrl, 'color: #60a5fa;');\n  try {\n    var res = await fetch(apiUrl);\n    if (!res.ok) throw new Error('HTTP ' + res.status);\n    var item = await res.json();\n    var out = JSON.stringify(item, null, 2);\n    if (navigator.clipboard) {\n      await navigator.clipboard.writeText(out);\n      console.log('%c tailtheme: copied tweakcn theme JSON to clipboard!', 'color: #4ade80; font-weight: bold;');\n    }\n    console.log(out);\n    return item;\n  } catch(e) {\n    console.error('tailtheme steal-tweakcn:', e);\n  }\n})();";
/**
 * Bookmarklet URL version of `tweakcnSnippet`.
 * Drag to bookmarks bar — clicking it on tweakcn.com fetches the current theme.
 */
declare const tweakcnBookmarkletUrl: string;

type FontFamily = string;
/**
 * Curated font constants — system fonts and popular Google Fonts.
 * Google Fonts must be loaded separately via <link> or next/font.
 */
declare const FONTS: {
    readonly SYSTEM_SANS: "system-ui, -apple-system, sans-serif";
    readonly SYSTEM_SERIF: "Georgia, 'Times New Roman', serif";
    readonly SYSTEM_MONO: "ui-monospace, 'Courier New', monospace";
    readonly INTER: "'Inter', system-ui, sans-serif";
    readonly GEIST: "'Geist', system-ui, sans-serif";
    readonly PLUS_JAKARTA: "'Plus Jakarta Sans', system-ui, sans-serif";
    readonly NUNITO: "'Nunito', system-ui, sans-serif";
    readonly POPPINS: "'Poppins', system-ui, sans-serif";
    readonly OUTFIT: "'Outfit', system-ui, sans-serif";
    readonly DM_SANS: "'DM Sans', system-ui, sans-serif";
    readonly MANROPE: "'Manrope', system-ui, sans-serif";
    readonly PLAYFAIR: "'Playfair Display', Georgia, serif";
    readonly LORA: "'Lora', Georgia, serif";
    readonly MERRIWEATHER: "'Merriweather', Georgia, serif";
    readonly DM_SERIF: "'DM Serif Display', Georgia, serif";
    readonly JETBRAINS_MONO: "'JetBrains Mono', monospace";
    readonly FIRA_CODE: "'Fira Code', monospace";
    readonly IBM_PLEX_MONO: "'IBM Plex Mono', monospace";
};
type FontKey = keyof typeof FONTS;
/**
 * Build a Google Fonts URL for the given font family strings.
 *
 * @param families - Array of font family strings from FONTS constants or custom
 * @example
 * googleFontsUrl([FONTS.INTER, FONTS.PLAYFAIR])
 * // → "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
 */
declare function googleFontsUrl(families: string[]): string;

interface PatternStyle {
    backgroundImage: string;
    backgroundSize: string;
    backgroundColor?: string;
}
/**
 * Generates CSS background pattern properties.
 * Returns CSS properties to apply directly — no class names, no dependencies.
 *
 * Inspired by pattern.css (MIT License).
 */
declare function generatePattern(config: ThemePattern): PatternStyle;

declare const defaultTheme: Theme;

declare const oceanTheme: Theme;

declare const forestTheme: Theme;

declare const sunsetTheme: Theme;

declare const midnightTheme: Theme;

declare const roseTheme: Theme;

declare const amberTheme: Theme;

declare const indigoTheme: Theme;

declare const tealTheme: Theme;

declare const candyTheme: Theme;

declare const builtinThemes: Theme[];

declare const modernMinimalTheme: Theme;

declare const violetBloomTheme: Theme;

declare const t3ChatTheme: Theme;

declare const twitterTheme: Theme;

declare const mochaMousseTheme: Theme;

declare const bubblegumTheme: Theme;

declare const amethystHazeTheme: Theme;

declare const notebookTheme: Theme;

declare const doom64Theme: Theme;

declare const catppuccinTheme: Theme;

declare const graphiteTheme: Theme;

declare const perpetuityTheme: Theme;

declare const kodamaGroveTheme: Theme;

declare const cosmicNightTheme: Theme;

declare const tangerineTheme: Theme;

declare const quantumRoseTheme: Theme;

declare const natureTheme: Theme;

declare const boldTechTheme: Theme;

declare const elegantLuxuryTheme: Theme;

declare const amberMinimalTheme: Theme;

declare const supabaseTheme: Theme;

declare const neoBrutalismTheme: Theme;

declare const solarDuskTheme: Theme;

declare const claymorphismTheme: Theme;

declare const cyberpunkTheme: Theme;

declare const pastelDreamsTheme: Theme;

declare const cleanSlateTheme: Theme;

declare const caffeineTheme: Theme;

declare const oceanBreezeTheme: Theme;

declare const retroArcadeTheme: Theme;

declare const midnightBloomTheme: Theme;

declare const candylandTheme: Theme;

declare const northernLightsTheme: Theme;

declare const vintagePaperTheme: Theme;

declare const sunsetHorizonTheme: Theme;

declare const starryNightTheme: Theme;

declare const claudeTheme: Theme;

declare const tweakcnThemes: Theme[];

/** All 47 themes — 10 built-in + 37 tweakcn */
declare const themes: Theme[];

export { type ColorToken, type CreateThemeConfig, FONTS, type FontFamily, type FontKey, type PatternStyle, type PatternType, type RawColor, type ResolvedTokens, type StealMeta, type StoredTheme, TAILWIND_COLORS, type TailwindColor, type TailwindShade, type TailwindToken, type Theme, type ThemeFonts, type ThemePattern, type ThemeTokens, type TweakCNRegistryEntry, type TweakCNThemeItem, amberMinimalTheme, amberTheme, amethystHazeTheme, boldTechTheme, bookmarkletUrl, browserSnippet, bubblegumTheme, builtinThemes, caffeineTheme, candyTheme, candylandTheme, catppuccinTheme, claudeTheme, claymorphismTheme, cleanSlateTheme, cosmicNightTheme, createTheme, cyberpunkTheme, defaultTheme, defineTheme, deserializeTheme, doom64Theme, elegantLuxuryTheme, extendTheme, fetchAllTweakCNThemes, fetchTweakCNRegistry, fetchTweakCNTheme, forestTheme, generateCSS, generatePattern, generateThemeVariables, googleFontsUrl, graphiteTheme, indigoTheme, kodamaGroveTheme, midnightBloomTheme, midnightTheme, mochaMousseTheme, modernMinimalTheme, natureTheme, neoBrutalismTheme, northernLightsTheme, notebookTheme, oceanBreezeTheme, oceanTheme, pastelDreamsTheme, perpetuityTheme, quantumRoseTheme, raw, resolveColor, resolveTokens, retroArcadeTheme, roseTheme, serializeTheme, solarDuskTheme, starryNightTheme, storedThemeToCSS, sunsetHorizonTheme, sunsetTheme, supabaseTheme, t3ChatTheme, tangerineTheme, tealTheme, themeFromCSS, themeFromCSSVars, themeFromSnippetOutput, themeFromTweakCNItem, themes, tweakcnBookmarkletUrl, tweakcnSnippet, tweakcnThemes, twitterTheme, vintagePaperTheme, violetBloomTheme };
