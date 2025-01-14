import * as utils from '~/utils';

/**
 * Changes the string to lowercase.
 * @param {string} val Target string.
 * @return {string}
 * @example
 * // results in: just wow
 * hbs.compile("{{lowercase str}}")({"str":"JUST WOW"});
 */
export default (val: string): string => {
  return utils.isString(val) ? val.toLowerCase() : val;
}