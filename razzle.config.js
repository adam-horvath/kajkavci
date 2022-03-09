const path = require('path');

module.exports = {
  modify: (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, './src')];
    config.node = {
      fs: 'empty',
      net: 'empty',
    };
    return config;
  },
};
