import { Button, Card, Divider } from 'dd360-ds'
import { composeClasses, StyleObject } from 'dd360-ds/lib'
import React from 'react'

const DropdownExample = ({ style, className }: { style: StyleObject; className: string }) => (
    <Card padding={0} rounded="md" width={170} style={style} className={composeClasses('p-2', className)}>
        <Button className="text-xs font-medium w-full text-red-500" variant="link">
            Delete concept
        </Button>
        <Divider className="border-gray-300" />
        <Button className="text-xs font-medium w-full mt-2 py-1" variant="primary">
            Shift right
        </Button>
        <Button className="text-xs font-medium w-full mt-2 py-1" variant="link">
            Shift right
        </Button>
        <Button className="text-xs font-medium w-full mt-2 py-1" variant="link">
            Shift left
        </Button>
    </Card>
)

export default DropdownExample
