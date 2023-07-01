const hbs = require('../dist/build.common');

describe('multiply()', () => {
  test('5 * 2 should be 10', () => {
    const actual = hbs.compile("{{multiply a b}}")({a:5, b:2});;
    expect(actual).toBe('10');
  });
});

describe('divide()', () => {
  test('10 / 2 should be 5', () => {
    const actual = hbs.compile("{{divide a b}}")({a:10, b:2});
    expect(actual).toBe('5');
  });
});