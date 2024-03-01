/**
 * Rounds down a number.
 *
 * @example
 * // results in: 5
 * hbs.compile("{{floor a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest lower integer.
 * @returns {number}
 */
export default (val: number|string): number => {
  return Math.floor(Number(val));
}