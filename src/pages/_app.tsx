import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import Head from 'next/head'
import i18n from '@/locales/i18n'
import 'dd360-ds/dd360.css'
import { Footer, Navbar } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title className="justify-around">DD360 DS</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <I18nextProvider i18n={i18n}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </I18nextProvider>
        </>
    )
}
