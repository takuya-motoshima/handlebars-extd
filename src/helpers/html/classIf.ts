/**
 * Set the CSS classes if the condition is true.
 * @param {boolean} expression Condition to be checked.
 * @param {string} clazz CSS class to set if the condition is true.
 * @return {string}
 * @example
 * // results in: foo
 * hbs.compile("{{classIf expression 'foo'}}")({"expression":true});
 */
export default (expression: boolean, clazz: string): string => {
  return expression ? clazz : '';
}