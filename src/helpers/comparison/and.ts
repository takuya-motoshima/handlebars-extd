import * as utils from '~/utils';

/**
 * Returns the boolean AND of two or more parameters passed i.e it is true iff all the parameters are true.
 *
 * @example
 * // results in: true
 * hbs.compile("{{and a b}}")({"a":true,"b":true});
 *
 * // results in: false
 * hbs.compile("{{and a b}}")({"a":false,"b":true});
 *
 * @param {...any} args Any number of boolean parameters.
 * @returns {boolean}
 */
export default (...args: any[]): boolean => {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (!args[i])
      return false;
  return true;
}