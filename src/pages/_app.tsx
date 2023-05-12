import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'dd360-ds/theme'
import NextNProgress from 'nextjs-progressbar'
import { Layout } from '@/components'

import 'dd360-ds/dd360.css'
import '@/theme/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1d4ed8" />
      <Head>
        <title>DD360 DS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default appWithTranslation(App)
