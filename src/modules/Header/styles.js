import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  absolute,
  auto,
  center,
  fixed,
  flex,
  flexEnd,
  inherit,
  none,
  normal,
  nowrap,
  pointer,
  relative,
  transparent,
  underline,
  uppercase,
  inlineBlock,
} from 'constants/Jss';

export const useDesktopHeaderStyles = makeStyles((theme) => ({
  Header: {
    display: flex,
    height: theme.mixins.header.height,
    borderColor: theme.palette.blue,
    alignItems: center,
    boxShadow: '0 3px 6px #00000029',
    [theme.breakpoints.down('sm')]: {
      display: none,
    },
  },
  LogoContainer: {
    minWidth: 70,
    display: flex,
    justifyContent: center,
  },
  Logo: {
    width: '50px !important',
    height: '50px !important',
    cursor: pointer,
  },
  MenuContainer: {
    display: flex,
    flexGrow: 1,
    alignItems: center,
    justifyContent: flexEnd,
    height: theme.mixins.header.contentSize,
    paddingLeft: 0,
    paddingRight: 0,
  },
  List: {
    padding: 0,
    display: flex,
  },
  Button: {
    borderRadius: 20,
    borderColor: theme.palette.darkBlue,
    '&:hover': {
      borderColor: theme.palette.darkBlueHover,
    },
    '& a': {
      textDecoration: none,
    },
  },
}));

