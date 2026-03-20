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
    /** Body / UI font — applied to :root. Defaults to system-ui sans-serif. */
    body?: string;
    /** Heading / display font — applied to h1–h6. Omit to use body font for headings too. */
    heading?: string;
}
type PatternType = 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' | 'horizontal-lines' | 'vertical-lines' | 'zigzag' | 'checkerboard' | 'triangles' | 'hexagons' | 'noise';
interface ThemePattern {
    type: PatternType;
    /** Defaults to `var(--foreground)` at low opacity */
    color?: ColorToken;
    /**
     * Optional token tint. When set, overrides `color` and uses the theme token
     * (e.g. `var(--primary)`) so it adapts in dark mode.
     */
    tint?: 'primary' | 'secondary' | 'accent';
    /** 0–1, default 0.08 */
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
    /**
     * CSS background-image value for a custom background, e.g. `"url('https://...')"`.
     * cocuywind does not manage upload — the consumer supplies a URL or data URL after upload.
     * Renders below any pattern overlay.
     */
    backgroundImage?: string;
    /** e.g. "0.5rem" */
    radius?: string;
    /** Groups themes in the picker: 'Basic' | 'Curated' | 'TweakCN' */
    category?: string;
    /** Optional original/source label for display or attribution */
    _sourceName?: string;
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
    /**
     * CSS background-image value for a custom background, e.g. `"url('https://...')"`.
     * Stored as-is and emitted into `--bg-image`. Consumer is responsible for upload/storage.
     */
    backgroundImage?: string;
    radius: string;
    _source?: 'preset' | 'generated' | 'custom';
    /** If source === 'preset', e.g. "ocean" */
    _presetName?: string;
    /** If source === 'generated' via createTheme() */
    _generatorConfig?: {
        primary: TailwindColor;
        neutral?: TailwindColor;
        secondary?: TailwindColor;
        accent?: TailwindColor;
        radius?: string;
        /** Numeric chroma multiplier that was applied (1.0 = unchanged) */
        vividness?: number;
        /** Named preset if one was used — for UI state restoration */
        vividnessPreset?: string;
    };
    /**
     * If source === 'preset' + custom color overlays were applied.
     * Stores the base preset name and which color groups were overridden,
     * enabling the admin panel to reconstruct edit state when loading a saved theme.
     * undefined on each color field means "not overridden — use preset value".
     */
    _overlayConfig?: {
        basePreset: string;
        primary?: TailwindColor;
        secondary?: TailwindColor;
        accent?: TailwindColor;
        neutral?: TailwindColor | 'none';
    };
    /** Optional original/source label for display or attribution */
    _sourceName?: string;
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

type VividnessPreset = 'playful' | 'vivid' | 'default' | 'professional' | 'elegant';
declare const VIVIDNESS_PRESETS: Record<VividnessPreset, number>;
/**
 * Scale the chroma (saturation) of every color token in a theme.
 *
 * Works on any Theme — factory-generated, TweakCN, or stolen.
 * All tokens are resolved to CSS oklch strings before scaling,
 * so the returned theme has no TailwindToken refs.
 *
 * @param factor  Multiplier on the chroma (C) component of every OKLCH color.
 *                1.0 = unchanged, 0.5 = half-saturated, 1.3 = more vivid.
 *                Clamped to [0, 0.4] to stay in gamut.
 *
 * @example
 * adjustVividness(oceanTheme, VIVIDNESS_PRESETS.elegant)   // muted
 * adjustVividness(oceanTheme, VIVIDNESS_PRESETS.playful)   // boosted
 */
declare function adjustVividness(theme: Theme, factor: number): Theme;

interface CreateThemeConfig {
    name: string;
    label: string;
    primary: TailwindColor;
    /**
     * Desaturated neutral family for backgrounds/surfaces/muted.
     * Omit (or undefined) to keep the chromatic look: all surfaces use the primary hue.
     */
    neutral?: TailwindColor;
    /**
     * Secondary accent color family.
     * Omit (or undefined) to auto-derive from primary (secondary = primary at -200/-800).
     */
    secondary?: TailwindColor;
    /**
     * Accent color family (badges, highlights).
     * Omit (or undefined) to auto-derive from secondary, then primary.
     */
    accent?: TailwindColor;
    radius?: string;
    fonts?: ThemeFonts;
    pattern?: ThemePattern;
    category?: string;
    overrides?: {
        light?: Partial<ThemeTokens>;
        dark?: Partial<ThemeTokens>;
    };
    /**
     * Chroma (saturation) multiplier applied after shade generation.
     * Accepts a numeric factor or a named preset.
     * 1.0 / 'default' = unchanged. 0.5 / 'elegant' = very muted. 1.3 / 'playful' = vivid.
     */
    vividness?: number | VividnessPreset;
}
/**
 * Easiest factory: pick color families, library picks shades intelligently.
 *
 * @example
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue' })
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', neutral: 'slate' })
 * createTheme({ name: 'ocean', label: 'Ocean', primary: 'blue', secondary: 'teal' })
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

interface ThemeValidationResult {
    valid: boolean;
    errors: string[];
}
/**
 * Validates a value as a well-formed StoredTheme.
 * Useful before passing untrusted data to storedThemeToCSS or deserializeTheme.
 */
declare function validateStoredTheme(stored: unknown): ThemeValidationResult;
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
declare const browserSnippet = "(function() {\n  var cs = getComputedStyle(document.documentElement);\n  var css = document.documentElement.style;\n  var keys = [\n    'background','foreground',\n    'card','card-foreground',\n    'popover','popover-foreground',\n    'primary','primary-foreground',\n    'secondary','secondary-foreground',\n    'muted','muted-foreground',\n    'accent','accent-foreground',\n    'destructive','destructive-foreground',\n    'border','input','ring',\n    'radius','font-sans','font-serif'\n  ];\n  var light = {}, dark = {};\n  keys.forEach(function(k) {\n    var v = (css.getPropertyValue('--' + k) || cs.getPropertyValue('--' + k)).trim();\n    if (v) light['--' + k] = v;\n  });\n  // Switch to dark mode temporarily to capture dark vars\n  var wasDark = document.documentElement.classList.contains('dark');\n  document.documentElement.classList.add('dark');\n  var cs2 = getComputedStyle(document.documentElement);\n  keys.forEach(function(k) {\n    var v = cs2.getPropertyValue('--' + k).trim();\n    if (v) dark['--' + k] = v;\n  });\n  if (!wasDark) document.documentElement.classList.remove('dark');\n  var out = JSON.stringify({ light: light, dark: dark }, null, 2);\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(out).then(function() {\n      console.log('%c cocuywind steal: copied to clipboard!', 'color: #4ade80; font-weight: bold;');\n    });\n  }\n  console.log(out);\n  return out;\n})();";
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
declare const tweakcnSnippet = "(async function() {\n  // Try to detect theme name from URL params or hash\n  var url = new URL(location.href);\n  var name = url.searchParams.get('theme') ||\n             url.searchParams.get('name') ||\n             url.hash.replace('#', '') ||\n             prompt('Enter tweakcn theme name (e.g. catppuccin):');\n  if (!name) { console.warn('No theme name provided.'); return; }\n  name = name.trim();\n  var apiUrl = 'https://tweakcn.com/r/themes/' + encodeURIComponent(name) + '.json';\n  console.log('%c cocuywind: fetching ' + apiUrl, 'color: #60a5fa;');\n  try {\n    var res = await fetch(apiUrl);\n    if (!res.ok) throw new Error('HTTP ' + res.status);\n    var item = await res.json();\n    var out = JSON.stringify(item, null, 2);\n    if (navigator.clipboard) {\n      await navigator.clipboard.writeText(out);\n      console.log('%c cocuywind: copied tweakcn theme JSON to clipboard!', 'color: #4ade80; font-weight: bold;');\n    }\n    console.log(out);\n    return item;\n  } catch(e) {\n    console.error('cocuywind steal-tweakcn:', e);\n  }\n})();";
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
    readonly SYSTEM_MONO: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace";
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
    readonly CORMORANT: "'Cormorant Garamond', Georgia, serif";
    readonly BODONI_MODA: "'Bodoni Moda', Georgia, serif";
    readonly CINZEL: "'Cinzel', Georgia, serif";
    readonly FRAUNCES: "'Fraunces', Georgia, serif";
    readonly INSTRUMENT_SERIF: "'Instrument Serif', Georgia, serif";
    readonly BEBAS_NEUE: "'Bebas Neue', system-ui, sans-serif";
    readonly SYNE: "'Syne', system-ui, sans-serif";
    readonly UNBOUNDED: "'Unbounded', system-ui, sans-serif";
    readonly ARCHIVO_BLACK: "'Archivo Black', system-ui, sans-serif";
    readonly RIGHTEOUS: "'Righteous', system-ui, sans-serif";
    readonly SPACE_GROTESK: "'Space Grotesk', system-ui, sans-serif";
    readonly JOSEFIN_SANS: "'Josefin Sans', system-ui, sans-serif";
    readonly RALEWAY: "'Raleway', system-ui, sans-serif";
    readonly JETBRAINS_MONO: "'JetBrains Mono', ui-monospace, monospace";
    readonly FIRA_CODE: "'Fira Code', ui-monospace, monospace";
    readonly SOURCE_CODE_PRO: "'Source Code Pro', ui-monospace, monospace";
    readonly IBM_PLEX_MONO: "'IBM Plex Mono', ui-monospace, monospace";
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
    backgroundPosition?: string;
}
/**
 * Generates CSS background pattern properties.
 * Returns CSS properties to apply directly — no class names, no dependencies.
 *
 * Inspired by pattern.css (MIT License).
 */
