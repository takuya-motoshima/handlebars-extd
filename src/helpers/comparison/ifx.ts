import * as utils from '~/utils';

/**
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 * // results in: foo
 * hbs.compile("{{ifx true a b}}")({"a":"foo","b":"bar"});
 *
 * // results in: bar
 * hbs.compile("{{ifx false a b}}")({"a":"foo","b":"bar"});
 *
 * @param {boolean} condition Satisfying condition for getting first value. Either true of false. (Required).
 * @param {any} val1 Value to return when the condition holds true.
 * @param {any} val2 Value to return when the condition is false (Optional).
 * @returns {any}
 */
export default (condition: boolean, val1: any, val2: any): any => {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the Handlebars options object
  // which it sends always as the last parameter.
  if (utils.isObject(val2) && val2.name === 'ifx' && val2.hasOwnProperty('hash'))
    // This means the user has skipped the last parameter,
    // so we should return an empty string ('') in the else case instead.
    val2 = '';
  return condition ? val1 : val2;
}