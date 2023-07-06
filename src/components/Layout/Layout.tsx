import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { composeClasses } from 'dd360-ds/lib'
import { Flex, Overflow } from 'dd360-ds'

import { useTheme } from '@/pages/store/theme-store'
import FloatingNav, { Entries } from './FloatingNav'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import SideBar from './SideBar'

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
  const { isLightTheme } = useTheme()

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

  if (showSidebar) {
    return (
      <Flex className="min-h-screen flex-row text-gray-800">
        <main
          className={composeClasses(
            'w-full relative flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0',
            isLightTheme ? 'light' : 'dark'
          )}
        >
          <Navbar />

          <Flex>
            <div className="hidden md:flex">
              <SideBar />
            </div>

            <Overflow
              className="layout-content grid h-full px-8 md:px-16 m-auto"
              style={{ height: 'calc(100vh - 57px)' }}
            >
              <article className="w-full max-w-full">{children}</article>
              <article className="hidden w-full max-w-[128px] mt-[76px] md:block">
                <FloatingNav entries={entries} />
              </article>
            </Overflow>
          </Flex>
          <Footer />
        </main>
      </Flex>
    )
  }

  return (
    <div className={isLightTheme ? 'light' : 'dark'}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
