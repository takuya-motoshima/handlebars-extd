
/**
 * Calculate the multiplication of the given values.
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @return {number}
 * @example
 * // results in: 10
 * hbs.compile("{{multiply a b}}")({"a":5,"b":2});
 */
export default (val1: number|string, val2: number|string): number => {
  return Number(val1) * Number(val2);
}