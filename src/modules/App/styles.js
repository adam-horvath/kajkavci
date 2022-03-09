import { absolute, auto, block, bold, center, flex, relative } from 'constants/Jss';

export const appStyles = (theme) => ({
  '@global': {
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important',
    },
    '.fade': {
      '&.enter': {
        opacity: 0,
        position: relative,
        '&.enter-active': {
          position: relative,
          opacity: 1,
          transition: 'opacity 300ms ease-in-out',
        },
      },
      '&.exit': {
        opacity: 1,
        position: relative,
        '&.exit-active': {
          opacity: 0,
          position: absolute,
          top: 0,
          left: 0,
          transition: 'opacity 300ms ease-in-out',
        },
      },
    },
    '.Page': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.mixins.mobileHeader.height,
      },
      '& > div': {
        paddingTop: theme.spacing(6),
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('sm')]: {
          paddingTop: theme.spacing(4),
          marginLeft: 0,
          marginRight: 0,
          width: '100%',
        },
      },
    },
    '.MainContainer': {
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        '& > div > div': {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          maxWidth: '100%',
        },
      },
    },
    '.PageTitleContainer': {
      display: block,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(3),
      },
    },
    '.PageTitle': {
      display: flex,
      justifyContent: center,
      textAlign: center,
      color: theme.palette.darkBlue,
    },
    '.PageTitleBorder': {
      marginLeft: auto,
      marginRight: auto,
    },
    '.TitleBorder': {
      width: 285,
      height: 4,
      backgroundColor: theme.palette.blue,
      [theme.breakpoints.down('sm')]: {
        width: 130,
      },
    },
    '.Title': {
      fontSize: 42,
      fontWeight: bold,
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
      },
    },
    '.Description': {
      color: theme.palette.grey70,
      fontSize: 18,
      lineHeight: '30px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: '18px',
      },
    },
    '.NoPadding': {
      padding: '0!important',
    },
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        height: `calc(100% - ${theme.mixins.mobileHeader.height}px)`,
      },
    },
  },
});
