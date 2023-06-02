import NextHead from 'next/head'

interface OpenGraphProps {
  title?: string
  description?: string
  keyword?: string
  url?: string
  image?: string
  icon?: string
}

function OpenGraph({
  title,
  description,
  keyword,
  url,
  image,
  icon = '/logo-dd360-white.png'
}: OpenGraphProps) {
  return (
    <NextHead>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} key="title" />}
      {description && <meta name="description" content={description} />}
      {description && (
        <meta
          property="og:description"
          content={description}
          key="description"
        />
      )}
      {url && <meta property="og:url" content={url} key="url" />}
      {image && <meta property="og:image" content={image} key="image" />}
      {keyword && <meta name="keywords" content={keyword} />}
      {icon && <link rel="icon" href={icon} />}
    </NextHead>
  )
}

export default OpenGraph
