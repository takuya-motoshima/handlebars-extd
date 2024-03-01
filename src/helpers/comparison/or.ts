import * as utils from '~/utils';

/**
 * Returns the boolean OR of two or more parameters passed i.e it is true if any of the parameters is true.
 *
 * @example
 * // results in: true
 * hbs.compile("{{or a b}}")({"a":true,"b":false});
 *
 * // results in: false
 * hbs.compile("{{or a b}}")({"a":false,"b":false});
 *
 * @param {...any} args Any number of boolean parameters.
 * @returns {boolean}
 */
export default (...args: any[]): boolean => {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (args[i])
      return true;
  return false;
}