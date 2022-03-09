import { auto, center, contain, cover, none, noRepeat, pointer } from 'constants/Jss';
import { makeStyles } from '@material-ui/core';

export const imagesPageStyles = (theme) => ({
  ImagesContainer: {
    marginBottom: theme.spacing(4),
  },
  ImageContainer: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
    },
  },
  Image: {
    backgroundPosition: center,
    backgroundSize: cover,
    backgroundRepeat: noRepeat,
    width: '90%',
    maxWidth: 300,
    boxShadow: '0 16px 30px #00000029',
    marginBottom: theme.spacing(2),
    marginLeft: auto,
    marginRight: auto,
    cursor: pointer,
    [theme.breakpoints.up('sm')]: {
      height: 150,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
      marginBottom: theme.spacing(3),
    },
  },
  Description: {
    textAlign: center,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
});

export const useImageViewerDialogStyles = makeStyles((theme) => ({
  ModalImage: {
    backgroundPosition: center,
    backgroundSize: contain,
    backgroundRepeat: noRepeat,
    maxWidth: '100%',
    height: '70vh',
    [theme.breakpoints.down('sm')]: {
      display: none,
    },
  },
  MobileModalImages: {
    [theme.breakpoints.up('md')]: {
      display: none,
    },
  },
  MobileImage: {
    backgroundPosition: center,
    backgroundSize: contain,
    backgroundRepeat: noRepeat,
    maxWidth: '100%',
    height: '100vh',
  }
}));
