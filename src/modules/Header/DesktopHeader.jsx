import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import logo from 'assets/images/logo.png';
import { MenuItem } from './MenuItem';
import { DropdownMenu } from './DropdownMenu';
import { useDesktopHeaderStyles } from './styles';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';

export const DesktopHeader = ({ onLogoClick, getPath }) => {
  const classes = useDesktopHeaderStyles();
  const { t } = useTranslation();

  const [bandOpen, setBandOpen] = React.useState(false);

  const bandAnchorRef = React.useRef(null);

  const handleBandToggle = () => {
    setBandOpen((prevBandOpen) => !prevBandOpen);
  };

  const handleBandClose = (event) => {
    if (bandAnchorRef.current && bandAnchorRef.current.contains(event.target)) {
      return;
    }
    setBandOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevBandOpen = React.useRef(bandOpen);
  React.useEffect(() => {
    if (prevBandOpen.current === true && bandOpen === false) {
      bandAnchorRef.current.focus();
    }

    prevBandOpen.current = bandOpen;
  }, [bandOpen]);

  const closeSubmenus = (event) => {
    handleBandClose(event);
  };

  return (
    <Box className={classes.Header} borderTop={6}>
      <Box className={classes.LogoContainer} padding={1}>
        <Avatar className={classes.Logo} src={logo} onClick={onLogoClick} />
      </Box>
      <Box padding={1} className={classes.MenuContainer}>
        <Box mr={2}>
          <LanguageSelect />
        </Box>
        <List className={classes.List}>
          <MenuItem linkName={t('menu_item_home')} to={getPath(t('menu_item_home'))} onClick={closeSubmenus} />
          <DropdownMenu
            menuListId="band-menu"
            open={bandOpen}
            dropdownTitle={<Trans i18nKey="menu_item_band" />}
            anchorRef={bandAnchorRef}
            handleToggle={handleBandToggle}
            handleClose={handleBandClose}
          >
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_history')}
              to={getPath(t('menu_item_history'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_members')}
              to={getPath(t('menu_item_members'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_discography')}
              to={getPath(t('menu_item_discography'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_images')}
              to={getPath(t('menu_item_images'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_articles')}
              to={getPath(t('menu_item_articles'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_interviews')}
              to={getPath(t('menu_item_interviews'))}
              submenu
            />
            <MenuItem
              onClick={handleBandClose}
              linkName={t('menu_item_prizes')}
              to={getPath(t('menu_item_prizes'))}
              submenu
            />
          </DropdownMenu>
          <MenuItem linkName={t('menu_item_concerts')} to={getPath(t('menu_item_concerts'))} onClick={closeSubmenus} />
          <MenuItem linkName={t('menu_item_videos')} to={getPath(t('menu_item_videos'))} onClick={closeSubmenus} />
          <MenuItem
            linkName={t('menu_item_tambura_history')}
            to={getPath(t('menu_item_tambura_history'))}
            onClick={handleBandClose}
          />
          <MenuItem linkName={t('menu_item_contacts')} to={getPath(t('menu_item_contacts'))} onClick={closeSubmenus} />
        </List>
      </Box>
    </Box>
  );
};

DesktopHeader.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  getPath: PropTypes.func.isRequired,
};
