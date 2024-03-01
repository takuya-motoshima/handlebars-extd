declare const _default: (expression: boolean, clazz: string) => string;
/**
 * Set the CSS classes if the condition is true.
 *
 * @example
 * // results in: foo
 * hbs.compile("{{classIf expression 'foo'}}")({"expression":true});
 *
 * @param {boolean} expression Condition to be checked.
 * @param {string} clazz CSS class to set if the condition is true.
 * @returns {string}
 */
export default _default;