declare function generatePattern(config: ThemePattern): PatternStyle;

var amber$2 = "Warm Amber";
var bubblegum$2 = "Bubblegum";
var caffeine$2 = "Caffeine";
var candy$2 = "Candy";
var candyland$2 = "Candyland";
var catppuccin$2 = "Catppuccin";
var claude$5 = "Claude";
var claymorphism$2 = "Claymorphism";
var cyberpunk$2 = "Cyberpunk";
var forest$2 = "Forest Green";
var graphite$2 = "Graphite";
var indigo$2 = "Deep Indigo";
var midnight$2 = "Midnight";
var nature$2 = "Nature";
var notebook$2 = "Notebook";
var ocean$2 = "Ocean Blue";
var perpetuity$2 = "Perpetuity";
var rose$2 = "Rose Pink";
var sunset$2 = "Sunset Orange";
var supabase$2 = "Supabase";
var tangerine$2 = "Tangerine";
var teal$2 = "Teal";
var twitter$2 = "Twitter / X";
var carnival$2 = "Carnival";
var dusk$2 = "Dusk";
var glacier$2 = "Glacier";
var harvest$2 = "Harvest";
var lagoon$2 = "Lagoon";
var matcha$2 = "Matcha";
var obsidian$2 = "Obsidian";
var redwood$2 = "Redwood";
var sakura$2 = "Sakura";
var terracotta$2 = "Terracotta";
var tomato$2 = "Tomato";
var themeLabels_en = {
	amber: amber$2,
	"amber-minimal": "Amber Minimal",
	"amethyst-haze": "Amethyst Haze",
	"bold-tech": "Bold Tech",
	bubblegum: bubblegum$2,
	caffeine: caffeine$2,
	candy: candy$2,
	candyland: candyland$2,
	catppuccin: catppuccin$2,
	claude: claude$5,
	claymorphism: claymorphism$2,
	"clean-slate": "Clean Slate",
	"community-1-cmlwi5": "Cobalt Vista",
	"community-2077-cmledj": "2077",
	"community-3d-vintage-paper-cmm7uq": "3D Vintage Paper",
	"community-53-cmmp8a": "Copper Canyon",
	"community-a-cmmm59": "Lumen Orbit",
	"community-agora-events-cmlpmf": "Agora Events",
	"community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
	"community-alpine-cmlecl": "Alpine",
	"community-altar-v1-cmmadl": "Altar",
	"community-altar-v1-invert-cmmaeo": "Altar Invert",
	"community-amber-mono-2-0-cmlpw7": "Amber Mono",
	"community-apex-cmlf55": "Apex",
	"community-artefactory-cmm3xr": "Artefactory",
	"community-aryze-colors-2026-v2-cmmkfw": "Aryze Colors",
	"community-astrovista-cmlk70": "Astrovista",
	"community-autoblog-cmlpf8": "Autoblog",
	"community-bain-design-system-cmm5y6": "Bain Design System",
	"community-beso-colors-cmltho": "Beso Colors",
	"community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
	"community-better-light-theme-supabase-cmmdxi": "Better Light Supabase",
	"community-black-and-pink-cmliek": "Black And Pink",
	"community-black-cmmls5": "Black",
	"community-blue-cmmgxu": "Blue",
	"community-blue-orange-cmm5x6": "Blue Orange",
	"community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Blue Yellow Contrast",
	"community-bold-wikipedia-cmlmpb": "Bold Wikipedia",
	"community-brownie-cmlr31": "Brownie",
	"community-brownies-cmlkz0": "Brownies",
	"community-burgundy-cmle93": "Burgundy",
	"community-caffein-thheme-cmmhks": "Caffeine Theme",
	"community-carbon-ember-cmlf2h": "Carbon Ember",
	"community-caser-cmm6p0": "Caser",
	"community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
	"community-celestial-cmm720": "Celestial",
	"community-chalk": "Chalk",
	"community-claude-blu-2-cmmead": "Claude Blue",
	"community-claude-cmlm0b": "Claude",
	"community-claude-cmlr30": "Claude Plus",
	"community-claude-renk-paleti-v1-0-cmm9i1": "Claude Palette",
	"community-clinids-29-01-cmll4q": "Clinids",
	"community-course-app-cmmnnr": "Course App",
	"community-cwh-learning-cmlpfa": "Cwh Learning",
	"community-damon-cmlw7u": "Damon",
	"community-dark-forge-cmlf2k": "Dark Forge",
	"community-de-sarann-villa-cmmni6": "De Sarann Villa",
	"community-de-swiss-design-cmlure": "Swiss Design",
	"community-deep-purple-cmlh1j": "Deep Purple",
	"community-designbyte-cmlpf5": "Designbyte",
	"community-diby-cmlhru": "Diby",
	"community-diby-orange-cmlhrv": "Diby Orange",
	"community-domia-cmlz4g": "Domia",
	"community-efferd-cmmi9l": "Efferd",
	"community-emerald-cmli3u": "Emerald",
	"community-enterprise-mod-2-cmlva5": "Enterprise Mod",
	"community-eslinks-cmmaoe": "Eslinks",
	"community-essw-cmmphm": "Essw",
	"community-examdedo-cmlpf1": "Examdedo",
	"community-flat-pink-2-cmlieo": "Flat Pink",
	"community-gold-cmlf3x": "Gold",
	"community-greattings-cmlfwc": "Greetings",
	"community-green-with-yellow-theme-cmlewm": "Green Yellow",
	"community-greenbarbequeue-cmm9ae": "Green Barbeque",
	"community-hyper-red-cmliel": "Hyper Red",
	"community-ibk-theme-cmmb5d": "IBK Theme",
	"community-iconic-terminal-cmmhiu": "Iconic Terminal",
	"community-imhicihu-cmmp28": "Imhicihu",
	"community-india-cmlpfe": "India",
	"community-infoseer-cmmcv8": "Infoseer",
	"community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
	"community-itadori-yuji-cmmhf9": "Itadori Yuji",
	"community-jamaica-cmlh1c": "Jamaica",
	"community-japan-blues-cmmje1": "Japan Blues",
	"community-jknm-cmmrfz": "Jknm",
	"community-js-ts-advent-of-code-cmlr31": "Advent Of Code",
	"community-kedokteran-cmmc4g": "Medicine",
	"community-kupikod-cmleua": "Kupikod",
	"community-lara-cmm277": "Lara",
	"community-lastchat-cmmi2x": "Lastchat",
	"community-lavanda-cmmis1": "Lavender",
	"community-leadgen-cmle6z": "Leadgen",
	"community-light-green-cmlhfq": "Light Green",
	"community-lime-green-dhamaka-cmm7ct": "Lime Explosion",
	"community-limes-cmliem": "Limes",
	"community-logisticone-cmm0zk": "Logisticone",
	"community-lyte-cmml0p": "Lyte",
	"community-m-cmlgp0": "Echo Canyon",
	"community-magic-2-cmmsz6": "Magic",
	"community-magic-3-cmmt0a": "Magic Plus",
	"community-manga-vibe-cmlr32": "Manga Vibe",
	"community-meta-mask-geist-cmlf9r": "MetaMask Geist",
	"community-minimal-neutral-cmlr2z": "Minimal Neutral",
	"community-moss-cmmi1g": "Moss",
	"community-mt-cmmdl8": "Nimbus Circuit",
	"community-mx-brutalist-cmllfv": "MX Brutalist",
	"community-my-aweasome-theme-cmlxzf": "My Awesome Theme",
	"community-my-theme-01-cmmemx": "My Theme",
	"community-my-theme-cmm24g": "My Private Theme",
	"community-nlan-cmli81": "Nlan",
	"community-nubanck-cmlf40": "Nubank",
	"community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
	"community-offworld-cmlpw4": "Offworld",
	"community-oikwee-cmmb8l": "Oikwee",
	"community-old-school-cmlx21": "Old School",
	"community-openprofile-cmlpf8": "Openprofile",
	"community-orient-cmlzhg": "Orient",
	"community-orio-design-system-cmm1ri": "Orio Design System",
	"community-palm-cmlotm": "Palm",
	"community-papaya-cmmgxh": "Papaya",
	"community-party-rock-cmlqxf": "Party Rock",
	"community-pasteelement2-cmlpfh": "Paste Element",
	"community-playable-cmli0k": "Playable",
	"community-polaris-cmmr3s": "Polaris",
	"community-poppy-1-cmlmc0": "Poppy",
	"community-porfolio-theme-cmler0": "Portfolio Theme",
	"community-professional-theme-cmluaj": "Professional Theme",
	"community-purple-popins-cmlvfb": "Purple Poppins",
	"community-purple-rain-cmlh1l": "Purple Rain",
	"community-purple-soft-popins-cmlwku": "Purple Soft Poppins",
	"community-purples-cmlien": "Purples",
	"community-qrafthive-cmlk6w": "Qrafthive",
	"community-remedy-s-control-cmmszc": "Remedy Control",
	"community-resolveai-app-cmmchq": "Resolveai App",
	"community-retro-2-cmm2e2": "Modern Retro",
	"community-retro-cmm2d5": "Retro",
	"community-rewaff-cmmm3h": "Rewaff",
	"community-roboto-modern-cmlwxa": "Roboto Modern",
	"community-rose-pine-cmlwpk": "Rose Pine",
	"community-s3karo-cmlpf0": "S3karo",
	"community-sage-green-cmlf70": "Sage Green",
	"community-sakura-cmmghp": "Sakura",
	"community-sandstone-cmmi1p": "Sandstone",
	"community-service-hub-theme-cmmmrn": "Service Hub Theme",
	"community-sesi-theme-2-cmmmkb": "Sesi Theme",
	"community-shopify-red-cmmaba": "Shopify Red",
	"community-sky-cmmjha": "Sky",
	"community-something-cmmmy7": "Something",
	"community-spacelinear-cmm4ya": "Space Linear",
	"community-stella-cmm2mf": "Stella",
	"community-student-spacelab-network-1-cmmkfn": "Spacelab Network",
	"community-styrene-cmlybu": "Styrene",
	"community-styrenedark-cmly9d": "Styrene Dark",
	"community-sukuna-cmmhf8": "Sukuna",
	"community-sulav-theme-cmmf66": "Sulav Theme",
	"community-t2-cmm85y": "Sage Drift",
	"community-teal-hue-cmm599": "Teal Hue",
	"community-terminal-cmll24": "Terminal",
	"community-terminal-cmlmsn": "Terminal",
	"community-terminal-dark-russian-cmmljk": "Terminal Dark Russian",
	"community-terminal-muted-cmlvaz": "Terminal Muted",
	"community-tersk-cmmlwi": "Tersk",
	"community-test-cmlpfc": "Test",
	"community-theme-cmlpl5-cmlpl5": "Private Theme",
	"community-tiesen-cmliib": "Tiesen",
	"community-twitter-cmlznl": "Twitter",
	"community-uv-day-cmmfg9": "UV Day",
	"community-v2-cmlofg": "Ivory Studio",
	"community-vermillion-cmmtjp": "Vermillion",
	"community-vescrow-1-2-cmlhpn": "Vescrow",
	"community-violate-eye-cmm3eb": "Violet Eye",
	"community-vivid-sky-cmmjjm": "Vivid Sky",
	"community-vrai-delice-cmm3sr": "Vrai Delice",
	"community-vtron-cmlpfk": "VTRON",
	"community-whatsapp-cmmbmn": "WhatsApp",
	"community-woodforge-9-cmmhug": "Woodforge",
	"community-zen-inspired-theme-cmlm0c": "Zen Inspired",
	"cosmic-night": "Cosmic Night",
	cyberpunk: cyberpunk$2,
	"default": "Default",
	"doom-64": "Doom 64",
	"elegant-luxury": "Elegant Luxury",
	forest: forest$2,
	graphite: graphite$2,
	indigo: indigo$2,
	"kodama-grove": "Kodama Grove",
	midnight: midnight$2,
	"midnight-bloom": "Midnight Bloom",
	"mocha-mousse": "Mocha Mousse",
	"modern-minimal": "Modern Minimal",
	nature: nature$2,
	"neo-brutalism": "Neo Brutalism",
	"northern-lights": "Northern Lights",
	notebook: notebook$2,
	ocean: ocean$2,
	"ocean-breeze": "Ocean Breeze",
	"pastel-dreams": "Pastel Dreams",
	perpetuity: perpetuity$2,
	"quantum-rose": "Quantum Rose",
	"retro-arcade": "Retro Arcade",
	rose: rose$2,
	"solar-dusk": "Solar Dusk",
	"starry-night": "Starry Night",
	sunset: sunset$2,
	"sunset-horizon": "Sunset Horizon",
	supabase: supabase$2,
	"t3-chat": "T3 Chat",
	tangerine: tangerine$2,
	teal: teal$2,
	twitter: twitter$2,
	"vintage-paper": "Vintage Paper",
	"violet-bloom": "Violet Bloom",
	carnival: carnival$2,
	"community-chalk-cmmjgo": "Chalk",
	dusk: dusk$2,
	glacier: glacier$2,
	harvest: harvest$2,
	lagoon: lagoon$2,
	matcha: matcha$2,
	obsidian: obsidian$2,
	redwood: redwood$2,
	sakura: sakura$2,
	terracotta: terracotta$2,
	tomato: tomato$2,
	"tw-red": "Red",
	"tw-orange": "Orange",
	"tw-amber": "Amber",
	"tw-yellow": "Yellow",
	"tw-lime": "Lime",
	"tw-green": "Green",
	"tw-emerald": "Emerald",
	"tw-teal": "Teal",
	"tw-cyan": "Cyan",
	"tw-sky": "Sky",
	"tw-blue": "Blue",
	"tw-indigo": "Indigo",
	"tw-violet": "Violet",
	"tw-purple": "Purple",
	"tw-fuchsia": "Fuchsia",
	"tw-pink": "Pink",
	"tw-rose": "Rose"
};

