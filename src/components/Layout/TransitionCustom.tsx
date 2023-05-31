import { useState } from 'react'
import {
  AnimationsTypes,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  Text,
  Transition
} from 'dd360-ds'

const ANIMATION_LIST = {
  hoverTranlationLeft: { label: 'hover-tranlation-left' },
  hoverTranlationRight: { label: 'hover-tranlation-right' },
  hoverTranlationUp: { label: 'hover-tranlation-up' },
  hoverTranlationDown: { label: 'hover-tranlation-down' },
  hoverScale: { label: 'hover-scale' },
  fadeIn: { label: 'fade-in' },
  fadeInLeft: { label: 'fade-in-left' },
  fadeInRight: { label: 'fade-in-right' },
  fadeInDown: { label: 'fade-in-down' },
  fadeInUp: { label: 'fade-in-up' },
  fadeOut: { label: 'fade-out' },
  fadeOutLeft: { label: 'fade-out-left' },
  fadeOutRight: { label: 'fade-out-right' },
  fadeOutDown: { label: 'fade-out-down' },
  fadeOutUp: { label: 'fade-out-up' },
  slideInLeft: { label: 'slide-in-left' },
  slideInRight: { label: 'slide-in-right' },
  slideInDown: { label: 'slide-in-down' },
  slideInUp: { label: 'slide-in-up' },
  slideOutLeft: { label: 'slide-out-left' },
  slideOutRight: { label: 'slide-out-right' },
  slideOutDown: { label: 'slide-out-down' },
  slideOutUp: { label: 'slide-out-up' },
  zoomIn: { label: 'zoom-in' },
  zoomOut: { label: 'zoom-out' },
  zoomInLeft: { label: 'zoom-in-left' },
  zoomInRight: { label: 'zoom-in-right' },
  zoomInDown: { label: 'zoom-in-down' },
  zoomInUp: { label: 'zoom-in-up' },
  zoomOutLeft: { label: 'zoom-out-left' },
  zoomOutRight: { label: 'zoom-out-right' },
  zoomOutDown: { label: 'zoom-out-down' },
  zoomOutUp: { label: 'zoom-out-up' },
  flipInX: { label: 'flip-in-x' },
  flipInY: { label: 'flip-in-y' },
  flipOutX: { label: 'flip-out-x' },
  flipOutY: { label: 'flip-out-y' },
  lightSpeedInLeft: { label: 'light-speed-in-left' },
  lightSpeedOutLeft: { label: 'light-speed-out-left' },
  lightSpeedInRight: { label: 'light-speed-in-right' },
  lightSpeedOutRight: { label: 'light-speed-out-right' },
  rotateLeft: { label: 'rotate-left' },
  rotateRight: { label: 'rotate-right' },
  rotateLeftBack: { label: 'rotate-left-back' },
  rotateRightBack: { label: 'rotate-right-back' },
  rotateLeftFade: { label: 'rotate-left-fade' },
  rotateRightFade: { label: 'rotate-right-fade' },
  rotateLeftBackFade: { label: 'rotate-left-back-fade' },
  rotateRightBackFade: { label: 'rotate-right-back-fade' },
  bounce: { label: 'bounce' },
  rubberBand: { label: 'rubber-band' },
  heartBeat: { label: 'heart-beat' },
  swing: { label: 'swing' },
  spin: { label: 'spin' },
  blink: { label: 'blink' }
}

const VisibilityExample = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>Toggle animation</Button>
      <Transition show={isActive}>
        <div className="w-24 h-24 flex items-center text-center text-white bg-red-500 rounded-lg">
          Fade animation
        </div>
      </Transition>
    </>
  )
}

const DurationDelayExample = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>Toggle animation</Button>
      <Transition show={isActive} duration={500} delay={100}>
        <div className="w-24 h-24 flex items-center text-center text-white bg-red-500 rounded-lg">
          Duration & delay
        </div>
      </Transition>
    </>
  )
}

const ControlAnimationExample = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>Toggle animation</Button>
      <Transition
        show={isActive}
        animationStart="fadeInRight"
        animationEnd="flipOutY"
      >
        <div className="w-24 h-24 flex items-center text-center text-white bg-red-500 rounded-lg">
          Hey!
        </div>
      </Transition>
    </>
  )
}

const AllAnimationsPanel = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [isAlwaysRender, setisAlwaysRender] = useState(false)
  const [animationStart, setAnimationStart] = useState<string>('fade-in')
  const [animationEnd, setAnimationEnd] = useState<string>('fade-out')

  return (
    <div className="w-full p-8 flex flex-col-reverse md:flex-row 2xl:flex-col gap-8 items-center">
      <div className="w1/2 flex flex-col 2xl:flex-row gap-4">
        <div className="w-full flex gap-4 flex-col 2xl:flex-row">
          <div>
            <Text>First animation</Text>
            <Select
              value={animationStart}
              optionsList={ANIMATION_LIST}
              onChange={(e) => setAnimationStart(e.target.value)}
            />
          </div>
          <div>
            <Text>Last animation</Text>
            <Select
              value={animationEnd}
              optionsList={ANIMATION_LIST}
              onChange={(e) => setAnimationEnd(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row md:items-end gap-4">
          <Button
            className="h-12 w-full"
            onClick={() => setIsActive(!isActive)}
          >
            Toggle animation
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAlwaysRender}
                onClick={() => setisAlwaysRender(!isAlwaysRender)}
              />
            }
            label="Always render"
            labelPlacement="end"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-1/2 h-44 flex items-center justify-center">
        <Transition
          show={isActive}
          animationStart={animationStart as AnimationsTypes}
          animationEnd={animationEnd as AnimationsTypes}
          alwaysRender={isAlwaysRender}
        >
          <div className="w-24 h-24 flex items-center justify-center text-center text-white bg-red-500 rounded-lg">
            Hey!
          </div>
        </Transition>
      </div>
    </div>
  )
}

const TransitionCustom = ({ exampleType }: { exampleType: string }) => {
  switch (exampleType) {
    case 'visibility':
      return <VisibilityExample />
    case 'duration-delay':
      return <DurationDelayExample />
    case 'control-animation':
      return <ControlAnimationExample />
    case 'all-animations':
      return <AllAnimationsPanel />
    default:
      return <VisibilityExample />
  }
}

export default TransitionCustom
