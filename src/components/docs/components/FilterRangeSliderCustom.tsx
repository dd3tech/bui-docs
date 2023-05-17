import { useEffect, useState } from 'react'
import { FilterRangeSlider, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const FilterRangeSliderCustom = ({
  onTop,
  minMax
}: {
  onTop: boolean
  minMax: boolean
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
          <FilterRangeSlider
            title="Filter range slider name"
            onApply={() => undefined}
            onReset={() => undefined}
            position={{
              top: position.top + (onTop ? -160 : 40),
              left: position.left,
              show: position.show
            }}
            max={minMax ? 300 : 100}
            min={minMax ? 150 : 0}
            minValDisabled={minMax}
          />
        </div>
      )}
    </>
  )
}

export default FilterRangeSliderCustom
