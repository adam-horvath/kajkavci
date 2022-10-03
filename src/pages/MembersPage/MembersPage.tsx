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
    <>
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
      </div>
    </>
  );
};
