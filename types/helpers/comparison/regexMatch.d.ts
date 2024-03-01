declare const _default: (val: string, pattern: string, flags?: string | undefined) => boolean;
/**
 * Returns true if the given str matches the given regex.
 *
 * @example
 * // results in: true
 * hbs.compile("{{regexMatch 'foobar' 'foo'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'bar' 'foo'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();
 *
 * // results in: true
 * hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'Visit Here' 'here'}}")();
 *
 * // results in: Match
 * hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")();
 *
 * @param {string} val The string against which to match the regular expression.
 * @param {string} pattern The text of the regular expression.
 * @param {string} flags? Regular expression flags, such as global and case-insensitive searches. The default is none (undefined).
 * @returns {boolean} true if there is a match between the regular expression and the string str. Otherwise, false.
 */
export default _default;
