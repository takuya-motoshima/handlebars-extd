/**
 * Determine whether or not two values are not equal (!=) weak checking.
 * @param {any} val1
 * @param {any} val2
 * @return {boolean}
 * @example
 * // results in: false
 * hbs.compile("{{neqw a b}}")({"a":"3","b":3});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
