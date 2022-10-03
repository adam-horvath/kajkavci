import { FC } from 'react';

import { useTranslation } from 'components';
import classes from './InterviewsPage.module.scss';

export const InterviewsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.InterviewContainer}>
      <div className={classes.Interview}>
        <a className={classes.Link} href={t('interviews.ocsi.url')}>
          {t('interviews.ocsi.title')}
        </a>
        {`, ${t('interviews.ocsi.media')} (${t('interviews.ocsi.year')})`}
      </div>
      <div className={classes.Interview}>
        <a className={classes.Link} href={t('interviews.adam.url')}>
          {t('interviews.adam.title')}
        </a>
        {`, ${t('interviews.adam.media')} (${t('interviews.adam.year')})`}
      </div>
      <div className={classes.Interview}>
        <a className={classes.Link} href={t('interviews.opo.url')}>
          {t('interviews.opo.title')}
        </a>
        {`, ${t('interviews.opo.media')} (${t('interviews.opo.year')})`}
      </div>
    </div>
  );
};
