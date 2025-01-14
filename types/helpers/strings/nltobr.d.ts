/**
 * Replace \n with <br> tags.
 * @param {string} val Target string.
 * @return {string}
 * @example
 * // results in: It's<br>just<br>now
 * hbs.compile("{{{nltobr str}}}")({"str":"It's\njust\nnow"});
 */
declare const _default: (val: string) => string;
export default _default;
