/**
 * Set the CSS classes if the condition is true.
 *
 * @example
 * // results in: foo
 * hbs.compile("{{classIf expr 'foo'}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @param {string} cls CSS class to set if the condition is true.
 * @returns {string}
 */
 function classIf(expr: boolean, cls: string): string {
  return expr ? cls : '';
}

/**
 * Sets the selected attribute if the condition is true.
 *
 * @example
 * // results in: selected
 * hbs.compile("{{selectedIf expr}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @returns {string}
 */
function selectedIf(expr: boolean): string {
  return expr ? 'selected' : '';
}

/**
 * Sets the checked attribute if the condition is true.
 *
 * @example
 * // results in: checked
 * hbs.compile("{{checkedIf expr}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @returns {string}
 */
function checkedIf(expr: boolean): string {
  return expr ? 'checked' : '';
}

/**
 * Generates a select drop-down option list.
 *
 * @example
 * A simple example:
 * // results in: <option value="1">foo</option>
 * //         <option value="2" selected>bar</option>
 * hbs.compile("{{{options data selected='2'}}}")({
 *   "data":[
 *     {"value":1,"text":"foo"},
 *     {"value":2,"text":"bar"}
 *   ]
 * });
 *
 * You can also override the default key names for 'value' & 'text' using the 'value' & 'text' options in the helper.
 * // results in: <option value="392" selected>JAPAN</option>
 *            <option value="840">UNITED STATES</option>
 * hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
 *   "data":[
 *     {"code":392,"name":"JAPAN"},
 *     {"code":840,"name":"UNITED STATES"}
 *   ]
 * });
 *
 * @param {{[key: string]: string}[]} data List of data.
 * @param {object} opts Key names for the selected and displayed values of option in the data element (Optional).
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

export {classIf, selectedIf, checkedIf, options}