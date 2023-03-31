import { useState } from 'react'
import { Card, Button, Divider } from 'dd360-ds'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'
import { composeClasses, StyleObject } from 'dd360-ds/lib'

const DROPDOWN_ITEMS: Array<{ title: string; iconName: IconName }> = [
    {
        title: 'Shift Up',
        iconName: 'ArrowUpIcon'
    },
    {
        title: 'Shift right',
        iconName: 'ArrowRightIcon'
    },
    {
        title: 'Shift left',
        iconName: 'ArrowLeftIcon'
    }
]

const DropdownExample = ({ style, className }: { style: StyleObject; className: string }) => {
    const [position, setPosition] = useState(1)

    return (
        <Card padding={0} rounded="md" width={170} style={style} className={composeClasses('p-2', className)}>
            <Button className="text-xs font-medium w-full text-red-500 flex items-center gap-2 hover:bg-red-100" variant="link">
                <DynamicHeroIcon icon="TrashIcon" width={17} /> Delete concept
            </Button>
            <Divider className="border-gray-300" />
            {DROPDOWN_ITEMS.map(({ title, iconName }, idx) => (
                <Button
                    key={idx}
                    className="text-xs font-medium w-full mt-2 py-1 flex items-center gap-2"
                    onClick={() => setPosition(idx)}
                    variant={position === idx ? 'primary' : 'link'}
                >
                    <DynamicHeroIcon icon={iconName} width={17} /> {title}
                </Button>
            ))}
        </Card>
    )
}

export default DropdownExample
