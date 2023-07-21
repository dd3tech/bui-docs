import { THEMES } from '@/const/theme'

export type Theme = keyof typeof THEMES
export type ThemeOptions = Theme | 'default'
