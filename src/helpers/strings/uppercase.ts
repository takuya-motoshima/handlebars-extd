import * as utils from '~/utils';

/**
 * Changes the string to uppercase.
 *
 * @example
 * // results in: JUST WOW
 * hbs.compile("{{uppercase str}}")({"str":"just wow"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
export default (val: string): string => {
  return utils.isString(val) ? val.toUpperCase() : val;
}