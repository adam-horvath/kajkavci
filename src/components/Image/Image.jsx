import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

import noImage from 'assets/images/no-image.png';

const useStyles = makeStyles((theme) => ({
  Image: {
    maxWidth: '100%',
  },
}));

const Image = ({ src, className, alt, local, ...props }) => {
  const [isError, setError] = useState(false);
  const classes = useStyles();
  return (
    <img
      src={isError || !src ? noImage : local ? require('../../' + src) : src}
      onError={() => setError(true)}
      className={classNames(classes.Image, className)}
      alt={alt || src || 'No image'}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  classNames: PropTypes.string,
};

export default Image;
