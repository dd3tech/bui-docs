import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SideBar from './SideBar'

function Layout({ children }: { children: JSX.Element }) {
    const router = useRouter()
    const showSidebar = router.pathname.startsWith('/docs')

    if (showSidebar) {
        return (
            <>
                <Navbar isSticky />
                <main className="mx-auto px-4 lg:px-8 2xl:px-0 grid grid-cols-12" style={{ maxWidth: '1400px' }}>
                    <SideBar />
                    <div className="col-span-9 sidebar-list">{children}</div>
                </main>
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
