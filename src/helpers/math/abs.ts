/**
 * Returns an absolute value.
 *
 * @example
 * // results in: 5.6
 * hbs.compile("{{abs a b}}")({"a":-5.6});
 *
 * @param {number} val Number to perform absolute value operation on.
 * @returns {number}
 */
export default (val: number|string): number => {
  return Math.abs(Number(val));
}