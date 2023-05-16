import { useEffect, useState } from 'react'
import { FilterRange, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const FilterRangeCustom = ({ onTop, minMax }: { onTop: boolean, minMax: boolean }) => {
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
      {domLoaded && (
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
              {onTop ? 'Filter range on top' : 'Filter range'}
            </Text>
            <DynamicHeroIcon icon="FilterIcon" className="w-4 h-4" />
          </button>
          <FilterRange
            max={minMax ? 100 : 0}
            min={minMax ? 30 : 0}
            onApply={() => undefined}
            onReset={() => undefined}
            position={{
              top: position.top + (onTop ? -180 : 40),
              left: position.left,
              show: position.show
            }}
            title="Filter range name"
            defaultMax={minMax ? 100 : 0}
            defaultMin={minMax ? 30 : 0}
            textMax={minMax ? 'Custom max text' : 'Maximum'}
            textMin={minMax ? 'Custom min text' : 'Minimum'}
          />
        </div>
      )}
    </>
  )
}

export default FilterRangeCustom
