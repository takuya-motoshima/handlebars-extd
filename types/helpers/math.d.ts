/**
 * A sum helper calculating the sum of two numbers.
 *
 * @example
 * // Output: 3
 * hbs.compile("{{add a b}}")({"a":1,"b":2});
 *
 * @param {number|string} val1
 * @param {number|string} val2
 * @returns {number}
 */
declare function add(val1: number | string, val2: number | string): number;
/**
 * A difference helper calculating the difference of two numbers.
 *
 * @example
 * // Output: 3
 * hbs.compile("{{sub a b}}")({"a":5,"b":2});
 *
 * @param {number|string} val1
 * @param {number|string} val2
 * @returns {number}
 */
declare function sub(val1: number | string, val2: number | string): number;
/**
 * A ceil helper to find the ceil value of the number.
 *
 * @example
 * // Output: 6
 * hbs.compile("{{ceil a}}")({"a":5.6});
 *
 * @param {number|string} val
 * @returns {number}
 */
declare function ceil(val: number | string): number;
/**
 * A floor helper to find the floor value of the number.
 *
 * @example
 * // Output: 5
 * hbs.compile("{{floor a}}")({"a":5.6});
 *
 * @param {number|string} val
 * @returns {number}
 */
declare function floor(val: number | string): number;
/**
 * An abs helper to find the absolute value of the number.
 *
 * @example
 * // Output: 5.6
 * hbs.compile("{{abs a b}}")({"a":-5.6});
 *
 * @param {number} val
 * @returns {number}
 */
declare function abs(val: number | string): number;
export { add, sub, ceil, floor, abs };
