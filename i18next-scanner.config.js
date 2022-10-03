const fs = require('fs');
const path = require('path');
const typescript = require('typescript');
const tsconfig = require('./tsconfig');
const { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } = require('./src/supported-languages.json');

const config = {
  input: ['src/**/*.{ts,tsx}'],
  output: './public',
  options: {
    sort: true,
    removeUnusedKeys: true,
    func: {
      extensions: [],
      list: ['extract', 't', 'props.t', 'i18n.t'],
    },
    trans: {
      extensions: [],
    },
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'locales/{{lng}}/{{ns}}.json',
    },
    lngs: SUPPORTED_LANGUAGES,
    defaultLng: DEFAULT_LANGUAGE,
  },
  transform(file, enc, done) {
    const content = fs.readFileSync(file.path, enc);
    const { base, ext } = path.parse(file.path);

    if (['.ts', '.tsx'].includes(ext) && !base.includes('.d.ts')) {
      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: tsconfig.compilerOptions,
        fileName: path.basename(file.path),
      });

      this.parser.parseTransFromString(outputText);
      this.parser.parseFuncFromString(outputText);
    }

    done();
  },
};

module.exports = config;
