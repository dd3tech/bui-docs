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
  const [active, setActive] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <div>
          <button
            className="flex items-center gap-1"
            onClick={() => {
              setActive(!active)
            }}
          >
            Confirm Dialog
            <DynamicHeroIcon icon="FilterIcon" className="w-4 h-4" />
          </button>
          {active && (
            <ConfirmDialog
              width={width}
              onCancel={!onCancel ? undefined : () => setActive(false)}
              textCancelBtn={textCancelBtn}
              textConfirmBtn={textConfirmBtn}
              title={title}
              onConfirm={() => alert('onConfirm')}
              className="text-gray-900"
            >
              You want to confirm?
            </ConfirmDialog>
          )}
        </div>
      )}
    </>
  )
}

export default ConfirmDialogCustom
