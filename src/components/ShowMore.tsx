import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Text from 'dd360-ds/Text'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'

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
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <div>
      <div
        className={composeClasses(
          'flex w-full gap-2.5 justify-between items-center cursor-pointer rounded-md',
          isActive && extendedPalette.sidebarOptionBackground,
          `hover:${extendedPalette.barHoverBackground}`
        )}
        style={{ height: 30, paddingLeft: 6, paddingRight: 10 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <Text
            size="sm"
            className={composeClasses(
              isActive
                ? extendedPalette.primaryText
                : extendedPalette.secundaryText
            )}
          >
            {title}
          </Text>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <DynamicHeroIcon
            className="w-4 h-4 text-gray-500"
            icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'}
          />
        </button>
      </div>
      {isOpen && (
        <div className="list-disc flex flex-col gap-2 mt-1 border-l ml-6 border-gray-300">
          {children}
        </div>
      )}
    </div>
  )
}

export default ShowMore
