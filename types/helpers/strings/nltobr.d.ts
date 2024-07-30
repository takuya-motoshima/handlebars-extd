/**
 * Replace \n with <br> tags.
 *
 * @example
 * // results in: It's<br>just<br>now
 * hbs.compile("{{{nltobr str}}}")({"str":"It's\njust\nnow"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
declare const _default: (val: string) => string;
export default _default;
