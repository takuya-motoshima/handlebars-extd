import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{classIf expr 'foo'}}", {expr: true}],
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
  }]
]) {
  const code = `hbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});`
  const res = hbs.compile(tpl)(opts);
  console.log(`${code}\u001b[32m => ${res}\u001b[0m`);
}