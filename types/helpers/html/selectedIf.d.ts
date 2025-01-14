/**
 * Sets the selected attribute if the condition is true.
 * @param {boolean} expression Condition to be checked.
 * @return {string}
 * @example
 * // results in: selected
 * hbs.compile("{{selectedIf expression}}")({"expression":true});
 */
declare const _default: (expression: boolean) => string;
export default _default;
