import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { ThemeProvider } from 'dd360-ds/theme'
import NextNProgress from 'nextjs-progressbar'
import { Layout, OpenGraph } from '@/components'

import 'dd360-ds/dd360.css'
import '@/theme/global.css'

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <NextNProgress color="#1d4ed8" />
      <OpenGraph title={t('metadata.home')!} />
      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default appWithTranslation(App)
