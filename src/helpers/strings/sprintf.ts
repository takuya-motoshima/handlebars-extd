import * as utils from '~/utils';
import {vsprintf} from 'sprintf-js';

/**
 * Returns a string produced according to the formatting string format.
 * It uses sprintf-js internally.
 * Check https://github.com/alexei/sprintf.js for more information.
 * @param {string} format Format string.
 * @param {...any} args Any number of parameters/values.
 * @return {string}
 * @example
 * // Argument swapping:
 * // results in: Hello Dolly!
 * hbs.compile("{{sprintf '%s %s!' str1 str2}}")({"str1":"Hello","str2":"Dolly"});
 *
 * // results in: foo bar 55 baz 20
 * hbs.compile("{{sprintf '%s %s %d %s %d' 'foo' 'bar' 55 'baz' '20'}}")();
 *
 * // Named arguments:
 * // results in: Hello Dolly
 * hbs.compile("{{sprintf 'Hello %(name)s' user}}")({"user":{"name":"Dolly"}});
 *
 * // results in: Hello Dolly
 * hbs.compile("{{sprintf 'Hello %(name)s' name=str}}")({"str":"Dolly"});
 */
export default (format: string, ...args: any[]): string => {
  // Normalize all the parameters before passing it to the sprintf/vsprintf function
  const params = [];
  for (let arg of args) {
    if (utils.isObject(arg) && utils.isObject(arg.hash))
      arg = arg.hash;
    params.push(arg);
  }
  return params.length > 0 ? vsprintf(format, params) : format;
}