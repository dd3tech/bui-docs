import { Flex, Text } from 'dd360-ds'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { composeClasses } from 'dd360-ds/lib'
import { AppCardInfo } from '@/interfaces/showcases'
import { CardApp } from '@/modules/showcases'
import { useTheme } from '@/store/theme-store'
import OpenGraph from '@/components/OpenGraph'
import { APP_DD360, BUILDD3R_LANDING, SIMULATOR_URL } from '@/utils/constants'

const cardsData: AppCardInfo[] = [
  {
    imgLight: '/page-simulator.jpg',
    imgDark: '/page-simulator.jpg',
    title: 'Simulador DD360',
    description:
      'We crafted a delightful onboarding experience, where in seconds we get insights for your next Real State project.',
    goTo: SIMULATOR_URL
  },
  {
    imgLight: '/page-landing-saas.jpg',
    imgDark: '/page-landing-saas.jpg',
    title: 'Landing SaaS DD360',
    description:
      'A single-page storytelling landing page showcasing the features and listing the benefits of a software as a service, ready to get signups.',
    goTo: BUILDD3R_LANDING
  },
  {
    imgLight: '/page-dd360-saas-light.jpg',
    imgDark: '/page-dd360-saas-dark.jpg',
    title: 'DD360 SaaS',
    description:
      'A robust software to have a panoramic overview of Real State projects. With BUI we fulfilled its complex product needs.',
    goTo: APP_DD360
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
            Discover projects using BUI and get inspired for your next big idea
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
