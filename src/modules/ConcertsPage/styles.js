import { auto, center } from 'constants/Jss';

export const concertsPageStyles = (theme) => ({
  ConcertsContainer: {
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
  Concert: {
    fontSize: 16,
  },
});
