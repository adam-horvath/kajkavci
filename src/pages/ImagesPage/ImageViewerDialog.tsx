import { FC } from 'react';
import { Carousel } from 'react-bootstrap';

import { Dialog, useTranslation } from 'components';
import { Image } from 'models';
import classes from './ImageViewerDialog.module.scss';

export interface ImageViewerDialogProps {
  open: boolean;
  closeDialog: VoidFunction;
  images: Image[];
  imageIndex: number;
  setImageIndex: (index: number) => void;
  altKey?: string;
}

export const ImageViewerDialog: FC<ImageViewerDialogProps> = ({
  open,
  closeDialog,
  altKey,
  images,
  imageIndex,
  setImageIndex,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      title={altKey ? t(altKey) : ''}
      content={
        <>
          <div className={classes.ModalImage} style={{ backgroundImage: `url(${images[imageIndex].imageUrl}` }} />
          <Carousel className={classes.MobileModalImages} activeIndex={imageIndex} onSelect={setImageIndex}>
            {images.map((image) => (
              <Carousel.Item key={images.indexOf(image)}>
                <div className={classes.MobileImage} style={{ backgroundImage: `url(${image.imageUrl}` }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      }
      dialogClass={'MediaDialog'}
    />
  );
};
