import { useState, useRef, useCallback } from 'react'
import { copyToClipBoard } from 'dd360-utils'

export default function useCopy() {
    const [isCopied, setIsCopied] = useState(false)
    const timer = useRef<null | NodeJS.Timeout>(null)

    const handleCopy = useCallback((strToCopy: string) => {
        if (timer.current) clearTimeout(timer.current)
        copyToClipBoard(strToCopy).then(() => {
            setIsCopied(true)
            timer.current = setTimeout(() => setIsCopied(false), 3000)
        })
    }, [])

    return { isCopied, handleCopy }
}
