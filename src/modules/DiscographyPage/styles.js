import makeStyles from '@material-ui/core/styles/makeStyles';
import { auto, block, bold, center, contain, cover, fitContent, flex, none, noRepeat } from 'constants/Jss';

export const discographyPageStyles = (theme) => ({
  Disks: {
    width: '100%',
  },
});

export const useDiskStyles = makeStyles((theme) => ({
  DiskContainer: {
    width: '100%',
    display: flex,
    justifyContent: center,
    [theme.breakpoints.down('sm')]: {
      display: block,
    },
  },
  Cover: {
    backgroundPosition: center,
    backgroundSize: cover,
    backgroundRepeat: noRepeat,
    width: 470,
    height: 470,
    [theme.breakpoints.down('sm')]: {
      marginLeft: auto,
      marginRight: auto,
    },
    [theme.breakpoints.down('xs')]: {
      width: 280,
      height: 280,
      backgroundSize: contain,
    },
  },
  TracksContainer: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: center,
    },
  },
  Title: {
    width: fitContent,
    fontWeight: bold,
    fontSize: 20,
    paddingBottom: theme.spacing(0.25),
    borderBottom: `2px solid ${theme.palette.blue}`,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      marginLeft: auto,
      marginRight: auto,
    },
  },
  Tracks: {},
  Link: {
    textDecoration: none,
    color: theme.palette.blue,
  },
  Track: {},
}));

export const useLyricsDialogStyles = makeStyles((theme) => ({
  Title: {},
  Subtitle: {
    textAlign: center,
  },
  Text: {},
  Line: {
    textAlign: center,
    lineHeight: '20px',
  },
}));
