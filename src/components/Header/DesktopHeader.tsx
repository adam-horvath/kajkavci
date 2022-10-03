import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import { useTranslation } from '../Hooks/useTranslation';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import './DesktopHeader.scss';

export const DesktopHeader: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={'Header'}>
      <LanguageSelect />
      <div className={'p-2 MenuContainer'}>
        <div className={'p-0 d-flex'}>
          <div className={'MenuItem'} onClick={() => navigate('/')}>
            {t('menu_items.home')}
          </div>
          <Dropdown>
            <Dropdown.Toggle className={'MenuItem'}>{t('menu_items.band')}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/history')}>
                <div className={'py-3'}>{t('menu_items.history')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/members')}>
                <div className={'py-3'}>{t('menu_items.members')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/discography')}>
                <div className={'py-3'}>{t('menu_items.discography')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/images')}>
                <div className={'py-3'}>{t('menu_items.images')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/articles')}>
                <div className={'py-3'}>{t('menu_items.articles')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/interviews')}>
                <div className={'py-3'}>{t('menu_items.interviews')}</div>
              </Dropdown.Item>
              <Dropdown.Item className={'SubMenuItem'} onClick={() => navigate('/prizes')}>
                <div className={'py-3'}>{t('menu_items.prizes')}</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className={'MenuItem'} onClick={() => navigate('/concerts')}>
            {t('menu_items.concerts')}
          </div>
          <div className={'MenuItem'} onClick={() => navigate('/videos')}>
            {t('menu_items.videos')}
          </div>
          <div className={'MenuItem'} onClick={() => navigate('/tambura-history')}>
            {t('menu_items.tambura_history')}
          </div>
          <div className={'MenuItem'} onClick={() => navigate('/contacts')}>
            {t('menu_items.contacts')}
          </div>
        </div>
      </div>
    </div>
  );
};
