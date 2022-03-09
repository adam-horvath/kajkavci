import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from 'modules/Main/Main';
import { appStyles } from './styles';
import routes from 'routes';
import AppLoader from './AppLoader';

class App extends Component {
  state = {
    snackOpen: false,
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <AppLoader show={this.state.loading} />
        <Main routes={routes} {...this.props} />
      </div>
    );
  }
}

export default withRouter(withTranslation()(withStyles(appStyles)(App)));
