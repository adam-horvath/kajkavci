import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';

import { useTranslation } from '../Hooks/useTranslation';
import { Hamburger } from './Hamburger';
import classes from './MobileHeader.module.scss';

export interface SideBarProps {
  isOpen: boolean;
  onStateChange: (state: { isOpen: boolean }) => void;
  pageWrapId: string;
  outerContainerId: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goTo = (to: string) => {
    navigate(to);
    setSideBarState(false);
  };

  const setSideBarState = (open: boolean) => {
    props.onStateChange({ isOpen: open });
  };

  return (
    <Menu
      {...props}
      burgerBarClassName={props.isOpen ? 'Open' : ''}
      customBurgerIcon={<Hamburger open={props.isOpen} onClick={() => setSideBarState(!props.isOpen)} />}
    >
      <div className={'MenuItem Mobile'} onClick={() => goTo('/')}>
        {t('menu_items.home')}
      </div>
      <hr className={classes.MobileDivider} />
      <Accordion flush>
        <Accordion.Item eventKey={'0'}>
          <Accordion.Header> {t('menu_items.band')}</Accordion.Header>
          <Accordion.Body>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/history')}>
              {t('menu_items.history')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/members')}>
              {t('menu_items.members')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/discography')}>
              {t('menu_items.discography')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/images')}>
              {t('menu_items.images')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/articles')}>
              {t('menu_items.articles')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/interviews')}>
              {t('menu_items.interviews')}
            </div>
            <hr className={classes.MobileDivider} />
            <div className={'MenuItem Mobile SubMenuItem'} onClick={() => goTo('/prizes')}>
              {t('menu_items.prizes')}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr className={classes.MobileDivider} />
      <div className={'MenuItem Mobile'} onClick={() => goTo('/concerts')}>
        {t('menu_items.concerts')}
      </div>
      <hr className={classes.MobileDivider} />
      <div className={'MenuItem Mobile'} onClick={() => goTo('/videos')}>
        {t('menu_items.videos')}
      </div>
      <hr className={classes.MobileDivider} />
      <div className={'MenuItem Mobile'} onClick={() => goTo('/tambura-history')}>
        {t('menu_items.tambura_history')}
      </div>
      <hr className={classes.MobileDivider} />
      <div className={'MenuItem Mobile'} onClick={() => goTo('/contacts')}>
        {t('menu_items.contacts')}
      </div>
    </Menu>
  );
};
