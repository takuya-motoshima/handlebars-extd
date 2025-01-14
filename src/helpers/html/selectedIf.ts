/**
 * Sets the selected attribute if the condition is true.
 * @param {boolean} expression Condition to be checked.
 * @return {string}
 * @example
 * // results in: selected
 * hbs.compile("{{selectedIf expression}}")({"expression":true});
 */
export default (expression: boolean): string => {
  return expression ? 'selected' : '';
}