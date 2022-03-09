import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { Dialog } from 'components';
import { useVideoDialogStyles } from './styles';

const VideoDialog = ({ open, closeDialog, video }) => {
  const classes = useVideoDialogStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return video ? (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth={'lg'}
      title={fullScreen ? video.title : null}
      black
      contentClass="NoPadding"
      content={
        <div className={classes.Wrapper}>
          <div className={classes.IFrameContainer}>
            <iframe
              className={classes.IFrame}
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      }
    />
  ) : null;
};

VideoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default VideoDialog;
