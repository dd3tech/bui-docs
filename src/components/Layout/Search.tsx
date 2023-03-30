import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { AutocompleteState, BaseItem } from '@algolia/autocomplete-core/dist/esm/types'
import { Kbd, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'

const capitalizeFirstLetter = (strg: string) => {
    const split = strg.split('-')
    const capitalize = split.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return capitalize.join(' ')
}

const Search = () => {
    const router = useRouter()
    const [selectedComponent, setSelectedComponent] = useState<{ index: number; path: string }>({ index: 0, path: '' })
    const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<BaseItem>>()
    const [isOpenSearchPanel, setIsOpenSearchPanel] = useState<boolean>(false)

    const formRef: MutableRefObject<HTMLFormElement | null> = useRef<HTMLFormElement>(null)
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null)
    const panelRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

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
                                return fetch(`/api/search-components?search=${query.replaceAll(' ', '-').trim()}`)
                                    .then((res) => res.json())
                                    .then((res) => res.data.map((item: string) => ({ path: item })))
                            }
                            return []
                        }
                    }
                ]
            }),
        []
    )

    const formProps: any = autocomplete.getFormProps({ inputElement: inputRef.current })
    const inputProps: any = autocomplete.getInputProps({ inputElement: inputRef.current })
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
                    path: autocompleteState?.collections[0]?.items[selectedComponent.index - 1]?.path as string
                })
            }
            if (e.key === 'ArrowDown') {
                if (selectedComponent.index + 1 === autocompleteState?.collections[0]?.items?.length) return
                containerRef.current?.scrollTo({
                    top: 48 * selectedComponent.index,
                    behavior: 'smooth'
                })
                setSelectedComponent({
                    index: selectedComponent.index + 1,
                    path: autocompleteState?.collections[0]?.items[selectedComponent.index + 1]?.path as string
                })
            }
            if (e.key === 'Enter') {
                if (!selectedComponent.path || selectedComponent.path === '') return
                router.replace(`/docs/${selectedComponent.path}`)
            }
        },
        [selectedComponent, autocompleteState?.collections]
    )

    useEffect(() => {
        autocomplete.setIsOpen(false)
        autocomplete.setQuery('')
        autocomplete.refresh()
    }, [router.asPath])

    useEffect(() => {
        if (autocompleteState?.collections[0]?.items.length === 0) return
        setSelectedComponent({ index: 0, path: (autocompleteState?.collections[0]?.items[0]?.path as string) || '' })
    }, [autocompleteState?.collections])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [autocompleteState, selectedComponent])

    return (
        <form className="relative hidden md:block" ref={formRef} {...formProps}>
            <div
                className="relative w-80 lg:mt-0 flex items-center px-4 bg-gray-100 hover:bg-white text-sm rounded-3xl hover:shadow-lg hover:border-gray-500 duration-500 ease-out focus:ease-in z-20"
                style={{ height: '40px' }}
            >
                <DynamicHeroIcon icon="SearchIcon" className="w-4 h-4 mr-2 shrink-0 text-gray-500 transition duration-500 ease-out focus:ease-in" />
                <input
                    ref={inputRef}
                    {...inputProps}
                    type="text"
                    className="w-full h-full mx-3.5 border-none font-medium bg-transparent transition duration-500 ease-out focus:ease-in placeholder-gray-400 outline-none"
                    placeholder="Search the docs   (Ctrl + k)"
                />
                <Text size="xs" fontBold="medium" className="min-w-max justify-self-end border py-1 px-2 rounded-2xl text-gray-500 select-none" variant="p">
                    Ctrl + K
                </Text>
            </div>

            <div
                ref={panelRef}
                className={composeClasses(
                    isOpenSearchPanel ? 'h-96 shadow-2xl' : 'h-0 border-none',
                    'absolute top-1/2 left-0 w-full max-h-80 flex flex-col bg-white border border-gray-300 rounded-b-2xl z-10 transition-all duration-300 ease-out overflow-hidden'
                )}
                {...panelProps}
            >
                <div className="mt-8 border-b">
                    <Text size="xs" fontBold="medium" className="py-2 px-2 text-gray-500" variant="p">
                        All results:
                    </Text>
                </div>
                {autocompleteState?.collections.map((collection) => {
                    const { items } = collection
                    return (
                        <section ref={containerRef} key={`search-section-${collection.source.sourceId}`} className="overflow-y-auto">
                            <ul className="flex flex-col w-full h-full" {...listProps}>
                                {items?.map((component, index) => {
                                    const path = component.path as string
                                    return (
                                        <Link key={`search-item-${path}`} href={`/docs/${path}`} replace>
                                            <li
                                                className={composeClasses(
                                                    selectedComponent.index === index ? 'bg-blue-50' : 'hover:bg-gray-100',
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
                <div className="w-full h-12 px-4 shrink-0 mt-auto border-t flex justify-between items-center">
                    <div className="h-full flex items-center gap-1">
                        <Text textMuted500 size="xs">
                            Up
                        </Text>
                        <Kbd kbds={['↑']} />
                    </div>
                    <div className="h-full flex items-center gap-1">
                        <Text textMuted500 size="xs">
                            Down
                        </Text>
                        <Kbd kbds={['↓']} />
                    </div>
                    <div className="h-full flex items-center gap-1">
                        <Text textMuted500 size="xs">
                            Submit
                        </Text>
                        <Kbd kbds={['Enter']} />
                    </div>
                    <div className="h-full flex items-center gap-1">
                        <Text textMuted500 size="xs">
                            Close
                        </Text>
                        <Kbd kbds={['Esc']} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Search
