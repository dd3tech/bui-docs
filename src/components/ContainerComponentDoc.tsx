import { FC, ReactNode } from 'react'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/pages/store/theme-store'

interface Props {
  children: ReactNode
  className: string
  isPagination: boolean
}

const ContainerComponentDoc: FC<Props> = ({ children, className }) => {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  const classContainer = composeClasses(
    'py-5 base:px-1 px-3 rounded-md my-6 mx-0 shadow-sm overflow-auto',
    className
  )

  return (
    <div
      className={classContainer}
      style={{ backgroundColor: extendedPalette.windowEditorBackground }}
    >
      {children}
    </div>
  )
}

export default ContainerComponentDoc
