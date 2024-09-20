import { useEffect, useState } from 'react'
import { FilterRange, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const FilterRangeCustom = ({
  onTop,
  minMax
}: {
  onTop: boolean
  minMax: boolean
}) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <div>
          <button
            className="flex items-center gap-1"
            onClick={() => {
              setActive(!active)
            }}
          >
            <Text size="lg" bold>
              {onTop ? 'Filter range on top' : 'Filter range'}
            </Text>
            <DynamicHeroIcon icon="FilterIcon" className="w-4 h-4" />
          </button>
          {active && (
            <FilterRange
              max={minMax ? 100 : 0}
              min={minMax ? 30 : 0}
              onApply={() => undefined}
              onReset={() => undefined}
              title="Filter range name"
              defaultMax={minMax ? 100 : 0}
              defaultMin={minMax ? 30 : 0}
              textMax={minMax ? 'Custom max text' : 'Maximum'}
              textMin={minMax ? 'Custom min text' : 'Minimum'}
              className="container-cmpnt-doc"
            />
          )}
        </div>
      )}
    </>
  )
}

export default FilterRangeCustom
