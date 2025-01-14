import * as utils from '~/utils';

/**
 * Returns the first non-falsy value from the parameter list.
 * Checks for the first non-false parameter.
 * @param {...any} args Any number of parameters.
 * @return {any}
 * @example
 * // results in: foo
 * hbs.compile("{{coalesce a b c}}")({"a":"foo","b":"bar","c":"baz"});
 *
 * // results in: bar
 * hbs.compile("{{coalesce a b c}}")({"a":"","b":"bar","c":"baz"});
*/
export default (...args: any[]): any => {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (args[i])
      return args[i];
  return args.pop();
}