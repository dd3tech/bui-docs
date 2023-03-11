import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'dd360-ds/dd360.css'
import { Layout } from '@/components'
import { appWithTranslation } from 'next-i18next'
import '@/theme/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>DD360 DS</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(App)
