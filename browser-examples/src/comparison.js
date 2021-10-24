import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  ["{{cf a '===' b}}", {a: '3', b: 3}],
  ["{{cf a '==' b}}", {a: '3', b: 3}],
  ["{{cf a '!==' b}}", {a: 4, b: 3}],
  ["{{cf a '!=' b}}", {a: '3', b: 3}],
  ["{{cf a '<' b}}", {a: 2, b: 3}],
  ["{{cf a '>' b}}", {a: 2, b: 3}],
  ["{{cf a '<=' b}}", {a: 2, b: 3}],
  ["{{cf a '>=' b}}", {a: 3, b: 3}],
  ["{{eq a b}}", {a: '3', b: 3}],
  ["{{eqw a b}}", {a: '3', b: 3}],
  ["{{neq a b}}", {a: 4, b: 3}],
  ["{{neqw a b}}", {a: '3', b: 3}],
  ["{{lt a b}}", {a: 2, b: 3}],
  ["{{gt a b}}", {a: 2, b: 3}],
  ["{{lte a '<=' b}}", {a: 2, b: 3}],
  ["{{gte a '>=' b}}", {a: 3, b: 3}],
  ["{{ifx true a b}}", {a: 'foo', b: 'bar'}],
  ["{{ifx false a b}}", {a: 'foo', b: 'bar'}],
  ["{{not true}}", undefined],
  ["{{not false}}", undefined],
  ["{{empty coll}}", {coll: []}],
  ["{{empty coll}}", {coll: ['foo']}],
  ["{{count coll}}", {coll: ['foo', 'bar']}],
  ["{{and a b}}", {a: true, b: true}],
  ["{{and a b}}", {a: false, b: true}],
  ["{{or a b}}", {a: true, b: false}],
  ["{{or a b}}", {a: false, b: false}],
  ["{{coalesce a b c}}", {a: 'foo', b: 'bar', c: 'baz'}],
  ["{{coalesce a b c}}", {a: '', b: 'bar', c: 'baz'}],
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: 2}],
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: 10}],
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: '3'}],
  ["{{includes coll a strict}}", {coll: [1, 2, 3, 4], a: '3', strict: false}],
]) {
  const compiled = hbs.compile(tpl)(opts);
  console.log(`// Output: ${compiled}\nhbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});\n`);
}