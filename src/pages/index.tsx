import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BannerDashboard, OpenGraph, TestimonialsBanner } from '@/components'
import {
  BuildWithSection,
  FeaturesSection,
  WindowEditorSection
} from '@/modules'
import { useTranslation } from 'next-i18next'
import { useTheme } from './store/theme-store'
import { composeClasses } from 'dd360-ds/lib'

const ComponentsSection = dynamic(
  () => import('@/modules/landing/home/ComponentsSection'),
  { ssr: false }
)

export default function Home() {
  const { t } = useTranslation('common')
  const { isLightTheme } = useTheme()

  return (
    <>
      <OpenGraph title={t('metadata.home')!} />
      {/* TODO: implement layers */}
      {/* <IllustrationsLayer /> */}
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
