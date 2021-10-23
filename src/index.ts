import hbs from 'handlebars';
import * as html from './helpers/html';
import * as math from './helpers/math';
import * as strings from './helpers/strings';
import * as datetime from './helpers/datetime';
import * as conditionals from './helpers/conditionals';

// Register helpers.
for (let helper of [math, html, strings, conditionals, datetime]) {
  // Register all the helper functions to Handlebars
  for (let [name, func] of Object.entries(helper))
    hbs.registerHelper(name, func);
}

export default hbs;