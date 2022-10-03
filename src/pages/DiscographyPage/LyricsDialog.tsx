import { FC } from 'react';

import { Dialog, useTranslation } from 'components';
import { Track } from 'models';
import './DiscographyPage.overrides.scss';

export interface LyricsDialogProps {
  open: boolean;
  closeDialog: VoidFunction;
  track: Track | null;
}

export const LyricsDialog: FC<LyricsDialogProps> = ({ open, closeDialog, track }) => {
  const { t } = useTranslation();

  const getSubtitle = () => {
    if (!track) return null;
    if (track.music === track.lyrics) {
      return `${t('music_and_lyrics')}: ${track.music}`;
    }
    if (track.music === 'narodna') {
      return t('narodna');
    }
    return `${`${t('music')}: ${track.music}`}${track.lyrics ? `, ${t('lyrics')}: ${track.lyrics}` : ''}`;
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth={'sm'}
      mbTitle={2}
      title={track ? track.title : ''}
      subtitle={getSubtitle()}
      content={
        <>
          {track?.text ? (
            <>
              <div className={'Text'}>
                {track.text.map((line, i) =>
                  line ? (
                    <div className={'Line'} key={track.title + i}>
                      {line}
                    </div>
                  ) : (
                    <br key={track.title + i} />
                  )
                )}
              </div>
            </>
          ) : null}
        </>
      }
    />
  );
};
