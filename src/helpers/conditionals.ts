import * as utils from '../utils';

/**
 * Determine whether or not two values are equal (===).
 *
 * @example
 * // Output: false
 * {{eq '3' 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function eq(value1: any, value2: any): boolean {
  return value1 === value2;
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 * // true
 * {{eqw '3' 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function eqw(value1: any, value2: any): boolean {
  return value1 == value2;
}

/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 * // Output: true
 * {{neq 4 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function neq(value1 :any, value2 :any): boolean {
  return value1 !== value2;
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 *
 * @example
 * // Output: false
 * {{neqw '3' 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function neqw(value1: any, value2: any): boolean {
  return value1 != value2;
}

/**
 * Check for less than condition (a < b).
 *
 * @example
 * // Output: true
 * {{lt 2 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function lt(value1: any, value2: any): boolean {
  return value1 < value2;
}

/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 * // Output: true
 * {{lte 2 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function lte(value1: any, value2: any): boolean {
  return value1 <= value2;
}

/**
 * Check for greater than condition (a > b).
 *
 * @example
 * // Output: false
 * {{gt 2 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function gt(value1: any, value2: any): boolean {
  return value1 > value2;
}

/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 * // Output: true
 * {{gte 3 3}}
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
function gte(value1: any, value2: any): boolean {
  return value1 >= value2;
}

/**
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 * // Output: Foo
 * {{ifx true 'Foo' 'Bar'}}
 * 
 * // Output: Foo
 * {{ifx false 'Foo' 'Bar'}}
 *
 * @param {boolean} cond
 * @param {any} value1 Value to return when the condition holds true.
 * @param {any} value2 Value to return when the condition is false (Optional).
 * @returns {any}
 */
function ifx(cond: boolean, value1: any, value2: any): any {
  // Check if user has omitted the last parameter
  // if that's the case, it would be the Handlebars options object
  // which it sends always as the last parameter.
  if (utils.isObject(value2) && value2.name === 'ifx' && value2.hasOwnProperty('hash'))
    // This means the user has skipped the last parameter,
    // so we should return an empty string ('') in the else case instead.
    value2 = '';
  return cond ? value1 : value2;
}

/**
 * Logical NOT of any expression.
 *
 * @example
 * // Output: false
 * {{not true}}
 * 
 * // Output: true
 * {{not false}}
 *
 * @param {any} expr
 * @returns {boolean}
 */
function not(expr: any): boolean {
  return !expr;
}

/**
 * Check if an array is empty.
 *
 * @example
 * // Output: true | false
 * {{empty array}} 
 *
 * @param {any[]} coll
 * @returns {boolean}
 */
function empty(coll: any[]): boolean {
  if (!utils.isArray(coll))
    return true;
  return coll.length === 0;
}

/**
 * Determine the length of an array.
 *
 * @example
 * // Output: false | array.length
 * {{count array}}
 *
 * @param {any[]} coll
 * @returns {number|false}
 */
function count(coll: any[]): number|false {
  if (!utils.isArray(coll))
    return false;
  return coll.length;
}

/**
 * Returns the boolean AND of two or more parameters passed i.e
 * it is true iff all the parameters are true.
 *
 * @example
 * // Output: true
 * const value1 = value2 = true;
 * {{and value1 value2}}
 *
 * // Output: false
 * const value1 = false, value2 = true;
 * {{and value1 value2}}
 *
 * @param {...any} args
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
 * Returns the boolean OR of two or more parameters passed i.e
 * it is true if any of the parameters is true.
 *
 * @example
 * // Output: true
 * const value1 = true, value2 = false;
 * {{or value1 value2}}
 * 
 * // Output: false
 * const value = value2 = false;
 * {{or value1 value2}}
 *
 * @param {...any} args
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
 * Works quite similar to the SQL's COALESCE() function, but unlike this
 * checks for the first non-false parameter.
 *
 * @example
 * // Output: 'Foo Bar'
 * const fullName = 'Foo Bar', nickName = 'foob';
 * {{coalesce fullName nickName 'Unknown'}}
 * 
 * // Output: 'foob'
 * const fullName = '', nickName = 'foob';
 * {{coalesce fullName nickName 'Unknown'}}
 *
 * @param {...any} args
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
 * Returns boolean if the array contains the element strictly or non-strictly.
 *
 * @example
 * const array = [1, 2, 3, 4];
 * const value1 = 2, value2 = 10, value3 = '3';
 * 
 * // Output: true
 * {{includes array value1}}
 * 
 * // Output: false
 * {{includes array value2}}
 * 
 * // Output: false
 * {{includes array value3}}
 * 
 * // Output: false
 * {{includes array value3 false}}
 *
 * @param {any[]} coll
 * @param {any} value
 * @param {boolean} strict
 * @returns {boolean}
 */
function includes(coll: any[], value: any, strict: boolean = true): boolean {
  if (!utils.isArray(coll) || coll.length === 0)
    return false;
  for (let i=0; i<coll.length; i++)
    if (strict && coll[i] === value || !strict && coll[i] == value)
      return true;
  return false;
}

export {eq, eqw, neq, neqw, lt, lte, gt, gte, ifx, not, empty, count, and, or, coalesce, includes}