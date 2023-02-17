import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'dd360-ds/dd360.css'
import { Footer, Navbar } from '@/components'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>DD360 DS</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default appWithTranslation(App)
