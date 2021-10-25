/**
 * Set the CSS classes if the condition is true.
 *
 * @example
 * // Output: foo
 * hbs.compile("{{classIf expr 'foo'}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @param {string} cls CSS class to set if the condition is true.
 * @returns {string}
 */
declare function classIf(expr: boolean, cls: string): string;
/**
 * Sets the selected attribute if the condition is true.
 *
 * @example
 * // Output: selected
 * hbs.compile("{{selectedIf expr}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @returns {string}
 */
declare function selectedIf(expr: boolean): string;
/**
 * Sets the checked attribute if the condition is true.
 *
 * @example
 * // Output: checked
 * hbs.compile("{{checkedIf expr}}")({"expr":true});
 *
 * @param {boolean} expr Condition to be checked.
 * @returns {string}
 */
declare function checkedIf(expr: boolean): string;
/**
 * Generates a select drop-down option list.
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
 * @param {{[key: string]: string}[]} data List of data.
 * @param {object} opts Key names for the selected and displayed values of option in the data element (Optional).
 * @returns {string}
 */
declare function options(data: {
    [key: string]: string;
}[], opts: {
    hash: {
        [key: string]: string;
    };
}): string;
export { classIf, selectedIf, checkedIf, options };
