import common from './rollup.common.config.js';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

common.plugins.unshift(
  alias({
    entries: {
      handlebars: 'handlebars/dist/handlebars.js',
      'sprintf-js': 'sprintf-js/dist/sprintf.min.js'
    }
  })
);
common.output = [
  {
    format: 'esm',
    file: pkg.module
  },
  {
    format: 'umd',
    file: pkg.browser,
    name: pkg.name
      .replace(/^.*\/|\.js$/g, '')
      .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
  }
];
export default  common;