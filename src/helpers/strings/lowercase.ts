import * as utils from '~/utils';

/**
 * Changes the string to lowercase.
 *
 * @example
 * // results in: just wow
 * hbs.compile("{{lowercase str}}")({"str":"JUST WOW"});
 *
 * @param {string} val Target string.
 * @returns {string}
 */
export default (val: string): string => {
  return utils.isString(val) ? val.toLowerCase() : val;
}