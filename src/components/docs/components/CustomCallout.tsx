import { Callout, CalloutProps } from 'dd360-ds'
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/solid'

interface CustomCalloutProps {
  title: string
  description?: string
  icon?: 'check' | 'x' | 'info' | 'warn'
  variant?: CalloutProps['variant']
}

const availableIcons = {
  check: CheckCircleIcon,
  x: XCircleIcon,
  info: InformationCircleIcon,
  warn: InformationCircleIcon
}

const CustomCallout = ({
  icon,
  description,
  ...otherProps
}: CustomCalloutProps) => {
  const customIcon = icon ? availableIcons[icon] : undefined
  return (
    <Callout
      {...otherProps}
      icon={customIcon}
      description={description || ''}
      className="w-92"
    />
  )
}

export default CustomCallout