var amber$1 = "Ámbar Cálido";
var bubblegum$1 = "Chicle";
var caffeine$1 = "Cafeína";
var candy$1 = "Caramelo";
var candyland$1 = "Mundo de Dulces";
var catppuccin$1 = "Catppuccin";
var claude$4 = "Claude";
var claymorphism$1 = "Claymorphism";
var cyberpunk$1 = "Cyberpunk";
var forest$1 = "Verde Bosque";
var graphite$1 = "Grafito";
var indigo$1 = "Índigo Profundo";
var midnight$1 = "Medianoche";
var nature$1 = "Naturaleza";
var notebook$1 = "Libreta";
var ocean$1 = "Azul Océano";
var perpetuity$1 = "Perpetuidad";
var rose$1 = "Rosa";
var sunset$1 = "Naranja Atardecer";
var supabase$1 = "Supabase";
var tangerine$1 = "Mandarina";
var teal$1 = "Verde Azulado";
var twitter$1 = "Twitter / X";
var carnival$1 = "Carnaval";
var dusk$1 = "Crepúsculo";
var glacier$1 = "Glaciar";
var harvest$1 = "Cosecha";
var lagoon$1 = "Laguna";
var matcha$1 = "Matcha";
var obsidian$1 = "Obsidiana";
var redwood$1 = "Secuoya";
var sakura$1 = "Sakura";
var terracotta$1 = "Terracota";
var tomato$1 = "Tomate";
var themeLabels_es = {
	amber: amber$1,
	"amber-minimal": "Ámbar Minimalista",
	"amethyst-haze": "Bruma de Amatista",
	"bold-tech": "Tecnología Audaz",
	bubblegum: bubblegum$1,
	caffeine: caffeine$1,
	candy: candy$1,
	candyland: candyland$1,
	catppuccin: catppuccin$1,
	claude: claude$4,
	claymorphism: claymorphism$1,
	"clean-slate": "Página en Blanco",
	"community-1-cmlwi5": "Vista Cobalto",
	"community-2077-cmledj": "2077",
	"community-3d-vintage-paper-cmm7uq": "Papel Vintage 3D",
	"community-53-cmmp8a": "Cañón de Cobre",
	"community-a-cmmm59": "Órbita de Luz",
	"community-agora-events-cmlpmf": "Eventos Ágora",
	"community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
	"community-alpine-cmlecl": "Alpino",
	"community-altar-v1-cmmadl": "ALTAR",
	"community-altar-v1-invert-cmmaeo": "ALTAR Invertido",
	"community-amber-mono-2-0-cmlpw7": "Ámbar Mono",
	"community-apex-cmlf55": "APEX",
	"community-artefactory-cmm3xr": "Artefactory",
	"community-aryze-colors-2026-v2-cmmkfw": "Colores Aryze",
	"community-astrovista-cmlk70": "Astrovista",
	"community-autoblog-cmlpf8": "Autoblog",
	"community-bain-design-system-cmm5y6": "Sistema de Diseño Bain",
	"community-beso-colors-cmltho": "Colores Beso",
	"community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
	"community-better-light-theme-supabase-cmmdxi": "Supabase Light Mejorado",
	"community-black-and-pink-cmliek": "Negro y Rosa",
	"community-black-cmmls5": "Negro",
	"community-blue-cmmgxu": "Azul",
	"community-blue-orange-cmm5x6": "Azul y Naranja",
	"community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Contraste Azul y Amarillo",
	"community-bold-wikipedia-cmlmpb": "Wikipedia Bold",
	"community-brownie-cmlr31": "Brownie",
	"community-brownies-cmlkz0": "Brownies",
	"community-burgundy-cmle93": "Borgoña",
	"community-caffein-thheme-cmmhks": "Tema Cafeína",
	"community-carbon-ember-cmlf2h": "Brasa de Carbón",
	"community-caser-cmm6p0": "Caser",
	"community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
	"community-celestial-cmm720": "Celestial",
	"community-chalk": "Tiza",
	"community-claude-blu-2-cmmead": "Claude Blue",
	"community-claude-cmlm0b": "Claude",
	"community-claude-cmlr30": "Claude Plus",
	"community-claude-renk-paleti-v1-0-cmm9i1": "Paleta Claude",
	"community-clinids-29-01-cmll4q": "Clinids",
	"community-course-app-cmmnnr": "App de Cursos",
	"community-cwh-learning-cmlpfa": "Cwh Learning",
	"community-damon-cmlw7u": "Damon",
	"community-dark-forge-cmlf2k": "Forja Oscura",
	"community-de-sarann-villa-cmmni6": "Villa De Sarann",
	"community-de-swiss-design-cmlure": "Diseño Suizo",
	"community-deep-purple-cmlh1j": "Púrpura Profundo",
	"community-designbyte-cmlpf5": "Designbyte",
	"community-diby-cmlhru": "Diby",
	"community-diby-orange-cmlhrv": "Diby Naranja",
	"community-domia-cmlz4g": "DOMIA",
	"community-efferd-cmmi9l": "Efferd",
	"community-emerald-cmli3u": "Esmeralda",
	"community-enterprise-mod-2-cmlva5": "Enterprise Mod",
	"community-eslinks-cmmaoe": "Eslinks",
	"community-essw-cmmphm": "Essw",
	"community-examdedo-cmlpf1": "Examdedo",
	"community-flat-pink-2-cmlieo": "Rosa Plano",
	"community-gold-cmlf3x": "Oro",
	"community-greattings-cmlfwc": "Saludos",
	"community-green-with-yellow-theme-cmlewm": "Verde y Amarillo",
	"community-greenbarbequeue-cmm9ae": "Parrilla Verde",
	"community-hyper-red-cmliel": "Hiper Rojo",
	"community-ibk-theme-cmmb5d": "Tema IBK",
	"community-iconic-terminal-cmmhiu": "Terminal Icónica",
	"community-imhicihu-cmmp28": "Imhicihu",
	"community-india-cmlpfe": "India",
	"community-infoseer-cmmcv8": "Infoseer",
	"community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
	"community-itadori-yuji-cmmhf9": "Itadori Yuji",
	"community-jamaica-cmlh1c": "Jamaica",
	"community-japan-blues-cmmje1": "Azules de Japón",
	"community-jknm-cmmrfz": "Jknm",
	"community-js-ts-advent-of-code-cmlr31": "Advent of Code",
	"community-kedokteran-cmmc4g": "Medicina",
	"community-kupikod-cmleua": "Kupikod",
	"community-lara-cmm277": "Lara",
	"community-lastchat-cmmi2x": "Lastchat",
	"community-lavanda-cmmis1": "Lavanda",
	"community-leadgen-cmle6z": "Generación de Leads",
	"community-light-green-cmlhfq": "Verde Claro",
	"community-lime-green-dhamaka-cmm7ct": "Explosión Lima",
	"community-limes-cmliem": "Limas",
	"community-logisticone-cmm0zk": "Logisticone",
	"community-lyte-cmml0p": "Lyte",
	"community-m-cmlgp0": "Eco del Cañón",
	"community-magic-2-cmmsz6": "Magia",
	"community-magic-3-cmmt0a": "Magia Plus",
	"community-manga-vibe-cmlr32": "Estilo Manga",
	"community-meta-mask-geist-cmlf9r": "MetaMask Geist",
	"community-minimal-neutral-cmlr2z": "Neutral Minimalista",
	"community-moss-cmmi1g": "Musgo",
	"community-mt-cmmdl8": "Circuito Nimbus",
	"community-mx-brutalist-cmllfv": "MX Brutalista",
	"community-my-aweasome-theme-cmlxzf": "Mi Increíble Tema",
	"community-my-theme-01-cmmemx": "Mi Tema",
	"community-my-theme-cmm24g": "Mi Tema Personal",
	"community-nlan-cmli81": "NLAN",
	"community-nubanck-cmlf40": "Nubank",
	"community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
	"community-offworld-cmlpw4": "Fuera del Mundo",
	"community-oikwee-cmmb8l": "Oikwee",
	"community-old-school-cmlx21": "Estilo Retro",
	"community-openprofile-cmlpf8": "Openprofile",
	"community-orient-cmlzhg": "Oriente",
	"community-orio-design-system-cmm1ri": "Orio Design System",
	"community-palm-cmlotm": "Palmera",
	"community-papaya-cmmgxh": "Papaya",
	"community-party-rock-cmlqxf": "Party Rock",
	"community-pasteelement2-cmlpfh": "Pasteelement",
	"community-playable-cmli0k": "Jugable",
	"community-polaris-cmmr3s": "Polaris",
	"community-poppy-1-cmlmc0": "Amapola",
	"community-porfolio-theme-cmler0": "Tema de Portafolio",
	"community-professional-theme-cmluaj": "Tema Profesional",
	"community-purple-popins-cmlvfb": "Púrpura Poppins",
	"community-purple-rain-cmlh1l": "Lluvia Púrpura",
	"community-purple-soft-popins-cmlwku": "Púrpura Suave",
	"community-purples-cmlien": "Tonos Púrpura",
	"community-qrafthive-cmlk6w": "Qrafthive",
	"community-remedy-s-control-cmmszc": "Control de Remedy",
	"community-resolveai-app-cmmchq": "App Resolveai",
	"community-retro-2-cmm2e2": "Retro Moderno",
	"community-retro-cmm2d5": "Retro",
	"community-rewaff-cmmm3h": "Rewaff",
	"community-roboto-modern-cmlwxa": "Roboto Moderno",
	"community-rose-pine-cmlwpk": "Rose Pine",
	"community-s3karo-cmlpf0": "S3karo",
	"community-sage-green-cmlf70": "Verde Salvia",
	"community-sakura-cmmghp": "Sakura",
	"community-sandstone-cmmi1p": "Arenisca",
	"community-service-hub-theme-cmmmrn": "Centro de Servicio",
	"community-sesi-theme-2-cmmmkb": "Tema SESI",
	"community-shopify-red-cmmaba": "Shopify Rojo",
	"community-sky-cmmjha": "Cielo",
	"community-something-cmmmy7": "Algo",
	"community-spacelinear-cmm4ya": "Espacio Lineal",
	"community-stella-cmm2mf": "Stella",
	"community-student-spacelab-network-1-cmmkfn": "Red Spacelab",
	"community-styrene-cmlybu": "Estireno",
	"community-styrenedark-cmly9d": "Estireno Oscuro",
	"community-sukuna-cmmhf8": "Sukuna",
	"community-sulav-theme-cmmf66": "Tema Sulav",
	"community-t2-cmm85y": "Deriva de Salvia",
	"community-teal-hue-cmm599": "Tono Verde Azulado",
	"community-terminal-cmll24": "Terminal",
	"community-terminal-cmlmsn": "Terminal",
	"community-terminal-dark-russian-cmmljk": "Terminal Ruso Oscuro",
	"community-terminal-muted-cmlvaz": "Terminal Atenuado",
	"community-tersk-cmmlwi": "Tersk",
	"community-test-cmlpfc": "Prueba",
	"community-theme-cmlpl5-cmlpl5": "Tema Personal",
	"community-tiesen-cmliib": "Tiesen",
	"community-twitter-cmlznl": "Twitter",
	"community-uv-day-cmmfg9": "Día UV",
	"community-v2-cmlofg": "Estudio Marfil",
	"community-vermillion-cmmtjp": "Bermellón",
	"community-vescrow-1-2-cmlhpn": "Vescrow",
	"community-violate-eye-cmm3eb": "Ojo Violeta",
	"community-vivid-sky-cmmjjm": "Cielo Vívido",
	"community-vrai-delice-cmm3sr": "Vrai Delice",
	"community-vtron-cmlpfk": "VTRON",
	"community-whatsapp-cmmbmn": "WhatsApp",
	"community-woodforge-9-cmmhug": "Forja de Madera",
	"community-zen-inspired-theme-cmlm0c": "Inspiración Zen",
	"cosmic-night": "Noche Cósmica",
	cyberpunk: cyberpunk$1,
	"default": "Predeterminado",
	"doom-64": "Doom 64",
	"elegant-luxury": "Lujo Elegante",
	forest: forest$1,
	graphite: graphite$1,
	indigo: indigo$1,
	"kodama-grove": "Bosque Kodama",
	midnight: midnight$1,
	"midnight-bloom": "Flor de Medianoche",
	"mocha-mousse": "Mousse de Moka",
	"modern-minimal": "Moderno Minimalista",
	nature: nature$1,
	"neo-brutalism": "Neobrutalismo",
	"northern-lights": "Aurora Boreal",
	notebook: notebook$1,
	ocean: ocean$1,
	"ocean-breeze": "Brisa Marina",
	"pastel-dreams": "Sueños Pastel",
	perpetuity: perpetuity$1,
	"quantum-rose": "Rosa Cuántico",
	"retro-arcade": "Arcade Retro",
	rose: rose$1,
	"solar-dusk": "Ocaso Solar",
	"starry-night": "Noche Estrellada",
	sunset: sunset$1,
	"sunset-horizon": "Horizonte al Atardecer",
	supabase: supabase$1,
	"t3-chat": "T3 Chat",
	tangerine: tangerine$1,
	teal: teal$1,
	twitter: twitter$1,
	"vintage-paper": "Papel Vintage",
	"violet-bloom": "Flor Violeta",
	carnival: carnival$1,
	"community-chalk-cmmjgo": "Tiza",
	dusk: dusk$1,
	glacier: glacier$1,
	harvest: harvest$1,
	lagoon: lagoon$1,
	matcha: matcha$1,
	obsidian: obsidian$1,
	redwood: redwood$1,
	sakura: sakura$1,
	terracotta: terracotta$1,
	tomato: tomato$1,
	"tw-red": "Rojo",
	"tw-orange": "Naranja",
	"tw-amber": "Ámbar",
	"tw-yellow": "Amarillo",
	"tw-lime": "Lima",
	"tw-green": "Verde",
	"tw-emerald": "Esmeralda",
	"tw-teal": "Verde Azulado",
	"tw-cyan": "Cian",
	"tw-sky": "Azul Cielo",
	"tw-blue": "Azul",
	"tw-indigo": "Índigo",
	"tw-violet": "Violeta",
	"tw-purple": "Púrpura",
	"tw-fuchsia": "Fucsia",
	"tw-pink": "Rosa",
	"tw-rose": "Rosa"
};

