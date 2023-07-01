/**
 * Extract a portion of a string.
 *
 * @example
 * // results in: Just
 * hbs.compile("{{slice str 0 4}}")({"str":"Just Wow"});
 *
 * // results in: Wow
 * hbs.compile("{{slice str 5}}")({"str":"Just Wow"});
 *
 * // results in:  Wow
 * hbs.compile("{{slice str -4}}")({"str":"Just Wow"});
 *
 * @param {string} val Target string.
 * @param {number} beginIdx The zero-based index at which to begin extraction.
 * @param {number} endIdx The zero-based index before which to end extraction. The character at this index will not be included.
 * @returns {string}
 */
declare function slice(val: string, beginIdx: number, endIdx?: number): string;
/**
 * Replace \n with <br> tags.
 *
 * @example
 * // results in: It's<br>just<br>now
 * hbs.compile("{{{nltobr str}}}")({"str":"It's\njust\nnow"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
declare function nltobr(val: string): string;
/**
 * Returns a string produced according to the formatting string format.
 * It uses sprintf-js internally.
 * Check https://github.com/alexei/sprintf.js for more information.
 *
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
 *
 * @param {string} format Format string.
 * @param {...any} args Any number of parameters/values.
 * @returns {string}
 */
declare function sprintf(format: string, ...args: any[]): string;
/**
 * Changes the string to lowercase.
 *
 * @example
 * // results in: just wow
 * hbs.compile("{{lowercase str}}")({"str":"JUST WOW"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
declare function lowercase(val: string): string;
/**
 * Changes the string to uppercase.
 *
 * @example
 * // results in: JUST WOW
 * hbs.compile("{{uppercase str}}")({"str":"just wow"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
declare function uppercase(val: string): string;
/**
 * Concat two or more strings.
 *
 * @example
 * // results in: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 *
 * @param {...string} args Any number of string arguments.
 * @returns {string}
 */
declare function concat(...args: string[]): string;
/**
 * Join the elements of an array using a delimeter.
 *
 * @example
 * // results in: Hands & legs & feet
 * hbs.compile("{{{join coll ' & '}}}")({"coll":["Hands","legs","feet"]});
 *
 * @param {string[]} coll An array of elements to be joined.
 * @param {string} delim A delimiter that joins array elements.
 * @returns {string|boolean}
 */
declare function join(coll: string[], delim: string): string | boolean;
/**
 * Split string by the given character.
 *
 * @example
 * // results in: ['a', 'b', 'c']
 * hbs.compile("{{split list}}")({"list":"a,b,c"});
 *
 * // results in: <ul>
 * //           <li>a</li>
 * //           <li>b</li>
 * //           <li>c</li>
 * //         </ul>
 * hbs.compile(`<ul>
 *               {{#each (split list ',')}}
 *                 <li>{{this}}</li>
 *               {{/each}}
 *             </ul>`)({"list":"a,b,c"});
 *
 * @param {string} val The value to split for.
 * @param {string} separator A character that delimits the substrings in this string. Default is a comma.
 * @return {string[]} An Array of strings, split at each point where the separator occurs in the given string. The default is a comma.
 */
declare function split(val: string, separator: string): string[];
export { slice, nltobr, sprintf, lowercase, uppercase, concat, join, split };
