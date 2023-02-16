import { Card, Text } from 'dd360-ds'
import { getAllPaths } from '../utils/readFile'
import Link from 'next/link'
import { BannerDashboard, OpenGraph, TestimonialsBanner, WindowEditor } from '@/components'

type Props = {
    paths: string[]
}

export default function Home({ paths }: Props) {
    return (
        <>
            <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />
            <main className="max-w-7xl mx-auto">
                <Text variant="h1" className="mb-6">
                    Pages
                </Text>
                <div className="grid grid-cols-2">
                    {paths.map((slug) => (
                        <Link key={slug} href={`/docs/${slug}`}>
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

export function getStaticProps() {
    const { slugs: paths } = getAllPaths()
    return {
        props: {
            paths
        }
    }
}
