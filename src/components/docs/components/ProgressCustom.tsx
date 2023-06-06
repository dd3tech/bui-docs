import { useState } from 'react'
import {
  Checkbox,
  Flex,
  FormControlLabel,
  Input,
  Progress,
  ProgressProps,
  Radio,
  RadioGroup,
  Text
} from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

const ProgressCustom = () => {
  const [progress, setProgress] = useState<number>(0)
  const [type, setType] = useState<ProgressProps['type']>('circle')
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false)

  return (
    <Flex className="flex-col" alignItems="center" justifyContent="center">
      <Flex alignItems="center" justifyContent="center" className="w-full h-28">
        <Progress
          value={progress}
          type={type}
          indeterminate={isIndeterminate}
          progressLineColor="#ff7d40"
          backgroundLineColor="#ffdfaa"
          height="15px"
        >
          {
            <Flex
              className="absolute inset-0 w-full h-full"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                size={type === 'circle' ? '2xl' : 'xs'}
                bold
                className={composeClasses(
                  type === 'circle' ? 'text-red-500 mb-1' : 'text-white'
                )}
              >
                {progress}
              </Text>
              <Text
                size="xs"
                className={composeClasses(
                  type === 'circle' ? 'text-gray-500' : 'text-white'
                )}
              >
                %
              </Text>
            </Flex>
          }
        </Progress>
      </Flex>
      <Flex className="flex-col" justifyContent="center" alignItems="center">
        <Input
          type="number"
          className="w-full"
          value={progress}
          onChange={(e) => {
            if (Number(e.target.value) > 100 || Number(e.target.value) < 0)
              return
            setProgress(() => {
              return Number(e.target.value)
            })
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isIndeterminate}
              onClick={() => setIsIndeterminate(!isIndeterminate)}
            />
          }
          label="Indeterminate"
          labelPlacement="end"
          className="w-full"
        />
        <RadioGroup
          name="radio-type"
          value={type || ''}
          onChange={(e) => setType(e.target.value as ProgressProps['type'])}
          row
        >
          <Radio label="Circle" value="circle" />
          <Radio label="Linear" value="linear" />
        </RadioGroup>
      </Flex>
    </Flex>
  )
}

export default ProgressCustom
