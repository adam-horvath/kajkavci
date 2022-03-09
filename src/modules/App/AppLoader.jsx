import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { center, fixed, flex, none } from 'constants/Jss';

const useStyles = makeStyles((theme) => ({
  AppLoader: {
    display: none,
    justifyContent: center,
    alignItems: center,
    height: '100%',
    position: fixed,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1200,
    background: fade(theme.palette.black, 0.9),
    '&.show': {
      display: flex,
    },
  },
}));

const AppLoader = ({ show = false }) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.AppLoader, {
        show,
      })}
    >
      <CircularProgress />
    </div>
  );
};

AppLoader.propTypes = {
  show: PropTypes.bool,
};

export default AppLoader;
