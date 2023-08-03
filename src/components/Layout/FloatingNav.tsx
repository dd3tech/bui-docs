import { useRouter } from 'next/router'
import { Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export type Entries = {
  label: string
  isActive: boolean
  position: number
  id: string
}

interface IFloatingNav {
  entries: Entries[]
}

const FloatingNav = ({ entries }: IFloatingNav) => {
  const router = useRouter()
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  const isLight = useTheme().isLightTheme

  const visibleElementIndex = useIntersectionObserver({ targetSearchElement: 'floating-nav', searchBy: 'name' });

  const handleClick = (position: number, id: string) => {
    document.getElementById('layout-content')?.scrollTo({
      behavior: 'smooth',
      top: position
    })
    router.push(`${router.asPath.split('#')[0]}#${id}`)
  }

  return (
    <>
      <div
        className={composeClasses(
          'flex flex-col text-xs gap-y-2 border-l-2 border-gray-300 pl-2 fixed pr-5',
          extendedPalette.cardBorderColor
        )}
      >
        {entries?.map((entry, index) => {
          const isInView = visibleElementIndex === index

          return (
            <Text
              key={`floating-nav-${entry?.label}`}
              variant="span"
              className={composeClasses(
                isInView
                  ? `font-bold ${extendedPalette.tertiaryTextActive}`
                  : extendedPalette.tertiaryText,
                isLight ? 'hover:font-bold' : 'hover:text-white',
                'cursor-pointer'
              )}
              onClick={() => handleClick(entry?.position, entry?.id)}
            >
              {isInView && (
                <span
                  className={composeClasses(
                    isLight ? 'bg-black' : 'bg-white',
                    '-left-0.5 w-0.5 h-5 absolute'
                  )}
                ></span>
              )}
              {entry?.label}
            </Text>
          )
        }
        )}
      </div>
    </>
  )
}

export default FloatingNav
