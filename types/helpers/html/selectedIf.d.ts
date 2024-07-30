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
declare const _default: (expression: boolean) => string;
export default _default;
