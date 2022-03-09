import { createMuiTheme } from '@material-ui/core/styles';

import { MerryWeather, MerryWeatherBold } from './fonts';
import { none, uppercase, visible, auto } from 'constants/Jss';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  mixins: {
    page: {
      mainPadding: '8%',
      topSpace: defaultTheme.spacing(15),
      sideSpace: defaultTheme.spacing(5),
    },
    sideBar: {
      width: 300,
      mobileBreakpoint: 'md',
    },
    filePicker: {
      width: 40,
      height: 40,
    },
    header: {
      height: 66,
      contentSize: 44,
    },
    mobileHeader: {
      height: 60,
    },
    scrollToTop: {
      size: 50,
    },
    homeSearch: {
      height: 60,
    },
    homePageAboutUsImage: {
      size: 120,
    },
    pagination: {
      size: 44,
    },
  },
  overrides: {
    MuiCard: {
      root: {
        overflow: visible,
      },
    },
    MuiButton: {
      root: {
        textTransform: none,
        fontWeight: 400,
        paddingLeft: defaultTheme.spacing(3),
        paddingRight: defaultTheme.spacing(3),
        '&$disabled': {
          opacity: 0.5,
          color: '',
        },
        '&:focus': {
          outline: none,
        },
      },
      contained: {
        '&$disabled': {
          backgroundColor: '',
          color: '',
        },
      },
      outlined: {
        '&$disabled': {
          border: '1px solid',
          borderColor: '',
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: '50%',
        '&:focus': {
          outline: none,
        },
        '&:hover': {
          backgroundColor: '#FF566E',
        },
        '& svg': {
          fill: defaultTheme.palette.common.white,
        },
        '&$disabled': {
          backgroundColor: '#DDD',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [MerryWeather, MerryWeatherBold],
      },
    },
    MuiDialogActions: {
      root: {
        paddingLeft: defaultTheme.spacing(3),
        paddingRight: defaultTheme.spacing(3),
        paddingBottom: defaultTheme.spacing(2),
      },
    },
    MuiDialogContent: {
      root: {
        padding: 0,
        paddingBottom: defaultTheme.spacing(2),
      },
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          marginLeft: 0,
        },
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 640,
      },
    },
    MuiTablePagination: {
      toolbar: {
        paddingLeft: defaultTheme.spacing(2),
        paddingRight: defaultTheme.spacing(2),
        paddingTop: defaultTheme.spacing(1),
        paddingBottom: defaultTheme.spacing(1),
      },
    },
    // MuiInput: {
    // underline: {
    //   '&:before': {
    //     borderBottom: 0,
    //   },
    //   '&:hover:not(.Mui-disabled):before': {
    //     borderBottom: 0,
    //   },
    // },
    // root: {
    //   '&$focused': {
    //     '&:after': {
    //       borderBottom: 0,
    //     },
    //   },
    // },
    // },
    MuiInputLabel: {
      outlined: {
        backgroundColor: defaultTheme.palette.common.white,
        paddingLeft: `${defaultTheme.spacing(1)}px!important`,
        paddingRight: `${defaultTheme.spacing(1)}px!important`,
      },
      formControl: {
        '& + .MuiInput-root': {
          marginTop: defaultTheme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0,
      },
      primary: {
        textTransform: uppercase,
        fontSize: 14,
      },
    },
    MuiFormControlLabel: {
      label: {
        lineHeight: 1.1,
      },
    },
    MuiDrawer: {
      root: {
        top: '60px !important',
        '& .MuiBackdrop-root': {
          top: 60,
        },
        maxHeight: '100%',
        overflowY: auto,
      },
    },
    MuiContainer: {
      maxWidthLg: {
        maxWidth: '1140px !important',
      },
    },
  },
  palette: {
    primary: {
      main: '#333',
      dark: '#2C2C2C',
      hover: '#444',
      contrast: '#FFF',
    },
    background: {
      default: '#FFF',
      dark: '#333',
    },
    red: '#BB0A30',
    black: '#000',
    grey1A: '#1a1a1a',
    grey33: '#333333',
    grey4C: '#4c4c4c',
    grey66: '#666',
    grey70: '#707070',
    grey80: '#808080',
    grey99: '#999',
    greyB3: '#b3b3b3',
    greyCC: '#ccc',
    greyD9: '#d9d9d9',
    greyDD: '#ddd',
    greyE5: '#e5e5e5',
    greyEF: '#efefef',
    greyF2: '#f2f2f2',
    white: '#FFF',
    whiteHover: '#0000000A',
    searchBg: '#7070701C',
    checkboxBorder: '#7070704E',
    greyLoginLine: '#70707057',
    lightPink: '#FF9394',
    pink: '#FF566E',
    errorColor: '#f44336',
    yellow: '#FFBC17',
    yellowHover: '#FFC221',
    blue: '#5584F5',
    blueHover: '#4269C6',
    darkBlue: '#262949',
    darkBlueHover: '#262F4F',
    green: '#00EDAE',
    greenHover: '#00D89E',
  },
  typography: {
    fontFamily: ['MerryWeather', 'sans-serif'].join(','),
    fontSize: 16,
  },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      md: 960,
      sm: 600,
    },
  },
});

// Let the theme object be available quickly during development
if (process.env.NODE_ENV === 'development') {
  console.log(theme.breakpoints);
}

export default theme;
