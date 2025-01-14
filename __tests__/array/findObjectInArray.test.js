const hbs = require('../../dist/build.common');

describe('findObjectInArray Handlebars helper', () => {
  it('should find an object in an array by ID and return its name', () => {
    const items = [{id: 123, name: 'Item A' }, {id: 456, name: 'Item B'}];
    const template = hbs.compile(`{{#each items}}{{#if (eq id 123)}}{{lookup (findObjectInArray ../items 'id' id) 'name'}}{{/if}}{{/each}}`);
    const actual = template({items});
    expect(actual).toBe('Item A');
  });

  it('should return an empty string if no matching object is found', () => {
    const items = [{id: 123, name: 'Item A' }, { id: 456, name: 'Item B'}];
    const template = hbs.compile(`{{#each items}}{{#if (eq id 999)}}{{lookup (findObjectInArray ../items 'id' id) 'name'}}{{/if}}{{/each}}`);
    const actual = template({items});
    expect(actual).toBe('');
  });
});