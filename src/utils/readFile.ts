import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

interface Paths {
    params: { [key: string]: string }
    locale?: string
}

export const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(docsDirectory, `${realSlug}.mdx`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { slug: realSlug, meta: data, content }
}

export function getAllPaths(allowedLocales?: string[]) {
    const locales = allowedLocales ?? ['es']
    const filenames = readdirSync(docsDirectory)
    const slugs: string[] = []
    const paths: Paths[] = []

    filenames.forEach((filename) => {
        const slug = filename.replace('.mdx', '')
        slugs.push(slug)
        locales.forEach((locale) => {
            paths.push({
                params: { slug },
                locale
            })
        })
    })

    return {
        paths,
        slugs
    }
}
