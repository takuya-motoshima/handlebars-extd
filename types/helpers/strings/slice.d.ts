/**
 * Extract a portion of a string.
 * @param {string} val Target string.
 * @param {number} start The zero-based index at which to begin extraction.
 * @param {number} end The zero-based index before which to end extraction. The character at this index will not be included.
 * @return {string}
 * @example
 * // results in: Just
 * hbs.compile("{{slice str 0 4}}")({"str":"Just Wow"});
 *
 * // results in: Wow
 * hbs.compile("{{slice str 5}}")({"str":"Just Wow"});
 *
 * // results in:  Wow
 * hbs.compile("{{slice str -4}}")({"str":"Just Wow"});
 */
declare const _default: (val: string, start: number, end?: number) => string;
export default _default;
