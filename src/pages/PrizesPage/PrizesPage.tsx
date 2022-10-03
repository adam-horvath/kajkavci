import { FC, Fragment } from 'react';

import { Image, useTranslation } from 'components';
import { getDate } from 'utils';
import { prizes } from './prizes';
import classes from './PrizesPage.module.scss';

export const PrizesPage: FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={classes.PrizesContainer}>
      {Object.keys(prizes).map((year) => (
        <Fragment key={year}>
          <div className={classes.Year}>{year}</div>
          <div>
            {prizes[year as keyof typeof prizes].map((prize, i) => {
              const { images, month, day } = prize;
              return (
                <div className={classes.Prize} key={i}>
                  {images.length ? (
                    <div className={classes.PrizeImageContainer}>
                      {images.map((image, i) => (
                        <div className={classes.PrizeImage} key={i}>
                          <Image src={image} local />
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className={classes.PrizeDescription}>{`${getDate({ month, day })}, ${prize.location}, ${t(
                    prize.titleKey
                  )}`}</div>
                </div>
              );
            })}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
