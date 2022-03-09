import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Dialog } from 'components';
import { useImageViewerDialogStyles } from './styles';

const ImageViewerDialog = ({ open, closeDialog, altKey, images, imageIndex }) => {
  const classes = useImageViewerDialogStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(imageIndex);

  useEffect(() => {
    if (imageIndex !== index) {
      setIndex(imageIndex);
    }
  }, [imageIndex]);

  const setImageIndex = (activeIndex) => {
    setIndex(activeIndex);
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      black={fullScreen}
      title={altKey ? t(altKey) : ''}
      content={
        <>
          <div className={classes.ModalImage} style={{ backgroundImage: `url(${images[imageIndex].imageUrl}` }} />
          <SwipeableViews
            className={classes.MobileModalImages}
            enableMouseEvents
            index={index}
            onChangeIndex={setImageIndex}
          >
            {images.map((image) => (
              <div
                className={classes.MobileImage}
                key={images.indexOf(image)}
                style={{ backgroundImage: `url(${image.imageUrl}` }}
              />
            ))}
          </SwipeableViews>
        </>
      }
    />
  );
};

ImageViewerDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageIndex: PropTypes.number,
  altKey: PropTypes.string,
};

export default ImageViewerDialog;
