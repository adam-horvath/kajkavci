import { FC } from 'react';
import classNames from 'classnames';

import map from 'assets/images/map.png';
import { useTranslation } from 'components';
import classes from './ContactsPage.module.scss';

export const ContactsPage: FC = () => {
  const { t } = useTranslation();
  
  const onMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Polg%C3%A1rmesteri+Hivatal+Fert%C5%91homok/@47.6208561,16.7628024,17z/data=!3m1!4b1!4m5!3m4!1s0x476c198c7cbda059:0x96151200c29155ef!8m2!3d47.6208525!4d16.7649911',
      '_blank'
    );
  };

  return (
    <div className={classNames(classes.divContainer, 'container')}>
      <div className={'row'}>
        <div className={'col-xs-12 col-sm-12 col-md-6'}>
          <div className={classes.Map} style={{ backgroundImage: `url(${map})` }} onClick={onMapClick} />
        </div>
        <div className={classNames(classes.InfoContainer, 'col-xs-12 col-sm-12 col-md-6')}>
          <div className={classNames(classes.Name, 'mb-3')}>{t('contact.name')}</div>
          <div className={'mb-3'}>{t('contact.address')}</div>
          <div>{t('contact.phone')}</div>
          <div>{t('contact.fax')}</div>
          <div>{t('contact.email')}</div>
          <div>{t('contact.bank_account')}</div>
          <div>{t('contact.tax_number')}</div>
        </div>
      </div>
    </div>
  );
};
