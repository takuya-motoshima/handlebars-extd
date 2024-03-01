import * as utils from '~/utils';

/**
 * Join the elements of an array with the specified separator.
 *
 * @example
 * // results in: Hands & legs & feet
 * hbs.compile("{{{join collection ' & '}}}")({"collection":["Hands","legs","feet"]});
 *
 * @param {string[]} collection Array.
 * @param {string} separator A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").
 * @returns {string|boolean}
 */
export default (collection: string[], separator: string = ','): string|boolean => {
  if (!separator || utils.isObject(separator))
    separator = ',';
  if (!utils.isArray(collection))
    return false;
  return collection.join(separator);
}