import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    resources: {
        en,
        es
    }
})

export default i18n
