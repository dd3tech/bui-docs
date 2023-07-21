import { ReactNode } from 'react'
import { Circle } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'

interface CircleCustomProps {
  size?: string
  backgroundColor?: string
  children?: ReactNode
  onClick?: () => void
}

function CircleCustom({
  size = '36px',
  backgroundColor = 'transparent',
  children,
  onClick
}: CircleCustomProps) {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <Circle
      className={composeClasses(
        'flex border cursor-pointer',
        extendedPalette.borderIcon
      )}
      width={size}
      height={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </Circle>
  )
}

export default CircleCustom
