/**
 * Check that it is not empty.
 * If the value is an array, returns true if there is an element.
 * If the value is a string, the leading and trailing spaces are trimmed and then checked.
 *
 * @example
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":[]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":["foo"]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val":'Hello'});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":''});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val":' '});
 *
 * @param {any} value Character strings, arrays, objects, etc. to be checked.
 * @returns {boolean} Returns true if the value is not empty, false otherwise.
 */
export default (val: any): boolean => {
  if (typeof val === 'string')
    // Trim if it's a string.
    val = val.replace(/^[\s　]+|[\s　]+$/g, ''); 
  else if (Array.isArray(val) && val.length === 0)
    // Replace value with null if it is an array and has no elements.
    val = null;
  return !!val;
}