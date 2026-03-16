import { createTheme } from '../../factory.js'

const basic = (name: string, label: string, primary: Parameters<typeof createTheme>[0]['primary']) =>
  createTheme({ name, label, primary, category: 'Basic', radius: '0.5rem' })

export const twRedTheme     = basic('tw-red',     'Red',     'red')
export const twOrangeTheme  = basic('tw-orange',  'Orange',  'orange')
export const twAmberTheme   = basic('tw-amber',   'Amber',   'amber')
export const twYellowTheme  = basic('tw-yellow',  'Yellow',  'yellow')
export const twLimeTheme    = basic('tw-lime',    'Lime',    'lime')
export const twGreenTheme   = basic('tw-green',   'Green',   'green')
export const twEmeraldTheme = basic('tw-emerald', 'Emerald', 'emerald')
export const twTealTheme    = basic('tw-teal',    'Teal',    'teal')
export const twCyanTheme    = basic('tw-cyan',    'Cyan',    'cyan')
export const twSkyTheme     = basic('tw-sky',     'Sky',     'sky')
export const twBlueTheme    = basic('tw-blue',    'Blue',    'blue')
export const twIndigoTheme  = basic('tw-indigo',  'Indigo',  'indigo')
export const twVioletTheme  = basic('tw-violet',  'Violet',  'violet')
export const twPurpleTheme  = basic('tw-purple',  'Purple',  'purple')
export const twFuchsiaTheme = basic('tw-fuchsia', 'Fuchsia', 'fuchsia')
export const twPinkTheme    = basic('tw-pink',    'Pink',    'pink')
export const twRoseTheme    = basic('tw-rose',    'Rose',    'rose')

export const tailwindBasicThemes = [
  twRedTheme,
  twOrangeTheme,
  twAmberTheme,
  twYellowTheme,
  twLimeTheme,
  twGreenTheme,
  twEmeraldTheme,
  twTealTheme,
  twCyanTheme,
  twSkyTheme,
  twBlueTheme,
  twIndigoTheme,
  twVioletTheme,
  twPurpleTheme,
  twFuchsiaTheme,
  twPinkTheme,
  twRoseTheme,
]
