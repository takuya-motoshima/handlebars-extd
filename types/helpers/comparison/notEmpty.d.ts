/**
 * Check that it is not empty.
 * If the value is an array, returns true if there is an element.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 * @param {any} value Character strings, arrays, objects, etc. to be checked.
 * @return {boolean} Returns true if the value is not empty, false otherwise.
 * @example
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":[]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":["foo"]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":'Hello'});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":''});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":' '});
 */
declare const _default: (val: any) => boolean;
export default _default;
