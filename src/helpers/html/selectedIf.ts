/**
 * Sets the selected attribute if the condition is true.
 *
 * @example
 * // results in: selected
 * hbs.compile("{{selectedIf expression}}")({"expression":true});
 *
 * @param {boolean} expression Condition to be checked.
 * @returns {string}
 */
export default (expression: boolean): string => {
  return expression ? 'selected' : '';
}