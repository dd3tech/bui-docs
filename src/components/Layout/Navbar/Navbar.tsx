import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import {
  MoonIcon,
  SunIcon,
  DesktopComputerIcon
} from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'

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

const menu = [
  {
    key: 1,
    label: 'components',
    link: '/components'
  },
  {
    key: 2,
    label: 'docs',
    link: '/docs/get-started/getting-started'
  },
  {
    key: 3,
    label: 'showcases',
    link: '/showcases'
  }
]

const getThemeIcon = (theme: string, width = 12, color = 'currentColor') => {
  if (theme === 'light') return <SunIcon width={width} color={color} />
  if (theme === 'dark') return <MoonIcon width={width} color={color} />
  if (theme === 'default')
    return <DesktopComputerIcon width={width} color={color} />
}

function Navbar() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const {
    themeObject: { extendedPalette },
    themeOption,
    onClickTheme
  } = useTheme()

  const [isActiveButtonMobile, setIsActiveButtonMobile] = useState(false)

  const renderLinks = useCallback(() => {
    return menu.map(({ key, label, link }) => (
      <Link
        key={key}
        href={link}
        locale={router?.locale}
        className={composeClasses(
          'h-full flex items-center hover:border-blue-500 font-medium',
          router.pathname.includes(label)
            ? 'text-blue-400'
            : extendedPalette.navbarLink
        )}
      >
        {t(label)}
      </Link>
    ))
  }, [router, extendedPalette, t])

  return (
    <nav
      className={composeClasses(
        'w-full sticky top-0 z-10 border-b',
        extendedPalette.barBackground,
        extendedPalette.sidebarBorder
      )}
    >
      {isActiveButtonMobile && (
        <Transition
          animationStart="zoomInDown"
          show={isActiveButtonMobile}
          duration={200}
          className="w-full bg-blue-50"
        >
          <div className="pt-4 pr-4 cursor-pointer absolute z-50 right-0">
            <XCircleIcon
              onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
              width={20}
            />
          </div>
          <SideBar />
        </Transition>
      )}
      <Flex
        justifyContent="between"
        alignItems="center"
        gap="4"
        className="h-14 py-2 mx-8 px-4 lg:px-16 2xl:px-0 max-w-8xl flex-nowrap"
      >
        <Link href="/">
          <Dd360Icon color={extendedPalette.logoColorHex} />
        </Link>

        <ul className="hidden items-center gap-8 h-12 md:flex">
          {renderLinks()}
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
                    'p-2 text-xs',
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
            <MenuIcon
              onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
              color={extendedPalette.navbarIconHex}
            />
          </Circle>
        </Flex>
      </Flex>
    </nav>
  )
}

export default Navbar
