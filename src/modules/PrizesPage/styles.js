import { auto, block, center, flex } from 'constants/Jss';

export const prizesPageStyles = (theme) => ({
  PrizesContainer: {
    marginLeft: auto,
    marginRight: auto,
    textAlign: center,
  },
  Year: {
    fontSize: 28,
    color: theme.palette.blue,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    }
  },
  Prize: {
    fontSize: 16,
  },
  PrizeImageContainer: {
    display: flex,
    alignItems: center,
    justifyContent: center,
    [theme.breakpoints.down('sm')]: {
      display: block,
    },
  },
  PrizeImage: {
    '&:not(:last-child)': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        marginBottom: theme.spacing(2),
      },
    },
  },
});
