import { useEffect, useState } from 'react'
import { ConfirmDialog } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

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
  const [position, setPosition] = useState<{
    top: number
    left: number
    show: boolean
  }>({
    top: 0,
    left: 0,
    show: false
  })

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <div>
          <button
            className="flex items-center gap-1"
            onClick={(event) => {
              setPosition((position) => ({
                top: event.pageY + 20,
                left: event.pageX,
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
          >
            You want to confirm?
          </ConfirmDialog>
        </div>
      )}
    </>
  )
}

export default ConfirmDialogCustom
