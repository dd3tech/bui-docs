import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import * as Components from 'dd360-ds'
import { getAllPaths, getDocBySlug } from '@/utils/readFile'
import { WindowEditor } from '@/components'

type Props = {
    slug: string
    meta: {
        [key: string]: any
    }
    source: any
}

const components = { ...Components, WindowEditor }

export default function Slug({ source }: Props) {
    const { t } = useTranslation('common')
    return <MDXRemote {...source} components={components} scope={{ t }} />
}

/** Next.js Server functions */
export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllPaths(['es', 'en'])
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en' }) => {
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
