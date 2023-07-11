import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Divider, Flex, Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/pages/store/theme-store'
import Newsletter from '../Newsletter'
import { Dd360Icon } from '../icons'

const footerMenu = [
  {
    key: 1,
    label: 'components',
    link: '/components'
  },
  {
    key: 2,
    label: 'docs',
    link: '/docs'
  },
  {
    key: 3,
    label: 'showcases',
    link: '/showcases'
  }
]

function Footer() {
  const { t } = useTranslation()

  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <footer className={extendedPalette.footerBackground}>
      <div
        className="pt-8 pb-5 px-4 mx-auto lg:px-8 2xl:px-0"
        style={{ maxWidth: '1242px' }}
      >
        <Link href="/" className="inline-flex">
          <Dd360Icon
            width={130}
            height={28.5}
            color={extendedPalette.logoColorHex}
          />
        </Link>
        <Flex
          gap="8"
          justifyContent="between"
          className="flex-col-reverse sm:flex-row"
        >
          <div className="w-full">
            <Text
              variant="p"
              className={composeClasses(
                'mt-0 sm:mt-8',
                extendedPalette.textPrimary
              )}
              size="base"
              fontBold="medium"
            >
              Keep up to date
            </Text>
            <Text variant="p" className="font-semibold text-gray-600">
              Join our newsletter for regular updates. No spam ever.
            </Text>
            <Newsletter />
          </div>
          <Flex gap="2" className="lg:justify-self-end mt-8 sm:mt-0">
            <ul
              className={composeClasses(
                'flex flex-row gap-4 text-blue-200 font-medium',
                extendedPalette.linkSecondary
              )}
            >
              {footerMenu.map(({ key, label, link }) => (
                <Link key={key} href={link}>
                  {t(label)}
                </Link>
              ))}
            </ul>
          </Flex>
        </Flex>
        <Divider variant="full" className="border-gray-100 mt-6 mb-8" />
        <Flex
          justifyContent="between"
          alignItems="center"
          className="text-gray-400"
        >
          <Text variant="p">
            © {new Date().getFullYear()} DD360. All rights reserved.
          </Text>
          <Flex
            className={composeClasses('gap-x-4', extendedPalette.linkSecondary)}
          >
            <Text>Notice of Privacy</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer
