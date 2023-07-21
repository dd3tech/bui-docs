import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { composeClasses } from 'dd360-ds/lib'
import Text from 'dd360-ds/Text'
import { useTheme } from '@/store/theme-store'
import { ChevronRightCircleIcon } from './Icon'
import { components } from './Layout/SideBarDocs'

const BackAndForwardController: FC = () => {
  const {
    themeObject: { extendedPalette }
  } = useTheme()
  const router = useRouter()

  const splitPath = router.asPath.split('/')
  const key = splitPath[splitPath.length - 2]
  const pathname = splitPath[splitPath.length - 1]
  const section = components[key].items
  const index = section.findIndex((element) => element.pathname === pathname)

  const classLink = composeClasses(
    'flex items-center gap-2.5 cursor-pointer',
    extendedPalette.linkPrimary
  )

  return (
    <div className="flex justify-between my-12">
      <span>
        {section[index - 1] && (
          <Link
            href={`/docs/${key}/${section[index - 1].pathname}`}
            locale={router?.locale}
            className={classLink}
          >
            <ChevronRightCircleIcon className="rotate-180" />
            <Text size="xs" className="underline whitespace-nowrap">
              {section[index - 1].label}
            </Text>
          </Link>
        )}
      </span>
      <span>
        {section[index + 1] && (
          <Link
            href={`/docs/${key}/${section[index + 1].pathname}`}
            locale={router?.locale}
            className={classLink}
          >
            <Text size="xs" className="underline whitespace-nowrap">
              {section[index + 1].label}
            </Text>
            <ChevronRightCircleIcon />
          </Link>
        )}
      </span>
    </div>
  )
}

export default BackAndForwardController
