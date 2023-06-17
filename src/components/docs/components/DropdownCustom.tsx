import { useEffect, useState } from 'react'
import { Dropdown, Button, Text, Skeleton } from 'dd360-ds'

const DropdownCustom = ({
  disableAnimation = false
}: {
  disableAnimation?: boolean
}) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)

  useEffect(() => setDomLoaded(true), [])

  return (
    <div className="w-64 px-2">
      {domLoaded ? (
        <Dropdown disableAnimation={disableAnimation}>
          <Dropdown.Trigger>
            <Button className="h-10 pt-2 pb-3" paddingX="3">
              <Text size="xs" bold className="text-white">
                Trigger
              </Text>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Text className="px-5" size="base" bold>
              Content
            </Text>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Skeleton className="h-10 rounded-md w-14" />
      )}
    </div>
  )
}

export default DropdownCustom
