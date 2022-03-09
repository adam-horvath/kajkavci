import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useFooterStyles } from './styles';
import logo from 'assets/images/logo.png';
import Avatar from '@material-ui/core/Avatar/Avatar';

export const Footer = () => {
  const classes = useFooterStyles();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={classes.Footer}>
      <Box className={classes.ScrollToTop} onClick={scrollToTop}>
        <ExpandLessIcon />
      </Box>
      <Avatar className={classes.Logo} src={logo} />
      <div className={classes.FooterText}>&copy; Kajkavci</div>
    </footer>
  );
};

Footer.propTypes = {
  isLogged: PropTypes.func,
  history: PropTypes.object.isRequired,
};
