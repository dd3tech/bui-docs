import { ThemeOptions } from '@/interfaces'

export const THEMES = { dark: 'dark', light: 'light' }
export const THEMES_WITH_DEFAULT = { ...THEMES, default: 'default' }
export const DEFAULT_THEME = THEMES.dark as ThemeOptions
