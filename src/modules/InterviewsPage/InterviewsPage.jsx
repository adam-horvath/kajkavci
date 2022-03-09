import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { interviewsPageStyles } from './styles';

class InterviewsPage extends Component {
  render() {
    const { t, classes } = this.props;
    return (
      <div className={classes.InterviewContainer}>
        <Box mb={4}>
          <a className={classes.Link} href={t('interviews.ocsi.url')}>
            {t('interviews.ocsi.title')}
          </a>
          {`, ${t('interviews.ocsi.media')} (${t('interviews.ocsi.year')})`}
        </Box>
        <Box mb={4}>
          <a className={classes.Link} href={t('interviews.adam.url')}>
            {t('interviews.adam.title')}
          </a>
          {`, ${t('interviews.adam.media')} (${t('interviews.adam.year')})`}
        </Box>
        <Box mb={8}>
          <a className={classes.Link} href={t('interviews.opo.url')}>
            {t('interviews.opo.title')}
          </a>
          {`, ${t('interviews.opo.media')} (${t('interviews.opo.year')})`}
        </Box>
      </div>
    );
  }
}

export default withRouter(withTranslation()(withStyles(interviewsPageStyles)(InterviewsPage)));
