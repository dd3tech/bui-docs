import { ReactNode } from 'react'
import { useTheme } from '@/pages/store/theme-store'
import { Circle } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

interface CircleCustomProps {
  children?: ReactNode
  onClick: () => void
}

function CircleCustom({ children, onClick }: CircleCustomProps) {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <Circle
      className={composeClasses(
        'flex border cursor-pointer',
        extendedPalette.borderIcon
      )}
      width="36px"
      height="36px"
      backgroundColor="transparent"
      onClick={onClick}
    >
      {children}
    </Circle>
  )
}

export default CircleCustom
