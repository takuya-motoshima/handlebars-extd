/**
 * Round up the value.
 *
 * @example
 * // results in: 6
 * hbs.compile("{{ceil a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest greater integer.
 * @returns {number}
 */
export default (val: number|string): number => {
  return Math.ceil(Number(val));
}