var amber = "Âmbar Quente";
var bubblegum = "Chiclete";
var caffeine = "Cafeína";
var candy = "Doce";
var candyland = "Reino dos Doces";
var catppuccin = "Catppuccin";
var claude$3 = "Claude";
var claymorphism = "Claymorphism";
var cyberpunk = "Cyberpunk";
var forest = "Verde Floresta";
var graphite = "Grafite";
var indigo = "Índigo Profundo";
var midnight = "Meia-noite";
var nature = "Natureza";
var notebook = "Caderno";
var ocean = "Azul Oceano";
var perpetuity = "Perpetuidade";
var rose = "Rosa";
var sunset = "Laranja Pôr do Sol";
var supabase = "Supabase";
var tangerine = "Tangerina";
var teal = "Ciano";
var twitter = "Twitter / X";
var carnival = "Carnaval";
var dusk = "Crepúsculo";
var glacier = "Glaciar";
var harvest = "Colheita";
var lagoon = "Lagoa";
var matcha = "Matcha";
var obsidian = "Obsidiana";
var redwood = "Sequoia";
var sakura = "Sakura";
var terracotta = "Terracota";
var tomato = "Tomate";
var themeLabels_pt = {
	amber: amber,
	"amber-minimal": "Âmbar Minimalista",
	"amethyst-haze": "Névoa de Ametista",
	"bold-tech": "Tecnologia Arrojada",
	bubblegum: bubblegum,
	caffeine: caffeine,
	candy: candy,
	candyland: candyland,
	catppuccin: catppuccin,
	claude: claude$3,
	claymorphism: claymorphism,
	"clean-slate": "Página Limpa",
	"community-1-cmlwi5": "Vista Cobalto",
	"community-2077-cmledj": "2077",
	"community-3d-vintage-paper-cmm7uq": "Papel Vintage 3D",
	"community-53-cmmp8a": "Cânion de Cobre",
	"community-a-cmmm59": "Órbita de Luz",
	"community-agora-events-cmlpmf": "Eventos Ágora",
	"community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
	"community-alpine-cmlecl": "Alpino",
	"community-altar-v1-cmmadl": "ALTAR",
	"community-altar-v1-invert-cmmaeo": "ALTAR Invertido",
	"community-amber-mono-2-0-cmlpw7": "Âmbar Mono",
	"community-apex-cmlf55": "APEX",
	"community-artefactory-cmm3xr": "Artefactory",
	"community-aryze-colors-2026-v2-cmmkfw": "Cores Aryze",
	"community-astrovista-cmlk70": "Astrovista",
	"community-autoblog-cmlpf8": "Autoblog",
	"community-bain-design-system-cmm5y6": "Sistema de Design Bain",
	"community-beso-colors-cmltho": "Cores Beso",
	"community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
	"community-better-light-theme-supabase-cmmdxi": "Supabase Light Melhorado",
	"community-black-and-pink-cmliek": "Preto e Rosa",
	"community-black-cmmls5": "Preto",
	"community-blue-cmmgxu": "Azul",
	"community-blue-orange-cmm5x6": "Azul e Laranja",
	"community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Contraste Azul e Amarelo",
	"community-bold-wikipedia-cmlmpb": "Wikipedia Bold",
	"community-brownie-cmlr31": "Brownie",
	"community-brownies-cmlkz0": "Brownies",
	"community-burgundy-cmle93": "Borgonha",
	"community-caffein-thheme-cmmhks": "Tema Cafeína",
	"community-carbon-ember-cmlf2h": "Brasa de Carvão",
	"community-caser-cmm6p0": "Caser",
	"community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
	"community-celestial-cmm720": "Celestial",
	"community-chalk": "Giz",
	"community-claude-blu-2-cmmead": "Claude Blue",
	"community-claude-cmlm0b": "Claude",
	"community-claude-cmlr30": "Claude Plus",
	"community-claude-renk-paleti-v1-0-cmm9i1": "Paleta Claude",
	"community-clinids-29-01-cmll4q": "Clinids",
	"community-course-app-cmmnnr": "App de Cursos",
	"community-cwh-learning-cmlpfa": "Cwh Learning",
	"community-damon-cmlw7u": "Damon",
	"community-dark-forge-cmlf2k": "Forja Sombria",
	"community-de-sarann-villa-cmmni6": "Villa De Sarann",
	"community-de-swiss-design-cmlure": "Design Suíço",
	"community-deep-purple-cmlh1j": "Roxo Profundo",
	"community-designbyte-cmlpf5": "Designbyte",
	"community-diby-cmlhru": "Diby",
	"community-diby-orange-cmlhrv": "Diby Laranja",
	"community-domia-cmlz4g": "DOMIA",
	"community-efferd-cmmi9l": "Efferd",
	"community-emerald-cmli3u": "Esmeralda",
	"community-enterprise-mod-2-cmlva5": "Enterprise Mod",
	"community-eslinks-cmmaoe": "Eslinks",
	"community-essw-cmmphm": "Essw",
	"community-examdedo-cmlpf1": "Examdedo",
	"community-flat-pink-2-cmlieo": "Rosa Flat",
	"community-gold-cmlf3x": "Ouro",
	"community-greattings-cmlfwc": "Saudações",
	"community-green-with-yellow-theme-cmlewm": "Verde e Amarelo",
	"community-greenbarbequeue-cmm9ae": "Churrasco Verde",
	"community-hyper-red-cmliel": "Hiper Vermelho",
	"community-ibk-theme-cmmb5d": "Tema IBK",
	"community-iconic-terminal-cmmhiu": "Terminal Icônico",
	"community-imhicihu-cmmp28": "Imhicihu",
	"community-india-cmlpfe": "Índia",
	"community-infoseer-cmmcv8": "Infoseer",
	"community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
	"community-itadori-yuji-cmmhf9": "Itadori Yuji",
	"community-jamaica-cmlh1c": "Jamaica",
	"community-japan-blues-cmmje1": "Azuis do Japão",
	"community-jknm-cmmrfz": "Jknm",
	"community-js-ts-advent-of-code-cmlr31": "Advent of Code",
	"community-kedokteran-cmmc4g": "Medicina",
	"community-kupikod-cmleua": "Kupikod",
	"community-lara-cmm277": "Lara",
	"community-lastchat-cmmi2x": "Lastchat",
	"community-lavanda-cmmis1": "Lavanda",
	"community-leadgen-cmle6z": "Geração de Leads",
	"community-light-green-cmlhfq": "Verde Claro",
	"community-lime-green-dhamaka-cmm7ct": "Explosão Lima",
	"community-limes-cmliem": "Limas",
	"community-logisticone-cmm0zk": "Logisticone",
	"community-lyte-cmml0p": "Lyte",
	"community-m-cmlgp0": "Eco do Cânion",
	"community-magic-2-cmmsz6": "Magia",
	"community-magic-3-cmmt0a": "Magia Plus",
	"community-manga-vibe-cmlr32": "Vibe Manga",
	"community-meta-mask-geist-cmlf9r": "MetaMask Geist",
	"community-minimal-neutral-cmlr2z": "Neutro Minimalista",
	"community-moss-cmmi1g": "Musgo",
	"community-mt-cmmdl8": "Circuito Nimbus",
	"community-mx-brutalist-cmllfv": "MX Brutalista",
	"community-my-aweasome-theme-cmlxzf": "Meu Tema Incrível",
	"community-my-theme-01-cmmemx": "Meu Tema",
	"community-my-theme-cmm24g": "Meu Tema Pessoal",
	"community-nlan-cmli81": "NLAN",
	"community-nubanck-cmlf40": "Nubank",
	"community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
	"community-offworld-cmlpw4": "Fora do Mundo",
	"community-oikwee-cmmb8l": "Oikwee",
	"community-old-school-cmlx21": "Old School",
	"community-openprofile-cmlpf8": "Openprofile",
	"community-orient-cmlzhg": "Oriente",
	"community-orio-design-system-cmm1ri": "Orio Design System",
	"community-palm-cmlotm": "Palmeira",
	"community-papaya-cmmgxh": "Mamão",
	"community-party-rock-cmlqxf": "Party Rock",
	"community-pasteelement2-cmlpfh": "Pasteelement",
	"community-playable-cmli0k": "Jogável",
	"community-polaris-cmmr3s": "Polaris",
	"community-poppy-1-cmlmc0": "Papoula",
	"community-porfolio-theme-cmler0": "Tema de Portfólio",
	"community-professional-theme-cmluaj": "Tema Profissional",
	"community-purple-popins-cmlvfb": "Roxo Poppins",
	"community-purple-rain-cmlh1l": "Chuva Roxa",
	"community-purple-soft-popins-cmlwku": "Roxo Suave",
	"community-purples-cmlien": "Tons de Roxo",
	"community-qrafthive-cmlk6w": "Qrafthive",
	"community-remedy-s-control-cmmszc": "Controle da Remedy",
	"community-resolveai-app-cmmchq": "App Resolveai",
	"community-retro-2-cmm2e2": "Retro Moderno",
	"community-retro-cmm2d5": "Retro",
	"community-rewaff-cmmm3h": "Rewaff",
	"community-roboto-modern-cmlwxa": "Roboto Moderno",
	"community-rose-pine-cmlwpk": "Rose Pine",
	"community-s3karo-cmlpf0": "S3karo",
	"community-sage-green-cmlf70": "Verde Sálvia",
	"community-sakura-cmmghp": "Sakura",
	"community-sandstone-cmmi1p": "Arenito",
	"community-service-hub-theme-cmmmrn": "Central de Serviço",
	"community-sesi-theme-2-cmmmkb": "Tema SESI",
	"community-shopify-red-cmmaba": "Shopify Vermelho",
	"community-sky-cmmjha": "Céu",
	"community-something-cmmmy7": "Algo",
	"community-spacelinear-cmm4ya": "Espaço Linear",
	"community-stella-cmm2mf": "Stella",
	"community-student-spacelab-network-1-cmmkfn": "Rede Spacelab",
	"community-styrene-cmlybu": "Estireno",
	"community-styrenedark-cmly9d": "Estireno Escuro",
	"community-sukuna-cmmhf8": "Sukuna",
	"community-sulav-theme-cmmf66": "Tema Sulav",
	"community-t2-cmm85y": "Deriva de Sálvia",
	"community-teal-hue-cmm599": "Tom de Ciano",
	"community-terminal-cmll24": "Terminal",
	"community-terminal-cmlmsn": "Terminal",
	"community-terminal-dark-russian-cmmljk": "Terminal Russo Escuro",
	"community-terminal-muted-cmlvaz": "Terminal Suave",
	"community-tersk-cmmlwi": "Tersk",
	"community-test-cmlpfc": "Teste",
	"community-theme-cmlpl5-cmlpl5": "Tema Pessoal",
	"community-tiesen-cmliib": "Tiesen",
	"community-twitter-cmlznl": "Twitter",
	"community-uv-day-cmmfg9": "Dia UV",
	"community-v2-cmlofg": "Estúdio Marfim",
	"community-vermillion-cmmtjp": "Vermelhão",
	"community-vescrow-1-2-cmlhpn": "Vescrow",
	"community-violate-eye-cmm3eb": "Olho Violeta",
	"community-vivid-sky-cmmjjm": "Céu Vívido",
	"community-vrai-delice-cmm3sr": "Vrai Delice",
	"community-vtron-cmlpfk": "VTRON",
	"community-whatsapp-cmmbmn": "WhatsApp",
	"community-woodforge-9-cmmhug": "Forja de Madeira",
	"community-zen-inspired-theme-cmlm0c": "Inspiração Zen",
	"cosmic-night": "Noite Cósmica",
	cyberpunk: cyberpunk,
	"default": "Padrão",
	"doom-64": "Doom 64",
	"elegant-luxury": "Luxo Elegante",
	forest: forest,
	graphite: graphite,
	indigo: indigo,
	"kodama-grove": "Bosque Kodama",
	midnight: midnight,
	"midnight-bloom": "Flor da Meia-noite",
	"mocha-mousse": "Mousse de Mocha",
	"modern-minimal": "Moderno Minimalista",
	nature: nature,
	"neo-brutalism": "Neobrutalismo",
	"northern-lights": "Aurora Boreal",
	notebook: notebook,
	ocean: ocean,
	"ocean-breeze": "Brisa do Mar",
	"pastel-dreams": "Sonhos Pastel",
	perpetuity: perpetuity,
	"quantum-rose": "Rosa Quântica",
	"retro-arcade": "Arcade Retro",
	rose: rose,
	"solar-dusk": "Crepúsculo Solar",
	"starry-night": "Noite Estrelada",
	sunset: sunset,
	"sunset-horizon": "Horizonte Pôr do Sol",
	supabase: supabase,
	"t3-chat": "T3 Chat",
	tangerine: tangerine,
	teal: teal,
	twitter: twitter,
	"vintage-paper": "Papel Vintage",
	"violet-bloom": "Flor Violeta",
	carnival: carnival,
	"community-chalk-cmmjgo": "Giz",
	dusk: dusk,
	glacier: glacier,
	harvest: harvest,
	lagoon: lagoon,
	matcha: matcha,
	obsidian: obsidian,
	redwood: redwood,
	sakura: sakura,
	terracotta: terracotta,
	tomato: tomato,
	"tw-red": "Vermelho",
	"tw-orange": "Laranja",
	"tw-amber": "Âmbar",
	"tw-yellow": "Amarelo",
	"tw-lime": "Lima",
	"tw-green": "Verde",
	"tw-emerald": "Esmeralda",
	"tw-teal": "Ciano",
	"tw-cyan": "Ciano Claro",
	"tw-sky": "Azul Céu",
	"tw-blue": "Azul",
	"tw-indigo": "Índigo",
	"tw-violet": "Violeta",
	"tw-purple": "Roxo",
	"tw-fuchsia": "Fúcsia",
	"tw-pink": "Rosa",
	"tw-rose": "Rosa"
};

