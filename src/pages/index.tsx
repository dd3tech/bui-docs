import { Card, Text } from 'dd360-ds'
import { getAllPaths } from '../utils/readFile'
import Link from 'next/link'
import { BannerDashboard, OpenGraph, TestimonialsBanner, WindowEditor } from '@/components'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
    paths: string[]
}

export default function Home({ paths }: Props) {
    const { i18n } = useTranslation()
    return (
        <>
            <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />
            <main className="max-w-7xl mx-auto p-4 lg:p-8 xl:px-0">
                <Text variant="h1" className="mb-6">
                    Pages
                </Text>
                <div className="grid grid-cols-2">
                    {paths.map((slug) => (
                        <Link key={slug} href={`/docs/${slug}`} locale={i18n.language}>
                            <Card>{slug}</Card>
                        </Link>
                    ))}
                </div>
                <BannerDashboard />
                <div className="grid grid-cols-9">
                    <WindowEditor className="col-span-5" />
                </div>
            </main>
            <TestimonialsBanner />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
    const { slugs: paths } = getAllPaths()
    return {
        props: {
            paths,
            ...(await serverSideTranslations(locale))
        }
    }
}
