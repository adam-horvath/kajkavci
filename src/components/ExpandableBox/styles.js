import makeStyles from '@material-ui/core/styles/makeStyles';
import { absolute, center, flex, hidden, none, pointer, relative } from 'constants/Jss';

export const useExpandableBoyStyles = makeStyles((theme) => ({
  Wrapper: {
    position: relative,
  },
  Text: {
    fontSize: 18,
    color: theme.palette.grey70,
    position: relative,
    overflowY: hidden,
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'max-height, padding',
    transitionDuration: '300ms',
    '&.Expanded': {
      paddingBottom: theme.spacing(4),
    },
  },
  ShadowBox: {
    position: absolute,
    left: 0,
    bottom: 0,
    width: '100%',
    height: 56,
    background: 'transparent linear-gradient(0deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box',
    '&.Expanded': {
      display: none,
    },
  },
  Expander: {
    backgroundColor: theme.palette.white,
    width: theme.mixins.pagination.size,
    height: theme.mixins.pagination.size,
    display: flex,
    alignItems: center,
    justifyContent: center,
    position: absolute,
    borderRadius: '50%',
    left: `calc(50% - ${theme.mixins.pagination.size / 2}px)`,
    bottom: `calc(${-theme.mixins.pagination.size / 2}px)`,
    cursor: pointer,
    boxShadow: '0px 0px 14px #00000029',
    '& svg': {
      fill: none,
      stroke: theme.palette.black,
      strokeWidth: 2,
      width: 20.617,
      height: 11.309,
    },
    '&.Expanded svg': {
      transform: 'rotate(180deg)',
    },
  },
}));
