import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // idioma padrão
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage'], // apenas localStorage para persistir preferência
      caches: ['localStorage'],
    },
  });

export default i18n;
