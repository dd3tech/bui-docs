import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
  XCircleIcon,
  MoonIcon,
  SunIcon,
  DesktopComputerIcon
} from '@heroicons/react/outline'

import { Circle, Flex, Transition, Dropdown } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

import { openWindow, GITHUB_URL } from '@/utils'
import { useTheme } from '@/pages/store/theme-store'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { THEMES_WITH_DEFAULT } from '@/const/theme'
import { ThemeOptions } from '@/interfaces'
import { Dd360Icon, GitHubIcon } from '../../icons'
import SideBar from '../SideBar'
import CircleCustom from './CircleCustom'
import Search from './Search'
import MainLinks from './MainLinks'
import { useRouter } from 'next/router'

const getThemeIcon = (theme: string, width = 12, color = 'currentColor') => {
  if (theme === 'light') return <SunIcon width={width} color={color} />
  if (theme === 'dark') return <MoonIcon width={width} color={color} />
  if (theme === 'default')
    return <DesktopComputerIcon width={width} color={color} />
}

function Navbar() {
  const { t } = useTranslation('common')
  const {
    themeObject: { extendedPalette },
    themeOption,
    onClickTheme
  } = useTheme()
  const [isActiveButtonMobile, setIsActiveButtonMobile] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const sidebarElement = sidebarRef.current
      if (!sidebarElement) return

      if (window.scrollY > 30) {
        sidebarElement.classList.add('border-b')
        sidebarElement.classList.remove('bg-transparent')
      } else {
        sidebarElement.classList.remove('border-b')
        sidebarElement.classList.add('bg-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sidebarRef])

  return (
    <nav
      ref={sidebarRef}
      className={composeClasses(
        'w-full sticky top-0 z-10 flex flex-col-reverse md:flex-row',
        extendedPalette.sidebarBorder,
        router.pathname.startsWith('/docs/') ? 'border-b' : 'bg-transparent',
        isActiveButtonMobile
          ? `${extendedPalette.barMobileBackground} sm:${extendedPalette.barBackground}`
          : extendedPalette.barBackground
      )}
    >
      {isActiveButtonMobile && (
        <div className="md:hidden">
          <Transition
            animationStart="zoomInDown"
            show={isActiveButtonMobile}
            duration={200}
            className="w-full"
          >
            <SideBar setIsActiveButtonMobile={setIsActiveButtonMobile} />
          </Transition>
        </div>
      )}
      <Flex
        justifyContent="between"
        alignItems="center"
        gap="4"
        className="w-full h-14 py-2 mx-auto px-4 flex-nowrap"
      >
        <Link href="/">
          <Dd360Icon color={extendedPalette.logoColorHex} />
        </Link>

        <ul className="hidden items-center gap-8 h-12 md:flex">
          <MainLinks className="font-medium" />
        </ul>

        <Flex gap="2">
          <Search className="mr-4" />

          <Dropdown>
            <Dropdown.Trigger>
              <CircleCustom>
                {getThemeIcon(themeOption, 15, extendedPalette.navbarIconHex)}
              </CircleCustom>
            </Dropdown.Trigger>

            <Dropdown.Menu
              className={composeClasses(
                'p-2',
                extendedPalette.componentText,
                extendedPalette.cardBorderColor
              )}
              style={{
                width: 155,
                backgroundColor: extendedPalette.componentBgPrimaryHex
              }}
            >
              {Object.values(THEMES_WITH_DEFAULT).map((theme) => (
                <Flex
                  key={theme}
                  alignItems="center"
                  gap="1"
                  className={composeClasses(
                    'p-2 text-xs cursor-pointer',
                    theme === themeOption &&
                      extendedPalette.componentBgSecondary
                  )}
                  style={{ height: 34, borderRadius: 4 }}
                  onClick={() => onClickTheme(theme as ThemeOptions)}
                >
                  {getThemeIcon(theme)}
                  {t(`navbar.${theme}`)}
                </Flex>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <CircleCustom onClick={() => openWindow(GITHUB_URL)}>
            <GitHubIcon color={extendedPalette.navbarIconHex} />
          </CircleCustom>
          <Circle
            className="block md:hidden cursor-pointer"
            width="36px"
            height="36px"
            backgroundColor="transparent"
          >
            {isActiveButtonMobile ? (
              <XCircleIcon
                width={24}
                onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
                color={extendedPalette.navbarIconHex}
              />
            ) : (
              <MenuIcon
                onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
                color={extendedPalette.navbarIconHex}
              />
            )}
          </Circle>
        </Flex>
      </Flex>
    </nav>
  )
}

export default Navbar
