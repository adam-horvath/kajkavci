import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { SupportedLanguage } from 'models';

export function extract(key: string, defaultValue: string) {
  return defaultValue || key;
}

export const getLanguage = (): SupportedLanguage =>
  (
    (localStorage.getItem('lang') as SupportedLanguage) ||
    (i18n.language as SupportedLanguage) ||
    SupportedLanguage.HU
  ).toLowerCase() as SupportedLanguage;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    load: 'languageOnly',
    fallbackLng: localStorage.getItem('lang') || 'hu',
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    supportedLngs: ['hu', 'hr'],
  });

export default i18n;
