import { Text } from 'dd360-ds'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'
import React, { ReactNode, useState } from 'react'

type ShowMoreProps = {
    title: string
    children: ReactNode | ReactNode[]
    icon?: IconName
}

function ShowMore({ title = 'Guide', children, icon }: ShowMoreProps) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div>
            <div className="flex gap-2.5 items-center">
                <DynamicHeroIcon icon={icon ?? 'AcademicCapIcon'} className="w-5 h-5" />
                <Text>{title}</Text>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <DynamicHeroIcon className="w-4 h-4" icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'} />
                </button>
            </div>
            {isOpen && (
                <>
                    <div className="pl-5 list-disc flex flex-col gap-2 mt-4">{children}</div>
                </>
            )}
        </div>
    )
}

export default ShowMore
