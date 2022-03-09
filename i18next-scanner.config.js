const { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } = require('./src/config/i18n');

const config = {
  input: ['src/**/*.{js,jsx}'],
  output: './public',
  options: {
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ['extract', 't', 'props.t', 'i18n.t'],
    },
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'locales/{{lng}}/{{ns}}.json',
    },
    lngs: SUPPORTED_LANGUAGES,
    defaultLng: DEFAULT_LANGUAGE,
  },
};

module.exports = config;
