export { defaultTheme } from './default.js'
export { oceanTheme } from './ocean.js'
export { forestTheme } from './forest.js'
export { sunsetTheme } from './sunset.js'
export { midnightTheme } from './midnight.js'
export { roseTheme } from './rose.js'
export { amberTheme } from './amber.js'
export { indigoTheme } from './indigo.js'
export { tealTheme } from './teal.js'
export { candyTheme } from './candy.js'
export * from './tailwind-basics.js'
export * from './claude-themes.js'

import { defaultTheme } from './default.js'
import { oceanTheme } from './ocean.js'
import { forestTheme } from './forest.js'
import { sunsetTheme } from './sunset.js'
import { midnightTheme } from './midnight.js'
import { roseTheme } from './rose.js'
import { amberTheme } from './amber.js'
import { indigoTheme } from './indigo.js'
import { tealTheme } from './teal.js'
import { candyTheme } from './candy.js'
import { tailwindBasicThemes } from './tailwind-basics.js'
import { claudeThemes } from './claude-themes.js'
export { claudeThemes }

export const builtinThemes = [
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
  ...tailwindBasicThemes,
]
