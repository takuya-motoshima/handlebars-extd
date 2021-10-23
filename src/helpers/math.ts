/**
 * A sum helper calculating the sum of two numbers.
 *
 * @example
 * // Output: 3
 * {{sum 1 2}}
 *
 * @param {number|string} value1
 * @param {number|string} value2
 * @returns {number}
 */
function sum(value1: number|string, value2: number|string): number {
  return Number(value1) + Number(value2);
}

/**
 * A difference helper calculating the difference of two numbers.
 *
 * @example
 * // Output: 3
 * {{difference 5 2}}
 *
 * @param {number|string} value1
 * @param {number|string} value2
 * @returns {number}
 */
function difference(value1: number|string, value2: number|string): number {
  return Number(value1) - Number(value2);
}

/**
 * A ceil helper to find the ceil value of the number.
 *
 * @example
 * // Output: 6
 * {{ceil 5.6}}
 *
 * @param {number|string} value
 * @returns {number}
 */
function ceil(value: number|string): number {
  return Math.ceil(Number(value));
}

/**
 * A floor helper to find the floor value of the number.
 *
 * @example
 * // Output: 5
 * {{floor 5.6}}
 *
 * @param {number|string} value
 * @returns {number}
 */
function floor(value: number|string): number {
  return Math.floor(Number(value));
}

/**
 * An abs helper to find the absolute value of the number.
 *
 * @example
 * // Output: 5.6
 * {{abs -5.6}}
 *
 * @param {number} value
 * @returns {number}
 */
function abs(value: number|string): number {
  return Math.abs(Number(value));
}

export {sum, difference, ceil, floor, abs}