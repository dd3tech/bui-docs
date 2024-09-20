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
  const [active, setActive] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded ? (
        <div>
          <button
            className="flex items-center gap-1"
            onClick={() => {
              setActive(!active)
            }}
          >
            <Text size="lg" bold>
              {onTop ? 'Filter date on top' : 'Filter date'}
            </Text>
            <FilterIcon className="w-4 h-4" />
          </button>
          {active && (
            <FilterDate
              onApply={() => undefined}
              onReset={() => undefined}
              language={language}
              title={title}
              textApplyBtn={textApplyBtn}
              textResetBtn={textResetBtn}
              className="container-cmpnt-doc"
            />
          )}
        </div>
      ) : (
        <Skeleton className="mt-2 h-8 w-32" />
      )}
    </>
  )
}

export default FilterDateCustom
