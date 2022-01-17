/**
 * Compare two values using operators.
 *
 * @example
 * // Output: false
 * hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile("{{opr a '==' b}}")({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile("{{opr a '!==' b}}")({"a":4,"b":3});
 *
 * // Output: false
 * hbs.compile("{{opr a '!=' b}}")({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile("{{opr a '<' b}}")({"a":2,"b":3});
 *
 * // Output: false
 * hbs.compile("{{opr a '>' b}}")({"a":2,"b":3});
 *
 * // Output: true
 * hbs.compile("{{opr a '<=' b}}")({"a":2,"b":3});
 *
 * // Output: true
 * hbs.compile("{{opr a '>=' b}}")({"a":3,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} opr  The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function opr(val1: any, opr: '==' | '===' | '!=' | '!==' | '<' | '>' | '<=' | '>=', val2: any): boolean;
/**
 * Determine whether or not two values are equal (===).
 *
 * @example
 * // Output: false
 * hbs.compile("{{eq a b}}")({"a":"3","b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function eq(val1: any, val2: any): boolean;
/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 * // Output: true
 * hbs.compile("{{eqw a b}}")({"a":"3","b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function eqw(val1: any, val2: any): boolean;
/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 * // Output: true
 * hbs.compile("{{neq a b}}")({"a":4,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function neq(val1: any, val2: any): boolean;
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
declare function neqw(val1: any, val2: any): boolean;
/**
 * Check for less than condition (a < b).
 *
 * @example
 * // Output: true
 * hbs.compile("{{lt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function lt(val1: any, val2: any): boolean;
/**
 * Check for greater than condition (a > b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{gt a b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function gt(val1: any, val2: any): boolean;
/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{lte a '<=' b}}")({"a":2,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function lte(val1: any, val2: any): boolean;
/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 * // Output: false
 * hbs.compile("{{gte a '>=' b}}")({"a":3,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
declare function gte(val1: any, val2: any): boolean;
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
declare function ifx(cond: boolean, val1: any, val2: any): any;
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
 * @param {any} expr Any expression.
 * @returns {boolean}
 */
declare function not(expr: any): boolean;
/**
 * Check if it is empty.
 * If the value is an array, returns true if there are no elements.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 *
 * @example
 * // If the value is an array.
 * // Output: true
 * hbs.compile("{{empty val}}")({"val":[]});
 *
 * // Output: false
 * hbs.compile("{{empty val}}")({"val":["foo"]});
 *
 * // If the value is an array.
 * // Output: false
 * hbs.compile("{{empty val}}")({"val":'Hello'});
 *
 * // Output: true
 * hbs.compile("{{empty val}}")({"val":''});
 *
 * // Output: true
 * hbs.compile("{{empty val}}")({"val":' '});
 *
 * @param   {any}     val Character strings, arrays, objects, etc. to be checked.
 * @returns {boolean}     Returns true if the value is empty, false otherwise.
 */
declare function empty(val: any): boolean;
/**
 * Check that it is not empty.
 * If the value is an array, returns true if there is an element.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 *
 * @example
 * // If the value is an array.
 * // Output: false
 * hbs.compile("{{notEmpty val}}")({"val":[]});
 *
 * // Output: true
 * hbs.compile("{{notEmpty val}}")({"val":["foo"]});
 *
 * // If the value is an array.
 * // Output: true
 * hbs.compile("{{notEmpty val}}")({"val":'Hello'});
 *
 * // Output: false
 * hbs.compile("{{notEmpty val}}")({"val":''});
 *
 * // Output: false
 * hbs.compile("{{notEmpty val}}")({"val":' '});
 *
 * @param   {any}     value Character strings, arrays, objects, etc. to be checked.
 * @returns {boolean}       Returns true if the value is not empty, false otherwise.
 */
export declare function notEmpty(val: any): boolean;
/**
 * Determine the length of an array.
 *
 * @example
 * // Output: 2
 * hbs.compile("{{count coll}}")({"coll":["foo","bar"]});
 *
 * @param {any[]} coll Array whose elements to be counted.
 * @returns {number|false}
 */
declare function count(coll: any[]): number | false;
/**
 * Returns the boolean AND of two or more parameters passed i.e it is true iff all the parameters are true.
 *
 * @example
 * // Output: true
 * hbs.compile("{{and a b}}")({"a":true,"b":true});
 *
 * // Output: false
 * hbs.compile("{{and a b}}")({"a":false,"b":true});
 *
 * @param {...any} args Any number of boolean parameters.
 * @returns {boolean}
 */
declare function and(...args: any[]): boolean;
/**
 * Returns the boolean OR of two or more parameters passed i.e it is true if any of the parameters is true.
 *
 * @example
 * // Output: true
 * hbs.compile("{{or a b}}")({"a":true,"b":false});
 *
 * // Output: false
 * hbs.compile("{{or a b}}")({"a":false,"b":false});
 *
 * @param {...any} args Any number of boolean parameters.
 * @returns {boolean}
 */
declare function or(...args: any[]): boolean;
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
 * @param {...any} args Any number of parameters.
 * @returns {any}
 */
declare function coalesce(...args: any[]): any;
/**
 * Returns true if the array contains a particular value, false if it does not.
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
 * @param {any[]} coll The array.
 * @param {any} val The value to search for.
 * @param {boolean} strict FALSE for non-strict checking. TRUE by default.
 * @returns {boolean}
 */
declare function includes(coll: any[], val: any, strict?: boolean): boolean;
export { opr, eq, eqw, neq, neqw, lt, gt, gte, lte, ifx, not, empty, count, and, or, coalesce, includes };
