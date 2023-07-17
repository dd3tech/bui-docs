import { useEffect, useState } from 'react'
import { ConfirmDialog } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import useRelativePosition from '@/hooks/useRelativePosition'

interface ConfirmDialogCustomProps {
  title: string
  textConfirmBtn: string
  textCancelBtn: string
  onCancel: () => void
  width: string | number
}

const ConfirmDialogCustom = ({
  title,
  textConfirmBtn,
  textCancelBtn,
  onCancel,
  width
}: ConfirmDialogCustomProps) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)
  const { position, setPosition, setTargetRef } = useRelativePosition({})

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <div>
          <button
            ref={setTargetRef}
            className="flex items-center gap-1"
            onClick={() => {
              setPosition((position) => ({
                ...position,
                show: !position.show
              }))
            }}
          >
            Confirm Dialog
            <DynamicHeroIcon icon="FilterIcon" className="w-4 h-4" />
          </button>
          <ConfirmDialog
            width={width}
            onCancel={
              !onCancel
                ? undefined
                : () => setPosition({ ...position, show: false })
            }
            textCancelBtn={textCancelBtn}
            textConfirmBtn={textConfirmBtn}
            title={title}
            position={{
              top: position.top,
              left: position.left,
              show: position.show
            }}
            onConfirm={() => alert('onConfirm')}
            className="text-gray-900"
          >
            You want to confirm?
          </ConfirmDialog>
        </div>
      )}
    </>
  )
}

export default ConfirmDialogCustom
