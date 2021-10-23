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
function showIf(expr: boolean): string {
  return expr ? '' : 'hidden';
}

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
function hideIf(expr: boolean): string {
  return expr ? 'hidden' : '';
}

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
function selectedIf(expr: boolean): string {
  return expr ? 'selected' : '';
}

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
function checkedIf(expr: boolean): string {
  return expr ? 'checked' : '';
}

/**
 * An options helper for generating <option> list for <select> dropdowns.
 *
 * @example
 * // A simple example:
 * // Output: <option value="1">Foo</option>
 * //         <option value="2" selected>Bar</option>
 * //         <option value="3">Foo Bar</option>
 * const data = [
 *   {id: 1, description: 'Foo'},
 *   {id: 2, description: 'Bar'},
 *   {id: 3, description: 'Foo Bar'}
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
function options(data: {[key: string]: string}[], opts: {hash: {[key: string]: string}}): string {
  // The id & text for the <option>
  const id = opts.hash.id || 'id';
  const text = opts.hash.text || 'description';

  // The selection "id" of the <option>
  const selectedId = opts.hash.selected || null;
  return data.map(function (item) {
    const value = item[id] || '';
    const innerText = item[text] || '';
    const selected = value == selectedId ? 'selected' : '';
    return `<option value="${value}" ${selected}>${innerText}</option>`;
  }).join('\n');
}
export {showIf, hideIf, selectedIf, checkedIf, options}