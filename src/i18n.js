import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE } from 'config/i18n';
import Env from 'env';

export function extract(key, defaultValue) {
  return defaultValue || key;
}

const options = {
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  load: 'languageOnly',
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    wait: Env.IS_BROWSER,
  },
  detection: {
    order: ['cookie', 'header'],
    caches: ['cookie'],
    lookupCookie: 'i18next',
    lookupHeader: 'accept-language',
  },
};

if (Env.IS_BROWSER) {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector);
}

if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;
