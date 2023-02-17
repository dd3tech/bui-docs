import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Card } from 'dd360-ds'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPaths, getDocBySlug } from '@/utils/readFile'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
    slug: string
    meta: {
        [key: string]: any
    }
    source: any
}

const components = { Card }

export default function Slug({ source }: Props) {
    const { t, i18n } = useTranslation('common')
    console.log({
        t,
        i18n,
        source
    })

    return (
        <main className="max-w-7xl mx-auto lg:px-8 xl:px-0">
            <MDXRemote {...source} components={components} />
        </main>
    )
}

/** Next.js Server functions */
export const getStaticPaths: GetStaticPaths = () => {
    const { paths } = getAllPaths(['es', 'en'])

    return {
        paths,
        fallback: true
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
