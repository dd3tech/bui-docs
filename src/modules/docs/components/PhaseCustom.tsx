import { Phase, IPhaseProps } from 'dd360-ds'
import { InformationCircleIcon } from '@heroicons/react/solid'
import {
  CalendarIcon,
  ScaleIcon,
  DocumentAddIcon,
  CheckIcon
} from '@heroicons/react/outline'

interface CustomTagProps {
  icon?: 'check' | 'search' | 'balance' | 'calendar'
  variant?: IPhaseProps['variant']
  status: 'default' | 'active' | 'success' | 'selected' | 'completed'
}

const availableIcons = {
  check: CheckIcon,
  search: DocumentAddIcon,
  balance: ScaleIcon,
  calendar: CalendarIcon
}

const PhaseCustom = ({ icon, variant, ...otherProps }: CustomTagProps) => {
  const customIcon = icon ? availableIcons[icon] : undefined

  return <Phase {...otherProps} icon={customIcon} variant={variant} />
}

export default PhaseCustom
