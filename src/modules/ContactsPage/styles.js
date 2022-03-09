import { center, cover, noRepeat, pointer } from 'constants/Jss';

export const contactsPageStyles = (theme) => ({
  GridContainer: {
    width: '100%',
  },
  Map: {
    backgroundRepeat: noRepeat,
    backgroundSize: cover,
    backgroundPosition: center,
    cursor: pointer,
    width: '100%',
    height: 542,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
      height: 271,
    },
  },
  InfoContainer: {
    fontSize: 18,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  Name: {
    fontSize: 28,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
});
