import makeStyles from '@material-ui/core/styles/makeStyles';
import { absolute, auto, center, flex, pointer, relative } from 'constants/Jss';

export const useFooterStyles = makeStyles((theme) => ({
  Footer: {
    background: theme.palette.darkBlue,
    width: '100%',
    color: theme.palette.white,
    padding: theme.spacing(3),
    position: relative,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: 0,
    },
    display: flex,
    alignItems: center,
    justifyContent: center,
  },
  ScrollToTop: {
    position: absolute,
    top: theme.mixins.scrollToTop.size / -2,
    right: theme.mixins.scrollToTop.size / 2,
    width: theme.mixins.scrollToTop.size,
    height: theme.mixins.scrollToTop.size,
    borderRadius: theme.mixins.scrollToTop.size / 2,
    color: theme.palette.white,
    backgroundColor: theme.palette.yellow,
    '&:hover': {
      backgroundColor: theme.palette.yellowHover,
    },
    display: flex,
    justifyContent: center,
    alignItems: center,
    cursor: pointer,
    '& svg': {
      width: (theme.mixins.scrollToTop.size / 3) * 2,
      height: (theme.mixins.scrollToTop.size / 3) * 2,
    },
    [theme.breakpoints.down('sm')]: {
      right: `calc(50% - ${theme.mixins.scrollToTop.size / 2}px)`,
    },
  },
  FooterText: {
    fontSize: 18,
    lineHeight: 1.5,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: auto,
      marginRight: theme.spacing(4),
    },
  },
  Logo: {
    width: '64px !important',
    height: '64px !important',
    [theme.breakpoints.down('sm')]: {
      position: absolute,
      left: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
    },
  },
}));
