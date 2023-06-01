import { useState } from 'react'
import {
  ANIMATION_LIST,
  AnimationsTypes,
  Button,
  Checkbox,
  Flex,
  FormControlLabel,
  Select,
  Text,
  Transition
} from 'dd360-ds'

const convertAnimationValues = (
  animationList: Record<string, string>
): Record<string, { label: string }> => {
  const convertedList: Record<string, { label: string }> = {}

  for (const key in animationList) {
    if (animationList.hasOwnProperty(key)) {
      const originalValue = animationList[key]
      convertedList[key] = {
        label: originalValue
      }
    }
  }

  return convertedList
}

const SELECT_ANIMATION_LIST = convertAnimationValues(ANIMATION_LIST)

const VisibilityExample = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>Toggle animation</Button>
      <Transition show={isActive}>
        <Flex
          alignItems="center"
          className="w-24 h-24 text-center text-white bg-red-500 rounded-lg"
        >
          Fade animation
        </Flex>
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
        <Flex
          justifyContent="center"
          alignItems="center"
          className="w-24 h-24 text-center text-white bg-red-500 rounded-lg"
        >
          Duration & delay
        </Flex>
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
        <Flex
          alignItems="center"
          justifyContent="center"
          className="w-24 h-24 text-center text-white bg-red-500 rounded-lg"
        >
          Hey!
        </Flex>
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
    <Flex
      gap="8"
      alignItems="center"
      className="w-full p-8 flex-col-reverse md:flex-row 2xl:flex-col"
    >
      <Flex gap="4" className="w-1/2 flex-col 2xl:flex-row">
        <Flex gap="4" className="w-full flex-col 2xl:flex-row">
          <div>
            <Text>First animation</Text>
            <Select
              value={animationStart}
              optionsList={SELECT_ANIMATION_LIST}
              onChange={(e) => setAnimationStart(e.target.value)}
            />
          </div>
          <div>
            <Text>Last animation</Text>
            <Select
              value={animationEnd}
              optionsList={SELECT_ANIMATION_LIST}
              onChange={(e) => setAnimationEnd(e.target.value)}
            />
          </div>
        </Flex>
        <Flex gap="4" className="w-full flex-col 2xl:flex-row md:items-end">
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
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" className="w-1/2 h-44">
        <Transition
          show={isActive}
          animationStart={animationStart as AnimationsTypes}
          animationEnd={animationEnd as AnimationsTypes}
          alwaysRender={isAlwaysRender}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            className="w-24 h-24 text-center text-white bg-red-500 rounded-lg"
          >
            Hey!
          </Flex>
        </Transition>
      </Flex>
    </Flex>
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