var all$2 = "All";
var curated$2 = "Featured";
var basic$2 = "Basic";
var claude$2 = "Studio";
var tweakcn$2 = "Signature";
var community$2 = "Community";
var themeCategoryLabels_en = {
	all: all$2,
	curated: curated$2,
	basic: basic$2,
	claude: claude$2,
	tweakcn: tweakcn$2,
	community: community$2
};

var all$1 = "Todos";
var curated$1 = "Destacados";
var basic$1 = "Básicos";
var claude$1 = "Studio";
var tweakcn$1 = "Signature";
var community$1 = "Comunidad";
var themeCategoryLabels_es = {
	all: all$1,
	curated: curated$1,
	basic: basic$1,
	claude: claude$1,
	tweakcn: tweakcn$1,
	community: community$1
};

var all = "Todos";
var curated = "Destaques";
var basic = "Básicos";
var claude = "Studio";
var tweakcn = "Signature";
var community = "Comunidade";
var themeCategoryLabels_pt = {
	all: all,
	curated: curated,
	basic: basic,
	claude: claude,
	tweakcn: tweakcn,
	community: community
};

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

declare const tailwindBasicThemes: Theme[];

declare const claudeThemes: Theme[];

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

declare const communityThemes: Theme[];

/** All themes — 10 curated built-in + 17 Tailwind basic + 10 Claude + 37 tweakcn */
declare const themes: Theme[];