export const useMobileHeaderStyles = makeStyles((theme) => ({
  MobileHeader: {
    [theme.breakpoints.up('md')]: {
      display: none,
    },
    display: flex,
    height: theme.mixins.mobileHeader.height,
    backgroundColor: theme.palette.darkBlue,
    alignItems: center,
    padding: theme.spacing(2),
    position: fixed,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  MobileLogoContainer: {
    border: 0,
    display: flex,
    justifyContent: center,
  },
  MobileLogo: {
    cursor: pointer,
    [theme.breakpoints.down('sm')]: {
      display: none,
    },
  },
  MobileActionContainer: {
    display: flex,
    justifyContent: flexEnd,
    flexGrow: 1,
    color: theme.palette.white,
  },
  MobileMenuButton: {
    color: inherit,
    width: 25,
    height: 25,
    cursor: pointer,
  },
  MobileSearchButton: {
    width: 25,
    height: 25,
    cursor: pointer,
  },
  DrawerContainer: {
    backgroundColor: theme.palette.darkBlue,
    boxShadow: none,
    '&:focus': {
      outline: none,
    },
    '& ul': {
      padding: 0,
    },
  },
  MobileAvatarContainer: {
    display: flex,
    justifyContent: center,
    backgroundColor: theme.palette.darkBlue,
  },
  MobileAvatar: {
    width: 90,
    height: 90,
  },
  MobileBandButton: {
    color: theme.palette.white,
    padding: `${theme.spacing(2)}px !important`,
    '&:hover': {
      color: theme.palette.white,
      backgroundColor: theme.palette.darkBlueHover,
    },
  },
  MobileDivider: {
    backgroundColor: theme.palette.white,
  },
  Collapse: {
    padding: 0,
  },
  MobileAuthContainer: {
    display: flex,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  Button: {
    borderRadius: 20,
    '& a': {
      textDecoration: none,
    },
  },
  MobileLoginButton: {
    backgroundColor: theme.palette.white,
    color: theme.palette.grey70,
    '&:hover': {
      backgroundColor: theme.palette.greyEF,
      color: theme.palette.grey70,
    },
  },
  MobileRegisterButton: {
    borderColor: theme.palette.white,
    backgroundColor: theme.palette.darkBlue,
    color: theme.palette.white,
    '&:hover': {
      borderColor: theme.palette.white,
      backgroundColor: theme.palette.darkBlueHover,
    },
  },
  LanguageSelectContainer: {},
}));

export const useDropdownMenuStyles = makeStyles((theme) => ({
  DropdownButton: {
    '&:hover': {
      color: theme.palette.blueHover,
    },
    '& span.MuiButton-label': {
      whiteSpace: nowrap,
      color: theme.palette.blue,
      textTransform: uppercase,
      fontSize: 14,
    },
  },
  MenuListContainer: {
    top: '16px !important',
    zIndex: 10,
  },
  MenuList: {
    maxWidth: 244,
    padding: 0,
  },
  Avatar: {
    cursor: pointer,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export const useLoginDialogStyles = makeStyles((theme) => ({
  FormBox: {
    maxWidth: 350,
  },
  LoginButton: {
    borderRadius: 20,
    backgroundColor: theme.palette.blue,
    fontWeight: normal,
    '&:hover': {
      backgroundColor: theme.palette.blueHover,
    },
  },
  LoginButtonContainer: {
    display: flex,
    justifyContent: center,
  },
  Link: {
    color: theme.palette.blue,
    '&:hover': {
      color: theme.palette.blueHover,
    },
  },
  NewPasswordBox: {
    width: 380,
    marginLeft: auto,
    marginRight: auto,
  },
  NewPasswordLink: {
    display: flex,
    justifyContent: center,
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.greyLoginLine}`,
  },
  RegisterBox: {
    display: flex,
    justifyContent: center,
  },
}));

export const useMenuItemStyles = makeStyles((theme) => ({
  MenuItem: {
    color: theme.palette.blue,
    whiteSpace: nowrap,
    '&:hover': {
      color: theme.palette.blueHover,
    },
    '&.Mobile': {
      color: theme.palette.white,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '&:hover': {
        color: theme.palette.white,
        backgroundColor: theme.palette.blueHover,
      },
    },
  },
  SubmenuItem: {
    color: theme.palette.grey70,
    '&:hover': {
      color: theme.palette.grey70,
      backgroundColor: theme.palette.whiteHover,
    },
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    '&:not(:last-child) > div': {
      borderBottom: `2px solid ${theme.palette.whiteHover}`,
    },
    '&.Mobile': {
      color: theme.palette.white,
      paddingTop: 0,
      paddingBottom: 0,
      '&:hover': {
        color: theme.palette.white,
      },
      '&:not(:last-child) > div': {
        border: 0,
      },
    },
  },
  SubmenuItemText: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  Icon: {
    width: 35,
    height: 57,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 8,
    borderBottom: `2px solid ${theme.palette.whiteHover}`,
  },
}));

export const useRegisterDialogStyles = makeStyles((theme) => ({
  FormBox: {
    maxWidth: 350,
  },
  RegisterButton: {
    borderRadius: 20,
    backgroundColor: theme.palette.green,
    fontWeight: normal,
    '&:hover': {
      backgroundColor: theme.palette.greenHover,
    },
  },
  RegisterButtonContainer: {
    display: flex,
    justifyContent: center,
  },
  Title: {
    borderColor: theme.palette.green,
  },
  Checkbox: {
    marginRight: theme.spacing(3),
    '& svg': {
      fill: theme.palette.checkboxBorder,
    },
    '&:hover': {
      backgroundColor: theme.palette.whiteHover,
    },
    '&.Mui-checked': {
      color: theme.palette.whiteHover,
      '&:hover': {
        backgroundColor: theme.palette.whiteHover,
      },
    },
  },
  CheckboxText: {
    fontSize: 12,
  },
  Link: {
    textDecoration: underline,
    cursor: pointer,
  },
  ErrorText: {
    color: theme.palette.errorColor,
    fontSize: '0.8571428571428571rem',
    marginTop: '8px 14px 0',
    lineHeight: '1em',
  },
}));

export const useSearchStyles = makeStyles((theme) => ({
  Search: {
    display: flex,
    borderRadius: 22,
    '&:focus-within': {
      backgroundColor: theme.palette.searchBg,
    },
  },
  MobileSearch: {
    borderRadius: 0,
    backgroundColor: theme.palette.whiteHover,
    '&:focus-within': {
      backgroundColor: theme.palette.whiteHover,
    },
  },
  SearchWithBg: {
    backgroundColor: theme.palette.searchBg,
  },
  Form: {
    height: theme.mixins.header.contentSize,
    position: relative,
  },
  MobileForm: {
    width: '100%',
    height: theme.spacing(7),
    display: flex,
    alignItems: center,
  },
  SearchIconContainer: {
    cursor: pointer,
    width: theme.mixins.header.contentSize,
    height: theme.mixins.header.contentSize,
    backgroundColor: theme.palette.darkBlue,
    '&:hover': {
      backgroundColor: theme.palette.darkBlueHover,
    },
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  MobileSearchIconContainer: {
    backgroundColor: transparent,
    '&:hover': {
      backgroundColor: transparent,
    },
    marginLeft: theme.spacing(1),
  },
  SearchField: {
    fontSize: 16,
    color: theme.palette.grey70,
  },
  MobileSearchField: {
    color: theme.palette.white,
    flexGrow: 1,
  },
  InputField: {
    paddingRight: theme.spacing(5),
    minWidth: 235,
  },
  CloseSearch: {
    position: absolute,
    top: 14,
    right: 14,
    width: 16,
    height: 16,
    cursor: pointer,
    color: theme.palette.grey70,
  },
  MobileCloseSearch: {
    width: 18,
    height: 18,
    top: 19,
    color: theme.palette.white,
  },
  Hidden: {
    display: none,
  },
}));

export const useHamburgerStyles = makeStyles((theme) => ({
  Container: {
    display: inlineBlock,
    cursor: pointer,
    marginTop: 4,
    marginRight: 8,
  },
  Bar: {
    width: 35,
    height: 5,
    backgroundColor: theme.palette.white,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 0,
    marginRight: 0,
    transition: '0.4s',
  },
  Bar1: {
    '-webkit-transform': 'rotate(-45deg) translate(-8px, 7px)',
    transform: 'rotate(-45deg) translate(-8px, 7px)',
  },
  Bar2: {
    opacity: 0,
  },
  Bar3: {
    '-webkit-transform': 'rotate(45deg) translate(-8px, -8px)',
    transform: 'rotate(45deg) translate(-9px, -7px)',
  },
}));
