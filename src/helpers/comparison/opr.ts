/**
 * Compare two values using operators.
 *
 * @example
 * // results in: false
 * hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '==' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '!==' b}}")({"a":4,"b":3});
 *
 * // results in: false
 * hbs.compile("{{opr a '!=' b}}")({"a":"3","b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '<' b}}")({"a":2,"b":3});
 *
 * // results in: false
 * hbs.compile("{{opr a '>' b}}")({"a":2,"b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '<=' b}}")({"a":2,"b":3});
 *
 * // results in: true
 * hbs.compile("{{opr a '>=' b}}")({"a":3,"b":3});
 *
 * @param {any} val1 First value to be compared with second.
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} opr  The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param {any} val2 Second value to be compared with first.
 * @returns {boolean}
 */
export default (val1: any, opr: '=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>=', val2: any): boolean => {
  if (opr === '==')
    return val1 == val2;
  else if (opr === '===')
    return val1 === val2;
  else if (opr === '!=')
    return val1 != val2;
  else if (opr === '!==')
    return val1 !== val2;
  else if (opr === '<')
    return val1 < val2;
  else if (opr === '>')
    return val1 > val2;
  else if (opr === '<=')
    return val1 <= val2;
  else if (opr === '>=')
    return val1 >= val2;
  else
    throw new Error(`opr helper operator: ${opr} is invalid`);
}