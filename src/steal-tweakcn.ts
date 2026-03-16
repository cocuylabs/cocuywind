import type { StoredTheme, ThemeFonts, ResolvedTokens } from './types.js'
import type { StealMeta } from './steal.js'

// ─── TweakCN registry types ───────────────────────────────────────────────────

/**
 * Shape of a single theme from the tweakcn public registry API.
 * Endpoint: GET https://tweakcn.com/r/themes/{name}.json
 */
export interface TweakCNThemeItem {
  name: string
  title: string
  cssVars: {
    /** Light-mode CSS custom property values (keys include leading --) */
    light: Record<string, string>
    /** Dark-mode CSS custom property values (keys include leading --) */
    dark: Record<string, string>
    /** Shared vars: --radius, --font-sans, --font-serif, --font-mono */
    theme?: Record<string, string>
  }
}

/**
 * Shape of a single entry in the tweakcn registry index.
 * Endpoint: GET https://tweakcn.com/r/themes/registry.json
 */
export interface TweakCNRegistryEntry {
  name: string
  title: string
  /** Registry item type — always "theme" for theme entries */
  type?: string
}

// ─── Core 19 token names we care about ───────────────────────────────────────

const COLOR_VARS = [
  'background', 'foreground',
  'card', 'card-foreground',
  'popover', 'popover-foreground',
  'primary', 'primary-foreground',
  'secondary', 'secondary-foreground',
  'muted', 'muted-foreground',
  'accent', 'accent-foreground',
  'destructive', 'destructive-foreground',
  'border', 'input', 'ring',
] as const

function kebabToCamel(s: string): string {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function normalizeColor(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

/** Extract our 19 core tokens from a flat CSS var map (keys may include leading --) */
function extractTokens(vars: Record<string, string>): ResolvedTokens {
  const result: ResolvedTokens = {}
  for (const varName of COLOR_VARS) {
    const value = vars[`--${varName}`] ?? vars[varName]
    if (value) {
      result[kebabToCamel(varName)] = normalizeColor(value)
    }
  }
  return result
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Convert a tweakcn registry item (the JSON returned by their public API) into
 * a `StoredTheme`.  Only the 19 shadcn/ui-compatible color tokens are extracted;
 * chart-*, sidebar-*, shadow-*, and spacing vars are intentionally ignored.
 *
 * @example
 * const json = await fetch('https://tweakcn.com/r/themes/catppuccin.json').then(r => r.json())
 * const stored = themeFromTweakCNItem(json)
 */
export function themeFromTweakCNItem(
  item: TweakCNThemeItem,
  meta?: StealMeta,
): StoredTheme {
  const lightTokens = extractTokens(item.cssVars.light)
  const darkTokens  = extractTokens(item.cssVars.dark)

  // Fall back to light if dark object was empty
  const darkResolved = Object.keys(darkTokens).length > 0 ? darkTokens : { ...lightTokens }

  // Extract shared/theme vars (radius, fonts)
  const themeVars: Record<string, string> = item.cssVars.theme ?? {}
  // Also check light vars as fallback for radius/fonts
  const combined = { ...item.cssVars.light, ...themeVars }

  const radius = (combined['--radius'] ?? combined['radius'] ?? '0.5rem').trim()

  const fonts: ThemeFonts = {}
  const bodyVal    = combined['--font-sans']  ?? combined['font-sans']
  const headingVal = combined['--font-serif'] ?? combined['font-serif']
  if (bodyVal)    fonts.body    = bodyVal.trim()
  if (headingVal) fonts.heading = headingVal.trim()

  return {
    name:    meta?.name  ?? item.name,
    label:   meta?.label ?? item.title,
    styles:  { light: lightTokens, dark: darkResolved },
    fonts,
    pattern: { type: 'none' },
    radius,
    _source: 'custom',
  }
}

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
export async function fetchTweakCNTheme(
  themeName: string,
  meta?: StealMeta,
): Promise<StoredTheme> {
  const url = `https://tweakcn.com/r/themes/${encodeURIComponent(themeName)}.json`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`tweakcn: failed to fetch theme "${themeName}" (HTTP ${res.status})`)
  }
  const item = await res.json() as TweakCNThemeItem
  return themeFromTweakCNItem(item, meta)
}

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
export async function fetchTweakCNRegistry(): Promise<TweakCNRegistryEntry[]> {
  const url = 'https://tweakcn.com/r/themes/registry.json'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`tweakcn: failed to fetch registry (HTTP ${res.status})`)
  }
  const data = await res.json()
  // Registry may be an array of entries or wrapped in an object
  const entries: unknown[] = Array.isArray(data) ? data : (data as { themes?: unknown[] }).themes ?? []
  return entries as TweakCNRegistryEntry[]
}

/**
 * Fetch every theme from tweakcn and return them all as `StoredTheme` objects.
 * Makes N+1 HTTP requests (1 for registry + 1 per theme).
 * Prefer `fetchTweakCNTheme` when you only need a specific theme.
 *
 * @example
 * const all = await fetchAllTweakCNThemes()
 * // → StoredTheme[] — ready to spread into your themes array
 */
export async function fetchAllTweakCNThemes(): Promise<StoredTheme[]> {
  const registry = await fetchTweakCNRegistry()
  const themeEntries = registry.filter(e => !e.type || e.type === 'theme' || e.type === 'registry:theme')
  const results = await Promise.allSettled(
    themeEntries.map(entry => fetchTweakCNTheme(entry.name))
  )
  return results
    .filter((r): r is PromiseFulfilledResult<StoredTheme> => r.status === 'fulfilled')
    .map(r => r.value)
}

// ─── Browser snippet ──────────────────────────────────────────────────────────

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
export const tweakcnSnippet = /* js */`(async function() {
  // Try to detect theme name from URL params or hash
  var url = new URL(location.href);
  var name = url.searchParams.get('theme') ||
             url.searchParams.get('name') ||
             url.hash.replace('#', '') ||
             prompt('Enter tweakcn theme name (e.g. catppuccin):');
  if (!name) { console.warn('No theme name provided.'); return; }
  name = name.trim();
  var apiUrl = 'https://tweakcn.com/r/themes/' + encodeURIComponent(name) + '.json';
  console.log('%c tailtheme: fetching ' + apiUrl, 'color: #60a5fa;');
  try {
    var res = await fetch(apiUrl);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var item = await res.json();
    var out = JSON.stringify(item, null, 2);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(out);
      console.log('%c tailtheme: copied tweakcn theme JSON to clipboard!', 'color: #4ade80; font-weight: bold;');
    }
    console.log(out);
    return item;
  } catch(e) {
    console.error('tailtheme steal-tweakcn:', e);
  }
})();`

/**
 * Bookmarklet URL version of `tweakcnSnippet`.
 * Drag to bookmarks bar — clicking it on tweakcn.com fetches the current theme.
 */
export const tweakcnBookmarkletUrl = `javascript:${encodeURIComponent(tweakcnSnippet)}`
