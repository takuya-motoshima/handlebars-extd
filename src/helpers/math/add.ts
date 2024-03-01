/**
 * Calculates the sum of two numbers.
 *
 * @example
 * // results in: 3
 * hbs.compile("{{add a b}}")({"a":1,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
export default (val1: number|string, val2: number|string): number => {
  return Number(val1) + Number(val2);
}