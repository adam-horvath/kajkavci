import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-node-fs-backend';
import * as i18nextMiddleware from 'i18next-express-middleware';
import express from 'express';
import { minify } from 'html-minifier';
import cookieParser from 'cookie-parser';
import path from 'path';
import * as dotenv from 'dotenv';
import compression from 'compression';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import proxy from 'http-proxy-middleware';

import App from 'modules/App/App';
import routes from 'routes';
import { getErrorPage } from 'assets/serverErrorPage';
import i18n from 'i18n';
import theme from 'theme';
import { DEFAULT_LANGUAGE } from 'config/i18n';
import html from './html';
import initRoutes from './initRoutes';
import Env from 'env';
import { ASSETS_PATH_ON_SERVER, PUBLIC_DIR_ON_SERVER } from 'constants/Constants';

const fs = require('fs');

const resolveApp = (relativePath) => path.resolve(fs.realpathSync(process.cwd()), relativePath);

const assetsPath = resolveApp(process.env.NODE_ENV === 'development' ? 'build/assets.json' : ASSETS_PATH_ON_SERVER);
let assets;
try {
  assets = require(assetsPath);
} catch (e) {
  try {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
  } catch (e) {
    assets = resolveApp(process.env.NODE_ENV === 'development' ? 'build/assets.json' : ASSETS_PATH_ON_SERVER);
  }
}

const server = express();
dotenv.config();

const webpackProxy = proxy(['/static'], {
  target: 'http://10.64.65.144:3001',
});

i18n
.use(Backend)
.use(i18nextMiddleware.LanguageDetector)
.init(
  {
    preload: [DEFAULT_LANGUAGE],
    backend: {
      // loadPath: `${process.env.RAZZLE_PUBLIC_DIR}/locales/{{lng}}/{{ns}}.json`,
      loadPath: `${process.env.NODE_ENV === 'development' ? process.env.RAZZLE_PUBLIC_DIR : PUBLIC_DIR_ON_SERVER}/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ['path', 'cookie'],
    },
  },
  () => {
    server
    .disable('x-powered-by')
    .disable('view cache')
    .use(i18nextMiddleware.handle(i18n))
    .use('/locales', express.static(`${process.env.RAZZLE_PUBLIC_DIR}/locales`))
    // .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(express.static(process.env.NODE_ENV === 'development' ? process.env.RAZZLE_PUBLIC_DIR : PUBLIC_DIR_ON_SERVER))
    .use(compression())
    .use((req, res, next) => {
      if (process.env.NODE_ENV === 'development' && Env.RAZZLE_REMOTE_DEBUG) {
        return webpackProxy(req, res, next);
      } else {
        return next();
      }
    })
    .use(cookieParser())
    .use(
      process.env.NODE_ENV === 'development'
        ? express.static(process.env.RAZZLE_PUBLIC_DIR)
        : express.static(path.join(__dirname, './public')),
    )
    .get('/*', async (req, res) => {
      try {
        const { matches } = await initRoutes({
          routes,
          req,
        });

        if (matches.length && matches[0].match.path === '/') {
          if (req.cookies) {
            return res.status(200).redirect(req.cookies.i18next === 'en' ? '/en' : '/hu');
          }
        }

        if (matches.length === 0) {
          return res.status(404).redirect(`${req.cookies.i18next === 'en' ? '/en' : '/hu'}/404`);
        }

        const context = {};
        const sheets = new ServerStyleSheets();
        const markup = renderToString(
          sheets.collect(
            <ThemeProvider theme={theme}>
              <I18nextProvider i18n={req.i18n}>
                <StaticRouter context={context} location={req.url}>
                  <App routes={routes} loading={true}/>
                </StaticRouter>
              </I18nextProvider>
            </ThemeProvider>,
          ),
        );

        const helmet = Helmet.renderStatic();

        if (context.url) {
          let redirectUrl = context.url;
          if (req.url.includes('app/') && context.url === '/') {
            redirectUrl = `${redirectUrl}?redirect=${Buffer.from(req.url).toString('base64')}`;
          }
          return res.redirect(redirectUrl);
        } else {
          const status = context.status || 200;

          const css = sheets.toString();
          const initialI18nStore = {};

          req.i18n.languages.forEach((language) => {
            initialI18nStore[language] = req.i18n.services.resourceStore.data[language];
          });

          const initialLanguage = req.i18n.language;

          const renderedHtml = minify(
            html({ helmet, assets, markup, css, i18n: { initialI18nStore, initialLanguage } }),
            {
              minifyJS: true,
              removeTagWhitespace: true,
              removeComments: true,
              collapseWhitespace: true,
            },
          );

          console.log(`${new Date().toLocaleString()} - [${status}] ${req.url}`);

          return res.status(status).send(renderedHtml);
        }
      } catch (error) {
        console.log(error);
        return res.status(500).send(getErrorPage());
      }
    });
  },
);

export default server;
