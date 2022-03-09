import React from 'react';
import { Trans } from 'react-i18next';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import { auto, center, column, flex } from 'constants/Jss';

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    height: '100vh',
    marginLeft: auto,
    marginRight: auto,
    display: flex,
    flexDirection: column,
    justifyContent: center,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <Trans i18nKey="NOT_FOUND.TITLE" />
      </Typography>
      <Typography>
        <Trans i18nKey="NOT_FOUND.DESCRIPTION" />
      </Typography>
    </div>
  );
};

export default NotFound;
