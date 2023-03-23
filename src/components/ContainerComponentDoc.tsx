import { FC, ReactNode } from 'react'
import { composeClasses } from 'dd360-ds/lib'

interface Props {
    children: ReactNode
    className: string
}

const ContainerComponentDoc: FC<Props> = ({ children, className }) => {
    const classContainer = composeClasses('py-5 base:px-1 lg:px-3 rounded-md my-6 mx-0 bg-gray-100', className)

    return (
        <div className={classContainer}>
            {children}
        </div>
    )
}

export default ContainerComponentDoc
