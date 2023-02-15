import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@/locales/en/common.json'
import es from '@/locales/es/common.json'

const resources = {
    es: { translation: es },
    en: { translation: en }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: false
})

export default i18n
