import { makeStyles } from '@material-ui/core';
import { absolute, auto, block, center, cover, flex, noRepeat, pointer, relative, wrap } from 'constants/Jss';

export const videosPageStyles = (theme) => ({
  VideosContainer: {
    marginBottom: theme.spacing(4),
  },
  VideoContainer: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
    },
  },
  Video: {
    backgroundPosition: center,
    backgroundSize: cover,
    backgroundRepeat: noRepeat,
    width: '90%',
    maxWidth: 300,
    boxShadow: '0 16px 30px #00000029',
    marginLeft: auto,
    marginRight: auto,
    marginBottom: theme.spacing(2),
    cursor: pointer,
    [theme.breakpoints.up('sm')]: {
      height: 150,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
  Description: {
    textAlign: center,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
});

export const useVideoDialogStyles = makeStyles((theme) => ({
  Wrapper: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  IFrameContainer: {
    position: relative,
    paddingTop: '56%',
  },
  IFrame: {
    position: absolute,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));
