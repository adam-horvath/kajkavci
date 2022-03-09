import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

class HistoryPage extends Component {

  render() {
    const { t } = this.props;
    return (
      <div>
        <Box mb={2}>{t('history.paragraph_1')}</Box>
        <Box mb={2}>{t('history.musicians_1')}</Box>
        <Box mb={2}>{t('history.musicians_2')}</Box>
        <Box mb={2}>{t('history.paragraph_2')}</Box>
        <Box mb={2}>{t('history.paragraph_3')}</Box>
        <Box mb={2}>{t('history.paragraph_4')}</Box>
        <Box mb={2}>{t('history.paragraph_5')}</Box>
        <Box mb={2}>{t('history.paragraph_6')}</Box>
        <Box mb={2}>{t('history.paragraph_7')}</Box>
        <Box mb={2}>{t('history.paragraph_8')}</Box>
        <Box mb={8}>{t('history.paragraph_9')}</Box>
      </div>
    );
  }
}

export default withTranslation()(HistoryPage);

