import hbs from 'handlebars-extd';

const tpl = hbs.compile(`
  {{#if (gt a 0)}}
    positive
  {{else}}
    NOT positive
  {{/if}}`);

// Output: 
console.log(tpl({a: 5}));

// Output: 
console.log(tpl({a: -5}));