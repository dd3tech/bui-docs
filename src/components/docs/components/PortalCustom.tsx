import React, { useEffect, useState } from 'react'
import { Button, Text } from 'dd360-ds'
import { Portal } from 'dd360-ds/Portal'

const PortalCustom = () => {
    const [isactive, setIsactive] = useState<boolean>(false)
    const [domLoaded, setDomLoaded] = useState<boolean>(false)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

  return (
    <div className='relative flex items-center gap-4'>
      <Text size='base' bold>Portal component</Text>
      <Button onClick={()=> setIsactive((isactive) => !isactive)}>Toggle Portal</Button>
      {domLoaded && isactive && (
        <Portal>
          <div className='fixed left-1/2 top-1/2 w-40 h-24 flex justify-center items-center border rounded-lg bg-white'>
            <Text>Hey!!! I am a Portal</Text>
          </div>
        </Portal>
      )}
    </div>
  )
}

export default PortalCustom