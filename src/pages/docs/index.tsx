import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Docs() {
    return <div>index</div>
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    return {
        props: {
            locale,
            ...(await serverSideTranslations(locale))
        }
    }
}
