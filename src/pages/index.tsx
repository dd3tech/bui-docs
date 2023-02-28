import { BannerDashboard, OpenGraph, TestimonialsBanner, WindowEditor } from '@/components'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
    const { t } = useTranslation()
    return (
        <>
            <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />
            <main className="max-w-7xl mx-auto p-4 lg:p-8 xl:px-0">
                {t('hello')}
                <BannerDashboard />
                <div className="grid grid-cols-9">
                    <WindowEditor className="col-span-5" />
                </div>
            </main>
            <TestimonialsBanner />
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
