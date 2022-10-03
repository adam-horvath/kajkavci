import { TOptions } from 'i18next';
import { useTranslation as i18nextTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t: tFunction, i18n } = i18nextTranslation();

  return {
    t: (key: string, options?: TOptions<any> | string) => tFunction(key, options),
    i18n,
  };
};
