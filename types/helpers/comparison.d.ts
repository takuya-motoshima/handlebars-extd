/**
 * Compare two values using operators.
 *
 * @example
 * // Output: false
 * hbs.compile({{cf a '===' b}})({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile({{cf a '==' b}})({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile({{cf a '!==' b}})({"a":4,"b":3});
 *
 * // Output: false
 * hbs.compile({{cf a '!=' b}})({"a":"3","b":3});
 *
 * // Output: true
 * hbs.compile({{cf a '<' b}})({"a":2,"b":3});
 *
 * // Output: false
 * hbs.compile({{cf a '>' b}})({"a":2,"b":3});
 *
 * // Output: true
 * hbs.compile({{cf a '<=' b}})({"a":2,"b":3});
 *
 * // Output: true
 * hbs.compile({{cf a '>=' b}})({"a":3,"b":3});
 *
 * @param {any} val1
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} opr  The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param {any} val2
 * @returns {boolean}
 */
declare function cf(val1: any, opr: '==' | '===' | '!=' | '!==' | '<' | '>' | '<=' | '>=', val2: any): boolean;
/**
 * Determine whether or not two values are equal (===).
 *
 * @example
 * // Output: false
 * hbs.compile({{eq a b}})({"a":"3","b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function eq(val1: any, val2: any): boolean;
/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 *
 * @example
 * // Output: true
 * hbs.compile({{eqw a b}})({"a":"3","b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function eqw(val1: any, val2: any): boolean;
/**
 * Determine whether or not two values are not equal (!==).
 *
 * @example
 * // Output: true
 * hbs.compile({{neq a b}})({"a":4,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function neq(val1: any, val2: any): boolean;
/**
 * Determine whether or not two values are not equal (!=) weak checking.
 *
 * @example
 * // Output: false
 * hbs.compile({{neqw a b}})({"a":"3","b":3});
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
 * hbs.compile({{lt a b}})({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function lt(val1: any, val2: any): boolean;
/**
 * Check for greater than condition (a > b).
 *
 * @example
 * // Output: false
 * hbs.compile({{gt a b}})({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function gt(val1: any, val2: any): boolean;
/**
 * Check for less than or equals condition (a <= b).
 *
 * @example
 * // Output: false
 * hbs.compile({{lte a '<=' b}})({"a":2,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function lte(val1: any, val2: any): boolean;
/**
 * Check for greater than or equals condition (a >= b).
 *
 * @example
 * // Output: false
 * hbs.compile({{gte a '>=' b}})({"a":3,"b":3});
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {boolean}
 */
declare function gte(val1: any, val2: any): boolean;
/**
 * Helper to imitate the ternary '?:' conditional operator.
 *
 * @example
 * // Output: foo
 * hbs.compile({{ifx true a b}})({"a":"foo","b":"bar"});
 *
 * // Output: bar
 * hbs.compile({{ifx false a b}})({"a":"foo","b":"bar"});
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
 * hbs.compile({{not true}})();
 *
 * // Output: true
 * hbs.compile({{not false}})();
 *
 * @param {any} expr
 * @returns {boolean}
 */
declare function not(expr: any): boolean;
/**
 * Check if an array is empty.
 *
 * @example
 * // Output: true
 * hbs.compile({{empty coll}})({"coll":[]});
 *
 * // Output: false
 * hbs.compile({{empty coll}})({"coll":["foo"]});
 *
 * @param {any[]} coll
 * @returns {boolean}
 */
declare function empty(coll: any[]): boolean;
/**
 * Determine the length of an array.
 *
 * @example
 * // Output: 2
 * hbs.compile({{count coll}})({"coll":["foo","bar"]});
 *
 * @param {any[]} coll
 * @returns {number|false}
 */
declare function count(coll: any[]): number | false;
/**
 * Returns the boolean AND of two or more parameters passed i.e
 * it is true iff all the parameters are true.
 *
 * @example
 * // Output: true
 * hbs.compile({{and a b}})({"a":true,"b":true});
 *
 * // Output: false
 * hbs.compile({{and a b}})({"a":false,"b":true});
 *
 * @param {...any} args
 * @returns {boolean}
 */
declare function and(...args: any[]): boolean;
/**
 * Returns the boolean OR of two or more parameters passed i.e
 * it is true if any of the parameters is true.
 *
 * @example
 * // Output: true
 * hbs.compile({{or a b}})({"a":true,"b":false});
 *
 * // Output: false
 * hbs.compile({{or a b}})({"a":false,"b":false});
 *
 * @param {...any} args
 * @returns {boolean}
 */
declare function or(...args: any[]): boolean;
/**
 * Returns the first non-falsy value from the parameter list.
 * Checks for the first non-false parameter.
 *
 * @example
 * // Output: foo
 * hbs.compile({{coalesce a b c}})({"a":"foo","b":"bar","c":"baz"});
 *
 * // Output: bar
 * hbs.compile({{coalesce a b c}})({"a":"","b":"bar","c":"baz"});
 *
 * @param {...any} args
 * @returns {any}
 */
declare function coalesce(...args: any[]): any;
/**
 * Returns boolean if the array contains the element strictly or non-strictly.
 *
 * @example
 * // Output: true
 * hbs.compile({{includes coll a}})({"coll":[1,2,3,4],"a":2});
 *
 * // Output: false
 * hbs.compile({{includes coll a}})({"coll":[1,2,3,4],"a":10});
 *
 * // Output: false
 * hbs.compile({{includes coll a}})({"coll":[1,2,3,4],"a":"3"});
 *
 * // Output: true
 * hbs.compile({{includes coll a strict}})({"coll":[1,2,3,4],"a":"3","strict":false});
 *
 * @param {any[]} coll
 * @param {any} val
 * @param {boolean} strict
 * @returns {boolean}
 */
declare function includes(coll: any[], val: any, strict?: boolean): boolean;
export { cf, eq, eqw, neq, neqw, lt, gt, gte, lte, ifx, not, empty, count, and, or, coalesce, includes };
