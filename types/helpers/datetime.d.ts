/**
 * A formatDate helper to format date using moment js with optional locale designation.
 *
 * @example
 * // Output: 2021/10/24
 * hbs.compile("{{formatDate 'YYYY/MM/DD' date}}")({"date":"2021-10-24T02:13:06.610Z"});
 *
 * // Output: 2021/10/24
 * hbs.compile("{{formatDate 'YYYY/MM/DD' date 'jp'}}")({"date":"2021-10-24T02:13:06.610Z"});
 *
 * // Output: 2021/10/24
 * hbs.compile("{{formatDate 'YYYY/MM/DD' date 'es'}}")({"date":"2021-10-24T02:13:06.610Z"});
 *
 * @param {string} format Based on moment.js.
 * @param {string} date
 * @param {string|string[]} locale Language or language-country locale string (or array of strings) available in https://github.com/moment/moment/tree/develop/locale .
 * @returns {string}
 */
declare function formatDate(format: string, date: string, locale: string | string[]): string;
export { formatDate };
