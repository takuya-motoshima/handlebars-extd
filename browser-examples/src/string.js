import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{slice str 0 4}}", {str: 'Just Wow'}],
  ["{{slice str 5}}", {str: 'Just Wow'}],
  ["{{slice str -4}}", {str: 'Just Wow'}],
  ["{{{nltobr str}}}", {str: "It's\njust\nnow"}],
  ["{{sprintf '%s %s!' str1 str2}}", {str1: 'Hello', str2: 'Dolly'}],
  ["{{sprintf '%s %s %d %s %d' 'foo' 'bar' 55 'baz' '20'}}"],
  ["{{sprintf 'Hello %(name)s' user}}", {user: {name: 'Dolly'}}],
  ["{{sprintf 'Hello %(name)s' name=str}}", {str: 'Dolly'}],
  ["{{lowercase str}}", {str: 'JUST WOW'}],
  ["{{uppercase str}}", {str: 'just wow'}],
  ["{{concat 'Hello' ' world' '!'}}"],
  ["{{{join coll ' & '}}}", {coll: ['Hands', 'legs', 'feet']}]
]) {
  const compiled = hbs.compile(tpl)(opts);
  console.log(`// Output: ${compiled}\nhbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});\n`);
}