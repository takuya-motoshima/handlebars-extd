/**
 * Split a string into an array by the specified characters.
 * @param {string} val The value to split for.
 * @param {string} separator Separator. Default is a comma (",").
 * @return {string[]} An Array of strings, split at each point where the separator occurs in the given string. The default is a comma.
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
 */
declare const _default: (val: string, separator: string) => string[];
export default _default;
