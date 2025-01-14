/**
 * Finds an object in an array based on the specified field name and value.
 * @param {Array<{[key: string]: any}>} array The array of objects to search.
 * @param {string} fieldName The name of the field to search.
 * @param {*} fieldValue The value to search for.
 * @return {object|null} The first object in the array that matches the criteria, or null if no match is found.
 * @example
 * // results in: "Item A"
 * const items = [{id: 123, name: 'Item A'}, {id: 456, name: 'Item B'}];
 * hbs.compile(
 * `{{#each items}}
 *   {{#if (eq id 123)}}
 *     {{lookup (findObjectInArray ../items 'id' id) 'name'}}
 *   {{/if}}
 * {{/each}}`)({items});
 */
declare const _default: (array: Array<{
    [key: string]: any;
}>, fieldName: string, fieldValue: any) => object | null;
export default _default;
