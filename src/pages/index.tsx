import { Card, Text } from 'dd360-ds'
import { getAllPaths } from '../utils/readFile'
import Link from 'next/link'
import { Navbar } from '@/components'
import WindowEditor from '@/components/WindowEditor'

type Props = {
    paths: string[]
}

export default function Home({ paths }: Props) {
    return (
        <>
            <Navbar />
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
                <Card height={373} className="bg-blue-800 rounded-2xl my-11">
                    <div>
                        <Text>Star now</Text>
                        <Text>See our demo Dashboard</Text>
                    </div>
                </Card>
                <div className="grid grid-cols-9">
                    <WindowEditor className="col-span-5" />
                </div>
            </main>
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
