import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { BUI_URL } from '@/utils/constants'

const KEYWORDS =
  'bui, buildd3r, buildd3r UI, dd360, react library, frontend, ui-kit, ui, react, tailwind, react components, npm, npm package'

interface OpenGraphProps {
  title?: string
  description?: string
  url?: string
  image?: string
  iconUrl?: string
  type?: string
  children?: ReactNode
}

function OpenGraph({
  title = 'BUI - The React Library to build back-office platforms',
  description = 'Tailwind based React component library to build back-office platforms like DD360',
  url,
  image = '/social-networks/bui-components-light.png',
  iconUrl = '/favicon/favicon.ico',
  type = 'website',
  children
}: OpenGraphProps) {
  const router = useRouter()
  const urlContent = url ? url : `${BUI_URL}${router.asPath}`
  const imagePreview = image.startsWith('https://')
    ? image
    : `${BUI_URL}${image}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="author" content="BUI-DD360" />

      <meta property="og:description" content={description} key="description" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={urlContent} key="url" />
      <meta property="og:image" content={imagePreview} key="image" />
      <meta property="og:ttl" content="604800" />

      <meta name="twitter:image" content={imagePreview} />
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:site" content="@bui" />

      <link rel="icon" href={iconUrl} />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link rel="manifest" href="/manifest.json" />
      {children}
    </NextHead>
  )
}

export default OpenGraph
