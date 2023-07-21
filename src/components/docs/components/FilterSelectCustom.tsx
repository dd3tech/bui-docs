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
  const { position, setPosition, setTargetRef } = useRelativePosition({})

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <>
          <div className="h-8">
            <button
              onClick={() =>
                setPosition((position) => ({
                  ...position,
                  show: !position.show
                }))
              }
              ref={setTargetRef}
            >
              <Flex gap="3" justifyContent="center" alignItems="center">
                <Text className="mt-0.5 mr-1" bold>
                  {isMulti ? 'FilterSelectMulti' : 'FilterSelect'}
                </Text>
                <FilterIcon className="w-4 h-4" />
              </Flex>
            </button>
          </div>

          {isMulti ? (
            <FilterSelectMulti
              title={title}
              textApplyBtn={textApplyBtn}
              textResetBtn={textResetBtn}
              position={position}
              width={width}
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
              selectedValue={selectedValue}
              textApplyBtn={textApplyBtn}
              textResetBtn={textResetBtn}
              position={position}
              width={width}
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
          )}
        </>
      )}
    </>
  )
}

export default FilterSelectCustom
