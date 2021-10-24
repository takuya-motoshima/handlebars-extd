/**
 * A showIf helper for showing any html element.
 *
 * @example
 * // Output: ''
 * {{showIf true}}
 *
 * @param {boolean} expr
 * @returns {string}
 */
declare function showIf(expr: boolean): string;
/**
 * A hideIf helper for hiding any html element.
 *
 * @example
 * // Output: 'hidden'
 * {{hideIf true}}
 *
 * @param {boolean} expr
 * @returns {string}
 */
declare function hideIf(expr: boolean): string;
/**
 * A selectedIf helper for dropdown and radio boxes.
 *
 * @example
 * // Output: 'selected'
 * {{selectedIf true}}
 *
 * @param {boolean} expr
 * @returns {string}
 */
declare function selectedIf(expr: boolean): string;
/**
 * A checkedIf helper for checkboxes.
 *
 * @example
 * // Output: 'checked'
 * {{checkedIf true}}
 *
 * @param {boolean} expr
 * @returns {string}
 */
declare function checkedIf(expr: boolean): string;
/**
 * An options helper for generating <option> list for <select> dropdowns.
 *
 * @example
 * // A simple example:
 * // Output: <option value="1">foo</option>
 * //         <option value="2" selected>bar</option>
 * //         <option value="3">foo bar</option>
 * const data = [
 *   {id: 1, description: 'foo'},
 *   {id: 2, description: 'bar'},
 *   {id: 3, description: 'foo bar'}
 * ];
 * {{{options data selected="2"}}}
 *
 * // You can also override the default key names for 'id' & 'description' using the 'id' & 'text' options in the helper.
 * // Output: <option value="1" selected>New York</option>
 * //         <option value="2">London</option>
 * const data = [
 *   {value: 1, text: 'New York'},
 *   {value: 2, text: 'London'}
 * ];
 * {{{options data selected="1" id="value" text="text"}}}
 *
 * @param {{[key: string]: string}[]} data
 * @param {object} opts Object of options that includes id, text and selected attribute.
 * @returns {string}
 */
declare function options(data: {
    [key: string]: string;
}[], opts: {
    hash: {
        [key: string]: string;
    };
}): string;
export { showIf, hideIf, selectedIf, checkedIf, options };
