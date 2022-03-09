import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import renderRoutes from 'utils/renderRoutes';
import { column, flex, relative } from 'constants/Jss';
import Header from 'modules/Header/Header';
import { Footer } from 'modules/Footer/Footer';
import Cookies from 'js-cookie';
import Settings from 'env';

const styles = (theme) => ({
  Main: {
    display: flex,
    flexDirection: column,
    minHeight: '100vh',
  },
  mainContent: {
    width: '100%',
    flexGrow: 1,
  },
  transitionGroup: {
    position: relative,
  },
  routeSection: {
    width: '100%',
  },
});

class Main extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    tokenExpiresAt: PropTypes.number,
  };

  isLoggedIn = () => {
    const expiresAt = Cookies.get(Settings.API_TOKEN_EXPIRES_AT) || this.props.tokenExpiresAt;
    return expiresAt && new Date().getTime() > new Date(expiresAt * 1000).getTime() - 1000 * 60 * 60;
  };

  render() {
    const { classes, routes, location, history } = this.props;

    return (
      <div className={classes.Main}>
        <Header pages={routes} history={history} isLoggedIn={this.isLoggedIn} />
        {routes ? (
          <div className={classNames(classes.mainContent)}>{renderRoutes(routes, classes, location)}</div>
        ) : null}
        <Footer isLoggedIn={this.isLoggedIn} history={history} />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
