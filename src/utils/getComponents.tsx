import { Text } from 'dd360-ds'
import { ReactNode } from 'react'
import { WindowEditor } from '@/components'
import * as Components from 'dd360-ds'

type Props = { children: ReactNode }

export function getComponents() {
    return {
        h1: ({ children }: Props) => (
            <Text variant="h1" className="mb-4" bold>
                {children}
            </Text>
        ),
        h2: ({ children }: Props) => (
            <Text variant="h2" className="mb-4" bold>
                {children}
            </Text>
        ),
        h3: ({ children }: Props) => (
            <Text variant="h3" className="mb-4" bold>
                {children}
            </Text>
        ),
        h4: ({ children }: Props) => (
            <Text variant="h4" className="mb-4" bold>
                {children}
            </Text>
        ),
        h5: ({ children }: Props) => (
            <Text variant="h5" className="mb-4" bold>
                {children}
            </Text>
        ),
        p: ({ children }: Props) => (
            <Text variant="p" size="base" className="mb-4 text-gray-500 font-normal">
                {children}
            </Text>
        ),
        WindowEditor,
        ...Components
        // Add other custom components here as needed ---| Here |---
    }
}
