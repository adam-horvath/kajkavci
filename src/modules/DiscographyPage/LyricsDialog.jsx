import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

import { Dialog } from 'components';
import { useLyricsDialogStyles } from './styles';

const LyricsDialog = ({ open, closeDialog, song }) => {
  const classes = useLyricsDialogStyles();
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth={'sm'}
      mbTitle={2}
      title={song ? song.title : ''}
      subtitle={
        song
          ? song.music === song.lyrics
            ? `${t('music_and_lyrics')}: ${song.music}`
            : `${song.music === 'narodna' ? t('narodna') : t('music') + ': ' + song.music}${
                song.lyrics ? ', ' + t('lyrics') + ': ' + song.lyrics : ''
              }`
          : null
      }
      content={
        <>
          {song ? (
            <>
              <Box mb={6} className={classes.Text}>
                {song.text.map((line, i) => {
                  return line ? (
                    <div className={classes.Line} key={song.title + i}>
                      {line}
                    </div>
                  ) : (
                    <br key={song.title + i} />
                  );
                })}
              </Box>
            </>
          ) : null}
        </>
      }
    />
  );
};

LyricsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lyrics: PropTypes.string,
    music: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default LyricsDialog;
