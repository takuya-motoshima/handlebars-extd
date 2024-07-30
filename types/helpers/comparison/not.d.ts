/**
 * Logical NOT of any expression.
 *
 * @example
 * // results in: false
 * hbs.compile("{{not true}}")();
 *
 * // results in: true
 * hbs.compile("{{not false}}")();
 *
 * @param {any} expression Any expression.
 * @returns {boolean}
 */
declare const _default: (expression: any) => boolean;
export default _default;
