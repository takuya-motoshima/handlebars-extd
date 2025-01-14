/**
 * Check if param is a function.
 * @param {any} thing
 * @return {boolean}
 */
function isFunction(thing: any): boolean {
  return typeof thing === 'function';
}

/**
 * Check if param is a string.
 * @param {any} thing
 * @return {boolean}
 */
function isString(thing: any): boolean {
  return typeof thing === 'string';
}

/**
 * Check if param is undefined.
 * @param {any} thing
 * @return {boolean}
 */
function isUndefined(thing: any): boolean {
  return typeof thing === 'undefined';
}

/**
 * Check if param is not undefined.
 * @param {any} thing
 * @return {boolean}
 */
function isDefined(thing: any): boolean {
  return !isUndefined(thing);
}

/**
 * Check if param is an object.
 * @param {any} thing
 * @return {boolean}
 */
function isObject(thing: any): boolean {
  return typeof thing === 'object' && thing !== null && !Array.isArray(thing);
}

/**
 * Check if param is an array.
 * @param {any} thing
 * @return {boolean}
 */
function isArray(thing: any): boolean {
  return Object.prototype.toString.call(thing) === '[object Array]';
}

/**
 * Check if the value is numeric.
 * @param {any} thing
 * @return {boolean}
 */
function isNumeric(thing: any): boolean {
  return !isNaN(parseFloat(thing)) && isFinite(thing);
}

export {isFunction, isString, isUndefined, isDefined, isObject, isArray, isNumeric}