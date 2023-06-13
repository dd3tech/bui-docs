import React, { useEffect, useRef, useState } from 'react'

import { FilterSelect, Flex, Text } from 'dd360-ds'
import { FilterIcon } from '@heroicons/react/outline'

interface FilterSelectCustomProps {
  title: string
  selectedValue: string
  textApplyBtn: string
  textResetBtn: string
  width: number
  disabled: boolean
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
  disabled
}: FilterSelectCustomProps) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)
  const refButton = useRef<null | HTMLButtonElement>(null)
  const [position, setPosition] = useState({ show: false, left: 0, top: 0 })

  const handleClick = () => {
    if (refButton.current !== null) {
      const { offsetLeft, offsetTop } = refButton.current
      setPosition((current) => ({
        ...position,
        show: !current.show,
        left: offsetLeft + 200,
        top: offsetTop + 45
      }))
    }
  }

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <>
          <div className="h-8">
            <button onClick={handleClick} ref={refButton}>
              <Flex gap="3" justifyContent="center" alignItems="center">
                <Text className="mt-0.5 mr-1" bold>
                  FilterSelect
                </Text>
                <FilterIcon className="w-4 h-4" />
              </Flex>
            </button>
          </div>
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
        </>
      )}
    </>
  )
}

export default FilterSelectCustom
