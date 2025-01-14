/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @return {boolean}
 * @example
 * // results in: true
 * hbs.compile("{{eqw a b}}")({"a":"3","b":3});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
