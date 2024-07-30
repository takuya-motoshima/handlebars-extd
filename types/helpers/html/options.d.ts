/**
 * Generates a select drop-down option list.
 *
 * @example
 * A simple example:
 * // results in:
 * // <option value="1">foo</option>
 * // <option value="2" selected>bar</option>
 * hbs.compile("{{{options data selected='2'}}}")({
 *   "data":[
 *     {"value":1,"text":"foo"},
 *     {"value":2,"text":"bar"}
 *   ]
 * });
 *
 * You can also override the default key names for 'value' & 'text' using the 'value' & 'text' options in the helper.
 * // results in:
 * // <option value="392" selected>JAPAN</option>
 * // <option value="840">UNITED STATES</option>
 * hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
 *   "data":[
 *     {"code":392,"name":"JAPAN"},
 *     {"code":840,"name":"UNITED STATES"}
 *   ]
 * });
 *
 * @param {{[key: string]: string}[]} data List of data.
 * @param {object} options Key names for the selected and displayed values of option in the data element (Optional).
 * @returns {string}
 */
declare const _default: (data: {
    [key: string]: string;
}[], options: {
    hash: {
        [key: string]: string;
    };
}) => string;
export default _default;
