/**
 * Returns the first non-falsy value from the parameter list.
 * Checks for the first non-false parameter.
 * @param {...any} args Any number of parameters.
 * @return {any}
 * @example
 * // results in: foo
 * hbs.compile("{{coalesce a b c}}")({"a":"foo","b":"bar","c":"baz"});
 *
 * // results in: bar
 * hbs.compile("{{coalesce a b c}}")({"a":"","b":"bar","c":"baz"});
*/
declare const _default: (...args: any[]) => any;
export default _default;
