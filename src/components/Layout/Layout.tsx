import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import FloatingNav, { Entries } from './FloatingNav'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import SideBar from './SideBar'

// const routesWithoutFooter = ['/components']

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
      <div className="flex min-h-screen flex-row text-gray-800">
        <main
          className="w-full relative flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0"
          // className="flex min-h-screen flex-row text-gray-800"
        >
          <Navbar hideLogo />

          <div className="flex">
            <div className="hidden md:flex">
              <SideBar />
            </div>

            <div className="layout-content grid h-full px-8 md:px-16">
              <article className="w-full max-w-full">{children}</article>
              <article className="hidden w-full max-w-[128px] mt-36 md:block">
                <FloatingNav entries={entries} />
              </article>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }

  //   if (routesWithoutFooter.includes(router.pathname)) {
  //     return (
  //       <>
  //         <Navbar />
  //         {children}
  //       </>
  //     )
  //   }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
