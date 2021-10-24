import hbs from 'handlebars';
import * as comparison from './helpers/comparison';
import * as datetime from './helpers/datetime';
import * as html from './helpers/html';
import * as math from './helpers/math';
import * as strings from './helpers/strings';

// Register helpers.
for (let helper of [comparison, datetime, html, math, strings]) {
  // Register all the helper functions to Handlebars
  for (let [name, func] of Object.entries(helper))
    hbs.registerHelper(name, func);
}
export default hbs;