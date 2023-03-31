const path = require('path')

module.exports = {
    i18n: {
        defaultLocale: 'en',
        localeDetection: false,
        locales: ['en', 'es']
    },
    localePath: path.resolve('./src/locales'),
    react: {
        useSuspense: false
    },
    defaultNS: 'common',
    localeSubpaths: {
        en: 'en',
        es: 'es'
    }
}
