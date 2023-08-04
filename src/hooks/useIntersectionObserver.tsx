import { useEffect, useMemo, useRef, useState } from 'react'
import { getElements } from '@/utils'

interface UseIntersectionObserverProps {
  targetSearchElement: string
  searchBy: 'name' | 'class' | 'tag'
  observerOptions?: {
    rootTag?: string | null
    offset?: string
  }
}

/**
 * The `useIntersectionObserver` is a custom hook that uses the Intersection Observer API to track the
 * intersection of specified elements with a target element and returns the index of the first
 * intersecting element.
 * @param {UseIntersectionObserverProps}
 * - `targetSearchElement` (string): The element(s) to be observed for intersection. This can be a CSS selector, className, or tag name.
 * - `searchBy` ('name' | 'class' | 'tag'): The criteria to use for searching the HTML element target
 * - `observerOptions` (object): The options to be used for the Intersection Observer API. This is an optional parameter.
 * @returns The `useIntersectionObserver` hook returns the index of the first element in the `entries`
 * array that is intersecting with the viewport. If no elements intersect, it returns -1.
 */
export const useIntersectionObserver = ({
  targetSearchElement,
  searchBy,
  observerOptions = { rootTag: null, offset: '0px 0px 0px 0px' }
}: UseIntersectionObserverProps) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  const intersectIndex = useMemo(
    () => entries?.findIndex((entry) => entry?.isIntersecting),
    [entries]
  )
  const newRoot = useMemo(
    () =>
      observerOptions?.rootTag &&
      document?.querySelector(observerOptions.rootTag),
    [observerOptions?.rootTag]
  )

  useEffect(() => {
    const elements = getElements(targetSearchElement, searchBy)
    if (!elements?.length) return

    observerRef.current = new IntersectionObserver(
      (newEntries) => setEntries(newEntries),
      {
        root: newRoot || null,
        rootMargin: observerOptions?.offset
      }
    )

    elements.forEach((element: HTMLElement) =>
      observerRef.current?.observe(element)
    )

    return () => observerRef?.current?.disconnect()
  }, [targetSearchElement, searchBy, observerOptions, newRoot])

  return intersectIndex
}
