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
import Image from 'next/image'
import { Flex, Modal, Text } from 'dd360-ds'
import { SearchIcon } from '@heroicons/react/solid'
import { createAutocomplete } from '@algolia/autocomplete-core'
import {
  AutocompleteState,
  BaseItem
} from '@algolia/autocomplete-core/dist/esm/types'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'
import { EnterIcon } from '@/components/Icon'
import CircleCustom from './CircleCustom'

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
    themeObject: { extendedPalette },
    isLightTheme
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

      if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
        setIsOpenSearchPanel(true)
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
    <>
      <form
        className="search-container hidden sm:block relative"
        ref={formRef}
        {...formProps}
      >
        <Flex
          alignItems="center"
          className={composeClasses(
            'relative lg:mt-0 px-4 text-sm rounded-xl hover:shadow-lg duration-500 ease-out focus:ease-in z-20 border',
            className
          )}
          style={{
            background: extendedPalette.inputBackground,
            borderColor: extendedPalette.inputBorderHex,
            height: '40px',
            width: 253
          }}
        >
          <SearchIcon
            className={composeClasses(
              'w-4 h-4 mr-2 shrink-0 transition duration-500 ease-out focus:ease-in',
              extendedPalette.tertiaryText
            )}
          />
          <input
            type="text"
            className={composeClasses(
              'w-full h-full mx-3.5 border-none font-medium bg-transparent transition duration-500 ease-out focus:ease-in placeholder-gray-400 outline-none',
              extendedPalette.primaryText
            )}
            placeholder="Search the docs"
            onClick={() => setIsOpenSearchPanel(true)}
          />
          <Text
            size="xs"
            fontBold="medium"
            className={composeClasses(
              'min-w-max justify-self-end border py-1 px-2 rounded-lg select-none',
              extendedPalette.inputBorderSecondary,
              extendedPalette.tertiaryText
            )}
            variant="p"
          >
            Ctrl + K
          </Text>
        </Flex>
      </form>
      <CircleCustom
        className="sm:hidden"
        onClick={() => setIsOpenSearchPanel(true)}
      >
        <SearchIcon
          className={composeClasses('w-4 h-4 flex justify-center items-center')}
          color={extendedPalette.navbarIconHex}
        />
      </CircleCustom>
      <Modal
        className={composeClasses(
          'modal-algolia flex py-3 px-4 justify-center h-[95%] sm:h-fit translate-y-[-50%] sm:translate-y-0 items-start top-[50%] sm:top-32 border w-[95%] md:w-full max-w-[800px] mx-10',
          isLightTheme ? 'bg-gray-50' : 'bg-gray-900',
          extendedPalette.modalBorder
        )}
        active={isOpenSearchPanel}
        setCloseModal={() => setIsOpenSearchPanel(false)}
        style={{
          minHeight: 242
        }}
      >
        <Flex
          alignItems="center"
          className={composeClasses(
            'relative h-[54px] lg:mt-0 px-4 text-sm rounded-xl hover:shadow-lg duration-500 ease-out focus:ease-in z-20 border w-full mb-6',
            className,
            extendedPalette.inputBorder,
            `focus-within:${
              isLightTheme ? 'border-blue-700' : 'border-blue-400'
            }`
          )}
          style={{
            background: extendedPalette.inputBackground
          }}
        >
          <SearchIcon
            className={composeClasses(
              'w-6 h-6 mr-2 shrink-0 transition duration-500 ease-out focus:ease-in',
              extendedPalette.tertiaryText
            )}
          />
          <input
            ref={inputRef}
            {...inputProps}
            type="text"
            className={composeClasses(
              'w-full h-full mx-3.5 border-none font-medium bg-transparent transition duration-500 ease-out focus:ease-in placeholder-gray-400 outline-none',
              extendedPalette.primaryText
            )}
            placeholder="Search the docs"
          />
          <Text
            size="xs"
            fontBold="medium"
            className={composeClasses(
              'min-w-max justify-self-end border py-1 px-2 rounded-lg select-none',
              extendedPalette.inputBorderSecondary,
              extendedPalette.tertiaryText,
              isLightTheme
                ? 'text-gray-500 bg-gray-100'
                : 'text-white bg-gray-800'
            )}
            variant="p"
            onClick={() => setIsOpenSearchPanel(false)}
          >
            Close
          </Text>
        </Flex>
        {inputProps.value &&
          autocompleteState?.collections.map((collection) => {
            const { items } = collection
            return (
              <section
                ref={containerRef}
                key={`search-section-${collection.source.sourceId}`}
                className="pb-3 h-[calc(100%-54px)] sm:max-h-[200px] -mr-1.5"
              >
                {!items?.length && !!inputProps.value ? (
                  <div className="flex justify-center items-center min-h-[120px] w-full text-lg sm:text-xl pb-6">
                    No results for &nbsp;
                    <Text bold>&quot;{inputProps.value}&quot;</Text>
                  </div>
                ) : (
                  <ul
                    className="flex flex-col w-full h-full gap-2 sm:max-h-[200px] overflow-y-auto pb-4 pr-1.5"
                    {...listProps}
                  >
                    {items?.map((component) => {
                      const path = component.path as string
                      const [section, name] = path.split('/')

                      return (
                        <Link
                          key={`search-item-${path}`}
                          href={`/docs/${path}`}
                          replace
                        >
                          <li
                            className={composeClasses(
                              'flex justify-center items-center h-[70px] rounded-lg py-2 px-4 hover:text-white',
                              extendedPalette.searchSelectedOption,
                              extendedPalette.primaryText,
                              isLightTheme
                                ? 'hover:bg-blue-700'
                                : 'hover:bg-blue-500'
                            )}
                          >
                            <div className="mr-3 text-3xl">#</div>
                            <div className="w-full h-full flex flex-col justify-center items-start">
                              <Text variant="p" size="xl">
                                {capitalizeFirstLetter(name)}
                              </Text>
                              <Text variant="p" className="capitalize">
                                {section}
                              </Text>
                            </div>
                            <div>
                              <EnterIcon />
                            </div>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </section>
            )
          })}
        {(!autocompleteState?.collections.length || !inputProps.value) && (
          <div className="flex justify-center items-center min-h-[120px] w-full text-xl pb-6">
            No recent searches
          </div>
        )}
        <div
          className={composeClasses(
            'flex justify-end items-center h-14 px-4 -mx-4 -mb-3 rounded-b-2xl border-t',
            extendedPalette.modalBorder
          )}
        >
          <Text className="pr-2">Search by</Text>
          <Image
            src={`/algolia-logo-${isLightTheme ? 'dark' : 'light'}.png`}
            alt="algolia-logo"
            width={73.14}
            height={16}
          />
        </div>
      </Modal>
    </>
  )
}

export default Search
