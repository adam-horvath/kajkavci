import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiButton from '@material-ui/core/Button';

import { absolute, inlineBlock, relative } from 'constants/Jss';

const styles = (theme) => ({
  root: {
    position: relative,
    display: inlineBlock,
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: absolute,
    top: 'calc(50% - 12px)',
    right: 'calc(50% - 12px)',
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    height: '100%',
  },
});

const Button = forwardRef(
  (
    {
      classes,
      loading,
      disabled,
      className,
      fullWidth,
      buttonClassName,
      variant = 'contained',
      color = 'primary',
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={classNames(classes.root, className, { [classes.fullWidth]: fullWidth })}>
        <MuiButton
          disabled={loading || disabled}
          className={classNames(classes.button, buttonClassName)}
          fullWidth={fullWidth}
          variant={variant}
          color={color}
          {...props}
        />
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    );
  }
);

Button.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default withStyles(styles)(Button);
