import * as utils from '~/utils';

/**
 * Changes the string to uppercase.
 * @param {string} val Target string.
 * @return {string}
 * @example
 * // results in: JUST WOW
 * hbs.compile("{{uppercase str}}")({"str":"just wow"});
 */
export default (val: string): string => {
  return utils.isString(val) ? val.toUpperCase() : val;
}