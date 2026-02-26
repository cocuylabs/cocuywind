import type { StoredTheme, ThemeFonts, ThemePattern, ResolvedTokens } from './types.js'

// ─── CSS var name → StoredTheme key mapping ───────────────────────────────────

/** All 19 shadcn/ui-compatible CSS variable names */
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

/** kebab-case CSS var suffix → camelCase StoredTheme key */
function kebabToCamel(s: string): string {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

/** Normalize a raw CSS color value — trim, collapse whitespace */
function normalizeColor(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface StealMeta {
  /** Machine key for the stolen theme */
  name?: string
  /** Display label */
  label?: string
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
export function themeFromCSSVars(
  vars: Record<string, string>,
  meta?: StealMeta,
): StoredTheme {
  // Normalize keys: strip leading '--' and trim
  const normalized: Record<string, string> = {}
  for (const [k, v] of Object.entries(vars)) {
    const key = k.startsWith('--') ? k.slice(2) : k
    normalized[key.trim()] = normalizeColor(v)
  }

  const light: ResolvedTokens = {}
  const dark: ResolvedTokens = {}

  // Extract color tokens — use light values only (dark requires a separate vars object)
  for (const varName of COLOR_VARS) {
    const value = normalized[varName]
    if (value) {
      const camelKey = kebabToCamel(varName)
      light[camelKey] = value
      // Mirror to dark — caller can update dark separately or use themeFromCSS for full extraction
      dark[camelKey] = value
    }
  }

  const radius = normalized['radius'] ?? '0.5rem'

  const fonts: ThemeFonts = {}
  if (normalized['font-sans'])  fonts.sans  = normalized['font-sans']
  if (normalized['font-serif']) fonts.serif = normalized['font-serif']
  if (normalized['font-mono'])  fonts.mono  = normalized['font-mono']

  return {
    name:    meta?.name  ?? 'stolen',
    label:   meta?.label ?? 'Stolen Theme',
    styles:  { light, dark },
    fonts,
    pattern: { type: 'none' },
    radius,
    _source: 'custom',
  }
}

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
export function themeFromCSS(
  cssText: string,
  meta?: StealMeta,
): StoredTheme {
  // Unwrap @layer base { ... } so inner :root/.dark blocks are visible to the parsers
  const unwrapped = cssText.replace(/@layer\s+base\s*\{([\s\S]*?)\}\s*(?=@layer|\s*$)/g, '$1')
    .replace(/@layer\s+base\s*\{([\s\S]*)\}[\s]*$/g, '$1')

  const light = extractVarsFromBlock(unwrapped, [
    /:root\s*\{([^}]*)\}/gs,
    /html\s*\{([^}]*)\}/gs,
    /\[data-theme="light"\]\s*\{([^}]*)\}/gs,
  ])

  const dark = extractVarsFromBlock(unwrapped, [
    /\.dark\s*\{([^}]*)\}/gs,
    /\[data-theme="dark"\]\s*\{([^}]*)\}/gs,
    /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{[^{]*:root\s*\{([^}]*)\}/gs,
    /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{\s*html\s*\{([^}]*)\}/gs,
  ])

  // If no dark block found, mirror light
  const darkTokens = Object.keys(dark).length > 0 ? dark : { ...light }

  const radius =
    light['radius'] ??
    extractSingleVar(unwrapped, 'radius') ??
    '0.5rem'

  const fonts: ThemeFonts = {}
  const sansCandidates  = [light['font-sans'],  extractSingleVar(unwrapped, 'font-sans')]
  const serifCandidates = [light['font-serif'], extractSingleVar(unwrapped, 'font-serif')]
  const monoCandidates  = [light['font-mono'],  extractSingleVar(unwrapped, 'font-mono')]
  const firstDefined    = <T>(arr: (T | undefined)[]): T | undefined => arr.find(v => v !== undefined)
  const sanVal  = firstDefined(sansCandidates)
  const serVal  = firstDefined(serifCandidates)
  const monoVal = firstDefined(monoCandidates)
  if (sanVal)  fonts.sans  = sanVal
  if (serVal)  fonts.serif = serVal
  if (monoVal) fonts.mono  = monoVal

  // Build resolved token maps
  const lightResolved: ResolvedTokens = {}
  const darkResolved: ResolvedTokens  = {}

  for (const varName of COLOR_VARS) {
    const camelKey = kebabToCamel(varName)
    const lv = light[varName]
    const dv = darkTokens[varName]
    if (lv) lightResolved[camelKey] = lv
    if (dv) darkResolved[camelKey]  = dv
  }

  return {
    name:    meta?.name  ?? 'stolen',
    label:   meta?.label ?? 'Stolen Theme',
    styles:  { light: lightResolved, dark: darkResolved },
    fonts,
    pattern: { type: 'none' },
    radius,
    _source: 'custom',
  }
}

