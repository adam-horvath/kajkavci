import { auto, bold, center, flex } from 'constants/Jss';

export const homePageStyles = (theme) => ({
  SectionTitleContainer: {
    fontSize: 28,
    fontWeight: bold,
    '& .SectionTitle': {
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    }
  },
  News: {

  },
  ImageContainer: {
    display: flex,
    justifyContent: center,
  },
  ImageWrapper: {
    maxWidth: 500,
    '& img': {
      width: '100%',
      height: auto,
    }
  },
});
