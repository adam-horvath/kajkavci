import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { prizesPageStyles } from './styles';
import { Prizes } from './prizes';
import { getCroatianMonthName } from 'utils/getCroatianMonthName';
import Image from 'components/Image/Image';

class PrizesPage extends Component {
  getDate = (hungarianMonthAndDate) => {
    const { history } = this.props;
    const monthAndDate = hungarianMonthAndDate.split(' ');
    const month = monthAndDate[0];
    const date = monthAndDate[1];
    const language = history.location.pathname.includes('hu') ? 'hu' : 'hr';
    return language === 'hu' ? hungarianMonthAndDate : date + ' ' + getCroatianMonthName(month);
  };

  render() {
    const { classes, t } = this.props;
    return (
      <Box mb={8} className={classes.PrizesContainer}>
        {Object.keys(Prizes).map((year) => (
          <div key={year}>
            <Box mt={5} mb={3} className={classes.Year}>
              {year}
            </Box>
            <Box>
              {Prizes[year].map((prize, i) => (
                <Box className={classes.Prize} key={i}>
                  {prize.images && prize.images.length ? (
                    <Box className={classes.PrizeImageContainer}>
                      {prize.images.map((image, i) => (
                        <Box className={classes.PrizeImage} key={i}>
                          <Image src={image} local />
                        </Box>
                      ))}
                    </Box>
                  ) : null}
                  <Box mt={3} mb={3}>
                    {`${this.getDate(prize.date)}, ${prize.location}, ${t(prize.titleKey)}`}
                  </Box>
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    );
  }
}

export default withRouter(withTranslation()(withStyles(prizesPageStyles)(PrizesPage)));
