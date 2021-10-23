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
declare function excerpt(value: string, len: number | string): string;
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
declare function sanitize(value: string): string;
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
declare function nlToBr(value: string): string;
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
declare function capitalizeEach(value: string): string;
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
declare function capitalizeFirst(value: string): string;
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
declare function sprintf(format: string, ...args: any[]): string;
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
declare function lowercase(value: string): string;
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
declare function uppercase(value: string): string;
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
declare function first(coll: string[]): string;
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
declare function last(coll: string[]): string;
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
declare function concat(...args: any[]): string;
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
declare function join(coll: string[], delim: string): string | boolean;
export { excerpt, sanitize, nlToBr, capitalizeEach, capitalizeFirst, sprintf, lowercase, uppercase, first, last, concat, join };
