import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Analytics } from '@vercel/analytics/react'
import { Layout, OpenGraph } from '@/components'
import {
  BUILDD3R_LANDING,
  GITHUB_URL,
  LANDING_DD360,
  NPM_URL,
  SIMULATOR_URL,
  BUI_URL,
  isProd
} from '@/utils'
import UIProvider from '@/store/theme-store'
import 'dd360-ds/dd360.css'
import '@/theme/global.css'
import '@/theme/algolia.css'

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
      {isProd && <Analytics />}
    </>
  )
}

export default appWithTranslation(App)
