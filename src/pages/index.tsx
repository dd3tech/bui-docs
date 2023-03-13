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

const ComponentsSection = dynamic(() => import('@/components/ComponentsSection'), { ssr: false })

export default function Home() {
    return (
        <>
            <OpenGraph title="DD360 UI - The React library to build back office platforms" />
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
