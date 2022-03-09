import React from 'react';
import PropTypes from 'prop-types';
import MDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ClearIcon from '@material-ui/icons/Clear';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import classNames from 'classnames';

import { absolute, pointer, bold, auto, none, center } from 'constants/Jss';

const useStyles = makeStyles((theme) => ({
  CloseButton: {
    position: absolute,
    top: theme.spacing(3),
    right: theme.spacing(3),
    color: theme.palette.grey70,
    cursor: pointer,
    zIndex: 10,
  },
  DialogTitle: {
    fontWeight: bold,
    fontSize: 32,
    paddingBottom: theme.spacing(1),
    borderBottom: `4px solid ${theme.palette.blue}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  Subtitle: {
    textAlign: center,
  },
  Black: {
    '& .Title': {
      [theme.breakpoints.down('sm')]: {
        display: none,
      },
    },
    '& .MuiDialog-paperFullWidth': {
      backgroundColor: theme.palette.black,
    },
  },
}));

const Dialog = React.forwardRef(
  ({ open, onClose, actions, title, subtitle, content, contentClass, titleClass, maxWidth, mbTitle, black }, ref) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    return (
      <MDialog
        ref={ref}
        className={classNames({ [classes.Black]: black })}
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        maxWidth={maxWidth || 'md'}
        fullWidth
      >
        {title ? (
          <Box className="Title" mt={4} mb={mbTitle || 4} ml={auto} mr={auto}>
            <div className={classNames(classes.DialogTitle, titleClass)}>{title}</div>
          </Box>
        ) : null}
        {subtitle ? (
          <Box mb={4} className={classes.Subtitle}>
            {subtitle}
          </Box>
        ) : null}
        {!actions && (
          <div className={classes.CloseButton} onClick={onClose}>
            <ClearIcon color={'inherit'} />
          </div>
        )}
        <DialogContent classes={{ root: contentClass }}>{content}</DialogContent>
        {actions && <DialogActions>{actions}</DialogActions>}
      </MDialog>
    );
  }
);

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  actions: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  contentClass: PropTypes.string,
  titleClass: PropTypes.string,
  maxWidth: PropTypes.string,
  mbTitle: PropTypes.number,
  black: PropTypes.bool,
};

export default Dialog;
