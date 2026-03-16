export * from './builtin/index.js'
export * from './tweakcn/index.js'
export * from './community/index.js'

import { builtinThemes } from './builtin/index.js'
import { tweakcnThemes } from './tweakcn/index.js'
import { communityThemes } from './community/index.js'
import type { Theme } from '../types.js'

/** All themes — 10 curated built-in + 17 Tailwind basic + 37 tweakcn */
export const themes: Theme[] = [...builtinThemes, ...tweakcnThemes]

/** Community themes are user-submitted; export separately for opt-in usage */
export { communityThemes }
