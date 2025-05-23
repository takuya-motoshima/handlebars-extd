/**
 * Returns the language-sensitive representation of a number as a string.
 * @param {number|string} val Target number or numeric string.
 * @param {string|undefined} locales  A string with a BCP 47 language tag, or an array of such strings.
 *                                    Corresponds to the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales">locales</a> parameter of the Intl.NumberFormat() constructor.
 *                                    In implementations without Intl.NumberFormat support, this parameter is ignored and the host's locale is usually used.
 * @return {string} A string with a language-sensitive representation of the given number.
 * @example
 * // results in: 123,456.789
 * hbs.compile("{{number2locale val}}")({val: 123456.789});
 *
 * // German uses comma as decimal separator and period for thousands.
 * // results in: 123.456,789
 * hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
 */
declare const _default: (val: number | string, locales?: string) => string;
export default _default;
