import * as utils from '../utils';
import {vsprintf} from 'sprintf-js';

/**
 * Extract a few characters from a string. Default number of characters is 50.
 *
 * @example
 * // Output: 'Just'
 * {{excerpt 'Just Wow' 4}}
 *
 * @param {string} value
 * @param {number} len
 * @returns {string}
 */
function excerpt(value: string, len: number|string) {
  len = parseInt(len as string, 10) || 50;
  if (typeof value !== 'string' || typeof len !== 'number')
    return value;
  if (value.length < len)
    return value;
  return `${value.slice(0, len)}...`;
}

/**
 * Convert a string to url friendly dash-case string removing special characters.
 *
 * @example
 * // Output: 'just-wow'
 * {{sanitize 'JuSt #Wow'}}
 *
 * @param {string} value
 * @returns {string}
 */
function sanitize(value: string): string {
  value = value.replace(/[^\w\s]/gi, '').trim();
  return value.replace(/\s+/, '-').toLowerCase();
}

/**
 * Replace \n with <br> tags.
 *
 * @example
 * // Output: 'nlToBr helper <br> is very <br> useful.'
 * {{nlToBr 'nlToBr helper \n is very \n useful.'}}
 *
 * @param {string} value
 * @returns {string}
 */
function nlToBr(value: string): string {
  return value.replace(/\r?\n|\r/g, '<br>');
}

/**
 * Capitalize each letter of a string.
 *
 * @example
 * // Output: 'Just Wow'
 * {{capitalizeEach 'just wow'}}
 *
 * @param {string} value
 * @returns {string}
 */
function capitalizeEach(value: string): string {
  if (typeof value !== 'string')
    return value;
  return value.toLowerCase().replace(/\w\S*/g, function (match) {
    return `${match.charAt(0).toUpperCase()}${match.substr(1)}`;
  });
}

/**
 * Capitalize the first letter of a string.
 *
 * @example
 * // Output: 'Just wow'
 * {{capitalizeFirst 'just wow'}}
 *
 * @param {string} value
 * @returns {string}
 */
function capitalizeFirst(value: string): string {
  if (typeof value !== 'string')
    return value;
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

/**
 * A sprintf helper to be used in the handlebars templates that supports arbitrary parameters.
 * Make sure you have the sprintf-js (https://github.com/alexei/sprintf.js) package is available
 * either as a node module or you have sprintf/vsprintf functions available in the global scope
 * from that package.
 *
 * Check https://github.com/alexei/sprintf.js for more information.
 *
 * @example
 * // Argument swapping:
 * // Output: 'Hello Dolly'
 * {{sprintf '%s %s!' 'Hello' 'Dolly' }} 
 * 
 * // Output: 'Foo Bar 55 Baz 20'
 * {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
 * 
 * // Named arguments:
 * // Output: 'Hello Dolly'
 * const user = {name: 'Dolly'};
 * {{sprintf 'Hello %(name)s' user }}
 * 
 * // Output: 'Hello Dolly'
 * {{sprintf 'Hello %(name)s' name='Dolly'}}
 *
 * @param {string} format
 * @param {...any} args
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
 * // Output: 'just wow!!!'
 * {{lowercase 'JUST WOW!!!'}}
 *
 * @param {string} value
 * @returns {string}
 */
function lowercase(value: string): string {
  return utils.isString(value) ? value.toLowerCase() : value;
}

/**
 * Changes the string to uppercase.
 *
 * @example
 * // Output: 'JUST WOW!!!'
 * {{uppercase 'just wow!!!'}}
 *
 * @param {string} value
 * @returns {string}
 */
function uppercase(value: string): string {
  return utils.isString(value) ? value.toUpperCase() : value;
}

/**
 * Get the first element of a collection/array.
 *
 * @example
 * // Output: 'David'
 * const someArray = ['David', 'Miller', 'Jones'];
 * {{first someArray}}
 *
 * @param {string[]} coll
 * @returns {string}
 */
function first(coll: string[]): string {
  if (!utils.isArray(coll) || coll.length === 0)
    return '';
  return coll[0];
}

/**
 * Get the last element of a collection/array.
 *
 * @example
 * // Output: 'Jones'
 * const someArray = ['David', 'Miller', 'Jones'];
 * {{last someArray}}
 *
 * @param {string[]} coll
 * @returns {string}
 */
function last(coll: string[]): string {
  if (!utils.isArray(coll) || coll.length === 0)
    return '';
  return coll[coll.length - 1];
}

/**
 * Concat two or more strings.
 *
 * @example
 * // Output: 'Hello world!!!'
 * {{concat 'Hello' ' world' '!!!'}}
 *
 * @param {...any} args
 * @returns {string}
 */
function concat(...args: any[]) {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  return args.join('');
}

/**
 * Join the elements of an array using a delimeter.
 *
 * @example
 * // Output: 'Hands & legs & feet'
 * const someArray = ['Hands', 'legs', 'feet'];
 * {{join someArray ' & '}}
 *
 * @param  {array} coll
 * @param  {string} delim
 * @returns {string|boolean}
 */
function join(coll: string[], delim: string): string|boolean {
  if (!delim || utils.isObject(delim))
    delim = '';
  if (!utils.isArray(coll))
    return false;
  return coll.join(delim);
}

export {excerpt, sanitize, nlToBr, capitalizeEach, capitalizeFirst, sprintf, lowercase, uppercase, first, last, concat, join};