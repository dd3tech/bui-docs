import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Layout, OpenGraph } from '@/components'
import UIProvider from '@/store/theme-store'
import 'dd360-ds/dd360.css'
import '@/theme/global.css'

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <NextNProgress color="#1d4ed8" />
      <OpenGraph title={t('metadata.home')!} />
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default appWithTranslation(App)
