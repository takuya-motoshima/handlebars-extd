/**
 * Round up the value.
 * @param {number|string} val Number to be rounded to nearest greater integer.
 * @return {number}
 * @example
 * // results in: 6
 * hbs.compile("{{ceil a}}")({"a":5.6});
 */
export default (val: number|string): number => {
  return Math.ceil(Number(val));
}