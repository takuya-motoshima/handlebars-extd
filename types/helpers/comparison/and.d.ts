/**
 * Returns the boolean AND of two or more parameters passed i.e it is true iff all the parameters are true.
 * @param {...any} args Any number of boolean parameters.
 * @return {boolean}
 * @example
 * // results in: true
 * hbs.compile("{{and a b}}")({"a":true,"b":true});
 *
 * // results in: false
 * hbs.compile("{{and a b}}")({"a":false,"b":true});
*/
declare const _default: (...args: any[]) => boolean;
export default _default;
