/**
 * Sets the checked attribute if the condition is true.
 * @param {boolean} expression Condition to be checked.
 * @return {string}
 * @example
 * // results in: checked
 * hbs.compile("{{checkedIf expression}}")({"expression":true});
 */
export default (expression: boolean): string => {
  return expression ? 'checked' : '';
}