// ─── Browser extraction snippet ───────────────────────────────────────────────

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
export const browserSnippet = /* js */`(function() {
  var cs = getComputedStyle(document.documentElement);
  var css = document.documentElement.style;
  var keys = [
    'background','foreground',
    'card','card-foreground',
    'popover','popover-foreground',
    'primary','primary-foreground',
    'secondary','secondary-foreground',
    'muted','muted-foreground',
    'accent','accent-foreground',
    'destructive','destructive-foreground',
    'border','input','ring',
    'radius','font-sans','font-serif','font-mono'
  ];
  var light = {}, dark = {};
  keys.forEach(function(k) {
    var v = (css.getPropertyValue('--' + k) || cs.getPropertyValue('--' + k)).trim();
    if (v) light['--' + k] = v;
  });
  // Switch to dark mode temporarily to capture dark vars
  var wasDark = document.documentElement.classList.contains('dark');
  document.documentElement.classList.add('dark');
  var cs2 = getComputedStyle(document.documentElement);
  keys.forEach(function(k) {
    var v = cs2.getPropertyValue('--' + k).trim();
    if (v) dark['--' + k] = v;
  });
  if (!wasDark) document.documentElement.classList.remove('dark');
  var out = JSON.stringify({ light: light, dark: dark }, null, 2);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(out).then(function() {
      console.log('%c tailtheme steal: copied to clipboard!', 'color: #4ade80; font-weight: bold;');
    });
  }
  console.log(out);
  return out;
})();`

/**
 * A bookmarklet URL version of `browserSnippet`.
 * Add this as a browser bookmark — clicking it on any page runs the extraction.
 *
 * @example
 * // In your dashboard UI, render as a draggable link:
 * <a href={bookmarkletUrl}>Steal Theme</a>
 */
export const bookmarkletUrl = `javascript:${encodeURIComponent(browserSnippet)}`

/**
 * Parse the two-mode output from `browserSnippet` (which returns `{ light, dark }`).
 * This is the companion to `browserSnippet` — pass its JSON output directly here.
 *
 * @example
 * const json = '{"light":{"--background":"oklch(1 0 0)",...},"dark":{"--background":"oklch(0.145 0 0)",...}}'
 * const stored = themeFromSnippetOutput(JSON.parse(json), { name: 'stolen' })
 */
export function themeFromSnippetOutput(
  snippetOutput: { light: Record<string, string>; dark: Record<string, string> },
  meta?: StealMeta,
): StoredTheme {
  const lightBase = themeFromCSSVars(snippetOutput.light, meta)

  // Build dark resolved tokens separately
  const darkResolved: ResolvedTokens = {}
  for (const varName of COLOR_VARS) {
    const cssKey = `--${varName}`
    const value = snippetOutput.dark[cssKey]
    if (value) {
      darkResolved[kebabToCamel(varName)] = normalizeColor(value)
    }
  }

  // Merge dark over the mirrored light that themeFromCSSVars produced
  return {
    ...lightBase,
    styles: {
      light: lightBase.styles.light,
      dark:  Object.keys(darkResolved).length > 0
        ? darkResolved
        : lightBase.styles.light,
    },
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extract CSS custom properties from the first matching block in a CSS string.
 * Tries each regex in order, merges all matches.
 */
function extractVarsFromBlock(
  css: string,
  patterns: RegExp[],
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const pattern of patterns) {
    pattern.lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = pattern.exec(css)) !== null) {
      const block = match[1] ?? match[0]
      Object.assign(result, parseVarBlock(block))
    }
  }
  return result
}

/**
 * Parse a CSS declaration block string into a key→value map.
 * Strips the `--` prefix from keys.
 * Handles values that contain parentheses (e.g. oklch(0.5 0.2 200)).
 */
function parseVarBlock(block: string): Record<string, string> {
  const result: Record<string, string> = {}
  // Match --var-name: value; where value can contain parens, spaces, etc.
  const varPattern = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g
  let m: RegExpExecArray | null
  while ((m = varPattern.exec(block)) !== null) {
    const key   = m[1].trim()
    const value = m[2].trim().replace(/\s+/g, ' ')
    if (value && value !== 'inherit' && value !== 'initial' && value !== 'unset') {
      result[key] = value
    }
  }
  return result
}

/**
 * Extract a single CSS variable from anywhere in a CSS string.
 * Useful for `--radius` and font vars that may live outside `:root`.
 */
function extractSingleVar(css: string, varName: string): string | undefined {
  const pattern = new RegExp(`--${varName}\\s*:\\s*([^;]+);`)
  const m = css.match(pattern)
  return m ? m[1].trim() : undefined
}
