import hbs from 'handlebars-extd';

for (let [tpl, opts] of [
  // comparison.opr '==='
  ["{{opr a '===' b}}", {a: '3', b: 3}],
  [`{{#if (opr a '===' b)}}true{{else}}false{{/if}}`, {a: '3', b: 3}],

  // comparison.opr '=='
  ["{{opr a '==' b}}", {a: '3', b: 3}],
  ["{{#if (opr a '==' b)}}true{{else}}false{{/if}}", {a: '3', b: 3}],

  // comparison.opr '!=='
  ["{{opr a '!==' b}}", {a: 4, b: 3}],
  ["{{#if (opr a '!==' b)}}true{{else}}false{{/if}}", {a: 4, b: 3}],

  // comparison.opr '!='
  ["{{opr a '!=' b}}", {a: '3', b: 3}],
  ["{{#if (opr a '!=' b)}}true{{else}}false{{/if}}", {a: '3', b: 3}],

  // comparison.opr '<'
  ["{{opr a '<' b}}", {a: 2, b: 3}],
  ["{{#if (opr a '<' b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.opr '>'
  ["{{opr a '>' b}}", {a: 2, b: 3}],
  ["{{#if (opr a '>' b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.opr '<='
  ["{{opr a '<=' b}}", {a: 2, b: 3}],
  ["{{#if (opr a '<=' b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.opr '>='
  ["{{opr a '>=' b}}", {a: 3, b: 3}],
  ["{{#if (opr a '>=' b)}}true{{else}}false{{/if}}", {a: 3, b: 3}],

  // comparison.eq
  ["{{eq a b}}", {a: '3', b: 3}],
  ["{{#if (eq a b)}}true{{else}}false{{/if}}", {a: '3', b: 3}],

  // comparison.eqw
  ["{{eqw a b}}", {a: '3', b: 3}],
  ["{{#if (eqw a b)}}true{{else}}false{{/if}}", {a: '3', b: 3}],

  // comparison.neq
  ["{{neq a b}}", {a: 4, b: 3}],
  ["{{#if (neq a b)}}true{{else}}false{{/if}}", {a: 4, b: 3}],

  // comparison.neqw
  ["{{neqw a b}}", {a: '3', b: 3}],
  ["{{#if (neqw a b)}}true{{else}}false{{/if}}", {a: '3', b: 3}],

  // comparison.lt
  ["{{lt a b}}", {a: 2, b: 3}],
  ["{{#if (lt a b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.gt
  ["{{gt a b}}", {a: 2, b: 3}],
  ["{{#if (gt a b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.lte
  ["{{lte a '<=' b}}", {a: 2, b: 3}],
  ["{{#if (lte a '<=' b)}}true{{else}}false{{/if}}", {a: 2, b: 3}],

  // comparison.gte
  ["{{gte a '>=' b}}", {a: 3, b: 3}],
  ["{{#if (gte a '>=' b)}}true{{else}}false{{/if}}", {a: 3, b: 3}],

  // comparison.ifx
  ["{{ifx true a b}}", {a: 'foo', b: 'bar'}],
  ["{{ifx false a b}}", {a: 'foo', b: 'bar'}],

  // comparison.not
  ["{{not true}}", undefined],
  ["{{#if (not true)}}true{{else}}false{{/if}}", undefined],

  ["{{not false}}", undefined],
  ["{{#if (not false)}}true{{else}}false{{/if}}", undefined],

  // comparison.empty
  ["{{empty val}}", {val: []}],
  ["{{#if (empty val)}}true{{else}}false{{/if}}", {val: []}],
  
  ["{{empty val}}", {val: ['foo']}],
  ["{{#if (empty val)}}true{{else}}false{{/if}}", {val: ['foo']}],

  ["{{empty val}}", {val: 'Hello'}],
  ["{{#if (empty val)}}true{{else}}false{{/if}}", {val: 'Hello'}],

  ["{{empty val}}", {val: ''}],
  ["{{#if (empty val)}}true{{else}}false{{/if}}", {val: ''}],

  ["{{empty val}}", {val: ' '}],
  ["{{#if (empty val)}}true{{else}}false{{/if}}", {val: ' '}],

  // comparison.not_empty
  ["{{not_empty val}}", {val: []}],
  ["{{#if (not_empty val)}}true{{else}}false{{/if}}", {val: []}],
  ["{{not_empty val}}", {val: ['foo']}],
  ["{{#if (not_empty val)}}true{{else}}false{{/if}}", {val: ['foo']}],
  ["{{not_empty val}}", {val: 'Hello'}],
  ["{{#if (not_empty val)}}true{{else}}false{{/if}}", {val: 'Hello'}],
  ["{{not_empty val}}", {val: ''}],
  ["{{#if (not_empty val)}}true{{else}}false{{/if}}", {val: ''}],
  ["{{not_empty val}}", {val: ' '}],
  ["{{#if (not_empty val)}}true{{else}}false{{/if}}", {val: ' '}],

  // comparison.count
  ["{{count coll}}", {coll: ['foo', 'bar']}],

  // comparison.and
  ["{{and a b}}", {a: true, b: true}],
  ["{{#if (and a b)}}true{{else}}false{{/if}}", {a: true, b: true}],
  ["{{and a b}}", {a: false, b: true}],
  ["{{#if (and a b)}}true{{else}}false{{/if}}", {a: false, b: true}],

  // comparison.or
  ["{{or a b}}", {a: true, b: false}],
  ["{{#if (or a b)}}true{{else}}false{{/if}}", {a: true, b: false}],
  ["{{or a b}}", {a: false, b: false}],
  ["{{#if (or a b)}}true{{else}}false{{/if}}", {a: false, b: false}],

  // comparison.coalesce
  ["{{coalesce a b c}}", {a: 'foo', b: 'bar', c: 'baz'}],
  ["{{coalesce a b c}}", {a: '', b: 'bar', c: 'baz'}],

  // comparison.includes
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: 2}],
  ["{{#if (includes coll a)}}true{{else}}false{{/if}}", {coll: [1, 2, 3, 4], a: 2}],
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: 10}],
  ["{{#if (includes coll a)}}true{{else}}false{{/if}}", {coll: [1, 2, 3, 4], a: 10}],
  ["{{includes coll a}}", {coll: [1, 2, 3, 4], a: '3'}],
  ["{{#if (includes coll a)}}true{{else}}false{{/if}}", {coll: [1, 2, 3, 4], a: '3'}],
  ["{{includes coll a strict}}", {coll: [1, 2, 3, 4], a: '3', strict: false}],
  ["{{#if (includes coll a strict)}}true{{else}}false{{/if}}", {coll: [1, 2, 3, 4], a: '3', strict: false}],

  // date.formatDate
  ["{{formatDate 'YYYY/MM/DD' date}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'jp'}}", {date: new Date()}],
  ["{{formatDate 'YYYY/MM/DD' date 'es'}}", {date: new Date()}],

  // html.classIf
  ["{{classIf expr 'foo'}}", {expr: true}],

  // html.selectedIf
  ["{{selectedIf expr}}", {expr: true}],

  // html.checkedIf
  ["{{checkedIf expr}}", {expr: true}],

  // html.options
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

  // math.add
  ["{{add a b}}", {a: 1, b: 2}],

  // math.sub
  ["{{sub a b}}", {a: 5, b: 2}],

  // math.ceil
  ["{{ceil a}}", {a: 5.6}],

  // math.floor
  ["{{floor a}}", {a: 5.6}],

  // math.abs
  ["{{abs a b}}", {a: -5.6}],


]) {
  const code = `hbs.compile("${tpl}")(${opts ? JSON.stringify(opts) : ''});`
  const res = hbs.compile(tpl)(opts);
  console.log(`${code}\u001b[32m => ${res}\u001b[0m`);
}