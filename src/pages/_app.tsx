import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import Head from 'next/head'
import i18n from '@/i18n'
import 'dd360-ds/dd360.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <I18nextProvider i18n={i18n}>
            <Head>
                <title>DD360 DS</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </I18nextProvider>
    )
}
