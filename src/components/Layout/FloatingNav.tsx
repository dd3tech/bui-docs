import { Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

interface IFloatingNav {
  entries: { label: string; isActive: boolean; position: number }[]
}

const FloatingNav = ({ entries }: IFloatingNav) => (
  <div className="flex flex-col text-xs gap-y-2 border-l-2 border-gray-300 ml-4 pl-2 fixed">
    {entries?.map((entry) => (
      <Text
        key={`floating-nav-${entry.label}`}
        variant="span"
        className={composeClasses(
          entry.isActive && 'text-base font-medium',
          'cursor-pointer'
        )}
        onClick={() =>
          window.scrollTo({
            top: entry.position,
            behavior: 'smooth'
          })
        }
      >
        {entry.label}
      </Text>
    ))}
  </div>
)

export default FloatingNav
