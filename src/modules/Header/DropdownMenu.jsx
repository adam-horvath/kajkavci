import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import { Button } from 'components';
import noAvatar from 'assets/images/no-image.png';
import { useDropdownMenuStyles } from './styles';

export const DropdownMenu = ({
  menuListId,
  open,
  dropdownTitle,
  avatar,
  anchorRef,
  handleToggle,
  handleClose,
  children,
  buttonClassName,
}) => {
  const classes = useDropdownMenuStyles();
  const { t } = useTranslation();

  return (
    <Fragment>
      {dropdownTitle ? (
        <Button
          ref={anchorRef}
          buttonClassName={classNames(classes.DropdownButton, buttonClassName)}
          aria-controls={open ? menuListId : undefined}
          aria-haspopup="true"
          variant="text"
          onClick={handleToggle}
        >
          {dropdownTitle}
          <ExpandMoreIcon />
        </Button>
      ) : (
        <Avatar
          ref={anchorRef}
          aria-controls={open ? menuListId : undefined}
          onClick={handleToggle}
          aria-haspopup="true"
          alt={t('menu_item_profile_menu')}
          src={avatar || noAvatar}
          className={classes.Avatar}
        />
      )}
      <Popper className={classes.MenuListContainer} open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className={classes.MenuList} autoFocusItem={open} id={menuListId}>
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

DropdownMenu.propTypes = {
  menuListId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  anchorRef: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  dropdownTitle: PropTypes.node,
  avatar: PropTypes.string,
  children: PropTypes.node.isRequired,
};
