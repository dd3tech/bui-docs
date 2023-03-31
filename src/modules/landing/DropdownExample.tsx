import { useState } from 'react'
import { Card, Button, Divider } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses, StyleObject } from 'dd360-ds/lib'

const POSITIONS = {
    one: 1,
    two: 2,
    three: 3
}

const DropdownExample = ({ style, className }: { style: StyleObject; className: string }) => {
    const [position, setPosition] = useState(1)

    return (
        <Card padding={0} rounded="md" width={170} style={style} className={composeClasses('p-2', className)}>
            <Button className="text-xs font-medium w-full text-red-500 flex items-center gap-2" variant="link">
                <DynamicHeroIcon icon="TrashIcon" width={17} /> Delete concept
            </Button>
            <Divider className="border-gray-300" />
            <Button
                className="text-xs font-medium w-full mt-2 py-1 flex items-center gap-2"
                onClick={() => setPosition(POSITIONS.one)}
                variant={position === POSITIONS.one ? 'primary' : 'link'}
            >
                <DynamicHeroIcon icon="ArrowRightIcon" width={17} /> Shift right
            </Button>
            <Button
                className="text-xs font-medium w-full mt-2 py-1 flex items-center gap-2"
                onClick={() => setPosition(POSITIONS.two)}
                variant={position === POSITIONS.two ? 'primary' : 'link'}
            >
                <DynamicHeroIcon icon="ArrowRightIcon" width={17} /> Shift right
            </Button>
            <Button
                className="text-xs font-medium w-full mt-2 py-1 flex items-center gap-2"
                onClick={() => setPosition(POSITIONS.three)}
                variant={position === POSITIONS.three ? 'primary' : 'link'}
            >
                <DynamicHeroIcon icon="ArrowLeftIcon" width={17} /> Shift left
            </Button>
        </Card>
    )
}

export default DropdownExample
