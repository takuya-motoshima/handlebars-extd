/**
 * A showIf helper for showing any html element.
 *
 * @example
 * // Output: 
 * hbs.compile("{{showIf expr}}")({"expr":true});
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
 * // Output: hidden
 * hbs.compile("{{hideIf expr}}")({"expr":true});
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
 * // Output: selected
 * hbs.compile("{{selectedIf expr}}")({"expr":true});
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
 * // Output: checked
 * hbs.compile("{{checkedIf expr}}")({"expr":true});
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
 * A simple example:
 * // Output: <option value="1">foo</option>
 * //         <option value="2" selected>bar</option>
 * hbs.compile("{{{options data selected='2'}}}")({
 *   "data":[
 *     {"value":1,"text":"foo"},
 *     {"value":2,"text":"bar"}
 *   ]
 * });
 *
 * You can also override the default key names for 'value' & 'text' using the 'value' & 'text' options in the helper.
 * // Output: <option value="392" selected>JAPAN</option>
 *            <option value="840">UNITED STATES</option>
 * hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
 *   "data":[
 *     {"code":392,"name":"JAPAN"},
 *     {"code":840,"name":"UNITED STATES"}
 *   ]
 * });
 * 
 * @param {{[key: string]: string}[]} data
 * @param {object} opts Object of options that includes value, text and selected attribute.
 * @returns {string}
 */
function options(data: {[key: string]: string}[], opts: {hash: {[key: string]: string}}): string {
  // The value & text for the <option>
  const valKey = opts.hash.value || 'value';
  const textKey = opts.hash.text || 'text';

  // The selection "value" of the <option>
  const selectedVal = opts.hash.selected || null;
  return data.map(item => {
    const val = item[valKey] || '';
    const text = item[textKey] || '';
    const selected = val == selectedVal ? ' selected' : '';
    return `<option value="${val}"${selected}>${text}</option>`;
  }).join('\n');
}

/**
 * ClassIf helper for setting CSS classes.
 *
 * @example
 * // Output: foo
 * hbs.compile("{{classIf expr 'foo'}}")({"expr":true});
 *
 * @param {boolean} expr
 * @param {string} cls CSS class to set if the condition is true.
 * @returns {string}
 */
 function classIf(expr: boolean, cls: string): string {
  return expr ? cls : '';
}

export {showIf, hideIf, selectedIf, checkedIf, options, classIf}