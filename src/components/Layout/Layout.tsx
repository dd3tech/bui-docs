import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { XIcon, MenuIcon } from '@heroicons/react/outline'

import { composeClasses } from 'dd360-ds/lib'
import { Flex, Text } from 'dd360-ds'

import { useTheme } from '@/store/theme-store'
import FloatingNav, { Entries } from './FloatingNav'
import Footer from './Footer'
import SideBarDocs from './SideBarDocs'
import CircleCustom from './Navbar/CircleCustom'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar/Navbar'), { ssr: false })

function parseIdByName(name: string) {
  return name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

function Layout({ children }: { children: JSX.Element }) {
  const router = useRouter()
  const showSidebar = router.pathname.startsWith('/docs/')
  const [entries, setEntries] = useState<Entries[]>([])
  const {
    isLightTheme,
    themeObject: { extendedPalette }
  } = useTheme()
  const [isActiveButtonMobile, setIsActiveButtonMobile] = useState(false)

  useEffect(() => {
    const headers = document.getElementsByName('floating-nav')
    let entryList: Entries[] = []
    headers.forEach(({ textContent, offsetTop }) => {
      const label = textContent || ''
      const id = parseIdByName(label)
      entryList = [
        ...entryList,
        {
          id,
          label,
          isActive: id === router.asPath.split('#')[1],
          position: offsetTop - 85
        }
      ]
    })
    setEntries(entryList)
  }, [router])

  useEffect(() => {
    const body = document.querySelector('body')
    if (isLightTheme) {
      body?.classList.add('light')
      body?.classList.remove('dark')
    } else {
      body?.classList.add('dark')
      body?.classList.remove('light')
    }
  }, [isLightTheme])

  if (showSidebar) {
    return (
      <Flex className="min-h-screen flex-row text-gray-800">
        <main className="w-full relative flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
          <Navbar />

          <Flex
            alignItems="center"
            gap="2"
            className={composeClasses(
              'py-2 px-4 sticky z-50 top-14 md:hidden',
              extendedPalette.cardBackground
            )}
          >
            <Text className={extendedPalette.primaryText}>Menu</Text>
            <CircleCustom
              size="32px"
              backgroundColor={extendedPalette.componentBgPrimaryHex}
              onClick={() =>
                setIsActiveButtonMobile &&
                setIsActiveButtonMobile((prev) => !prev)
              }
            >
              {isActiveButtonMobile ? (
                <XIcon
                  className="cursor-pointer"
                  style={{ color: extendedPalette.navbarIconHex }}
                  width={16}
                />
              ) : (
                <MenuIcon
                  className="cursor-pointer"
                  style={{ color: extendedPalette.navbarIconHex }}
                  width={16}
                />
              )}
            </CircleCustom>
          </Flex>
          <Flex className="relative">
            <div
              className={composeClasses(
                isActiveButtonMobile ? 'flex' : 'hidden',
                'md:flex'
              )}
            >
              <SideBarDocs setIsActiveButtonMobile={setIsActiveButtonMobile} />
            </div>
            <div
              id="layout-content"
              className="layout-content grid h-full px-4 md:px-8 m-auto w-full overflow-auto"
              style={{ height: 'calc(100vh - 57px)' }}
            >
              <article
                id="container-doc"
                className="w-full max-w-full pr-0 md:pr-5"
              >
                {children}
              </article>
              <article className="hidden w-full max-w-[128px] mt-[60px] md:block">
                <FloatingNav entries={entries} />
              </article>
            </div>
          </Flex>
        </main>
      </Flex>
    )
  }

  return (
    <div className="relative">
      <Navbar className="max-w-[1400px] mx-auto" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
