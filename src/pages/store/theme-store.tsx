import { Theme, ThemeOptions } from '@/interfaces'
import { detectSystemTheme, loadTheme } from '@/theme/shared'
import { DEFAULT_THEME, THEMES_WITH_DEFAULT } from '@/const/theme'
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { darkTheme, lightTheme } from '@/theme'
import { ThemeProps, ThemeProvider } from 'dd360-ds/theme'

export interface IThemeContext {
  theme: Theme
  themeOption: ThemeOptions
  isLightTheme: boolean
  themeObject: ThemeProps
  onChangeTheme: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
  onClickTheme: (newTheme: ThemeOptions) => void
  resetTheme: () => void
}

const ThemeContext = createContext({} as IThemeContext)

export const useTheme = () => useContext(ThemeContext)

export default function UIProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false)
  const [themeOption, setThemeOption] = useState<ThemeOptions>(DEFAULT_THEME)

  const applyTheme = (newTheme: ThemeOptions) => {
    document.documentElement.removeAttribute('class')
    if (newTheme === 'default') {
      const themeByDefault = detectSystemTheme()
      document.documentElement.classList.add(themeByDefault)
      setTheme(themeByDefault)
    } else {
      document.documentElement.classList.add(newTheme)
      setTheme(newTheme)
    }
  }

  const handleThemeChange = useCallback((newTheme: ThemeOptions) => {
    if (newTheme in THEMES_WITH_DEFAULT) {
      localStorage.setItem('theme', newTheme)
      setThemeOption(newTheme)
      applyTheme(newTheme)
    }
  }, [])

  const onChangeTheme = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newTheme = event.target.value as ThemeOptions
      handleThemeChange(newTheme)
    },
    [handleThemeChange]
  )

  const onClickTheme = useCallback(
    (newTheme: ThemeOptions) => {
      handleThemeChange(newTheme)
    },
    [handleThemeChange]
  )

  const resetTheme = () => {
    localStorage.removeItem('theme')
    setTheme('light')
    setThemeOption(DEFAULT_THEME)
  }

  useEffect(() => {
    const storeTheme = loadTheme()
    if (storeTheme !== theme) {
      applyTheme(storeTheme)
      setThemeOption(storeTheme)
    }

    setIsLightTheme(theme === 'light')

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      // Temporal set to light theme in feature change by system theme
      const newSystemTheme = 'light'
      if (newSystemTheme !== theme) {
        applyTheme(newSystemTheme)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const store = useMemo(
    () => ({
      onChangeTheme,
      onClickTheme,
      resetTheme,
      theme,
      themeOption,
      isLightTheme,
      themeObject: isLightTheme ? lightTheme : darkTheme
    }),
    [themeOption, theme, isLightTheme, onChangeTheme, onClickTheme]
  )

  const themeObject = isLightTheme ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeObject}>
      <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  )
}
