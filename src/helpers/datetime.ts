import * as utils from '../utils';
import moment from 'moment';

/**
 * A formatDate helper to format date using moment js with optional locale designation.
 *
 * @example
 * // Output: 2021/10/24
 * hbs.compile({{formatDate 'YYYY/MM/DD' date}})({"date":"2021-10-24T02:13:06.610Z"});
 * 
 * // Output: 2021/10/24
 * hbs.compile({{formatDate 'YYYY/MM/DD' date 'jp'}})({"date":"2021-10-24T02:13:06.610Z"});
 * 
 * // Output: 2021/10/24
 * hbs.compile({{formatDate 'YYYY/MM/DD' date 'es'}})({"date":"2021-10-24T02:13:06.610Z"});
 *
 * @param {string} format Based on moment.js.
 * @param {string} date
 * @param {string|string[]} locale Language or language-country locale string (or array of strings) available in https://github.com/moment/moment/tree/develop/locale .
 * @returns {string}
 */
function formatDate(format: string, date: string, locale: string|string[]): string {
  format = utils.isString(format) ? format : '';
  if (utils.isString(locale) || utils.isArray(locale)) {
    const localeMoment = moment(date || new Date());
    localeMoment.locale(locale);
    return localeMoment.format(format);
  }
  // Use global moment and format with default locale.
  return moment(date || new Date()).format(format);
}

export {formatDate}