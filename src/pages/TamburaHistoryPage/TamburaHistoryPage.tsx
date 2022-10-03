import { FC } from 'react';

import { useTranslation } from 'components';

export const TamburaHistoryPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={'mb-3'}>{t('tambura_history.paragraph_1')}</div>
      <div>{t('tambura_history.string_system_1')}</div>
      <div>{t('tambura_history.string_system_2')}</div>
      <div>{t('tambura_history.string_system_3')}</div>
      <div>{t('tambura_history.string_system_4')}</div>
      <div>{t('tambura_history.string_system_5')}</div>
      <div className={'mb-3'}>{t('tambura_history.string_system_6')}</div>
      <div className={'mb-5'}>{t('tambura_history.paragraph_2')}</div>
    </div>
  );
};
