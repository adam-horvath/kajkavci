import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';

import { membersPageStyles } from './styles';
import Adam from 'assets/images/adam.jpg';
import Krisztina from 'assets/images/krisztina.png';
import Adrian from 'assets/images/adrian.jpg';
import Mate from 'assets/images/mate.jpg';
import Jozsi from 'assets/images/jozsi.jpg';
import { Member } from './Member';

class MembersPage extends Component {
  render() {
    const { classes, t } = this.props;
    return (
      <>
        <Box mb={8} className={classes.MembersDesktopPage}>
          <Box mb={2} className={classes.FirstRow}>
            <Member imageUrl={`url("${Adam}")`} subscript={t('member.Adam')} />
            <Member imageUrl={`url("${Krisztina}")`} subscript={t('member.Krisztina')} />
            <Member imageUrl={`url("${Adrian}")`} subscript={t('member.Adrian')} />
          </Box>
          <div className={classes.SecondRow}>
            <Member imageUrl={`url("${Mate}")`} subscript={t('member.Mate')} />
            <Member imageUrl={`url("${Jozsi}")`} subscript={t('member.Jozsi')} />
          </div>
        </Box>
      </>
    );
  }
}

export default withRouter(withTranslation()(withStyles(membersPageStyles)(MembersPage)));
