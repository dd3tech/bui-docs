import NextHead from 'next/head'
import { useRouter } from 'next/router'

const HOST = 'https://bui.dd360.mx'
const KEYWORDS =
  'bui, buildd3r, buildd3r UI, dd360, react library, frontend, ui-kit, ui, react, tailwind, react components, npm package'

interface OpenGraphProps {
  title?: string
  description?: string
  url?: string
  image?: string
  iconUrl?: string
  type?: string
}

function OpenGraph({
  title = 'BUI - The React Library to build back-office platforms',
  description = 'Tailwind based React component library to build back-office platforms like DD360',
  url,
  image = '/bui-default.png',
  iconUrl = '/buildd3rUI-light.svg',
  type = 'website'
}: OpenGraphProps) {
  const router = useRouter()
  const urlContent = url ? url : `${HOST}${router.asPath}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="description" content={description} />
      <meta name="author" content="BUI-DD360" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={urlContent} key="url" />
      <meta property="og:image" content={image} key="image" />
      <meta property="og:ttl" content="604800" />
      <meta name="keywords" content={KEYWORDS} />
      <link rel="icon" href={iconUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BUI',
            url: HOST,
            logo: `${HOST}${iconUrl}`,
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
    </NextHead>
  )
}

export default OpenGraph
