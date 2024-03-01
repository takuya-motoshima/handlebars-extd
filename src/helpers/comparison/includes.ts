import * as utils from '~/utils';

/**
 * Returns true if the array contains a particular value, false if it does not.
 *
 * @example
 * // results in: true
 * hbs.compile("{{includes collection a}}")({"collection":[1,2,3,4],"a":2});
 *
 * // results in: false
 * hbs.compile("{{includes collection a}}")({"collection":[1,2,3,4],"a":10});
 *
 * // results in: false
 * hbs.compile("{{includes collection a}}")({"collection":[1,2,3,4],"a":"3"});
 *
 * // results in: true
 * hbs.compile("{{includes collection a strict}}")({"collection":[1,2,3,4],"a":"3","strict":false});
 *
 * @param {any[]} collection The array.
 * @param {any} val The value to search for.
 * @param {boolean} strict FALSE for non-strict checking. TRUE by default.
 * @returns {boolean}
 */
export default (collection: any[], val: any, strict: boolean = true): boolean => {
  if (!utils.isArray(collection) || collection.length === 0)
    return false;
  for (let i=0; i<collection.length; i++)
    if (strict && collection[i] === val || !strict && collection[i] == val)
      return true;
  return false;
}