import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

import { Circle, Flex, ImageIcon, Transition } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import Search from './Search'

import { openWindow, GITHUB_URL } from '@/utils'
import SideBar from './SideBar'

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
    label: 'examples',
    link: '/docs'
  }
]

function Navbar({ hideLogo }: { hideLogo?: boolean }) {
  const { t } = useTranslation('common')
  const router = useRouter()

  const [isActiveButtonMobile, setIsActiveButtonMobile] = useState(false)

  function renderLinks() {
    return menu.map(({ key, label, link }) => (
      <Link
        key={key}
        href={link}
        locale={router?.locale}
        className={composeClasses(
          'h-full flex items-center border-b-4 border-transparent hover:border-blue-500 text-gray-500 font-medium',
          router.pathname.includes(label) && 'border-blue-500'
        )}
      >
        {t(label)}
      </Link>
    ))
  }

  return (
    <nav className={composeClasses('bg-white w-full sticky top-0 z-10')}>
      {isActiveButtonMobile && (
        <Transition
          animationStart="zoomInDown"
          show={isActiveButtonMobile}
          duration={200}
          className="w-full bg-blue-50"
        >
          <div className="pt-4 pr-4 cursor-pointer absolute z-50 right-0">
            <DynamicHeroIcon
              icon="XCircleIcon"
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
        className="h-20 py-6 mx-auto px-4 lg:px-16 2xl:px-0 max-w-8xl flex-nowrap"
      >
        <Link href="/" className={composeClasses(hideLogo && 'md:hidden')}>
          <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
        </Link>

        <ul className="hidden items-center gap-8 h-12 md:flex">
          {renderLinks()}
        </ul>
        <div className="hidden md:flex">
          <Search />
        </div>
        <Circle
          className="md:block cursor-pointer"
          width="36px"
          height="36px"
          backgroundColor="transparent"
          onClick={() => openWindow(GITHUB_URL)}
        >
          <ImageIcon src="/github-mark.svg" style={{ width: 36, height: 36 }} />
        </Circle>
        <Circle
          className="block md:hidden cursor-pointer"
          width="36px"
          height="36px"
          backgroundColor="transparent"
        >
          <DynamicHeroIcon
            onClick={() => setIsActiveButtonMobile(!isActiveButtonMobile)}
            icon="MenuIcon"
            className="text-blue-800 absolute"
            width={25}
          />
        </Circle>
      </Flex>
      <div className="flex gap-5 justify-center md:hidden">{renderLinks()}</div>
      <Flex className="md:hidden pb-2 mt-2" justifyContent="center">
        <Search />
      </Flex>
    </nav>
  )
}

export default Navbar
