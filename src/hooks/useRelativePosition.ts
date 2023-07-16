import { useState, useEffect, useCallback } from 'react'

interface UseRelativePositionProps {
  containerId?: string
  basePosition?: { top: number; left: number; show: boolean }
}

const initPosition = {
  top: 35,
  left: 20,
  show: false
}

export default function useRelativePosition({
  basePosition = initPosition,
  containerId = 'container-doc'
}: UseRelativePositionProps) {
  const [position, setPosition] = useState(basePosition)
  const [targetRef, setTargetRef] = useState<any>(null)

  const handleScroll = useCallback(() => {
    const container = document.getElementById(containerId)

    if (container && targetRef) {
      const targetRect = targetRef.getBoundingClientRect()

      if (!targetRect) return
      const top = targetRect.top
      const left = targetRect.left

      setPosition((prev) => ({
        top: top + basePosition.top,
        left: left + basePosition.left,
        show: prev.show
      }))
    }
  }, [targetRef, containerId, basePosition])

  useEffect(() => {
    if (!targetRef || !containerId || !handleScroll) return

    const container = document.getElementById(containerId)
    container?.addEventListener('scroll', handleScroll)

    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [targetRef, containerId, handleScroll])

  useEffect(() => {
    handleScroll()
  }, [handleScroll])

  return { position, setPosition, setTargetRef }
}
