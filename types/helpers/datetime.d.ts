/**
 * A formatDate helper to format date using moment js with optional locale designation.
 *
 * @example
 * // Output: 23/10/2021
 * {{formatDate 'MM/DD/YYYY' date 'es'}}
 *
 * @param {string} format Based on moment.js.
 * @param {string} date
 * @param {string|string[]} locale Language or language-country locale string (or array of strings) available in https://github.com/moment/moment/tree/develop/locale .
 * @returns {string}
 */
declare function formatDate(format: string, date: string, locale: string | string[]): string;
export { formatDate };
