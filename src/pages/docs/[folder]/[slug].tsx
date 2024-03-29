import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from 'dd360-ds'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPaths, getDocBySlug } from '@/utils/readFile'
import { useGetComponents } from '@/hooks/useGetComponents'

type Props = {
  slug: string
  meta: {
    [key: string]: any
  }
  source: any
}

export default function Slug({ source }: Props) {
  const { t } = useTranslation('common')

  useEffect(() => {
    const topElement = document.getElementById('top')
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [source])

  return (
    <Container className="DocSearch-content">
      <MDXRemote
        {...source}
        components={{ ...useGetComponents() }}
        scope={{ t }}
      />
    </Container>
  )
}

/** Next.js Server functions */
export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPaths(['es', 'en'])
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'en'
}) => {
  const { slug = '', folder = '' } = params as { slug: string; folder: string }
  const { content, meta } = getDocBySlug(folder, slug)
  const mdxSource = await serialize(content)

  return {
    props: {
      slug,
      meta,
      source: mdxSource,
      locale,
      ...(await serverSideTranslations(locale))
    }
  }
}
