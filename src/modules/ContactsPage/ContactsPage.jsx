import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';

import { contactsPageStyles } from './styles';
import map from 'assets/images/map.png';

class ContactsPage extends Component {
  onMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Polg%C3%A1rmesteri+Hivatal+Fert%C5%91homok/@47.6208561,16.7628024,17z/data=!3m1!4b1!4m5!3m4!1s0x476c198c7cbda059:0x96151200c29155ef!8m2!3d47.6208525!4d16.7649911',
      '_blank'
    );
  };

  render() {
    const { classes, t } = this.props;
    return (
      <Grid container className={classes.GridContainer}>
        <Grid item md={6} sm={12} xs={12}>
          <div className={classes.Map} style={{ backgroundImage: `url(${map})` }} onClick={this.onMapClick} />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.InfoContainer}>
          <Box mb={2} className={classes.Name}>
            {t('contact.name')}
          </Box>
          <Box mb={2}>{t('contact.address')}</Box>
          <Box>{t('contact.phone')}</Box>
          <Box>{t('contact.fax')}</Box>
          <Box>{t('contact.email')}</Box>
          <Box>{t('contact.bank_account')}</Box>
          <Box>{t('contact.tax_number')}</Box>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withTranslation()(withStyles(contactsPageStyles)(ContactsPage)));
