import React, { useEffect, useState } from 'react'

import { FilterSelect, FilterSelectMulti, Flex, Text } from 'dd360-ds'
import { FilterIcon } from '@heroicons/react/outline'
import useRelativePosition from '@/hooks/useRelativePosition'

interface FilterSelectCustomProps {
  title: string
  selectedValue: string
  textApplyBtn: string
  textResetBtn: string
  width: number
  disabled: boolean
  isMulti?: boolean
}

const handleChange = () => {
  alert('handleChange')
}

const FilterSelectCustom = ({
  title,
  selectedValue,
  textApplyBtn,
  textResetBtn,
  width,
  disabled,
  isMulti
}: FilterSelectCustomProps) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <>
          <div className="h-8">
            <button onClick={() => setActive(!active)}>
              <Flex gap="3" justifyContent="center" alignItems="center">
                <Text className="mt-0.5 mr-1" bold>
                  {isMulti ? 'FilterSelectMulti' : 'FilterSelect'}
                </Text>
                <FilterIcon className="w-4 h-4" />
              </Flex>
            </button>
          </div>

          {active &&
            (isMulti ? (
              <FilterSelectMulti
                title={title}
                width={width}
                textApplyBtn={textApplyBtn}
                textResetBtn={textResetBtn}
                initialItemList={{
                  A: {
                    label: 'Option A'
                  },
                  B: {
                    label: 'Option B',
                    disabled
                  }
                }}
                onApply={handleChange}
                className="container-cmpnt-doc"
              />
            ) : (
              <FilterSelect
                title={title}
                width={width}
                textApplyBtn={textApplyBtn}
                textResetBtn={textResetBtn}
                selectedValue={selectedValue}
                listItems={{
                  A: {
                    label: 'Option A'
                  },
                  B: {
                    label: 'Option B',
                    disabled
                  }
                }}
                onApply={handleChange}
              />
            ))}
        </>
      )}
    </>
  )
}

export default FilterSelectCustom
