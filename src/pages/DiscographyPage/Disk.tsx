import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Track, Tracks } from 'models';
import classes from './DiscographyPage.module.scss';

export interface DiskProps {
  imageUrl: string;
  title: string;
  tracks: Tracks;
  getTrackFromTitleUrl: (url: string) => Track | null;
  setSongUrl: (url: string) => void;
}

export const Disk: FC<DiskProps> = ({ imageUrl, title, tracks, getTrackFromTitleUrl, setSongUrl }) => {
  const location = useLocation();
  return (
    <div className={classes.DiskContainer}>
      <div className={classes.Cover} style={{ backgroundImage: imageUrl }} />
      <div className={classes.TracksContainer}>
        <div className={classes.Title}>{title}</div>
        <div className={classes.Tracks}>
          {Object.keys(tracks).map((key, i) =>
            getTrackFromTitleUrl(key)?.text ? (
              <Link
                className={classes.Link}
                to={`${location.pathname}?song=${key}`}
                onClick={() => setSongUrl(key)}
                key={key}
              >
                <div className={classes.Track}>
                  {i + 1}. {tracks[key].title}
                </div>
              </Link>
            ) : (
              <div className={classes.Track} key={key}>
                {i + 1}. {tracks[key].title}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
