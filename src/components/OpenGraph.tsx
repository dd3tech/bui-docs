import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

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
  children?: ReactNode
}

function OpenGraph({
  title = 'BUI - The React Library to build back-office platforms',
  description = 'Tailwind based React component library to build back-office platforms like DD360',
  url,
  image = '/bui-default.png',
  iconUrl = '/favicon.ico',
  type = 'website',
  children
}: OpenGraphProps) {
  const router = useRouter()
  const urlContent = url ? url : `${HOST}${router.asPath}`

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content="BUI-DD360" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={urlContent} key="url" />
      <meta property="og:image" content={image} key="image" />
      <meta property="og:ttl" content="604800" />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BUI" />

      <link rel="icon" href={iconUrl} />
      {children}
    </NextHead>
  )
}

export default OpenGraph
