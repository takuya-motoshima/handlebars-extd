import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{formatDate 'YYYY/MM/DD' date}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'jp'}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'es'}}", {date: new Date()}]
]) {
  const code = `hbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});`
  const res = hbs.compile(tpl)(opts);
  console.log(`${code}\u001b[32m => ${res}\u001b[0m`);
}