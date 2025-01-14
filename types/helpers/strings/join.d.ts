/**
 * Join the elements of an array with the specified separator.
 * @param {string[]} collection Array.
 * @param {string} separator A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").
 * @return {string|boolean}
 * @example
 * // results in: Hands & legs & feet
 * hbs.compile("{{{join collection ' & '}}}")({"collection":["Hands","legs","feet"]});
 */
declare const _default: (collection: string[], separator?: string) => string | boolean;
export default _default;
