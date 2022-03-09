import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItem from '@material-ui/core/ListItem/ListItem';
import { useMenuItemStyles } from './styles';

export const MenuItem = ({ to, linkName, onClick, submenu, hasIcon, children, mobile }) => {
  const classes = useMenuItemStyles();

  return (
    <ListItem
      component={NavLink}
      to={to}
      className={classNames(classes.MenuItem, { [classes.SubmenuItem]: submenu, Mobile: mobile })}
      onClick={onClick}
    >
      {hasIcon ? <div className={classes.Icon}>{children}</div> : null}
      <ListItemText
        className={classNames({ [classes.SubmenuItemText]: submenu })}
        primary={linkName}
      />
    </ListItem>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  submenu: PropTypes.bool,
  icon: PropTypes.node,
  mobile: PropTypes.bool,
};
