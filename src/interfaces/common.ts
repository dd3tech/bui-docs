import { THEMES } from '@/utils/constants'

export type Theme = keyof typeof THEMES
export type ThemeOptions = Theme | 'default'
