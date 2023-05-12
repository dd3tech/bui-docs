import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import { Text } from 'dd360-ds'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'

type ShowMoreProps = {
  title: string
  children: ReactNode | ReactNode[]
  icon?: IconName
  basePath: string
  defaultOpen?: boolean
}

function ShowMore({
  title = 'Guide',
  children,
  basePath,
  defaultOpen = false
}: ShowMoreProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const router = useRouter()
  const isActive = router.asPath.includes(basePath)

  return (
    <div>
      <div
        className={composeClasses(
          'flex w-full gap-2.5 justify-between items-center cursor-pointer',
          isActive && 'bg-gray-50'
        )}
        style={{ height: 30, paddingLeft: 6, paddingRight: 10 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          {isActive && (
            <span className="bg-blue-500 h-4 mr-2" style={{ width: 3 }} />
          )}
          <Text size="sm" className="text-gray-700 font-semibold">
            {title}
          </Text>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <DynamicHeroIcon
            className="w-4 h-4"
            icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'}
          />
        </button>
      </div>
      {isOpen && (
        <div className="list-disc flex flex-col gap-2 mt-4">{children}</div>
      )}
    </div>
  )
}

export default ShowMore
