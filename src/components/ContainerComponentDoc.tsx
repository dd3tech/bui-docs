import { FC, ReactNode } from 'react'
import { composeClasses } from 'dd360-ds/lib'

interface Props {
  children: ReactNode
  className?: string
}

const ContainerComponentDoc: FC<Props> = ({ children, className }) => {
  const classContainer = composeClasses(
    'container-cmpnt-doc py-5 base:px-1 px-3 rounded-md my-6 mx-0 shadow-sm overflow-auto bg-white',
    className
  )

  return <div className={classContainer}>{children}</div>
}

export default ContainerComponentDoc
