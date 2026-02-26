export * from './builtin/index.js'
export * from './tweakcn/index.js'

import { builtinThemes } from './builtin/index.js'
import { tweakcnThemes } from './tweakcn/index.js'
import type { Theme } from '../types.js'

/** All 47 themes — 10 built-in + 37 tweakcn */
export const themes: Theme[] = [...builtinThemes, ...tweakcnThemes]
