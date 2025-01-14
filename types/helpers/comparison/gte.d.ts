/**
 * Check for greater than or equals condition (a >= b).
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @return {boolean}
 * @example
 * // results in: false
 * hbs.compile("{{gte a '>=' b}}")({"a":3,"b":3});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
