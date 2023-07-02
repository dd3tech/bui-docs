import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid'

import { Circle, Flex, Transition } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

import { openWindow, GITHUB_URL } from '@/utils'
import { useTheme } from '@/pages/store/theme-store'
import { Dd360Icon, GitHubIcon } from '../../icons'
import SideBar from '../SideBar'
import CircleCustom from './CircleCustom'
import Search from './Search'
import { MenuIcon } from '@/components/icons/MenuIcon'

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

function Navbar({ hideLogo }: { hideLogo?: boolean }) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const {
    themeObject: { extendedPalette },
    isLightTheme,
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
        className="h-14 py-2 mx-auto px-4 lg:px-16 2xl:px-0 max-w-8xl flex-nowrap"
      >
        <Link href="/">
          <Dd360Icon color={extendedPalette.logoColor} />
        </Link>

        <ul className="hidden items-center gap-8 h-12 md:flex">
          {renderLinks()}
        </ul>

        <Flex gap="2">
          <Search className="mr-4" />

          <CircleCustom
            onClick={() => onClickTheme(isLightTheme ? 'dark' : 'light')}
          >
            {isLightTheme ? (
              <SunIcon width={15} color={extendedPalette.navbarIcon} />
            ) : (
              <MoonIcon width={15} color={extendedPalette.navbarIcon} />
            )}
          </CircleCustom>

          <CircleCustom onClick={() => openWindow(GITHUB_URL)}>
            <GitHubIcon color={extendedPalette.navbarIcon} />
          </CircleCustom>
          <Circle
            className="block md:hidden cursor-pointer"
            width="36px"
            height="36px"
            backgroundColor="transparent"
          >
            <MenuIcon
              onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
              //   className="text-blue-800 absolute"
              color={extendedPalette.navbarIcon}
              //   width={25}
            />
          </Circle>
        </Flex>
      </Flex>
      {/* <Flex justifyContent="center" gap="5" className="md:hidden">
        {renderLinks()}
      </Flex>
      <Flex className="md:hidden pb-2 mt-2" justifyContent="center">
        <Search />
      </Flex> */}
    </nav>
  )
}

export default Navbar
