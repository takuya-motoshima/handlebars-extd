import * as utils from '../utils';

/**
 * Compare two values using operators.
 * 
 * @example
 * // Output: false
 * hbs.compile("{{cf a '===' b}}")({"a":"3","b":3});
 * 
 * // Output: true
 * hbs.compile("{{cf a '==' b}}")({"a":"3","b":3});
 * 
 * // Output: true
 * hbs.compile("{{cf a '!==' b}}")({"a":4,"b":3});
 * 
 * // Output: false
 * hbs.compile("{{cf a '!=' b}}")({"a":"3","b":3});
 * 
 * // Output: true
 * hbs.compile("{{cf a '<' b}}")({"a":2,"b":3});
 * 
 * // Output: false
 * hbs.compile("{{cf a '>' b}}")({"a":2,"b":3});
 * 
 * // Output: true
 * hbs.compile("{{cf a '<=' b}}")({"a":2,"b":3});
 * 
 * // Output: true
 * hbs.compile("{{cf a '>=' b}}")({"a":3,"b":3});
 * 
 * @param {any} val1 
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} opr  The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param {any} val2 
 * @returns {boolean}
 */
function cf(val1: any, opr: '=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>=', val2: any): boolean {
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
    throw new Error(`cf helper operator: ${opr} is invalid`);
}

/**
 * Determine whether or not two values are equal (===).
 *
 * @example
 * // Output: false
 * hbs.compile("{{eq a b}}")({"a":"3","b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function eq(val1: any, val2: any): boolean {
  return val1 === val2;
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 * // Output: true
 * hbs.compile("{{eqw a b}}")({"a":"3","b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function eqw(val1: any, val2: any): boolean {
  return val1 == val2;
}

/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 * // Output: true
 * hbs.compile("{{neq a b}}")({"a":4,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function neq(val1 :any, val2 :any): boolean {
  return val1 !== val2;
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 *
 * @example
 * // Output: false
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
 * // Output: true
 * hbs.compile("{{lt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function lt(val1: any, val2: any): boolean {
  return val1 < val2;
}

/**
 * Check for greater than condition (a > b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{gt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function gt(val1: any, val2: any): boolean {
  return val1 > val2;
}

/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{lte a '<=' b}}")({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
 function lte(val1: any, val2: any): boolean {
  return val1 <= val2;
}

/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{gte a '>=' b}}")({"a":3,"b":3});
 *  
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
function gte(val1: any, val2: any): boolean {
  return val1 >= val2;
}

/**
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 * // Output: foo
 * hbs.compile("{{ifx true a b}}")({"a":"foo","b":"bar"});
 * 
 * // Output: bar
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
 * // Output: false
 * hbs.compile("{{not true}}")();
 * 
 * // Output: true
 * hbs.compile("{{not false}}")();
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
 * // Output: true
 * hbs.compile("{{empty coll}}")({"coll":[]});
 * 
 * // Output: false
 * hbs.compile("{{empty coll}}")({"coll":["foo"]});
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
 * // Output: 2
 * hbs.compile("{{count coll}}")({"coll":["foo","bar"]});
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
 * hbs.compile("{{and a b}}")({"a":true,"b":true});
 * 
 * // Output: false
 * hbs.compile("{{and a b}}")({"a":false,"b":true});
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
 * hbs.compile("{{or a b}}")({"a":true,"b":false});
 * 
 * // Output: false
 * hbs.compile("{{or a b}}")({"a":false,"b":false});
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
 * Checks for the first non-false parameter.
 *
 * @example
 * // Output: foo
 * hbs.compile("{{coalesce a b c}}")({"a":"foo","b":"bar","c":"baz"});
 * 
 * // Output: bar
 * hbs.compile("{{coalesce a b c}}")({"a":"","b":"bar","c":"baz"});
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
 * // Output: true
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":2});
 * 
 * // Output: false
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":10});
 * 
 * // Output: false
 * hbs.compile("{{includes coll a}}")({"coll":[1,2,3,4],"a":"3"});
 * 
 * // Output: true
 * hbs.compile("{{includes coll a strict}}")({"coll":[1,2,3,4],"a":"3","strict":false});
 * 
 * @param {any[]} coll
 * @param {any} val
 * @param {boolean} strict
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

export {cf, eq, eqw, neq, neqw, lt, gt, gte, lte, ifx, not, empty, count, and, or, coalesce, includes}