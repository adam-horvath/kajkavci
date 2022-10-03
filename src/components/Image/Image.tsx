import { FC, useState } from 'react';
import classNames from 'classnames';

import noImage from 'assets/images/no-image.png';
import classes from './Image.module.scss';

export interface ImageProps {
  src?: string;
  className?: string;
  alt?: string;
  local?: boolean;
}

export const Image: FC<ImageProps> = ({ src, className, alt, local, ...props }) => {
  const [isError, setError] = useState(false);

  const getSrc = () => {
    if (isError || !src) return noImage;
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return local ? require(`../../${src}`) : src;
  };

  return (
    <img
      src={getSrc()}
      onError={() => setError(true)}
      className={classNames(classes.Image, className)}
      alt={alt || src || 'No image'}
      {...props}
    />
  );
};
