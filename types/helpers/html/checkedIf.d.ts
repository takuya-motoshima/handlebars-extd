/**
 * Sets the checked attribute if the condition is true.
 *
 * @example
 * // results in: checked
 * hbs.compile("{{checkedIf expression}}")({"expression":true});
 *
 * @param {boolean} expression Condition to be checked.
 * @returns {string}
 */
declare const _default: (expression: boolean) => string;
export default _default;
