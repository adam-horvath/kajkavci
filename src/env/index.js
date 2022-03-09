import development from './development';
import staging from './staging';
import production from './production';
import general from './general';

const ENV = process.env.RAZZLE_ENV || 'development';

const ENV_CONSTANTS = {
  development,
  staging,
  production,
};

export default {
  ...general,
  ...ENV_CONSTANTS[ENV],
};

