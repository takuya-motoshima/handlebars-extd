import * as utils from '~/utils';

/**
 * Determine the length of an array.
 *
 * @example
 * // results in: 2
 * hbs.compile("{{count collection}}")({"collection":["foo","bar"]});
 *
 * @param {any[]} collection Array whose elements to be counted.
 * @returns {number|false}
 */
export default (collection: any[]): number|false => {
  if (!utils.isArray(collection))
    return false;
  return collection.length;
}