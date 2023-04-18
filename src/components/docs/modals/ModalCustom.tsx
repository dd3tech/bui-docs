import { useState } from 'react'
import { Modal, Button } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

interface ModalCustomProps {
    propsCustom: Record<string, boolean>
    messageButtons: Array<string>
    hasAButton: boolean
}

const ModalCustom = ({ propsCustom, messageButtons, hasAButton }: ModalCustomProps) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const [propCustomValue, setPropCustomValue] = useState<any>()

    const isFullScreen = propCustomValue?.fullScreen === true

    const selectedFirstOption = () => {
        if (propsCustom) {
            setPropCustomValue(() => ({
                [Object.keys(propsCustom)[0]]: true
            }))
        }
        setActiveModal(true)
    }

    const selectedSecondOption = () => {
        if (propsCustom) {
            setPropCustomValue(() => ({
                [Object.keys(propsCustom)[0]]: false
            }))
        }
        setActiveModal(true)
    }

    return (
        <>
            <div className="flex gap-5">
                <Button onClick={selectedFirstOption}>{messageButtons[0]}</Button>
                {!hasAButton && (
                    <Button variant="outlineBlue" onClick={selectedSecondOption}>
                        {messageButtons[1]}
                    </Button>
                )}
            </div>
            <Modal
                className={composeClasses(isFullScreen ? 'mb-0' : 'mb-52', 'flex w-64 p-4 h-64 justify-end items-center')}
                {...propCustomValue}
                active={activeModal}
                setCloseModal={() => setActiveModal(false)}
            >
                This is an example modal
            </Modal>
        </>
    )
}
export default ModalCustom
