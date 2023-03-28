import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FloatingNav from './FloatingNav'
import Footer from './Footer'
import Navbar from './Navbar'
import SideBar from './SideBar'

const routesWithoutFooter = ['/components']

function Layout({ children }: { children: JSX.Element }) {
    const router = useRouter()
    const showSidebar = router.pathname.startsWith('/docs/')
    const [entries, setEntries] = useState<{ label: string; isActive: boolean; position: number }[]>([])

    useEffect(() => {
        const headers = document.getElementsByName('floating-nav')
        let entryList: { label: string; isActive: boolean; position: number }[] = []
        headers.forEach((header) => {
            entryList = [
                ...entryList,
                {
                    label: header.textContent || '',
                    isActive: false,
                    position: header.offsetTop - 85
                }
            ]
        })
        setEntries(entryList)
    }, [router])

    if (showSidebar) {
        return (
            <div className="flex min-h-screen flex-row bg-gray-50 text-gray-800">
                <SideBar />
                <main className="lg:max-w-[calc(100vw-200px)] relative -ml-52 flex flex-grow flex-col transition-all duration-150 ease-in lg:ml-0">
                    <Navbar isSticky hideLogo />
                    <div className="flex lg:grid grid-cols-[minmax(0,1fr)_minmax(0,128px)] h-full px-8 lg:px-16">
                        <article className="w-full max-w-full">{children}</article>
                        <article className="hidden w-full max-w-[128px] mt-36 lg:block">
                            <FloatingNav entries={entries} />
                        </article>
                    </div>
                </main>
            </div>
        )
    }

    if (routesWithoutFooter.includes(router.pathname)) {
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
