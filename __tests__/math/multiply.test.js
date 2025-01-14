const hbs = require('../../dist/build.common');

describe('multiply Handlebars helper', () => {
  it('should correctly multiply two numbers', () => {
    const template = hbs.compile('{{multiply a b}}');
    const actual = template({ a: 5, b: 2 });
    expect(actual).toBe('10');
  });
});