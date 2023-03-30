import matter from 'gray-matter'
import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'

interface Paths {
    params: { [key: string]: string }
    locale?: string
}

export const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(folder: string, slug: string) {
    const fullPath = join(`${docsDirectory}/${folder}`, `${slug}.mdx`)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { meta: data, content }
}

export function getAllPaths(allowedLocales?: string[], getAsString?: boolean) {
    const locales = allowedLocales ?? ['es']
    const paths: Paths[] = []
    const stringPaths: string[] = []

    const entries = readdirSync(docsDirectory, { withFileTypes: true })

    function addPathForFile(filename: string, folder: string) {
        for (const locale of locales) {
            if (filename.endsWith('.mdx')) {
                const slug = filename.replace('.mdx', '')
                getAsString
                    ? stringPaths.push(`${folder}/${slug}`)
                    : paths.push({
                          params: { folder, slug },
                          locale
                      })
            }
        }
    }

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const folderPath = join(docsDirectory, entry.name)
            const files = readdirSync(folderPath, 'utf-8')

            for (const filename of files) {
                addPathForFile(filename, entry.name)
            }
        }
    }

    return getAsString ? stringPaths : paths
}
