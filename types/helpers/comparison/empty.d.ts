/**
 * Check if it is empty.
 * If the value is an array, returns true if there are no elements.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 * @param {any} val Character strings, arrays, objects, etc. to be checked.
 * @return {boolean} Returns true if the value is empty, false otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":[]});
 *
 * // results in: false
 * hbs.compile("{{empty val}}")({"val":["foo"]});
 *
 * // results in: false
 * hbs.compile("{{empty val}}")({"val":'Hello'});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":''});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":' '});
 */
declare const _default: (val: any) => boolean;
export default _default;
