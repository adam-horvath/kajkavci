import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import { isAfter, isSameDay } from 'date-fns';

import { concertsPageStyles } from './styles';
import { Concerts } from './concerts';
import { getCroatianMonthName } from 'utils/getCroatianMonthName';

class ConcertsPage extends Component {
  getDate = (hungarianMonthAndDate) => {
    const { history } = this.props;
    const monthAndDate = hungarianMonthAndDate.split(' ');
    const month = monthAndDate[0];
    const date = monthAndDate[1];
    const language = history.location.pathname.includes('hu') ? 'hu' : 'hr';
    return language === 'hu' ? hungarianMonthAndDate : date + ' ' + getCroatianMonthName(month);
  };

  isFuture = (date) => {
    return isAfter(date, new Date()) || isSameDay(date, new Date());
  };

  render() {
    const { classes } = this.props;
    return (
      <Box mb={8} className={classes.ConcertsContainer}>
        {Object.keys(Concerts).map((year) => (
          <div key={year}>
            <Box mt={3} mb={1} className={classes.Year}>
              {year}
            </Box>
            <Box>
              {Concerts[year].map((concert, i) => (
                <Box
                  className={`${classes.Concert} ${
                    concert.isoDate && this.isFuture(new Date(concert.isoDate)) ? classes.Future : ''
                  }`}
                  key={i}
                >
                  {this.getDate(concert.date)} - {concert.location}
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    );
  }
}

export default withRouter(withTranslation()(withStyles(concertsPageStyles)(ConcertsPage)));
