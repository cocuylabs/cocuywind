export * from './builtin/index.js'
export * from './tweakcn/index.js'
export * from './community/index.js'

import { builtinThemes, claudeThemes } from './builtin/index.js'
import { tweakcnThemes } from './tweakcn/index.js'
import { communityThemes } from './community/index.js'
import type { Theme } from '../types.js'

/** All themes — 10 curated built-in + 17 Tailwind basic + 10 Claude + 37 tweakcn */
export const themes: Theme[] = [...builtinThemes, ...claudeThemes, ...tweakcnThemes]

/** Community themes are user-submitted TweakCN themes; export separately for opt-in usage */
export { communityThemes }

/** Claude-generated themes — 10 hand-designed palettes */
export { claudeThemes }
