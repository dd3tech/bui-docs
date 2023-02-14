import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

export const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(docsDirectory, `${realSlug}.mdx`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { slug: realSlug, meta: data, content }
}

export function getAllPaths() {
    const filenames = readdirSync(docsDirectory)
    const slugs: string[] = []

    const paths = filenames.map((filename) => {
        const slug = filename.replace('.mdx', '')
        slugs.push(slug)
        return { params: { slug } }
    })

    return {
        paths,
        slugs
    }
}
