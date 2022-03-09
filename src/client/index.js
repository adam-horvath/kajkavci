import React from 'react';
import { hydrate } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { useSSR } from 'react-i18next';
import history from 'utils/history';
import 'i18n';

import App from 'modules/App/App';
import theme from 'theme';
import routes from 'routes';

const initialI18nStore = window.__I18N_STORE__;
const initialLanguage = window.__INITIAL_LANGUAGE__;

delete window.__I18N_STORE__;
delete window.__INITIAL_LANGUAGE__;

const Main = () => {
  useSSR(initialI18nStore, initialLanguage);
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App routes={routes} loading={false} />
      </Router>
    </ThemeProvider>
  );
};

hydrate(<Main />, document.getElementById('root'), () => {
  const jssStyles = document.querySelector('#jss-server-side');

  // if (jssStyles) {
  //   jssStyles.parentNode.removeChild(jssStyles);
  // }
});

if (module.hot) {
  module.hot.accept();
}
