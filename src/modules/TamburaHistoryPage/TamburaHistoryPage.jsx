import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';

class TamburaHistoryPage extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <Box mb={2}>{t('tambura_history.paragraph_1')}</Box>
        <Box>{t('tambura_history.string_system_1')}</Box>
        <Box>{t('tambura_history.string_system_2')}</Box>
        <Box>{t('tambura_history.string_system_3')}</Box>
        <Box>{t('tambura_history.string_system_4')}</Box>
        <Box>{t('tambura_history.string_system_5')}</Box>
        <Box mb={2}>{t('tambura_history.string_system_6')}</Box>
        <Box mb={8}>{t('tambura_history.paragraph_2')}</Box>
      </div>
    );
  }
}

export default withRouter(withTranslation()(TamburaHistoryPage));
