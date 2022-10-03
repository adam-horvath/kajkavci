import { FC } from 'react';

import { Dialog, useWindowResize } from 'components';
import { Video } from 'models';
import classes from './VideoDialog.module.scss';

export interface VideoDialogProps {
  open: boolean;
  closeDialog: VoidFunction;
  video: Video | null;
}

export const VideoDialog: FC<VideoDialogProps> = ({ open, closeDialog, video }) => {
  const windowSize = useWindowResize();
  return !video ? null : (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth={'lg'}
      title={windowSize.underMd ? video.title : null}
      contentClass={'NoPadding'}
      content={
        <div className={classes.Wrapper}>
          <div className={classes.IFrameContainer}>
            <iframe
              title={video.title}
              className={classes.IFrame}
              src={video.url}
              frameBorder={'0'}
              allow={'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'}
              allowFullScreen
            />
          </div>
        </div>
      }
      dialogClass={'MediaDialog'}
    />
  );
};
