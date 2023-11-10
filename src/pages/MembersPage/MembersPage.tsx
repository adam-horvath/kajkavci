import { FC } from 'react';

import Adam from 'assets/images/adam.jpg';
import Krisztina from 'assets/images/krisztina.jpg';
import Adrian from 'assets/images/adrian.jpg';
import Mate from 'assets/images/mate.jpg';
import Jozsi from 'assets/images/jozsi.jpg';
import { useTranslation } from 'components';
import { Member } from './Member';
import './MembersPage.scss';

export const MembersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={'MembersDesktopPage'}>
      <div className={'FirstRow'}>
        <Member imageUrl={`url("${Adam}")`} subscript={t('member.Adam')} />
        <Member imageUrl={`url("${Krisztina}")`} subscript={t('member.Krisztina')} />
        <Member imageUrl={`url("${Adrian}")`} subscript={t('member.Adrian')} />
      </div>
      <div className={'SecondRow'}>
        <Member imageUrl={`url("${Mate}")`} subscript={t('member.Mate')} />
        <Member imageUrl={`url("${Jozsi}")`} subscript={t('member.Jozsi')} />
      </div>
      <div className={'SubTitle mt-5'}>{t('previous_members.subtitle')}</div>
      <div className={'TitleBorder PageTitleBorder'}></div>
      <div className={'d-flex flex-column align-items-center mt-4 mb-5'}>
        <div>{t('previous_members.Gabi')}</div>
        <div>{t('previous_members.Zoli')}</div>
        <div>{t('previous_members.Gyorgyi')}</div>
        <div>{t('previous_members.Zita')}</div>
        <div>{t('previous_members.Kertesz')}</div>
        <div>{t('previous_members.Korlath')}</div>
        <div>{t('previous_members.Pokker')}</div>
        <div>{t('previous_members.Opo')}</div>
        <div>{t('previous_members.Joco')}</div>
        <div>{t('previous_members.Tomi')}</div>
        <div>{t('previous_members.Eszti')}</div>
        <div>{t('previous_members.Tundi')}</div>
        <div>{t('previous_members.Ocsi')}</div>
        <div>{t('previous_members.Agi')}</div>
        <div>{t('previous_members.Luca')}</div>
      </div>
    </div>
  );
};
