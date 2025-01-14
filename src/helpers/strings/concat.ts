import * as utils from '~/utils';

/**
 * Concat two or more strings.
 * @param {...string} args Any number of string arguments.
 * @return {string}
 * @example
 * // results in: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 */
export default (...args: string[]) => {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  return args.join('');
}