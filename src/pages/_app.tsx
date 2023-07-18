import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Layout, OpenGraph } from '@/components'
import UIProvider from '@/store/theme-store'
import 'dd360-ds/dd360.css'
import '@/theme/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1d4ed8" />
      <OpenGraph />
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default appWithTranslation(App)
