import { FC, useState } from 'react';
import { isNil } from 'lodash';
import classNames from 'classnames';

import { getLanguage } from 'i18n';
import { images } from './images';
import { ImageViewerDialog } from './ImageViewerDialog';
import classes from './ImagesPage.module.scss';

export const ImagesPage: FC = () => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  return (
    <>
      <div className={classNames(classes.ImagesContainer, 'container')}>
        <div className={'row'}>
          {images.map((image) => (
            <div className={classNames(classes.ImageContainer, 'col-md-3 col-sm-6 col-xs-12')} key={image.thumbnailUrl}>
              <div
                className={classes.Image}
                style={{ backgroundImage: image.thumbnailUrl }}
                onClick={() => setImageIndex(images.indexOf(image))}
              />
              <div className={classes.Description}>{`${image[getLanguage()]}`}</div>
            </div>
          ))}
        </div>
      </div>
      <ImageViewerDialog
        open={!isNil(imageIndex)}
        closeDialog={() => setImageIndex(null)}
        images={images}
        imageIndex={imageIndex || 0}
        setImageIndex={setImageIndex}
      />
    </>
  );
};
