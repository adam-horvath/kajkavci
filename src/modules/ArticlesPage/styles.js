import makeStyles from '@material-ui/core/styles/makeStyles';

import { center, flex, none } from 'constants/Jss';

export const articlesPageStyles = (theme) => ({
  ArticlesContainer: {
    width: '100%',
  },
  ArticleBox: {
    textAlign: center,
  },
  ArticleLink: {
    textDecoration: none,
    color: theme.palette.blue,
    '&:hover': {
      color: theme.palette.blueHover,
    },
  },
});

export const useArticleDialogStyles = makeStyles((theme) => ({
  ArticleImageWrapper: {
    width: '100%',
    display: flex,
    justifyContent: center,
  },
  ArticleImage: {},
}));
