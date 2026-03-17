import { createTheme } from '../../factory.js'

// ─── Claude-generated themes ──────────────────────────────────────────────────
// Ten hand-designed themes authored by Claude. Each combines a deliberate
// primary + neutral + secondary + vividness + radius choice to land on a
// distinct mood rather than just a different hue.

/**
 * Matcha — green primary on warm stone surfaces.
 * Quiet and refined — like a ceramic bowl in morning light.
 */
export const matchaTheme = createTheme({
  name: 'matcha',
  label: 'Matcha',
  primary: 'green',
  neutral: 'stone',
  vividness: 'elegant',
  radius: '0.375rem',
  category: 'Claude',
})

/**
 * Terracotta — orange primary with a rose secondary, grounded on stone.
 * Warm, Mediterranean, handmade.
 */
export const terracottaTheme = createTheme({
  name: 'terracotta',
  label: 'Terracotta',
  primary: 'orange',
  neutral: 'stone',
  secondary: 'rose',
  vividness: 'professional',
  radius: '0.5rem',
  category: 'Claude',
})

/**
 * Glacier — sky-blue primary on cool slate surfaces, sharp corners.
 * Clinical, precise, cold — good for data-heavy dashboards.
 */
export const glacierTheme = createTheme({
  name: 'glacier',
  label: 'Glacier',
  primary: 'sky',
  neutral: 'slate',
  vividness: 'professional',
  radius: '0.25rem',
  category: 'Claude',
})

/**
 * Dusk — violet primary on blue-tinted slate, default saturation.
 * The hour before dark — thoughtful, focused, slightly moody.
 */
export const duskTheme = createTheme({
  name: 'dusk',
  label: 'Dusk',
  primary: 'violet',
  neutral: 'slate',
  radius: '0.5rem',
  category: 'Claude',
})

/**
 * Sakura — pink primary with rose secondary, chromatic surfaces, fully rounded.
 * Soft, delicate, Japanese spring.
 */
export const sakuraTheme = createTheme({
  name: 'sakura',
  label: 'Sakura',
  primary: 'pink',
  secondary: 'rose',
  vividness: 'elegant',
  radius: '0.75rem',
  category: 'Claude',
})

/**
 * Obsidian — zinc primary on zinc surfaces, very muted, almost monochrome.
 * Pure function — every color is there for a reason, and most aren't.
 */
export const obsidianTheme = createTheme({
  name: 'obsidian',
  label: 'Obsidian',
  primary: 'zinc',
  neutral: 'zinc',
  vividness: 'elegant',
  radius: '0.25rem',
  category: 'Claude',
})

/**
 * Carnival — fuchsia primary with an amber secondary, boosted, fully rounded.
 * Loud, playful, unabashedly fun.
 */
export const carnivalTheme = createTheme({
  name: 'carnival',
  label: 'Carnival',
  primary: 'fuchsia',
  secondary: 'amber',
  vividness: 'playful',
  radius: '1rem',
  category: 'Claude',
})

/**
 * Redwood — red primary on warm stone, muted — not aggressive, just deep.
 * Forest floor, old library, aged leather.
 */
export const redwoodTheme = createTheme({
  name: 'redwood',
  label: 'Redwood',
  primary: 'red',
  neutral: 'stone',
  vividness: 'elegant',
  radius: '0.5rem',
  category: 'Claude',
})

/**
 * Lagoon — teal primary with sky secondary on slate surfaces, slightly boosted.
 * Tropical water — saturated enough to feel alive, cool enough to stay calm.
 */
export const lagoonTheme = createTheme({
  name: 'lagoon',
  label: 'Lagoon',
  primary: 'teal',
  secondary: 'sky',
  neutral: 'slate',
  vividness: 'vivid',
  radius: '0.5rem',
  category: 'Claude',
})

/**
 * Harvest — amber primary with lime secondary on warm stone surfaces.
 * Autumn afternoon. Warm, alive, full.
 */
export const harvestTheme = createTheme({
  name: 'harvest',
  label: 'Harvest',
  primary: 'amber',
  secondary: 'lime',
  neutral: 'stone',
  vividness: 'vivid',
  radius: '0.625rem',
  category: 'Claude',
})

/**
 * Tomato — red primary, green secondary, warm stone surfaces, boosted.
 * Italian pizzeria: checkered tablecloths, basil, tomato sauce.
 */
export const tomatoTheme = createTheme({
  name: 'tomato',
  label: 'Tomato',
  primary: 'red',
  secondary: 'green',
  neutral: 'stone',
  vividness: 'vivid',
  radius: '0.5rem',
  category: 'Claude',
})

export const claudeThemes = [
  matchaTheme,
  tomatoTheme,
  terracottaTheme,
  glacierTheme,
  duskTheme,
  sakuraTheme,
  obsidianTheme,
  carnivalTheme,
  redwoodTheme,
  lagoonTheme,
  harvestTheme,
]
