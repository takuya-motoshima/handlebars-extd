import * as utils from '~/utils';

/**
 * Determine the length of an array.
 * @param {any[]} collection Array whose elements to be counted.
 * @return {number|false}
 * @example
 * // results in: 2
 * hbs.compile("{{count collection}}")({"collection":["foo","bar"]});
 */
export default (collection: any[]): number|false => {
  if (!utils.isArray(collection))
    return false;
  return collection.length;
}