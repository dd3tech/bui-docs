import { useEffect, useState } from 'react'
import { FilterRangeSlider, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import useRelativePosition from '@/hooks/useRelativePosition'

const FilterRangeSliderCustom = ({
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
            onClick={() => setActive(!active)}
          >
            <Text size="lg" bold>
              {onTop ? 'Filter range on top' : 'Filter range'}
            </Text>
            <DynamicHeroIcon icon="FilterIcon" className="w-4 h-4" />
          </button>
          {active && (
            <FilterRangeSlider
              title="Filter range slider name"
              onApply={() => undefined}
              onReset={() => undefined}
              max={minMax ? 300 : 100}
              min={minMax ? 150 : 0}
              minValDisabled={minMax}
              className="container-cmpnt-doc"
            />
          )}
        </div>
      )}
    </>
  )
}

export default FilterRangeSliderCustom
