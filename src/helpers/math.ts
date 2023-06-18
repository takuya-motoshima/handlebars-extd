/**
 * Calculates the sum of two numbers.
 *
 * @example
 * // Output: 3
 * hbs.compile("{{add a b}}")({"a":1,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
function add(val1: number|string, val2: number|string): number {
  return Number(val1) + Number(val2);
}

/**
 * Calculates the difference of the given values.
 *
 * @example
 * // Output: 3
 * hbs.compile("{{sub a b}}")({"a":5,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
function sub(val1: number|string, val2: number|string): number {
  return Number(val1) - Number(val2);
}

/**
 * Calculate the multiplication of the given values.
 *
 * @example
 * // Output: 10
 * hbs.compile("{{multiply a b}}")({"a":5,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
function multiply(val1: number|string, val2: number|string): number {
  return Number(val1) * Number(val2);
}

/**
 * Compute the division of the given values.
 *
 * @example
 * // Output: 5
 * hbs.compile("{{divide a b}}")({"a":10,"b":2});
 *
 * @param {number|string} val1 The first number.
 * @param {number|string} val2 The second number.
 * @returns {number}
 */
function divide(val1: number|string, val2: number|string): number {
  return Number(val1) / Number(val2);
}

/**
 * Round up the value.
 *
 * @example
 * // Output: 6
 * hbs.compile("{{ceil a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest greater integer.
 * @returns {number}
 */
function ceil(val: number|string): number {
  return Math.ceil(Number(val));
}

/**
 * Rounds down a number.
 *
 * @example
 * // Output: 5
 * hbs.compile("{{floor a}}")({"a":5.6});
 *
 * @param {number|string} val Number to be rounded to nearest lower integer.
 * @returns {number}
 */
function floor(val: number|string): number {
  return Math.floor(Number(val));
}

/**
 * Returns an absolute value.
 *
 * @example
 * // Output: 5.6
 * hbs.compile("{{abs a b}}")({"a":-5.6});
 * 
 * @param {number} val Number to perform absolute value operation on.
 * @returns {number}
 */
function abs(val: number|string): number {
  return Math.abs(Number(val));
}

export {add, sub, multiply, divide, ceil, floor, abs}