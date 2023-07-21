import { useCallback, useState } from 'react'
import Switch from 'dd360-ds/Switch'

interface CustomSwitchProps {
  className?: string
}

function CustomSwitch({ className }: CustomSwitchProps) {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChecked = useCallback(() => {
    setChecked((prev) => !prev)
  }, [])

  return (
    <Switch className={className} toggle={checked} setToggle={handleChecked} />
  )
}

export default CustomSwitch
