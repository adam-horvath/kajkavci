import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import withStyles from '@material-ui/core/styles/withStyles';

import nagrada from 'assets/prizes/drzavna_nagrada.jpg';
import { homePageStyles } from './styles';

class HomePage extends Component {
  render() {
    const { t, classes } = this.props;
    return (
      <div>
        <Box mb={8}>
          <Box mb={4} className={classes.SectionTitleContainer}>
            <Box className="SectionTitle">{t('home.prize')}</Box>
            <div className="TitleBorder" />
          </Box>
          <Box mb={4} className={classes.News}>
            {t('home.news.prize_text')}
          </Box>
          <Box className={classes.ImageContainer}>
            <div className={classes.ImageWrapper}>
              <img src={nagrada} />
            </div>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withRouter(withTranslation()(withStyles(homePageStyles)(HomePage)));
