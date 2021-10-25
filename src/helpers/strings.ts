import * as utils from '../utils';
import {vsprintf} from 'sprintf-js';

/**
 * Extract a portion of a string.
 *
 * @example
 * // Output: Just
 * hbs.compile("{{slice str 0 4}}")({"str":"Just Wow"});
 * 
 * // Output: Wow
 * hbs.compile("{{slice str 5}}")({"str":"Just Wow"});
 * 
 * // Output:  Wow
 * hbs.compile("{{slice str -4}}")({"str":"Just Wow"});
 *
 * @param {string} val Target string.
 * @param {number} beginIdx The zero-based index at which to begin extraction.
 * @param {number} endIdx The zero-based index before which to end extraction. The character at this index will not be included.
 * @returns {string}
 */
function slice(val: string, beginIdx: number, endIdx?: number) {
  if (typeof val !== 'string' || typeof beginIdx !== 'number')
    return val;
  if (val.length < beginIdx)
    return val;
  if (typeof endIdx !== 'number')
    return val.slice(beginIdx);
  return val.slice(beginIdx, endIdx as number);
}

/**
 * Replace \n with <br> tags.
 *
 * @example
 * // Output: It's<br>just<br>now
 * hbs.compile("{{{nltobr str}}}")({"str":"It's\njust\nnow"});
 * 
 * @param {string} val Target string.
 * @returns {string}
 */
function nltobr(val: string): string {
  return val.replace(/\r?\n|\r/g, '<br>');
}

/**
 * Returns a string produced according to the formatting string format.
 * It uses sprintf-js internally.
 * Check https://github.com/alexei/sprintf.js for more information.
 *
 * @example
 * // Argument swapping:
 * // Output: Hello Dolly!
 * hbs.compile("{{sprintf '%s %s!' str1 str2}}")({"str1":"Hello","str2":"Dolly"});
 * 
 * // Output: foo bar 55 baz 20
 * hbs.compile("{{sprintf '%s %s %d %s %d' 'foo' 'bar' 55 'baz' '20'}}")();
 * 
 * // Named arguments:
 * // Output: Hello Dolly
 * hbs.compile("{{sprintf 'Hello %(name)s' user}}")({"user":{"name":"Dolly"}});
 * 
 * // Output: Hello Dolly
 * hbs.compile("{{sprintf 'Hello %(name)s' name=str}}")({"str":"Dolly"});
 *
 * @param {string} format Format string.
 * @param {...any} args Any number of parameters/values.
 * @returns {string}
 */
function sprintf(format: string, ...args: any[]): string {
  // Normalize all the parameters before passing it to the sprintf/vsprintf function
  const params = [];
  for (let arg of args) {
    if (utils.isObject(arg) && utils.isObject(arg.hash))
      arg = arg.hash;
    params.push(arg);
  }
  return params.length > 0 ? vsprintf(format, params) : format;
}

/**
 * Changes the string to lowercase.
 *
 * @example
 * // Output: just wow
 * hbs.compile("{{lowercase str}}")({"str":"JUST WOW"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
function lowercase(val: string): string {
  return utils.isString(val) ? val.toLowerCase() : val;
}

/**
 * Changes the string to uppercase.
 *
 * @example
 * // Output: JUST WOW
 * hbs.compile("{{uppercase str}}")({"str":"just wow"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
function uppercase(val: string): string {
  return utils.isString(val) ? val.toUpperCase() : val;
}

/**
 * Concat two or more strings.
 *
 * @example
 * // Output: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 *
 * @param {...string} args Any number of string arguments.
 * @returns {string}
 */
function concat(...args: string[]) {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  return args.join('');
}

/**
 * Join the elements of an array using a delimeter.
 *
 * @example
 * // Output: Hands & legs & feet
 * hbs.compile("{{{join coll ' & '}}}")({"coll":["Hands","legs","feet"]});
 * 
 * @param {string[]} coll An array of elements to be joined.
 * @param {string} delim A delimiter that joins array elements.
 * @returns {string|boolean}
 */
function join(coll: string[], delim: string): string|boolean {
  if (!delim || utils.isObject(delim))
    delim = '';
  if (!utils.isArray(coll))
    return false;
  return coll.join(delim);
}

export {slice, nltobr, sprintf, lowercase, uppercase, concat, join};