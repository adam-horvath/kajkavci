import { auto, none } from 'constants/Jss';

export const interviewsPageStyles = (theme) => ({
  InterviewContainer: {
    marginLeft: auto,
    marginRight: auto,
  },
  Link: {
    color: theme.palette.blue,
    '&:hover': {
      color: theme.palette.blueHover,
    },
    textDecoration: none,
  },
});
