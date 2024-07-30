import common from './rollup.common.config.js';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

common.plugins.unshift(
  alias({
    entries: {
      handlebars: 'handlebars/dist/cjs/handlebars.js',
      'sprintf-js': 'sprintf-js/dist/sprintf.min.js'
    }
  })
);
common.output = [
  {
    format: 'cjs',
    file: pkg.main
  }
];
export default  common;