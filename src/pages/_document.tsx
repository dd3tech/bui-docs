import Document, { Html, Head, Main, NextScript } from 'next/document'
import { DocumentContext, DocumentInitialProps } from 'next/document'

interface MyDocumentProps extends DocumentInitialProps {
    locale?: string
}

function MyDocument({ locale = 'es' }: MyDocumentProps) {
    return (
        <Html lang={locale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx)
    const { locale } = ctx || {}
    return { ...initialProps, locale }
}

export default MyDocument
