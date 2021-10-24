import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{add a b}}", {a: 1, b: 2}],
  ["{{sub a b}}", {a: 5, b: 2}],
  ["{{ceil a}}", {a: 5.6}],
  ["{{floor a}}", {a: 5.6}],
  ["{{abs a b}}", {a: -5.6}]
]) {
  const compiled = hbs.compile(tpl)(opts);
  console.log(`// Output: ${compiled}\nhbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});\n`);
}