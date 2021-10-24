/**
 * A sum helper calculating the sum of two numbers.
 *
 * @example
 * // Output: 3
 * {{sum 1 2}}
 *
 * @param {number|string} val1
 * @param {number|string} val2
 * @returns {number}
 */
function sum(val1: number|string, val2: number|string): number {
  return Number(val1) + Number(val2);
}

/**
 * A difference helper calculating the difference of two numbers.
 *
 * @example
 * // Output: 3
 * {{difference 5 2}}
 *
 * @param {number|string} val1
 * @param {number|string} val2
 * @returns {number}
 */
function difference(val1: number|string, val2: number|string): number {
  return Number(val1) - Number(val2);
}

/**
 * A ceil helper to find the ceil value of the number.
 *
 * @example
 * // Output: 6
 * {{ceil 5.6}}
 *
 * @param {number|string} val
 * @returns {number}
 */
function ceil(val: number|string): number {
  return Math.ceil(Number(val));
}

/**
 * A floor helper to find the floor value of the number.
 *
 * @example
 * // Output: 5
 * {{floor 5.6}}
 *
 * @param {number|string} val
 * @returns {number}
 */
function floor(val: number|string): number {
  return Math.floor(Number(val));
}

/**
 * An abs helper to find the absolute value of the number.
 *
 * @example
 * // Output: 5.6
 * {{abs -5.6}}
 *
 * @param {number} val
 * @returns {number}
 */
function abs(val: number|string): number {
  return Math.abs(Number(val));
}

export {sum, difference, ceil, floor, abs}