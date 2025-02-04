import striptags from 'striptags';

/**
 * Removes HTML tags from a string, optionally allowing specific tags.
 * @param {string} str The string to remove HTML tags from.
 * @param {string|string[]} allowedTags An array of allowed HTML tags. Default is an empty array.
 * @param {string} replacement The string to replace HTML tags with. Default is blank.
 * @return {string} The string with HTML tags removed.
 * @example
 * // results in: lorem ipsum dolor sit amet
 * hbs.compile("{{{stripTags html}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 * });
 * 
 * // results in: lorem ipsum <strong>dolor</strong> sit amet
 * hbs.compile("{{{stripTags html allowedTags}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 *   allowedTags: ['strong'],
 * });
 * 
 * // results in: 🍩lorem ipsum 🍩dolor🍩 🍩sit🍩 amet🍩
 * hbs.compile("{{{stripTags html allowedTags replacement}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 *   allowedTags: [],
 *   replacement: '🍩',
 * });
 */
export default (str: string, allowedTags: string|string[] = [], replacement: string = ''): string => {
  return striptags(str, allowedTags, replacement);
}