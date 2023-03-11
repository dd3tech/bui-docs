import { Text } from 'dd360-ds'

const FloatingNav = () => (
    <div className="flex flex-col text-xs gap-y-2 border-l-2 border-gray-300 ml-4 pl-2 fixed">
        <Text variant="span">On this page</Text>
        <Text variant="span" className="text-base font-medium">
            Buttons
        </Text>
        <Text variant="span">Variants</Text>
        <Text variant="span">Usage example</Text>
        <Text variant="span">Anatomy</Text>
        <Text variant="span">API Reference</Text>
    </div>
)

export default FloatingNav
