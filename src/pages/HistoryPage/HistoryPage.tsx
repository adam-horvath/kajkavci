import { FC } from 'react';

import { useTranslation } from 'components';

export const HistoryPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={'mb-3'}>{t('history.paragraph_1')}</div>
      <div className={'mb-3'}>{t('history.musicians_1')}</div>
      <div className={'mb-3'}>{t('history.musicians_2')}</div>
      <div className={'mb-3'}>{t('history.paragraph_2')}</div>
      <div className={'mb-3'}>{t('history.paragraph_2b')}</div>
      <div className={'mb-3'}>{t('history.paragraph_3')}</div>
      <div className={'mb-3'}>{t('history.paragraph_4')}</div>
      <div className={'mb-3'}>{t('history.paragraph_5')}</div>
      <div className={'mb-3'}>{t('history.paragraph_6')}</div>
      <div className={'mb-3'}>{t('history.paragraph_7')}</div>
      <div className={'mb-3'}>{t('history.paragraph_8')}</div>
      <div className={'mb-5'}>{t('history.paragraph_9')}</div>
    </div>
  );
};
