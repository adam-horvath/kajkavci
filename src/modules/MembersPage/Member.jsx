import React from 'react';
import PropTypes from 'prop-types';
import { useMemberStyles } from './styles';

export const Member = ({ imageUrl, subscript }) => {
  const classes = useMemberStyles();

  return (
    <div>
      <div className={classes.Image} style={{ backgroundImage: imageUrl }} />
      <div className={classes.Subscript}>{subscript}</div>
    </div>
  );
};

Member.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  subscript: PropTypes.string.isRequired,
};
