import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { composeClasses } from 'dd360-ds/lib'
import { BannerDashboard, IllustrationsLayer } from '@/components'
import {
  BuildWithSection,
  FeaturesSection,
  WindowEditorSection
} from '@/modules/home'
import { useTheme } from '@/store/theme-store'

const ComponentsSection = dynamic(
  () => import('@/modules/home/ComponentsSection'),
  { ssr: false }
)

const TestimonialsBanner = dynamic(
  () => import('@/modules/home/TestimonialsBanner'),
  { ssr: false }
)

export default function Home() {
  const { isLightTheme } = useTheme()

  return (
    <>
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
