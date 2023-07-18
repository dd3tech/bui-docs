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
      <OpenGraph>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BUI',
              url: 'https://bui.dd360.mx',
              logo: 'https://bui.dd360.mx/buildd3rUI-light.svg',
              sameAs: [
                'https://github.com/dd3tech/bui',
                'https://dd360.mx',
                'https://buildd3r.dd360.mx',
                'https://onboarding.dd360.mx',
                'https://github.com/dd3tech/bui-docs',
                'https://www.npmjs.com/package/dd360-ds'
              ]
            })
          }}
        />
      </OpenGraph>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default appWithTranslation(App)
