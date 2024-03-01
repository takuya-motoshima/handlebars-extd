import * as utils from '~/utils';

/**
 * Concat two or more strings.
 *
 * @example
 * // results in: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 *
 * @param {...string} args Any number of string arguments.
 * @returns {string}
 */
export default (...args: string[]) => {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  return args.join('');
}