import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import { useTranslation } from 'react-i18next';

import { MenuItem } from './MenuItem';
import { useMobileHeaderStyles } from './styles';
import { Hamburger } from './Hamburger';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';

export const MobileHeader = ({ onLogoClick, getPath }) => {
  const classes = useMobileHeaderStyles();
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [bandOpen, setBandOpen] = React.useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setDrawerOpen(false);
    });
  }

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleBand = () => {
    setBandOpen(!bandOpen);
  };

  return (
    <Box className={classes.MobileHeader}>
      <Box mr={2} className={classes.LanguageSelectContainer}>
        <LanguageSelect />
      </Box>
      <Box className={classes.MobileActionContainer}>
        <Box>
          <Hamburger onLogoClick={toggleDrawer(!drawerOpen)} open={drawerOpen} />
        </Box>
        <Box>
          <SwipeableDrawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            PaperProps={{ className: classes.DrawerContainer }}
          >
            <div role="presentation">
              <List>
                <MenuItem
                  mobile
                  linkName={t('menu_item_home')}
                  to={getPath(t('menu_item_home'))}
                  onClick={toggleDrawer(false)}
                />
                <Divider variant="middle" className={classes.MobileDivider} />
                <ListItem className={classes.MobileBandButton} button onClick={toggleBand}>
                  <ListItemText primary={t('menu_item_band')} />
                  {bandOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse className={classes.Collapse} in={bandOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_history')}
                      to={getPath(t('menu_item_history'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_members')}
                      to={getPath(t('menu_item_members'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_discography')}
                      to={getPath(t('menu_item_discography'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_images')}
                      to={getPath(t('menu_item_images'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_articles')}
                      to={getPath(t('menu_item_articles'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_interviews')}
                      to={getPath(t('menu_item_interviews'))}
                      submenu
                    />
                    <Divider variant="middle" className={classes.MobileDivider} />
                    <MenuItem
                      mobile
                      onClick={toggleDrawer(false)}
                      linkName={t('menu_item_prizes')}
                      to={getPath(t('menu_item_prizes'))}
                      submenu
                    />
                  </List>
                </Collapse>
                <Divider variant="middle" className={classes.MobileDivider} />
                <MenuItem
                  mobile
                  linkName={t('menu_item_concerts')}
                  to={getPath(t('menu_item_concerts'))}
                  onClick={toggleDrawer(false)}
                />
                <Divider variant="middle" className={classes.MobileDivider} />
                <MenuItem
                  mobile
                  linkName={t('menu_item_videos')}
                  to={getPath(t('menu_item_videos'))}
                  onClick={toggleDrawer(false)}
                />
                <Divider variant="middle" className={classes.MobileDivider} />
                <MenuItem
                  mobile
                  linkName={t('menu_item_tambura_history')}
                  to={getPath(t('menu_item_tambura_history'))}
                  onClick={toggleDrawer(false)}
                />
                <Divider variant="middle" className={classes.MobileDivider} />
                <MenuItem
                  mobile
                  linkName={t('menu_item_contacts')}
                  to={getPath(t('menu_item_contacts'))}
                  onClick={toggleDrawer(false)}
                />
              </List>
            </div>
          </SwipeableDrawer>
        </Box>
      </Box>
    </Box>
  );
};

MobileHeader.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  getPath: PropTypes.func.isRequired,
};
