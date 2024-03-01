/**
 * Compute the division of the given values.
 *
 * @example
 * // results in: 5
 * hbs.compile("{{divide a b}}")({"a":10,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
export default (val1: number|string, val2: number|string): number => {
  return Number(val1) / Number(val2);
}