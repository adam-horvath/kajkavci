import makeStyles from '@material-ui/core/styles/makeStyles';
import { auto, block, center, cover, flex, noRepeat, spaceBetween, spaceEvenly } from 'constants/Jss';

export const membersPageStyles = (theme) => ({
  MembersDesktopPage: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    FirstRow: {
      display: flex,
      justifyContent: spaceBetween,
    },
    SecondRow: {
      display: flex,
      justifyContent: spaceEvenly,
    },
  },
  [theme.breakpoints.down('sm')]: {
    FirstRow: {
      display: block,
    },
    SecondRow: {
      display: block,
    }
  },
});

export const useMemberStyles = makeStyles((theme) => ({
  Image: {
    width: 250,
    height: 333,
    backgroundPosition: center,
    backgroundSize: cover,
    backgroundRepeat: noRepeat,
    marginLeft: auto,
    marginRight: auto,
  },
  Subscript: {
    textAlign: center,
    fontSize: 18,
    lineHeight: '21px',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));
