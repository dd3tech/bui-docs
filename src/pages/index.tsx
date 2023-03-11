import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
    BannerDashboard,
    BuildWithSection,
    FeaturesSection,
    FooterSection,
    IllustrationsLayer,
    OpenGraph,
    StartNowSection,
    TestimonialsBanner,
    WindowEditorSection
} from '@/components'
// import { useTranslation } from 'next-i18next'

const ComponentsSection = dynamic(() => import('@/components/ComponentsSection'), { ssr: false })

export default function Home() {
    // const { t } = useTranslation()
    return (
        <>
            <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />

            <IllustrationsLayer />

            <main>
                <ComponentsSection />

                <FeaturesSection />

                <BuildWithSection />

                <BannerDashboard />

                <WindowEditorSection />

                <TestimonialsBanner />

                <StartNowSection />

                <FooterSection />
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    }
}
