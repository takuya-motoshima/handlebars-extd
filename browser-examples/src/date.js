import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{formatDate 'YYYY/MM/DD' date}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'jp'}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'es'}}", {date: new Date()}]
]) {
  const compiled = hbs.compile(tpl)(opts);
  console.log(`// Output: ${compiled}\nhbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});\n`);
}