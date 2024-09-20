import { ReactNode, useState } from 'react'
import { Button, AsideModal } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

interface ModalCustomProps {
  propsCustom: Record<string, boolean>
  positionAsideModal: 'right' | 'left'
  haveVariants: boolean
  isStickyTitle: boolean
  children?: ReactNode
}

const variantsAsideModal = [
  'a',
  'label',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'small',
  'span',
  'currency',
  'anchorSmall'
] as const
type TVariantAsideModal = (typeof variantsAsideModal)[number]

const AsideModalCustom = ({
  propsCustom,
  positionAsideModal,
  haveVariants,
  isStickyTitle,
  children
}: ModalCustomProps) => {
  const [activeModal, setActiveModal] = useState<boolean>(false)

  const [propCustomValue, setPropCustomValue] = useState<any>()

  const [variantAsideModal, setVariantAsideModal] =
    useState<TVariantAsideModal>('h4')

  const activeAsideModal = () => {
    if (propsCustom) {
      setPropCustomValue(() => ({
        [Object.keys(propsCustom)[0]]: true
      }))
    }
    setActiveModal(true)
  }

  return (
    <>
      <div>
        <div className="flex gap-5">
          <Button onClick={activeAsideModal}>Open Modal</Button>
        </div>
        {haveVariants && (
          <div className="flex flex-wrap gap-5 mt-6 items-center">
            {variantsAsideModal?.map((element: TVariantAsideModal) => (
              <div
                className={composeClasses(
                  activeModal && 'w-full',
                  'flex gap-2'
                )}
                key={element}
              >
                <input
                  className="cursor-pointer"
                  checked={variantAsideModal === element}
                  onClick={() => setVariantAsideModal(element)}
                  type="radio"
                />
                <label>{element}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <AsideModal
        style={{ marginTop: '56px' }}
        disableEscapeKeyDown={propCustomValue}
        position={positionAsideModal}
        titleVariant={variantAsideModal}
        title="Component Aside Modal"
        open={activeModal}
        onClose={() => setActiveModal(false)}
        isStickyTitle={isStickyTitle}
      >
        {children || 'Aside modal children'}
      </AsideModal>
    </>
  )
}
export default AsideModalCustom
