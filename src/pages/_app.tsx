import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Layout, OpenGraph } from '@/components'
import {
  BUILDD3R_LANDING,
  GITHUB_URL,
  LANDING_DD360,
  NPM_URL,
  SIMULATOR_URL,
  BUI_URL
} from '@/utils/constants'
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
              url: BUI_URL,
              logo: `${BUI_URL}/buildd3rUI-light.svg`,
              sameAs: [
                GITHUB_URL,
                LANDING_DD360,
                BUILDD3R_LANDING,
                SIMULATOR_URL,
                NPM_URL
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
