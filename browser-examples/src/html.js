import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{showIf expr}}", {expr: true}],
  ["{{hideIf expr}}", {expr: true}],
  ["{{selectedIf expr}}", {expr: true}],
  ["{{checkedIf expr}}", {expr: true}],
  ["{{{options data selected='2'}}}", {
    data: [
      {value: 1, text: 'foo'},
      {value: 2, text: 'bar'}
    ]
  }],
  ["{{{options data selected='392' value='code' text='name'}}}", {
    data: [
      {code: 392, name: 'JAPAN'},
      {code: 840, name: 'UNITED STATES'}
    ]
  }],
  ["{{classIf expr 'foo'}}", {expr: true}]
]) {
  const compiled = hbs.compile(tpl)(opts);
  console.log(`// Output: ${compiled}\nhbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});\n`);
}