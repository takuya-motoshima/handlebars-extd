import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  // slice
  ["{{slice str 0 4}}", {str: 'Just Wow'}],
  ["{{slice str 5}}", {str: 'Just Wow'}],
  ["{{slice str -4}}", {str: 'Just Wow'}],

  // nltobr
  ["{{{nltobr str}}}", {str: "It's\njust\nnow"}],

  // sprintf
  ["{{sprintf '%s %s!' str1 str2}}", {str1: 'Hello', str2: 'Dolly'}],
  ["{{sprintf '%s %s %d %s %d' 'foo' 'bar' 55 'baz' '20'}}"],
  ["{{sprintf 'Hello %(name)s' user}}", {user: {name: 'Dolly'}}],
  ["{{sprintf 'Hello %(name)s' name=str}}", {str: 'Dolly'}],

  // lowercase
  ["{{lowercase str}}", {str: 'JUST WOW'}],

  // uppercase
  ["{{uppercase str}}", {str: 'just wow'}],

  // concat
  ["{{concat 'Hello' ' world' '!'}}"],

  // join
  ["{{{join coll ' & '}}}", {coll: ['Hands', 'legs', 'feet']}]
]) {
  const code = `hbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});`
  const res = hbs.compile(tpl)(opts);
  console.log(`${code}\u001b[32m => ${res}\u001b[0m`);
}