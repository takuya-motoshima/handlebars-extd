/**
 * Returns the boolean OR of two or more parameters passed i.e it is true if any of the parameters is true.
 *
 * @example
 * // results in: true
 * hbs.compile("{{or a b}}")({"a":true,"b":false});
 *
 * // results in: false
 * hbs.compile("{{or a b}}")({"a":false,"b":false});
 *
 * @param {...any} args Any number of boolean parameters.
 * @returns {boolean}
 */
declare const _default: (...args: any[]) => boolean;
export default _default;
