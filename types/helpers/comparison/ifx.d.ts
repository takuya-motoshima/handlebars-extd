declare const _default: (condition: boolean, val1: any, val2: any) => any;
/**
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 * // results in: foo
 * hbs.compile("{{ifx true a b}}")({"a":"foo","b":"bar"});
 *
 * // results in: bar
 * hbs.compile("{{ifx false a b}}")({"a":"foo","b":"bar"});
 *
 * @param {boolean} condition Satisfying condition for getting first value. Either true of false. (Required).
 * @param {any} val1 Value to return when the condition holds true.
 * @param {any} val2 Value to return when the condition is false (Optional).
 * @returns {any}
 */
export default _default;
