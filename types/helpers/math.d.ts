/**
 * Calculates the sum of two numbers.
 *
 * @example
 * // results in: 3
 * hbs.compile("{{add a b}}")({"a":1,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
declare function add(val1: number | string, val2: number | string): number;
/**
 * Calculates the difference of the given values.
 *
 * @example
 * // results in: 3
 * hbs.compile("{{sub a b}}")({"a":5,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
declare function sub(val1: number | string, val2: number | string): number;
/**
 * Calculate the multiplication of the given values.
 *
 * @example
 * // results in: 10
 * hbs.compile("{{multiply a b}}")({"a":5,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
declare function multiply(val1: number | string, val2: number | string): number;
/**
 * Compute the division of the given values.
 *
 * @example
 * // results in: 5
 * hbs.compile("{{divide a b}}")({"a":10,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
declare function divide(val1: number | string, val2: number | string): number;
/**
 * Round up the value.
 *
 * @example
 * // results in: 6
 * hbs.compile("{{ceil a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest greater integer.
 * @returns {number}
 */
declare function ceil(val: number | string): number;
/**
 * Rounds down a number.
 *
 * @example
 * // results in: 5
 * hbs.compile("{{floor a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest lower integer.
 * @returns {number}
 */
declare function floor(val: number | string): number;
/**
 * Returns an absolute value.
 *
 * @example
 * // results in: 5.6
 * hbs.compile("{{abs a b}}")({"a":-5.6});
 *
 * @param {number} val Number to perform absolute value operation on.
 * @returns {number}
 */
declare function abs(val: number | string): number;
export { add, sub, multiply, divide, ceil, floor, abs };
