const hbs = require('../../dist/build.common');

describe('divide Handlebars helper', () => {
  it('should correctly divide two numbers', () => {
    const template = hbs.compile('{{divide a b}}');
    const actual = template({a: 10, b: 2});
    expect(actual).toBe('5');
  });
});