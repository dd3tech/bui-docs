import Router from 'next/router'
import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

const options = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!,
  indexName: 'bui-dd360',
  placeholder: 'Search the docs'
}

interface SearchProps {
  className?: string
}

const Search = ({ className }: SearchProps) => {
  return (
    <div className={className}>
      <DocSearch
        {...options}
        navigator={{
          navigate({ itemUrl }: any) {
            Router.push(itemUrl)
          }
        }}
        transformItems={(items: any[]) =>
          items.map((item) => {
            const url = new URL(item.url)

            return {
              ...item,
              url: item.url.replace(url.origin, '').split('#')[0]
            }
          })
        }
      />
    </div>
  )
}

export default Search
