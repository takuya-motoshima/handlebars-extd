/**
 * Returns the boolean OR of two or more parameters passed i.e it is true if any of the parameters is true.
 * @param {...any} args Any number of boolean parameters.
 * @return {boolean}
 * @example
 * // results in: true
 * hbs.compile("{{or a b}}")({"a":true,"b":false});
 *
 * // results in: false
 * hbs.compile("{{or a b}}")({"a":false,"b":false});
 */
declare const _default: (...args: any[]) => boolean;
export default _default;
