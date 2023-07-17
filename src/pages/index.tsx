import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { composeClasses } from 'dd360-ds/lib'
import { BannerDashboard, IllustrationsLayer, OpenGraph } from '@/components'
import {
  BuildWithSection,
  FeaturesSection,
  WindowEditorSection
} from '@/modules'
import { useTheme } from './store/theme-store'

const ComponentsSection = dynamic(
  () => import('@/modules/landing/home/ComponentsSection'),
  { ssr: false }
)

const TestimonialsBanner = dynamic(
  () => import('@/modules/landing/home/TestimonialsBanner'),
  { ssr: false }
)

export default function Home() {
  const { t } = useTranslation('common')
  const { isLightTheme } = useTheme()

  return (
    <>
      <OpenGraph
        title={t('metadata.home')!}
        icon={`buildd3rUI-${isLightTheme ? 'dark' : 'light'}.svg`}
      />
      <IllustrationsLayer />
      <main
        className={composeClasses(
          'home-page mx-auto',
          isLightTheme ? 'light' : 'dark'
        )}
      >
        <ComponentsSection />
        <FeaturesSection />
        <BuildWithSection />
        <BannerDashboard />
        <WindowEditorSection />
        <TestimonialsBanner />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}
