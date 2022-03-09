import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import { useDiskStyles } from './styles';

export const Disk = ({ imageUrl, title, tracks, history, getSongFromTitleUrl, setSongUrl }) => {
  const classes = useDiskStyles();
  return (
    <Box mb={8} className={classes.DiskContainer}>
      <div className={classes.Cover} style={{ backgroundImage: imageUrl }} />
      <div className={classes.TracksContainer}>
        <Box mb={2} className={classes.Title}>
          {title}
        </Box>
        <div className={classes.Tracks}>
          {Object.keys(tracks).map((key, i) => {
            return getSongFromTitleUrl(key).text ? (
              <Link className={classes.Link} to={`${history.location.pathname}?song=${key}`} onClick={() => setSongUrl(key)} key={key}>
                <div className={classes.Track}>
                  {i + 1}. {tracks[key].title}
                </div>
              </Link>
            ) : (
              <div className={classes.Track} key={key}>
                {i + 1}. {tracks[key].title}
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

Disk.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tracks: PropTypes.object.isRequired,
  getSongFromTitleUrl: PropTypes.func.isRequired,
  setSongUrl: PropTypes.func.isRequired,
};
