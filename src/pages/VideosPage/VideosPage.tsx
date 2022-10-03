import { FC, useState } from 'react';
import classNames from 'classnames';

import { Video } from 'models';
import { videos } from './videos';
import { VideoDialog } from './VideoDialog';
import classes from './VideosPage.module.scss';

export const VideosPage: FC = () => {
  const [video, setVideo] = useState<Video | null>(null);

  return (
    <>
      <div className={classNames(classes.VideosContainer, 'container')}>
        <div className={'row'}>
          {videos.map((video: Video) => (
            <div key={video.thumbnail} className={classNames(classes.VideoContainer, 'col-xs-12 col-sm-6 col-md-3')}>
              <div
                className={classes.Video}
                style={{ backgroundImage: video.thumbnail }}
                onClick={() => setVideo(video)}
              />
              <div className={classes.Description}>{`${video.title}, ${video.location}, ${video.year}`}</div>
            </div>
          ))}
        </div>
      </div>
      <VideoDialog open={!!video} closeDialog={() => setVideo(null)} video={video} />
    </>
  );
};
