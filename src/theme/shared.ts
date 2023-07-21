import { Theme } from '@/interfaces'
import { THEMES, THEMES_WITH_DEFAULT } from '@/utils/constants'

export const detectSystemTheme = (): Theme => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return THEMES.dark as Theme
  }
  return THEMES.light as Theme
}

export const loadTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme && storedTheme in THEMES_WITH_DEFAULT) {
    return storedTheme as Theme
  }
  return detectSystemTheme()
}
