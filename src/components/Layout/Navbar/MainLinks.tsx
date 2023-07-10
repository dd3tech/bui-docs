import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/pages/store/theme-store'

export const menuSections = [
  {
    key: 1,
    label: 'components',
    link: '/components'
  },
  {
    key: 2,
    label: 'docs',
    link: '/docs/get-started/getting-started'
  },
  {
    key: 3,
    label: 'showcases',
    link: '/showcases'
  }
]

interface MainLinksProps {
  className?: string
}

export const MainLinks = ({ className }: MainLinksProps) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <>
      {menuSections.map(({ key, label, link }) => (
        <Link
          key={key}
          href={link}
          locale={router?.locale}
          className={composeClasses(
            'h-full flex items-center capitalize hover:border-blue-500',
            router.pathname.includes(label)
              ? 'text-blue-400'
              : extendedPalette.navbarLink,
            className
          )}
        >
          {t(label)}
        </Link>
      ))}
    </>
  )
}

export default MainLinks
