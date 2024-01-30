import Tag, { ITagProps } from 'dd360-ds/Tag'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/solid'

interface CustomTagProps {
  text: string
  icon?: 'check' | 'info' | 'warn'
  variant?: ITagProps['variant']
  fill: boolean
  className?: string
}

const availableIcons = {
  check: CheckCircleIcon,
  info: InformationCircleIcon,
  warn: InformationCircleIcon
}

const TagCustom = ({
  icon,
  text,
  fill,
  variant = 'primary',
  className = '',
  ...otherProps
}: CustomTagProps) => {
  const customIcon = icon ? availableIcons[icon] : undefined

  return (
    <Tag
      {...otherProps}
      icon={customIcon}
      text={text}
      className={className}
      variant={variant}
    />
  )
}

export default TagCustom
