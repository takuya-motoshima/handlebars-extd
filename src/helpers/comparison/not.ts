/**
 * Logical NOT of any expression.
 * @param {any} expression Any expression.
 * @return {boolean}
 * @example
 * // results in: false
 * hbs.compile("{{not true}}")();
 *
 * // results in: true
 * hbs.compile("{{not false}}")();
 */
export default (expression: any): boolean => {
  return !expression;
}