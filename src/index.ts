import hbs from 'handlebars';
import * as array from '~/helpers/array';
import * as comparison from '~/helpers/comparison';
import * as date from './helpers/date';
import * as html from './helpers/html';
import * as math from './helpers/math';
import * as strings from './helpers/strings';
import * as number from './helpers/number';

// Register helpers.
for (let helper of [array, comparison, date, html, math, strings, number]) {
  // Register all the helper functions to Handlebars
  for (let [name, func] of Object.entries(helper))
    hbs.registerHelper(name, func);
}
export default hbs;