import { ReactNode, useState } from 'react'
import Switch from 'dd360-ds/Switch'

const SwitchCustom = ({
  text,
  customIcon
}: {
  text: string
  customIcon: ReactNode
}) => {
  const [handleToogle, setHandleToogle] = useState(false)

  return (
    <Switch
      customIcon={customIcon}
      text={text}
      toggle={handleToogle}
      setToggle={() => setHandleToogle(!handleToogle)}
    />
  )
}
export default SwitchCustom
