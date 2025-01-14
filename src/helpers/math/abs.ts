/**
 * Returns an absolute value.
 * @param {number} val Number to perform absolute value operation on.
 * @return {number}
 * @example
 * // results in: 5.6
 * hbs.compile("{{abs a b}}")({"a":-5.6});
 */
export default (val: number|string): number => {
  return Math.abs(Number(val));
}