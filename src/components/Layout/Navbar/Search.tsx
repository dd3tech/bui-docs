import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createAutocomplete } from '@algolia/autocomplete-core'
import {
  AutocompleteState,
  BaseItem
} from '@algolia/autocomplete-core/dist/esm/types'
import { Flex, Kbd, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/pages/store/theme-store'

const capitalizeFirstLetter = (strg: string) => {
  const split = strg.split('-')
  const capitalize = split.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  return capitalize.join(' ')
}

interface SearchProps {
  className?: string
}

const Search = ({ className }: SearchProps) => {
  const router = useRouter()
  const [selectedComponent, setSelectedComponent] = useState<{
    index: number
    path: string
  }>({ index: 0, path: '' })
  const [autocompleteState, setAutocompleteState] =
    useState<AutocompleteState<BaseItem>>()
  const [isOpenSearchPanel, setIsOpenSearchPanel] = useState<boolean>(false)
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  const formRef: MutableRefObject<HTMLFormElement | null> =
    useRef<HTMLFormElement>(null)
  const inputRef: MutableRefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement>(null)
  const panelRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        onStateChange: ({ state }) => {
          setIsOpenSearchPanel(state.isOpen)
          setAutocompleteState({ ...state })
        },
        getSources: () => [
          {
            sourceId: 'components-slug-api',
            getItems: ({ query }) => {
              if (query) {
                return fetch(
                  `/api/search-components?search=${query
                    .toLowerCase()
                    .replaceAll(' ', '-')
                    .trim()}`
                )
                  .then((res) => res.json())
                  .then((res) =>
                    res.data.map((item: string) => ({ path: item }))
                  )
              }
              return []
            }
          }
        ]
      }),
    []
  )

  const formProps: any = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps: any = autocomplete.getInputProps({
    inputElement: inputRef.current
  })
  const panelProps: any = autocomplete.getPanelProps()
  const listProps: any = autocomplete.getListProps()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'KeyK') {
        inputRef.current?.focus()
        e.preventDefault()
      }
      if (e.code === 'Escape') {
        setIsOpenSearchPanel(false)
      }
      if (e.key === 'ArrowUp') {
        if (selectedComponent.index === 0) return
        containerRef.current?.scrollTo({
          top: 48 * selectedComponent.index - 48,
          behavior: 'smooth'
        })
        setSelectedComponent({
          index: selectedComponent.index - 1,
          path: autocompleteState?.collections[0]?.items[
            selectedComponent.index - 1
          ]?.path as string
        })
      }
      if (e.key === 'ArrowDown') {
        if (
          selectedComponent.index + 1 ===
          autocompleteState?.collections[0]?.items?.length
        )
          return
        containerRef.current?.scrollTo({
          top: 48 * selectedComponent.index,
          behavior: 'smooth'
        })
        setSelectedComponent({
          index: selectedComponent.index + 1,
          path: autocompleteState?.collections[0]?.items[
            selectedComponent.index + 1
          ]?.path as string
        })
      }
      if (e.key === 'Enter') {
        if (!selectedComponent.path || selectedComponent.path === '') return
        router.replace(`/docs/${selectedComponent.path}`)
      }
    },
    [
      selectedComponent.index,
      selectedComponent.path,
      autocompleteState?.collections,
      router
    ]
  )

  useEffect(() => {
    autocomplete.setIsOpen(false)
    autocomplete.setQuery('')
    autocomplete.refresh()
  }, [autocomplete, router.asPath])

  useEffect(() => {
    if (autocompleteState?.collections[0]?.items.length === 0) return
    setSelectedComponent({
      index: 0,
      path: (autocompleteState?.collections[0]?.items[0]?.path as string) || ''
    })
  }, [autocompleteState?.collections])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [autocompleteState, handleKeyDown, selectedComponent])

  return (
    <form className="search-container relative " ref={formRef} {...formProps}>
      <Flex
        alignItems="center"
        className={composeClasses(
          'relative lg:mt-0 px-4 text-sm rounded-xl hover:shadow-lg duration-500 ease-out focus:ease-in z-20 border',
          className
        )}
        style={{
          background: extendedPalette.inputBackground,
          borderColor: extendedPalette.inputBorder,
          height: '40px',
          width: 285
        }}
      >
        <DynamicHeroIcon
          icon="SearchIcon"
          className="w-4 h-4 mr-2 shrink-0 text-gray-500 transition duration-500 ease-out focus:ease-in"
        />
        <input
          ref={inputRef}
          {...inputProps}
          type="text"
          className="w-full h-full mx-3.5 border-none font-medium bg-transparent transition duration-500 ease-out focus:ease-in placeholder-gray-400 outline-none"
          placeholder="Search the docs"
        />
        <Text
          size="xs"
          fontBold="medium"
          className={composeClasses(
            'min-w-max justify-self-end border py-1 px-2 rounded-lg text-gray-500 select-none',
            extendedPalette.inputBorderSecondary
          )}
          variant="p"
        >
          Ctrl + K
        </Text>
      </Flex>

      <Flex
        ref={panelRef}
        className={composeClasses(
          isOpenSearchPanel ? 'h-96 shadow-2xl' : 'h-0 border-none',
          'absolute top-1/2 left-0 w-full flex-col bg-white border border-gray-300 rounded-b-2xl z-10 transition-all duration-300 ease-out overflow-hidden'
        )}
        style={{ maxWidth: 285 }}
        {...panelProps}
      >
        <div className="mt-8 border-b">
          <Text
            size="xs"
            fontBold="medium"
            className="py-2 px-2 text-gray-500"
            variant="p"
          >
            All results:
          </Text>
        </div>
        {autocompleteState?.collections.map((collection) => {
          const { items } = collection
          return (
            <section
              ref={containerRef}
              key={`search-section-${collection.source.sourceId}`}
              className="overflow-y-auto"
            >
              <ul className="flex flex-col w-full h-full" {...listProps}>
                {items?.map((component, index) => {
                  const path = component.path as string
                  return (
                    <Link
                      key={`search-item-${path}`}
                      href={`/docs/${path}`}
                      replace
                    >
                      <li
                        className={composeClasses(
                          selectedComponent.index === index
                            ? 'bg-blue-50'
                            : 'hover:bg-gray-100',
                          'w-full h-12 pl-4 flex items-center border-b text-gray-800'
                        )}
                      >
                        {capitalizeFirstLetter(path.split('/')[1])}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </section>
          )
        })}
        <Flex
          justifyContent="between"
          alignItems="center"
          className="w-full h-12 px-4 shrink-0 mt-auto border-t"
        >
          {/* <Flex alignItems="center" gap="1" className="h-full">
            <Text textMuted500 size="xs">
              Up
            </Text>
            <Kbd kbds={['↑']} />
          </Flex>
          <Flex alignItems="center" gap="1" className="h-full">
            <Text textMuted500 size="xs">
              Down
            </Text>
            <Kbd kbds={['↓']} />
          </Flex> */}
          <Flex alignItems="center" gap="1" className="h-full">
            <Text textMuted500 size="xs">
              Submit
            </Text>
            <Kbd kbds={['Enter']} />
          </Flex>
          <Flex alignItems="center" gap="1" className="h-full">
            <Text textMuted500 size="xs">
              Close
            </Text>
            <Kbd kbds={['Esc']} />
          </Flex>
        </Flex>
      </Flex>
    </form>
  )
}

export default Search
