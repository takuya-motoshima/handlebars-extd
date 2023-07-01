import * as utils from '../utils';

/**
 * Compare two values using operators.
 *
 * @example
 * // results in: false
 * hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '==' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '!==' b}}")({"a":4,"b":3});
 *
 * // results in: false
 * hbs.compile("{{opr a '!=' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '<' b}}")({"a":2,"b":3});
 *
 * // results in: false
 * hbs.compile("{{opr a '>' b}}")({"a":2,"b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '<=' b}}")({"a":2,"b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '>=' b}}")({"a":3,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} opr  The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function opr(val1: any, opr: '=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>=', val2: any): boolean {
  if (opr === '==')
    return val1 == val2;
  else if (opr === '===')
    return val1 === val2;
  else if (opr === '!=')
    return val1 != val2;
  else if (opr === '!==')
    return val1 !== val2;
  else if (opr === '<')
    return val1 < val2;
  else if (opr === '>')
    return val1 > val2;
  else if (opr === '<=')
    return val1 <= val2;
  else if (opr === '>=')
    return val1 >= val2;
  else
    throw new Error(`opr helper operator: ${opr} is invalid`);
}

/**
 * Determine whether or not two values are equal (===).
 *
 * @example
 * // results in: false
 * hbs.compile("{{eq a b}}")({"a":"3","b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function eq(val1: any, val2: any): boolean {
  return val1 === val2;
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 * // results in: true
 * hbs.compile("{{eqw a b}}")({"a":"3","b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function eqw(val1: any, val2: any): boolean {
  return val1 == val2;
}

/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 * // results in: true
 * hbs.compile("{{neq a b}}")({"a":4,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function neq(val1 :any, val2 :any): boolean {
  return val1 !== val2;
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 *
 * @example
 * // results in: false
 * hbs.compile("{{neqw a b}}")({"a":"3","b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function neqw(val1: any, val2: any): boolean {
  return val1 != val2;
}

/**
 * Check for less than condition (a < b).
 *
 * @example
 * // results in: true
 * hbs.compile("{{lt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function lt(val1: any, val2: any): boolean {
  return val1 < val2;
}

/**
 * Check for greater than condition (a > b).
 *
 * @example
 * // results in: false
 * hbs.compile("{{gt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function gt(val1: any, val2: any): boolean {
  return val1 > val2;
}

/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 * // results in: false
 * hbs.compile("{{lte a '<=' b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
 function lte(val1: any, val2: any): boolean {
  return val1 <= val2;
}

/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 * // results in: false
 * hbs.compile("{{gte a '>=' b}}")({"a":3,"b":3});
 *  
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
function gte(val1: any, val2: any): boolean {
  return val1 >= val2;
}

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
 * @param {boolean} cond
 * @param {any} val1 Value to return when the condition holds true.
 * @param {any} val2 Value to return when the condition is false (Optional).
 * @returns {any}
 */
function ifx(cond: boolean, val1: any, val2: any): any {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the Handlebars options object
  // which it sends always as the last parameter.
  if (utils.isObject(val2) && val2.name === 'ifx' && val2.hasOwnProperty('hash'))
    // This means the user has skipped the last parameter,
    // so we should return an empty string ('') in the else case instead.
    val2 = '';
  return cond ? val1 : val2;
}

/**
 * Logical NOT of any expression.
 *
 * @example
 * // results in: false
 * hbs.compile("{{not true}}")();
 *
 * // results in: true
 * hbs.compile("{{not false}}")();
 *
 * @param {any} expr Any expression.
 * @returns {boolean}
 */
function not(expr: any): boolean {
  return !expr;
}

/**
 * Check if it is empty.
 * If the value is an array, returns true if there are no elements.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 *
 * @example
 * // If the value is an array.
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":[]});
 *
 * // results in: false
 * hbs.compile("{{empty val}}")({"val":["foo"]});
 *
 * // If the value is an array.
 * // results in: false
 * hbs.compile("{{empty val}}")({"val":'Hello'});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":''});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val":' '});
 *
 * @param {any} val Character strings, arrays, objects, etc. to be checked.
 * @returns {boolean} Returns true if the value is empty, false otherwise.
 */
function empty(val: any): boolean {
  if (typeof val === 'string')
    // Trim if it's a string.
    val = val.replace(/^[\s　]+|[\s　]+$/g, ''); 
  else if (Array.isArray(val) && val.length === 0)
    // Replace value with null if it is an array and has no elements.
    val = null;
  return !!!val;
}