export { type ColorToken, type CreateThemeConfig, FONTS, type FontFamily, type FontKey, type PatternStyle, type PatternType, type RawColor, type ResolvedTokens, type StealMeta, type StoredTheme, TAILWIND_COLORS, type TailwindColor, type TailwindShade, type TailwindToken, type Theme, type ThemeFonts, type ThemePattern, type ThemeTokens, type ThemeValidationResult, type TweakCNRegistryEntry, type TweakCNThemeItem, VIVIDNESS_PRESETS, type VividnessPreset, adjustVividness, amberMinimalTheme, amberTheme, amethystHazeTheme, boldTechTheme, bookmarkletUrl, browserSnippet, bubblegumTheme, builtinThemes, caffeineTheme, candyTheme, candylandTheme, catppuccinTheme, claudeTheme, claudeThemes, claymorphismTheme, cleanSlateTheme, communityThemes, cosmicNightTheme, createTheme, cyberpunkTheme, defaultTheme, defineTheme, deserializeTheme, doom64Theme, elegantLuxuryTheme, extendTheme, fetchAllTweakCNThemes, fetchTweakCNRegistry, fetchTweakCNTheme, forestTheme, generateCSS, generatePattern, generateThemeVariables, googleFontsUrl, graphiteTheme, indigoTheme, kodamaGroveTheme, midnightBloomTheme, midnightTheme, mochaMousseTheme, modernMinimalTheme, natureTheme, neoBrutalismTheme, northernLightsTheme, notebookTheme, oceanBreezeTheme, oceanTheme, pastelDreamsTheme, perpetuityTheme, quantumRoseTheme, raw, resolveColor, resolveTokens, retroArcadeTheme, roseTheme, serializeTheme, solarDuskTheme, starryNightTheme, storedThemeToCSS, sunsetHorizonTheme, sunsetTheme, supabaseTheme, t3ChatTheme, tailwindBasicThemes, tangerineTheme, tealTheme, themeCategoryLabels_en as themeCategoryLabelsEn, themeCategoryLabels_es as themeCategoryLabelsEs, themeCategoryLabels_pt as themeCategoryLabelsPt, themeFromCSS, themeFromCSSVars, themeFromSnippetOutput, themeFromTweakCNItem, themeLabels_en as themeLabelsEn, themeLabels_es as themeLabelsEs, themeLabels_pt as themeLabelsPt, themes, tweakcnBookmarkletUrl, tweakcnSnippet, tweakcnThemes, twitterTheme, validateStoredTheme, vintagePaperTheme, violetBloomTheme };
