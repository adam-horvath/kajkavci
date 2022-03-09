import http from 'http';

const { env } = require('process');
let app = require('./server').default;

export const port = () =>
  parseInt(env.RAZZLE_PORT || env.PORT || process.env.RAZZLE_PORT || process.env.PORT || 8080, 10);

let currentApp = app;
const server = http.createServer(app);

server.listen(port(), (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`🚀 Started on port ${port()}`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