// /**
//  * Check if an array is empty.
//  *
//  * @example
//  * // results in: true
//  * hbs.compile("{{empty coll}}")({"coll":[]});
//  * 
//  * // results in: false
//  * hbs.compile("{{empty coll}}")({"coll":["foo"]});
//  *
//  * @param {any[]} coll Array/object to be checked.
//  * @returns {boolean}
//  */
// function empty(coll: any[]): boolean {
//   if (!utils.isArray(coll))
//     return true;
//   return coll.length === 0;
// }

/**
 * Check that it is not empty.
 * If the value is an array, returns true if there is an element.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 *
 * @example
 * // If the value is an array.
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":[]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":["foo"]});
 *
 * // If the value is an array.
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":'Hello'});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":''});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":' '});
 *
 * @param {any} value Character strings, arrays, objects, etc. to be checked.
 * @returns {boolean} Returns true if the value is not empty, false otherwise.
 */
function notEmpty(val: any): boolean {
  if (typeof val === 'string')
    // Trim if it's a string.
    val = val.replace(/^[\s　]+|[\s　]+$/g, ''); 
  else if (Array.isArray(val) && val.length === 0)
    // Replace value with null if it is an array and has no elements.
    val = null;
  return !!val;
}

/**
 * Determine the length of an array.
 *
 * @example
 * // results in: 2
 * hbs.compile("{{count coll}}")({"coll":["foo","bar"]});
 *
 * @param {any[]} coll Array whose elements to be counted.
 * @returns {number|false}
 */
function count(coll: any[]): number|false {
  if (!utils.isArray(coll))
    return false;
  return coll.length;
}

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
function and(...args: any[]): boolean {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (!args[i])
      return false;
  return true;
}

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
function or(...args: any[]): boolean {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (args[i])
      return true;
  return false;
}

/**
 * Returns the first non-falsy value from the parameter list.
 * Checks for the first non-false parameter.
 *
 * @example
 * // results in: foo
 * hbs.compile("{{coalesce a b c}}")({"a":"foo","b":"bar","c":"baz"});
 *
 * // results in: bar
 * hbs.compile("{{coalesce a b c}}")({"a":"","b":"bar","c":"baz"});
 *
 * @param {...any} args Any number of parameters.
 * @returns {any}
 */
function coalesce(...args: any[]): any {
  // Ignore the object appended by handlebars.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i=0; i<args.length; i++)
    if (args[i])
      return args[i];
  return args.pop();
}

/**
 * Returns true if the array contains a particular value, false if it does not.
 *
 * @example
 * // results in: true
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":2});
 *
 * // results in: false
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":10});
 *
 * // results in: false
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":"3"});
 *
 * // results in: true
 * hbs.compile("{{includes coll a strict}}")({"coll":[1,2,3,4],"a":"3","strict":false});
 *
 * @param {any[]} coll The array.
 * @param {any} val The value to search for.
 * @param {boolean} strict FALSE for non-strict checking. TRUE by default.
 * @returns {boolean}
 */
function includes(coll: any[], val: any, strict: boolean = true): boolean {
  if (!utils.isArray(coll) || coll.length === 0)
    return false;
  for (let i=0; i<coll.length; i++)
    if (strict && coll[i] === val || !strict && coll[i] == val)
      return true;
  return false;
}

/**
 * Returns true if the given str matches the given regex.
 *
 * @example
 * // results in: true
 * hbs.compile("{{regexMatch 'foobar' 'foo'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'bar' 'foo'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();
 *
 * // results in: true
 * hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'Visit Here' 'here'}}")();
 *
 * // results in: Match
 * hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")();
 *
 * @param {string} val The string against which to match the regular expression.
 * @param {string} pattern The text of the regular expression.
 * @param {string} flags? Regular expression flags, such as global and case-insensitive searches. The default is none (undefined).
 * @returns {boolean} true if there is a match between the regular expression and the string str. Otherwise, false.
 */
function regexMatch(val: string, pattern: string, flags?: string): boolean {
  if (!utils.isString(val))
    val = val.toString();

  // If the optional flags parameter is a Handlebars option object, replace flags with undefined.
  if (utils.isObject(flags))
    flags = undefined;
  const regex = new RegExp(pattern, flags);
  return regex.test(val);
}

export {opr, eq, eqw, neq, neqw, lt, gt, gte, lte, ifx, not, empty, notEmpty, count, and, or, coalesce, includes, regexMatch}