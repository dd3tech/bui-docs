import { useTranslation } from 'next-i18next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Card } from 'dd360-ds'
import { GetStaticProps } from 'next'
import { getAllPaths, getDocBySlug } from '@/utils/readFile'

type Props = {
    slug: string
    meta: {
        [key: string]: any
    }
    source: any
}

const components = { Card }

export default function Slug({ source }: Props) {
    const { t } = useTranslation()
    return (
        <main className="max-w-7xl mx-auto">
            <MDXRemote {...source} components={components} scope={{ t }} />
        </main>
    )
}

/** Next.js Server functions */
export function getStaticPaths() {
    const { paths } = getAllPaths()

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = '' } = params as { slug: string }
    const { content, meta } = getDocBySlug(slug)
    const mdxSource = await serialize(content)

    return {
        props: {
            slug,
            meta,
            source: mdxSource
        }
    }
}
