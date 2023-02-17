import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Card, TabGroup, Tab } from 'dd360-ds'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPaths, getDocBySlug } from '@/utils/readFile'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { WindowEditor } from '@/components'

type Props = {
    slug: string
    meta: {
        [key: string]: any
    }
    source: any
}

const components = { Card, TabGroup, Tab, WindowEditor }

export default function Slug({ source }: Props) {
    const { t } = useTranslation('common')

    return (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-0">
            <MDXRemote {...source} components={components} scope={{ t }} />
        </main>
    )
}

/** Next.js Server functions */
export const getStaticPaths: GetStaticPaths = () => {
    const { paths } = getAllPaths(['es', 'en'])

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en' }) => {
    const { slug = '' } = params as { slug: string; locale: string }
    const { content, meta } = getDocBySlug(slug)
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
