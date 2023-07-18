import { Flex, Text } from 'dd360-ds'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { composeClasses } from 'dd360-ds/lib'
import { AppCardInfo } from '@/interfaces/showcases'
import { CardApp } from '@/modules/showcases'
import { useTheme } from '@/store/theme-store'
import { OpenGraph } from '@/components'

const cardsData: AppCardInfo[] = [
  {
    imgLight: '/page-simulator.jpg',
    imgDark: '/page-simulator.jpg',
    title: 'Simulador DD360',
    description:
      "This is a curated list of some of the best apps we've seen that show off what's possible with BUI. Are you also using it? Show us what you're building! We'd love to see it.",
    goTo: 'https://onboarding.dd360.mx/'
  },
  {
    imgLight: '/page-landing-saas.jpg',
    imgDark: '/page-landing-saas.jpg',
    title: 'Landing SaaS DD360',
    description:
      "This is a curated list of some of the best apps we've seen that show off what's possible with BUI. Are you also using it? Show us what you're building! We'd love to see it.",
    goTo: 'https://dd360-universe-landing.vercel.app/'
  },
  {
    imgLight: '/page-dd360-saas-light.jpg',
    imgDark: '/page-dd360-saas-dark.jpg',
    title: 'DD360 SaaS',
    description:
      "This is a curated list of some of the best apps we've seen that show off what's possible with BUI. Are you also using it? Show us what you're building! We'd love to see it.",
    goTo: 'https://app.dd360.mx/'
  }
]

export default function Showcases() {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <>
      <OpenGraph
        title="BUI - Showcases"
        description="A curated list of some of the best apps with our Design System"
      />
      <main
        className="mx-auto py-16 px-8 lg:px-16 xl:px-0"
        style={{ maxWidth: 1242 }}
      >
        <section className="mb-24 mx-auto" style={{ maxWidth: 725 }}>
          <Text
            variant="h1"
            size="3xl"
            align="center"
            className={extendedPalette.titleColor}
          >
            Showcase
          </Text>
          <Text
            variant="h2"
            size="4xl"
            align="center"
            className={composeClasses(
              'font-bold mb-12',
              extendedPalette.primaryText
            )}
          >
            Check out these public apps using DD360 <br /> to get inspired for
            your next project.
          </Text>
          <Text
            variant="p"
            size="lg"
            align="center"
            className={extendedPalette.primaryText}
          >
            This is a curated list of some of the best apps we&apos;ve seen that
            show off what&apos;s possible with BUI. Are you also using it? Show
            us what you&apos;re building! We&apos;d love to see it.
          </Text>
        </section>
        <Flex gap="6" className="flex-col lg:flex-row">
          {cardsData.map((cardData) => (
            <CardApp key={cardData.imgDark} data={cardData} />
          ))}
        </Flex>
      </main>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale))
    }
  }
}
