import { useEffect, useState } from 'react'
import { FilterDate, Skeleton, Text } from 'dd360-ds'
import { FilterIcon } from '@heroicons/react/solid'

const FilterDateCustom = ({
  onTop,
  title,
  textApplyBtn,
  textResetBtn,
  language
}: {
  onTop: boolean
  title: string
  textApplyBtn: string
  textResetBtn: string
  language: 'es' | 'en'
}) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)
  const [position, setPosition] = useState<{
    top: number
    left: number
    show: boolean
  }>({
    top: 0,
    left: 0,
    show: false
  })

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded ? (
        <div>
          <button
            className="flex items-center gap-1"
            onClick={(event) => {
              setPosition((position) => ({
                top: event.pageY,
                left: event.pageX,
                show: !position.show
              }))
            }}
          >
            <Text size="lg" bold>
              {onTop ? 'Filter date on top' : 'Filter date'}
            </Text>
            <FilterIcon className="w-4 h-4" />
          </button>
          <FilterDate
            onApply={() => undefined}
            onReset={() => undefined}
            position={{
              top: position.top + (onTop ? -260 : 40),
              left: position.left,
              show: position.show
            }}
            language={language}
            title={title}
            textApplyBtn={textApplyBtn}
            textResetBtn={textResetBtn}
          />
        </div>
      ) : (
        <Skeleton className="mt-2 h-8 w-32" />
      )}
    </>
  )
}

export default FilterDateCustom
