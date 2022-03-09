import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useHamburgerStyles } from './styles';

export const Hamburger = ({ onLogoClick, open }) => {
  const classes = useHamburgerStyles();

  return (
    <div className={classes.Container} onClick={onLogoClick}>
      <div className={classNames(classes.Bar, { [classes.Bar1]: open })} />
      <div className={classNames(classes.Bar, { [classes.Bar2]: open })} />
      <div className={classNames(classes.Bar, { [classes.Bar3]: open })} />
    </div>
  );
};

Hamburger.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
