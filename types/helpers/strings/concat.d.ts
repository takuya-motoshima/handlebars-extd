/**
 * Concat two or more strings.
 * @param {...string} args Any number of string arguments.
 * @return {string}
 * @example
 * // results in: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 */
declare const _default: (...args: string[]) => string;
export default _default;
