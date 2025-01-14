/**
 * Check for less than or equals condition (a <= b).
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @return {boolean}
 * @example
 * // results in: false
 * hbs.compile("{{lte a '<=' b}}")({"a":2,"b":3});
 */
export default (val1: any, val2: any): boolean => {
  return val1 <= val2;
}