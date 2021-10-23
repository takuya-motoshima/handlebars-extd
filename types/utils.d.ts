/**
 * Check if param is a function.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isFunction(thing: any): boolean;
/**
 * Check if param is a string.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isString(thing: any): boolean;
/**
 * Check if param is undefined.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isUndefined(thing: any): boolean;
/**
 * Check if param is not undefined.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isDefined(thing: any): boolean;
/**
 * Check if param is an object.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isObject(thing: any): boolean;
/**
 * Check if param is an array.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isArray(thing: any): boolean;
/**
 * Check if the value is numeric.
 *
 * @param {any} thing
 * @returns {boolean}
 */
declare function isNumeric(thing: any): boolean;
export { isFunction, isString, isUndefined, isDefined, isObject, isArray, isNumeric };
